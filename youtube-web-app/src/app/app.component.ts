import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApexService } from './core/services/apex.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'YourTube';
    screenWidth: number = 0;
    searchQuery: string = '';
    isDarkTheme: boolean = false;
    activeRoute: string = '';
    isShowNavbar: boolean = false;
    menusList: any[] = [
        {
            id: '',
            name: 'Home',
            route: 'dashboard/dashboard',
            icon: 'home',
            priority: 11,
        },
        {
            id: '',
            name: 'Explore',
            route: 'dashboard/explore',
            icon: 'explore',
            priority: 11,
        },
        {
            id: '',
            name: 'Shorts',
            route: 'dashboard/shorts',
            icon: 'thunder',
            priority: 11,
        },
    ];

    constructor(
        private _apexService: ApexService,
        private elementRef: ElementRef,
        @Inject(DOCUMENT) private document: Document,
        private router: Router
    ) {
        this.keepTrackOfActiveRoute();
        this.setSideNavResponse();
    }

    ngOnInit(): void {
        this.getTheme();
        this.changeTheme();
    }

    getTheme() {
        this._apexService.getTheme().subscribe((res) => {
            // console.log(res);
        });
    }

    changeTheme() {
        let bodyEle = this.document.getElementsByTagName('app-root')[0].classList.add('dark__theme');
        // console.log(bodyEle);
    }

    setSideNavResponse() {
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
        };
    }

    keepTrackOfActiveRoute() {
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((event: any) => {
            this.activeRoute = event.url;
            console.log(this.activeRoute);
            if (this.activeRoute == '/auth/signin') {
                this.isShowNavbar = false;
            } else {
                this.isShowNavbar = true;
            }
        });
    }
}
