import { registerLocaleData } from '@angular/common';
import localePtPt from '@angular/common/locales/pt-PT';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

registerLocaleData(localePtPt, 'pt-PT');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
