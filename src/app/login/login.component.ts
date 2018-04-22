import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  id: any;
  name: any;
  moves: any;
  clicked = false;

  ngOnInit() {
  }

  getPoke() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.id + '/').subscribe(
      (resp) => {
        this.name = resp['name'];
        this.moves = resp['moves'];
        this.clicked = true;
      },
      (err) => {
        console.log('error occured' + err);
      });
  }


}
