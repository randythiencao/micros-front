import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitTestService {

  constructor(private http: HttpClient) { }

  getRecentURL(): Observable<any> {
    return this.http.get<any>(environment.context + '/test/initTest/1/recentURL');
  }
}
