import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpDialogComponent } from './rsvp.component';

describe('RsvpComponent', () => {
  let component: RsvpDialogComponent;
  let fixture: ComponentFixture<RsvpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
