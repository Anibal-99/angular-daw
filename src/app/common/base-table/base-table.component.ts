import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypeofPipe } from '../pipes/typeofPipe';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass'],
  providers: [TypeofPipe],
})
export class BaseTableComponent{
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
  @Input() addDialog: any;
  @Input() destroyDialog: any;
  @Output() refresh = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog){}

  onEdit(element: any){
    // TODO: implementar
    this.dialog.open(this.addDialog, {
      width:'30%', data: element
    }).afterClosed().subscribe(() => this.refresh.emit(true));
  }

  onAdd() {
    this.dialog.open(this.addDialog, {
      width:'30%',
    }).afterClosed().subscribe(() => this.refresh.emit(true));
  }

  onDestroy(element: any) {
    this.dialog.open(this.destroyDialog, {
      data: element.id
    }).afterClosed().subscribe(() => this.refresh.emit(true));
  };
}

