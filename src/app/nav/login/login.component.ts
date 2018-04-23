import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Cred } from '../../entities/cred';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  sub: Subscription;
  logged: string;
  cred: Cred;

  constructor(private authService: AuthService) {
    this.cred = new Cred();
    this.logged = 'N';
    this.authService.login(this.cred).subscribe((resp) => {
      this.logged = resp.toString();
    });
    this.notify.emit(this.logged);
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.cred).subscribe((resp) => {
      this.logged = resp.toString();
    });
    console.log('login ' + this.logged);
    this.notify.emit(this.logged);
  }

  logout() {
    this.logged = 'N';
    this.notify.emit(this.logged);
  }

}
