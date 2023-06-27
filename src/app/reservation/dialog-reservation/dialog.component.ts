import {Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ReservationApiService } from '../services/reservation-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-reservation',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
  providers: [ReservationApiService, DatePipe]
})

export class DialogComponentReservation implements OnInit {
  
  reservationForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private reservationApiService: ReservationApiService, @Inject(MAT_DIALOG_DATA) public editReservation : any, private dialogRef: MatDialogRef<DialogComponentReservation>){}
  

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      title: ["", Validators.required],
      reason: ["", Validators.required],
      time: ["", Validators.required],
      ammount: ["", Validators.required],
      state: ["", Validators.required],
      client: ["", Validators.required],
    })
    console.log(this.editReservation)
  }

  addReservation() {
    const dateReservation = this.reservationForm.value.time;
    const formatedDate = new Date(dateReservation).toLocaleString().split(',')[0];
    this.reservationForm.patchValue({ time: formatedDate });

    console.log(formatedDate)
    console.log(this.reservationForm.valid)
    console.log(this.reservationForm.value)

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
