import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymComponent } from './gym.component';

describe('GymComponent', () => {
  let component: GymComponent;
  let fixture: ComponentFixture<GymComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymComponent]
    });
    fixture = TestBed.createComponent(GymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
