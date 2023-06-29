import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentReservation } from 'src/app/reservation/components/post-dialog/dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {


    constructor(private dialog: MatDialog){

    }

  openDialog() {
    this.dialog.open(DialogComponentReservation, {
      width:'30%',
      height:'80%'
    });
  }
}
