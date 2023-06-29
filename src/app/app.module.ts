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
import { ReservationTableAdapterComponent } from './reservation/adapters/reservation-table-adapter.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { HeaderComponent } from './sections/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ClienteTableAdapterComponent } from './client/adapters/client-table-adapter.component';
import { ClienteContainerComponent } from './client/components/client-container.component';

import { PlaceTableAdapterComponent } from './place/adapters/place-table-adapter.component';
import { PlaceContainerComponent } from './place/components/place-container.component';
import { ResourceTableAdapterComponent } from './resources/adapters/resource-table-adapter.component';
import { ResourceContainerComponent } from './resources/components/resource-container.component';
import { DialogComponentReservation } from './reservation/components/post-dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationContainerComponent } from './reservation/components/table-container/reservation-container.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    DialogComponentReservation,
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
