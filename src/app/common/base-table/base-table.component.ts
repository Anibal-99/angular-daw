import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypeofPipe } from '../pipes/typeofPipe';
import { ComponentType } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass'],
  providers: [TypeofPipe],
})
export class BaseTableComponent implements OnDestroy {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = [];
  @Input() mutateDialog!: ComponentType<unknown>;
  @Input() destroyDialog!: ComponentType<unknown>;
  @Output() refresh = new EventEmitter<boolean>();

  subscriptions: Subscription[] = [];

  constructor(private dialog: MatDialog){};

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  };

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

}

