import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDetailEditComponent } from './agency-detail-edit.component';

describe('AgencyDetailEditComponent', () => {
  let component: AgencyDetailEditComponent;
  let fixture: ComponentFixture<AgencyDetailEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyDetailEditComponent]
    });
    fixture = TestBed.createComponent(AgencyDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
