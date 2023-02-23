import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';

const routes: Routes = [{
  path: 'Principal', component: AppComponent },
{ path: 'Nuestros-Cuidados', component: NuestrosCuidadosComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
