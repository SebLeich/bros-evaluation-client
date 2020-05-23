import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-readability',
  templateUrl: './questionnaire-readability.component.html',
  styleUrls: ['./questionnaire-readability.component.css']
})
export class QuestionnaireReadabilityComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {

  }

}
