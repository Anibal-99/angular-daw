import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.sass']
})
export class BaseTableComponent{
    @Input() displayedColumns: string[] = [];
    @Input() dataSource: any = [];
}
