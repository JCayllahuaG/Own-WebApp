import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceCardComponent } from './experience_design/components/experience-card/experience-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceListComponent } from './experience_design/components/experience-list/experience-list.component';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { AgencyRegisterFormComponent } from './experience_design/components/agency-register-form/agency-register-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExperienceDetailComponent } from './experience_design/components/experience-detail/experience-detail.component';
import { AgencyListComponent } from './experience_design/components/agency-list/agency-list.component';
import { AddExperienceComponent } from './experience_design/components/add-experience/add-experience.component';
import { AddActivityFormComponent } from './experience_design/components/add-activity-form/add-activity-form.component';
import { ManagerSidenavComponent } from './shared/components/manager-sidenav/manager-sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateObjectDialogComponent } from './shared/components/create-object-dialog/create-object-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddActivityDialogComponent } from './experience_design/components/add-activity-dialog/add-activity-dialog.component';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { ManagerProfileInformationComponent } from './profile_management/components/manager-profile-information/manager-profile-information.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import {heroArrowUpTray, heroHome, heroHeart, heroStar } from '@ng-icons/heroicons/outline';
import { AgencyCardComponent } from './experience_design/components/agency-card/agency-card.component';
import { AgencyDetailComponent } from './experience_design/components/agency-detail/agency-detail.component';
import { AgencyDetailEditComponent } from './experience_design/components/agency-detail-edit/agency-detail-edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AgencyDetailDescriptionComponent } from './experience_design/components/agency-detail-description/agency-detail-description.component';
import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MinimalExperienceCardComponent } from './experience_design/components/minimal-experience-card/minimal-experience-card.component';
import { CardSliderComponent } from './experience_design/components/card-slider/card-slider.component';
import { NextSliderDirective } from './experience_design/components/card-slider/directives/next-slider.directive';
import { PrevSliderDirective } from './experience_design/components/card-slider/directives/prev-slider.directive';
import { register } from 'swiper/element/bundle';
import { ExperienceSearchBarComponent } from './experience_design/components/experience-search-bar/experience-search-bar.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    ExperienceCardComponent,
    ExperienceListComponent,
    AgencyRegisterFormComponent,
    ExperienceDetailComponent,
    AgencyListComponent,
    AddExperienceComponent,
    AddActivityFormComponent,
    ManagerSidenavComponent,
    CreateObjectDialogComponent,
    AddActivityDialogComponent,
    RegisterFormComponent,
    ManagerProfileInformationComponent,
    AgencyCardComponent,
    AgencyDetailComponent,
    AgencyDetailEditComponent,
    AgencyDetailDescriptionComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    MinimalExperienceCardComponent,
    CardSliderComponent,
    NextSliderDirective,
    PrevSliderDirective,
    ExperienceSearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgOptimizedImage,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    NgIconsModule.withIcons({heroArrowUpTray, heroHome, heroHeart, heroStar, heroStarSolid}),
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
