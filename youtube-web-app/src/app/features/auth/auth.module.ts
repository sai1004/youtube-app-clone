import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const routes: Routes = [{ path: 'signin', component: SigninPageComponent }];
@NgModule({
    declarations: [SigninPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, WidgetsModule],
})
export class AuthModule {}
