import { Component, Inject, PLATFORM_ID, Injector, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const appInsightsService = <AppInsightsService>this.injector.get(AppInsightsService);
    }
  }
}
