import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';
import { PrincipalComponent } from './principal/principal.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ActividadesComponent } from './actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    NuestrosCuidadosComponent,
    PrincipalComponent,
    ActividadesComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'actividades', component: ActividadesComponent},
      {path: 'Principal', component: PrincipalComponent },
      {path: 'NC', component: NuestrosCuidadosComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent,NuestrosCuidadosComponent]
})
export class AppModule { }
