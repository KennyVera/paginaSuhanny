import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// CAMBIA ESTO: De 'App' a 'AppComponent'
import { AppComponent } from './app/app'; 

// Y asegúrate de que aquí también diga 'AppComponent'
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));