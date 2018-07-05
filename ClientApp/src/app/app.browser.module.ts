import { NgModule } from '@angular/core';

import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

import { AppComponent } from './app.component';
import { AppModuleShared } from './app.module';

@NgModule({
  imports: [
    AppModuleShared,
    ApplicationInsightsModule.forRoot({
      instrumentationKey: ''
    })
  ],
  providers: [AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
