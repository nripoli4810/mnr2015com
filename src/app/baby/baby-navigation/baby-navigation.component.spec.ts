import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyNavigationComponent } from './baby-navigation.component';

describe('BabyNavigationComponent', () => {
  let component: BabyNavigationComponent;
  let fixture: ComponentFixture<BabyNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
