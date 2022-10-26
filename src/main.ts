import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent)
  .then((ref: any) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
  }).catch((err) => console.error(err));
