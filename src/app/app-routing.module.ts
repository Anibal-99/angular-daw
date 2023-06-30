import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Pantalla1Component } from './pantalla1.component';
// import { Pantalla2Component } from './pantalla2.component';

const routes: Routes = [
  // { path: 'pantalla1', component: Pantalla1Component },
  // { path: 'pantalla2', component: Pantalla2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
