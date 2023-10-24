import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRegisterFormComponent } from './agency-register-form.component';

describe('AgencyRegisterFormComponent', () => {
  let component: AgencyRegisterFormComponent;
  let fixture: ComponentFixture<AgencyRegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyRegisterFormComponent]
    });
    fixture = TestBed.createComponent(AgencyRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
