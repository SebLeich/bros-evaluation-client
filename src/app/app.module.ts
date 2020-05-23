import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BackEndService } from './services/backend-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    StartpageComponent,
    NavigationComponent,
    QuestionnaireComponent,
    NewsfeedComponent,
    QuestionnaireStartComponent,
    QuestionnaireReadabilityComponent,
    LoginComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatStepperModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  entryComponents: [LoginComponent],
  providers: [BackEndService],
  bootstrap: [RootComponent]
})
export class AppModule { }
