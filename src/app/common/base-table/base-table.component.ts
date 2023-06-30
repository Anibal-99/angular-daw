import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass']
})
export class BaseTableComponent{
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
  @Input() addDialog: any;
  @Input() destroyDialog: any;

  constructor(private dialog: MatDialog){}

  onEdit(element: any){
    // TODO: implementar
    this.dialog.open(this.addDialog, { width:'30%', data: element })
  }

  onAdd() {
    this.dialog.open(this.addDialog, {
      width:'30%',
    });
  }

  onDestroy(element: any) {
    this.dialog.open(this.destroyDialog, {
      data: element.id
    });
  };
}

