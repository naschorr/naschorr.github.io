import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_CONFIG } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {...APP_CONFIG, providers: [provideZoneChangeDetection(), ...APP_CONFIG.providers]})
  .catch((err) => console.error(err));
