import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyHammerConfig } from './hammer.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ]
};
