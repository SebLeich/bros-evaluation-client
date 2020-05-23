import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartpageComponent } from './components/startpage/startpage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { QuestionnaireStartComponent } from './components/questionnaire-start/questionnaire-start.component';
import { QuestionnaireReadabilityComponent } from './components/questionnaire-readability/questionnaire-readability.component';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    StartpageComponent,
    NavigationComponent,
    QuestionnaireComponent,
    NewsfeedComponent,
    QuestionnaireStartComponent,
    QuestionnaireReadabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
