import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginComponent)
  loginComponent: LoginComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log('primaryColorSample:', this.loginComponent.show);
  }  

}
