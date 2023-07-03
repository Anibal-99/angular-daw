import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BaseTableComponent } from './common/base-table/base-table.component';
import { MatTableModule } from '@angular/material/table';
import { ReservationTableAdapterComponent } from './reservation/components/reservation-table-adapter.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { HeaderComponent } from './sections/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ClienteTableAdapterComponent } from './client//components/client-table-adapter.component';
import { ClienteContainerComponent } from './client/components/client-table-container.component';
import { PlaceTableAdapterComponent } from './place/components/place-table-adapter.component';
import { PlaceContainerComponent } from './place/components/place-table-container.component';
import { ResourceContainerComponent } from './resources/components/resource-table-container.component';
import { DestroyDialogComponentReservation } from './reservation/components/destroy-reservation-dialog/destroy-reservation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationContainerComponent } from './reservation/components/reservation-table-container.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TypeofPipe } from './common/pipes/typeofPipe';
import { MutateDialogComponentReservation } from './reservation/components/mutate-reservation-dialog/mutate-reservation-dialog.component';
import { MutateDialogComponentClient } from './client/components/mutate-client-dialog/mutate-client-dialog.component';
import { DestroyDialogComponentClient } from './client/components/destroy-client-dialog/destroy-client-dialog.component';
import { ResourceTableAdapterComponent } from './resources/components/resource-table-adapter.component';
import { MutateDialogComponentResource } from './resources/components/mutate-resource-dialog/mutate-resource-dialog.component';
import { DestroyDialogComponentResource } from './resources/components/destroy-resource-dialog/destroy-resource-dialog.component';
import { MutateDialogComponentPlace } from './place/components/mutate-place-dialog/mutate-place-dialog.component';
import { DestroyDialogComponentPlace } from './place/components/destroy-place-dialog/destroy-place-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseTableComponent,
    ReservationTableAdapterComponent,
    ReservationContainerComponent,
    ClienteTableAdapterComponent,
    ClienteContainerComponent,
    PlaceTableAdapterComponent,
    PlaceContainerComponent,
    ResourceTableAdapterComponent,
    ResourceContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MutateDialogComponentReservation,
    DestroyDialogComponentReservation,
    TypeofPipe,
    MutateDialogComponentClient,
    DestroyDialogComponentClient,
    MutateDialogComponentResource,
    DestroyDialogComponentResource,
    MutateDialogComponentPlace,
    DestroyDialogComponentPlace,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
