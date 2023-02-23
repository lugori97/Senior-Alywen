import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: 'Principal', component: PrincipalComponent },
  {path: 'NC', component: NuestrosCuidadosComponent },
  {path: 'Servicios', component: ServiciosComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
