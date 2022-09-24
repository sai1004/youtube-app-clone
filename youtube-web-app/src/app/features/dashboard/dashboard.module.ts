import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ShortsPageComponent } from './shorts-page/shorts-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent,
    },
    {
        path: 'shorts',
        component: ShortsPageComponent,
    },
    {
        path: 'explore',
        component: ExplorePageComponent,
    },
];

@NgModule({
    declarations: [DashboardPageComponent, ShortsPageComponent, ExplorePageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, WidgetsModule],
})
export class DashboardModule {}
