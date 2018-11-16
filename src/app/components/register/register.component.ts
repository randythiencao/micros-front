import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../_entities/user';
import { AuthenticationService } from '../../services/authentication.service';
import { SharedService } from '../../services/shared.service';
import { AlertsService } from '../../services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: String;
  action: String;
  model: User;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private alertService: AlertsService,
    private router: Router) { }

  ngOnInit() {
    this.model = new User();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.model.username = this.f.username.value;
    this.model.password = this.f.password.value;

    this.loading = true;
    if (this.action === 'regBtn') {
      this.authService.register(this.model)
        .subscribe(
          data => {
            this.alertService.success('Registered Successfully');
            this.router.navigate(['/']);
          },
          error => {
            this.alertService.error('Username taken');
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
  }

}
