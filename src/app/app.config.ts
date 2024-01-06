import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions())
  ]
};
