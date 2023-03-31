import { Component } from '@angular/core';
import { RouteEnums } from './core/enums/route.enum';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    routes = RouteEnums;
    routeActive: string = '';
    constructor(private router: Router) {
        this.router.events.subscribe((events) => {
            if (events instanceof NavigationEnd) {
				this.routeActive = events.url.replace('/', '')
			}
        });
    }
}
