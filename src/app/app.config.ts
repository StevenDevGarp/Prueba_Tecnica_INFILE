import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { jwtInterceptor } from './guards/jwt.interceptor';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withInterceptors([jwtInterceptor]))],
};