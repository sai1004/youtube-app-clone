import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-explore-page',
    templateUrl: './explore-page.component.html',
    styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnInit {
    categoriesList: any[] = [
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
        {
            icon: 'home',
            name: 'Trending',
            route: '',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
