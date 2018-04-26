import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

//Entities
import { Cred } from '../entities/cred';

@Injectable()
export class AuthService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.subject.next(sessionStorage.getItem('logged'));
  }

  login(cred: Cred): Observable<any> {
    this.http.post('http://localhost:8765/auth/cred/login', cred).subscribe((resp) => {
      sessionStorage.setItem('logged', 'Y');
      this.subject.next(sessionStorage.getItem('logged'));
    },
      (err) => {
        sessionStorage.setItem('logged', 'N');
        this.subject.next(sessionStorage.getItem('logged'));
      });
    return this.subject.asObservable();
  }

  logout() {
    sessionStorage.setItem('logged', 'N');
    this.subject.next(sessionStorage.getItem('logged'));
  }

  isLogged() {
    return this.subject.asObservable();
  }
}
