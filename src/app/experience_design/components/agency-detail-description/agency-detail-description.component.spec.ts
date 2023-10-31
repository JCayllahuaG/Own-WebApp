import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDetailDescriptionComponent } from './agency-detail-description.component';

describe('AgencyDetailDescriptionComponent', () => {
  let component: AgencyDetailDescriptionComponent;
  let fixture: ComponentFixture<AgencyDetailDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyDetailDescriptionComponent]
    });
    fixture = TestBed.createComponent(AgencyDetailDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
