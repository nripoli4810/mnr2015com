import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingListDialogComponent } from './mailinglist.component';

describe('MailinglistComponent', () => {
  let component: MailingListDialogComponent;
  let fixture: ComponentFixture<MailingListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
