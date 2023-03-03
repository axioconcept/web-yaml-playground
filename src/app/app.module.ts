import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutesService, DASHBOARD_BASE_ROUTE, DASHBOARD_HOST_COMPONENT, initializeDashboardRoutes, NgxSightModule } from '@axioconcept/ngx-sight';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHostComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSightModule
  ],
  providers: [
    { provide: DASHBOARD_BASE_ROUTE, useValue: '' },
    { provide: DASHBOARD_HOST_COMPONENT, useValue: DashboardHostComponent },
    DashboardRoutesService,
    { provide: APP_INITIALIZER, deps: [DashboardRoutesService], useFactory: (s: DashboardRoutesService) => initializeDashboardRoutes(s), multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
