import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypeofPipe } from '../pipes/typeofPipe';
import { ComponentType } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationApiService } from 'src/app/reservation/reservation.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass'],
  providers: [TypeofPipe, ReservationApiService],
})
export class BaseTableComponent implements OnDestroy {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
  @Input() mutateDialog!: ComponentType<unknown>;
  @Input() destroyDialog!: ComponentType<unknown>;
  @Output() refresh = new EventEmitter<boolean>();

  subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private reservationApiService: ReservationApiService){};

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  };
  
  // ngOnInit(){
  //   this.getReservationByTitle();
  // }

  getReservationByTitle(){
    this.reservationApiService.getReservations()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error:(res)=>{
        alert("Error al filtrar")
      }
    })
  }

  onEdit(element: any){
    this.subscriptions.push(
      this.dialog.open(this.mutateDialog, {
        width:'30%', data: element
      }).afterClosed().subscribe(() => this.refresh.emit(true))
    )
  };

  onAdd() {
    this.subscriptions.push(
      this.dialog.open(this.mutateDialog, {
        width:'30%',
      }).afterClosed().subscribe(() => this.refresh.emit(true))
    )
  };

  onDestroy(element: any) {
    this.subscriptions.push(
      this.dialog.open(this.destroyDialog, {
        data: element.id
      }).afterClosed().subscribe(() => this.refresh.emit(true))
    )
  };

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }

  }
}
