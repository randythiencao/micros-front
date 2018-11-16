import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_entities/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }


  login(user: User): Observable<User> {
    return this.http.post<User>(environment.context + '/auth/cred/login', user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.context + '/auth/cred/register', user);
  }
}
