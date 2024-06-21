import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { Component, OnInit, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';
import { SvgIconComponent } from '@layouts/svg-icon/svg-icon.component';
import { StorageService } from '@services/storage.service';
import { ToasterService } from '@services/toaster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SvgIconComponent
  ],
  templateUrl: './app.component.html',
  animations: [
    trigger('progressState', [
      state('show', style({ width: '100%' })),
      state('hide', style({ width: 0, height: 0 })),
      transition('hide => show', animate('0.5s ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  showLoader = signal(true);

  constructor(
    private storageService: StorageService,
    private router: Router,
    private toasterService: ToasterService
  ) {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoader.set(true);
      }
      const eventType = [NavigationEnd, NavigationCancel, NavigationError];
      if (eventType.some((event) => routerEvent instanceof event)) {
        this.showLoader.set(false);
      }
    });
  }

  ngOnInit() {
    this.toasterService.showLoader$.subscribe((res) =>
      setTimeout(() => this.showLoader.set(res))
    );
    this.storageService.setLanguage();
  }
}
