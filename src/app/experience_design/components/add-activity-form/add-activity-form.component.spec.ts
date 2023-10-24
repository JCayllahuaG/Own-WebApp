import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityFormComponent } from './add-activity-form.component';

describe('AddActivityFormComponent', () => {
  let component: AddActivityFormComponent;
  let fixture: ComponentFixture<AddActivityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActivityFormComponent]
    });
    fixture = TestBed.createComponent(AddActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
