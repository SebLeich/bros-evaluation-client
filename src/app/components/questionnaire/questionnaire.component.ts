import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {


  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;
  public formGroup: FormGroup;

  get total(): number {
    return this.doughnutChartData.reduce((pv, cv) => pv + cv, 0);
  }

  public doughnutChartLabels = ["Fragen beantwortet", "Fragen unbeantwortet"];
  public doughnutChartData = [0,3];
  public backgroundColors = [{
    backgroundColor: [
      "#799c7d", "#e7e7e7"
    ] 
  }];
  public doughnutChartOptions = {
    "legend": {
      "position": "bottom"
    }
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      isReadable: false,
      isDistinghishable: false,
      connectorsAreClear: false
    });
  }

  handleChange(value: boolean){
    if(value) this.valueIsTrue();
    else this.valueIsFalse();
  }

  ngOnInit(): void {
    this.formGroup.get("isReadable").valueChanges.subscribe((value: boolean) => this.handleChange(value));
    this.formGroup.get("isDistinghishable").valueChanges.subscribe((value: boolean) => this.handleChange(value));
    this.formGroup.get("connectorsAreClear").valueChanges.subscribe((value: boolean) => this.handleChange(value));
  }

  valueIsFalse(){
    this.doughnutChartData[1]++;
    this.doughnutChartData[0]--;
    this.chart.chart.update();
  }

  valueIsTrue(){
    this.doughnutChartData[0]++;
    this.doughnutChartData[1]--;
    this.chart.chart.update();
  }

}
