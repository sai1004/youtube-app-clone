import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-video-sm-box',
    templateUrl: './video-sm-box.component.html',
    styleUrls: ['./video-sm-box.component.scss'],
})
export class VideoSmBoxComponent implements OnInit {
    @Input()
    video: any;

    constructor() {}

    ngOnInit(): void {}
}
