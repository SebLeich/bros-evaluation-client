import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireReadabilityComponent } from './questionnaire-readability.component';

describe('QuestionnaireReadabilityComponent', () => {
  let component: QuestionnaireReadabilityComponent;
  let fixture: ComponentFixture<QuestionnaireReadabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireReadabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireReadabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
