import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged: string;

  ngOnInit() {
    this.logged = 'N';
  }

  onNotify(logged: string) {
    this.logged = logged;
  }
}
