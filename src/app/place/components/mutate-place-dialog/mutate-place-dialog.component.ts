import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Observable, Subscription, filter, map, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceApiService } from '../../place-api.service';
import { MatOption } from '@angular/material/core';
import { Resource } from 'src/app/resources/resource.model';
import { ResourceApiService } from 'src/app/resources/resource-api.service';
import { RecursiveVisitor } from '@angular/compiler';


enum MESSAGES {
  ADD_SUCCESS_MESSAGE = "El espacio registrado con éxito.",
  ADD_FAILURE_MESSAGE = "Hubo un error al registrar el espacio.",
  EDIT_SUCCESS_MESSAGE = "Espacio modificado con éxito.",
  EDIT_FAILURE_MESSAGE = "Hubo un error al modificar el espacio.",
  DISSMISS_MESSAGE = "Ocultar",
}


/**
 * Dialog for adding new espacio or editing existing ones
*/
@Component({
  selector: 'app-mutate-dialog-place',
  templateUrl: './mutate-place-dialog.component.html',
  styleUrls: ['./mutate-place-dialog.component.sass'],
  providers: [PlaceApiService, DatePipe, ResourceApiService]
})

export class MutateDialogComponentPlace implements OnInit, OnDestroy {
  placeForm!: FormGroup;
  subscriptions: Subscription[] = [];
  resources$: Observable<Resource[]> =of([]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public existingPlace : any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MutateDialogComponentPlace>,
    private placeApiService: PlaceApiService,
    private _snackBar: MatSnackBar,
    private resourceApiService: ResourceApiService,
  ){}


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  ngOnInit(): void {
    this.placeForm = this.formBuilder.group({
      name: [this.existingPlace?.nombre ?? "", Validators.required],
      resources: [this.existingPlace?.recursos.map((r: any) => r.id) ?? "", Validators.required],
    })
    this.resources$ = this.resourceApiService.getResources();
  }

  confirm() {
    if (!this.placeForm.valid) {
      return;
    }

    const dtoPlace = {
      ...this.placeForm.value,
      resources: this.placeForm.value.resources.map((id: string)=> ({ id })),
    }

    if (this.existingPlace) {
      this.subscriptions.push(
        this.placeApiService.editPlace(this.existingPlace.id, dtoPlace).subscribe({
            next: (res) => {
              this._snackBar.open(MESSAGES.EDIT_SUCCESS_MESSAGE, MESSAGES.DISSMISS_MESSAGE);
              this.dialogRef.close();
            },
            error: (res) => {
              this._snackBar.open(MESSAGES.EDIT_FAILURE_MESSAGE, MESSAGES.DISSMISS_MESSAGE);
              this.dialogRef.close();
            }
          })
      )
    } else {
      this.subscriptions.push(
        this.placeApiService.addPlace(dtoPlace).subscribe({
          next: (res) => {
            this._snackBar.open(MESSAGES.ADD_SUCCESS_MESSAGE, MESSAGES.DISSMISS_MESSAGE);
            this.dialogRef.close();
          },
          error: (res) => {
            this._snackBar.open(MESSAGES.ADD_FAILURE_MESSAGE, MESSAGES.DISSMISS_MESSAGE);
            this.dialogRef.close();
          }
        })
      )
    }
  }
}
