import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentReservation } from 'src/app/reservation/components/reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass']
})
export class BaseTableComponent{
    @Input() displayedColumns: string[] = [];
    @Input() dataSource: any = [];

    constructor(private dialog: MatDialog){}

    editReservation(element: any){
      this.dialog.open(DialogComponentReservation, {
        width:'30%',
        height:'80%',
        data: element
      })
    }
}
