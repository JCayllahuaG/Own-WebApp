import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProfileInformationComponent } from './manager-profile-information.component';

describe('ManagerProfileInformationComponent', () => {
  let component: ManagerProfileInformationComponent;
  let fixture: ComponentFixture<ManagerProfileInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerProfileInformationComponent]
    });
    fixture = TestBed.createComponent(ManagerProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
