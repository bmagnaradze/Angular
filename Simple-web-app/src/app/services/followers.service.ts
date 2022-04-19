import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interface/user.interface';




@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  readonly apiUrl = environment.apiUrl;  

 @Input() followers!: string;



  constructor( private http: HttpClient) { }

  getFollowers(): Observable<any> {
    const url = this.apiUrl + '/' + 'octocat/followers'
    return this.http.get<User>(url);
  }
}
