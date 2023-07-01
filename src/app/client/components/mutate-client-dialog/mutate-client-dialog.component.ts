import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClienteApiService } from '../../client-api.service';
import { DatePipe } from '@angular/common';
import { Observable, Subscription, filter, map, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


enum MESSAGES {
  ADD_SUCCESS_MESSAGE = "Cliente registrado con éxito.",
  ADD_FAILURE_MESSAGE = "Hubo un error al registrar el cliente.",
  EDIT_SUCCESS_MESSAGE = "Cliente modificado con éxito.",
  EDIT_FAILURE_MESSAGE = "Hubo un error al modificar el clinte.",
  DISSMISS_MESSAGE = "Ocultar",
}


/**
 * Dialog for adding new client or editing existing ones
*/
@Component({
  selector: 'app-mutate-dialog-client',
  templateUrl: './mutate-client-dialog.component.html',
  styleUrls: ['./mutate-client-dialog.component.sass'],
  providers: [ClienteApiService, DatePipe]
})

export class MutateDialogComponentClient implements OnInit, OnDestroy {
  clientForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public existingClient : any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MutateDialogComponentClient>,
    private clientApiService: ClienteApiService,
    private _snackBar: MatSnackBar,
  ){}


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: [this.existingClient?.name ?? "", Validators.required],
      surname: [this.existingClient?.surname ?? "", Validators.required],
      dni: [this.existingClient?.dni ?? "", Validators.required],
    })
  }

  confirm() {
    if (!this.clientForm.valid) {
      return;
    }

    const dtoClient = {
      ...this.clientForm.value,
      // name: this.clientForm.value.name,
      // surname: this.clientForm.value.surname,
      // dni: this.clientForm.value.dni,
    }

    if (this.existingClient) {
      this.subscriptions.push(
        this.clientApiService.editClient(this.existingClient.id, dtoClient).subscribe({
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
        this.clientApiService.addClient(dtoClient).subscribe({
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
