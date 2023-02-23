import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuestrosCuidadosComponent } from './nuestros-cuidados/nuestros-cuidados.component';

@NgModule({
  declarations: [
    AppComponent,
    NuestrosCuidadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NuestrosCuidadosComponent]
})
export class AppModule { }
