import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalExperienceCardComponent } from './minimal-experience-card.component';

describe('MinimalExperienceCardComponent', () => {
  let component: MinimalExperienceCardComponent;
  let fixture: ComponentFixture<MinimalExperienceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimalExperienceCardComponent]
    });
    fixture = TestBed.createComponent(MinimalExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
