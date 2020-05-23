import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartpageComponent } from './components/startpage/startpage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    StartpageComponent,
    NavigationComponent,
    QuestionnaireComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
