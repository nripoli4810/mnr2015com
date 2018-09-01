import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLandingComponent } from './baby-landing.component';

describe('BabyLandingComponent', () => {
  let component: BabyLandingComponent;
  let fixture: ComponentFixture<BabyLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
