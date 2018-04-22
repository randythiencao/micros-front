import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  logged = false;
  ngOnInit() {
    sessionStorage.setItem('logged', 'N');
  }

  onNotify(logged: boolean) {
    if (logged) {
      sessionStorage.setItem('logged', 'Y');
    } else {
      sessionStorage.setItem('logged', 'N');
    }
  }

}
