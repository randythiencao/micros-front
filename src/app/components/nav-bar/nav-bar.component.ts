import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { User } from '../../_entities/user';
import { SharedService } from 'src/app/services/shared.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent)
  loginComponent: LoginComponent;
  show: boolean;
  loggedin: boolean;
  currentUser: User;
  constructor(
    private sharedService: SharedService) {
  }

  ngOnInit() {
    this.show = false;
    this.sharedService.loggedIn.subscribe(user => this.currentUser = user);
    console.log(this.currentUser);
  }

  enableForm() {
    this.show = true;
  }

  setShow(value) {
    this.show = value.show;
    this.loggedin = value.logged;
  }

  logout() {
    this.sharedService.logout();
    this.show = false;
    this.loggedin = false;
  }
}
