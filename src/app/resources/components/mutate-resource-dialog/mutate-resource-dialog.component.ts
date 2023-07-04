import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Observable, Subscription, filter, map, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResourceApiService } from '../../resource-api.service';

enum MESSAGES {
  ADD_SUCCESS_MESSAGE = "Recurso registrado con éxito.",
  ADD_FAILURE_MESSAGE = "Hubo un error al registrar el recurso.",
  EDIT_SUCCESS_MESSAGE = "Recurso modificado con éxito.",
  EDIT_FAILURE_MESSAGE = "Hubo un error al modificar el recurso.",
  DISSMISS_MESSAGE = "Ocultar",
}


/**
 * Dialog for adding new client or editing existing ones
*/
@Component({
  selector: 'app-mutate-dialog-resource',
  templateUrl: './mutate-resource-dialog.component.html',
  styleUrls: ['./mutate-resource-dialog.component.sass'],
  providers: [ResourceApiService, DatePipe]
})

export class MutateDialogComponentResource implements OnInit, OnDestroy {
  resourceForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public existingResource : any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MutateDialogComponentResource>,
    private resourceApiService: ResourceApiService,
    private _snackBar: MatSnackBar,
  ){}


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  ngOnInit(): void {
    this.resourceForm = this.formBuilder.group({
      name: [this.existingResource?.nombre ?? "", Validators.required],
      description: [this.existingResource?.descripcion ?? "", Validators.required],
    })
  }

  confirm() {
    if (!this.resourceForm.valid) {
      return;
    }

    const dtoResource = {
      ...this.resourceForm.value,
    }

    if (this.existingResource) {
      this.subscriptions.push(
        this.resourceApiService.editResources(this.existingResource.id, dtoResource).subscribe({
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
        this.resourceApiService.addResources(dtoResource).subscribe({
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
