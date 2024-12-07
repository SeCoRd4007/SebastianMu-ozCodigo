import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule , ToastModule, HttpClientModule)
  
  ],

 
};
