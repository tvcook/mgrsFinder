import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingBannerComponent } from './heading-banner.component';

describe('HeadingBannerComponent', () => {
  let component: HeadingBannerComponent;
  let fixture: ComponentFixture<HeadingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
