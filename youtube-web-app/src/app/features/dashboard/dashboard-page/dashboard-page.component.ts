import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
    videosList: any[] = [
        {
            title: 'Lofi Beats - to relax',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'Lofi Beats - to relax',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
        {
            title: 'How to create web app',
            img: 'https://i.ytimg.com/vi/kycmRffwKHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM9sMz0Lqiuyy7lJTfIwHsaZGkUw',
            videoUrl: 'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
            views: '12k',
            updateDate: '1 month ago',
            channelName: 'Tech',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
