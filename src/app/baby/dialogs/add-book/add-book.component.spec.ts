import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookDialogComponent } from './add-book.component';

describe('AddBookComponent', () => {
  let component: AddBookDialogComponent;
  let fixture: ComponentFixture<AddBookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
