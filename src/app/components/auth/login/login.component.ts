import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../_entities/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: String;
  action: String;
  model: User;
  show: false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) { }

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
    if (this.action === 'login') {
      this.authService.login(this.model)
        .subscribe(
          data => {
            //this.alertService.success('Registration successful', true);
            //this.router.navigate(['/login']);
            console.log(data);
          },
          error => {
            //this.alertService.error(error);
            this.loading = false;
          });
    } else if (this.action === 'cancel') {
      
      this.show = false;
    }
  }

  clicked(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    this.action = value;
  }
}
