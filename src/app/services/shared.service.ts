import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_entities/user';

/**
 * This class provides a service as medium to store all observables that needed to be available
 * across components
 *
 * @export
 * @class SharedService
 */
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private loggedInSubj = new BehaviorSubject<User>(new User());
  loggedIn = this.loggedInSubj.asObservable();

  constructor() { }

  updateLoggedIn(data: User) {
    this.loggedInSubj.next(data);
  }

  logout() {
    this.loggedInSubj.next(new User());
  }
}
