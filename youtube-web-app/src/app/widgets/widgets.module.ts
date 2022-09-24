import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSmBoxComponent } from './video-sm-box/video-sm-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [VideoSmBoxComponent],
    imports: [CommonModule, SharedModule],
    exports: [VideoSmBoxComponent],
})
export class WidgetsModule {}
