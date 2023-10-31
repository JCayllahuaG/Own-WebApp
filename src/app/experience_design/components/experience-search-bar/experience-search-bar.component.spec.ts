import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSearchBarComponent } from './experience-search-bar.component';

describe('ExperienceSearchBarComponent', () => {
  let component: ExperienceSearchBarComponent;
  let fixture: ComponentFixture<ExperienceSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceSearchBarComponent]
    });
    fixture = TestBed.createComponent(ExperienceSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
