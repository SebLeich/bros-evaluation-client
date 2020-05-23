import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BackEndService } from 'src/app/services/backend-service';
import { UserResponseModelWrapper } from 'src/app/classes/user-response-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public wrongCredentials: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    private backendService: BackEndService
  ) {
    this.formGroup = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  login(){
    let e = this.formGroup.controls["email"];
    let p = this.formGroup.controls["password"];
    if(e.valid && p.valid){
      this.backendService.login(e.value, p.value, () => {
        this.dialogRef.close();
      }, () => {
        this.wrongCredentials = true;
      });
    } else {
      console.log("invalid form");
    }
  }

  ngOnInit(): void {

  }

}
