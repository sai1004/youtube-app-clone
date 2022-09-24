import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSmBoxComponent } from './video-sm-box.component';

describe('VideoSmBoxComponent', () => {
  let component: VideoSmBoxComponent;
  let fixture: ComponentFixture<VideoSmBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSmBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
