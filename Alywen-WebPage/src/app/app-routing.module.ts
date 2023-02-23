import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'Principal', component: PrincipalComponent },
  {path: 'NC', component: NuestrosCuidadosComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
