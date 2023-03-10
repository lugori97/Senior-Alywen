import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NuestrosCuidadosComponent } from './app/nuestros-cuidados/nuestros-cuidados.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(NuestrosCuidadosComponent)
  .catch(err => console.error(err));
