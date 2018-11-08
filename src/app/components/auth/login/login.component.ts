import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../_entities/user';
import { SharedService } from '../../../services/shared.service';
import { AlertsService } from '../../../services/alerts.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() showChange = new EventEmitter<any>();

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: String;
  action: String;
  model: User;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private alertService: AlertsService) { }

  ngOnInit() {
    this.model = new User();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.model.username = this.f.username.value;
    this.model.password = this.f.password.value;

    this.loading = true;
    if (this.action === 'loginBtn') {
      this.authService.login(this.model)
        .subscribe(
          data => {
            this.showChange.emit({ logged: true, show: true });
            this.sharedService.updateLoggedIn(data);
          },
          error => {
            this.loading = false;
            this.showChange.emit({ logged: false, show: true });
            this.alertService.error('Wrong Username/Password');
          });
    }
  }

  clicked(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    this.action = value;
  }

  cancel() {
    this.showChange.emit({ logged: false, show: false });
  }

}
