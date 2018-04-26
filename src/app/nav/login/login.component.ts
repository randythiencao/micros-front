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
  sub: Subscription;
  logged: string;
  cred: Cred;

  constructor(private authService: AuthService) {
    sessionStorage.setItem('logged', 'N');
    this.cred = new Cred();
    this.logged = 'N';
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.cred).subscribe((resp) => {
      this.logged = resp.toString();
    });
  }

  logout() {
    this.authService.logout();
  }

}
