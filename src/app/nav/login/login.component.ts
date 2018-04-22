import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  logged: boolean;
  username: any;
  password: any;
  constructor() { }

  ngOnInit() {
    this.logged = false;
    this.username = null;
    this.password = null;
  }

  login() {
    if (this.username != null && this.password != null) {
      this.logged = true;
      this.notify.emit(true);
    }
  }

  logout() {
    this.logged = false;
    this.notify.emit(false);
  }

}
