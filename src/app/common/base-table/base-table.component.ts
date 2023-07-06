import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject, Observable, Subscription, filter, map, of, switchMap, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationApiService } from 'src/app/reservation/reservation.service';

@Component({
    selector: 'app-base-table',
    templateUrl: './base-table.component.html',
    styleUrls: ['./base-table.component.sass'],
    providers: [ReservationApiService],
})
export class BaseTableComponent implements OnDestroy {
    @Input() displayedColumns: string[] = [];
    @Input() dataSource$: Observable<any[]> = of([]);
    @Input() mutateDialog!: ComponentType<unknown>;
    @Input() destroyDialog!: ComponentType<unknown>;
    @Output() refresh = new EventEmitter<boolean>();
    modDataSource$ = new BehaviorSubject(new MatTableDataSource());
    filter$ = new BehaviorSubject('');

    subscriptions: Subscription[] = [];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private dialog: MatDialog, private reservationApiService: ReservationApiService) { };

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe())
    };


    ngOnInit() {
        this.subscriptions.push(
            this.dataSource$.subscribe(
                data => {
                    const matDataSource = new MatTableDataSource(data);
                    matDataSource.paginator = this.paginator;
                    matDataSource.sort = this.sort;
                    this.modDataSource$.next(matDataSource)
                }
            ),
            this.filter$.subscribe(
                filter => {
                    const newMDSource = this.modDataSource$.value;
                    newMDSource.filter = filter;
                    this.modDataSource$.next(
                        newMDSource
                    )
                }
            )
        )
    }

    onEdit(element: any) {
        this.subscriptions.push(
            this.dialog.open(this.mutateDialog, {
                width: '30%', data: element
            }).afterClosed().subscribe(() => this.ngOnInit())
        )
    };

    onAdd() {
        this.subscriptions.push(
            this.dialog.open(this.mutateDialog, {
                width: '30%',
            }).afterClosed().subscribe(() => this.ngOnInit())
        )
    };

    onDestroy(element: any) {
        this.subscriptions.push(
            this.dialog.open(this.destroyDialog, {
                data: element.id
            }).afterClosed().subscribe(() => this.ngOnInit())
        )
    };

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.filter$.next(filterValue.trim().toLowerCase());
    }
}
