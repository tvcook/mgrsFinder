import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLinksComponent } from './map-links.component';

describe('MapLinksComponent', () => {
  let component: MapLinksComponent;
  let fixture: ComponentFixture<MapLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
