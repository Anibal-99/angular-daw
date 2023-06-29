import {Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ReservationApiService } from '../services/reservation-api.service';
import { DatePipe } from '@angular/common';
import { StateApiService } from 'src/app/state/services/state-api.service';
import { Observable, of } from 'rxjs';
import { State } from 'src/app/state/models/state.model';
import { ClienteApiService } from 'src/app/client/services/client-api.service';
import { Cliente } from 'src/app/client/models/client.model';

@Component({
  selector: 'app-dialog-reservation',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
  providers: [ReservationApiService, DatePipe, StateApiService, ClienteApiService]
})

export class DialogComponentReservation implements OnInit {
  
  reservationForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private reservationApiService: ReservationApiService, @Inject(MAT_DIALOG_DATA) public editReservation : any, private dialogRef: MatDialogRef<DialogComponentReservation>, private stateApiService: StateApiService, private clientService: ClienteApiService){}
  
  state$: Observable<State[]> = of([]);
  clients$: Observable<Cliente[]> = of([]);

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      title: ["", Validators.required],
      reason: ["", Validators.required],
      time: ["", Validators.required],
      ammount: ["", Validators.required],
      state: ["", Validators.required],
      client: ["", Validators.required],
    })
    this.state$ = this.stateApiService.getState();
    this.clients$ = this.clientService.getClientes();
  }

  addReservation() {

    const dateReservation = this.reservationForm.value.time;
    // const formatedDate = new Date(dateReservation).toLocaleString().split(',')[0];
    // this.reservationForm.patchValue({ time: formatedDate });

    // console.log(formatedDate)
    // console.log(this.reservationForm.valid)
    console.log(this.reservationForm.value.client)

    if (this.reservationForm.valid) {
      this.reservationApiService.addReservation(this.reservationForm.value).subscribe({
        next: (res) => {
          alert("Reserva guardada con éxito");
        },
        error: (res) => {
          alert("Error, no se ha podido guardar la reserva. Por favor, vuelva a intentarlo");
        }
      });
    }
  }

}
