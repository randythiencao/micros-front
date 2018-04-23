import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cred } from '../entities/cred';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private subject = new Subject<string>();

  login(cred: Cred): Observable<string> {
    if (cred.username != null && cred.password != null && cred.username !== '' && cred.password !== '') {
      this.subject.next('Y');
      console.log('service Y');
    } else {
      this.subject.next('N');
      console.log('service N');
    }
    return this.subject.asObservable();
  }
}
