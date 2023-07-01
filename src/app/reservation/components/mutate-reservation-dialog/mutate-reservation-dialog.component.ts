import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ReservationApiService } from '../../reservation.service';
import { DatePipe } from '@angular/common';
import { StateApiService } from 'src/app/state/services/state-api.service';
import { Observable, Subscription, filter, map, of, tap } from 'rxjs';
import { State } from 'src/app/state/models/state.model';
import { ClienteApiService } from 'src/app/client/client-api.service';
import { Client } from 'src/app/client/client.model';
import { MatSnackBar } from '@angular/material/snack-bar';


enum MESSAGES {
  ADD_SUCCESS_MESSAGE = "Reserva registrada con éxito.",
  ADD_FAILURE_MESSAGE = "Hubo un error al registrar la reserva.",
  EDIT_SUCCESS_MESSAGE = "Reserva modificada con éxito.",
  EDIT_FAILURE_MESSAGE = "Hubo un error al registrar la reserva.",
  DISSMISS_MESSAGE = "Ocultar",
}


/**
 * Dialog for adding new reservations or editing existing ones
*/
@Component({
  selector: 'app-mutate-dialog-reservation',
  templateUrl: './mutate-reservation-dialog.component.html',
  styleUrls: ['./mutate-reservation-dialog.component.sass'],
  providers: [ReservationApiService, DatePipe, StateApiService, ClienteApiService]
})

export class MutateDialogComponentReservation implements OnInit, OnDestroy {
  reservationForm!: FormGroup;
  state$: Observable<State[]> = of([]);
  clients$: Observable<Client[]> = of([]);
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public existingReservation : any,
    private formBuilder: FormBuilder,
    private reservationApiService: ReservationApiService,
    private dialogRef: MatDialogRef<MutateDialogComponentReservation>,
    private stateApiService: StateApiService,
    private clientService: ClienteApiService,
    private _snackBar: MatSnackBar,
  ){}


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      title: [this.existingReservation?.titulo ?? "", Validators.required],
      reason: [this.existingReservation?.razon ?? "", Validators.required],
      date: [new Date(this.existingReservation?.fecha) ?? "", Validators.required],
      ammount: [this.existingReservation?.monto ?? "", Validators.required],
      state: [this.existingReservation?.estado.id ?? "", Validators.required],
      client: [this.existingReservation?.cliente.id ?? "", Validators.required],
    })

    this.state$ = this.stateApiService.getState();
    this.clients$ = this.clientService.getClientes();
  }

  confirm() {
    if (!this.reservationForm.valid) {
      return;
    }

    const dtoReservation = {
      ...this.reservationForm.value,
      date: this.reservationForm.value.date.toISOString().split('T')[0],
      state: {id: this.reservationForm.value.state},
      client: {id: this.reservationForm.value.client},
    }

    if (this.existingReservation) {
      this.subscriptions.push(
        this.reservationApiService.editReservation(this.existingReservation.id, dtoReservation)
          .subscribe({
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
        this.reservationApiService.addReservation(dtoReservation).subscribe({
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
