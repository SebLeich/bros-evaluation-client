import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { BackEndService } from 'src/app/services/backend-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginFlag: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private backendService: BackEndService
  ) {
    this.loginFlag = backendService.isLoggedIn();
  }

  gotoHome() {
    this.router.navigate(["/home"]);
  }

  logout(){
    this.backendService.logout();
  }

  ngOnInit(): void {
    this.backendService.loginAnchor.subscribe(() => this.loginFlag = true);
    this.backendService.logoutAnchor.subscribe(() => this.loginFlag = false);
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

}
