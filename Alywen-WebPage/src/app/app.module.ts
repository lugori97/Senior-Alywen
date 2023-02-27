import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';
import { PrincipalComponent } from './principal/principal.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    NuestrosCuidadosComponent,
    PrincipalComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ //buscar que hace esta wea
        ]),
  ],
  providers: [],
  bootstrap: [AppComponent,NuestrosCuidadosComponent]
})
export class AppModule { }
