import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterFeatures, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

// Expose a flag to denote if we're using hash routing
export const USE_HASH_ROUTING = true;

// Build up the router features array
const ROUTER_FEATURES: RouterFeatures[] = [
  withViewTransitions(),
];
if (USE_HASH_ROUTING) {
  ROUTER_FEATURES.push(withHashLocation());
}

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      ...ROUTER_FEATURES
    )
  ]
};
