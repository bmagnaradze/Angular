import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserServiceComponent implements OnInit {

  readonly apiUrl = environment.apiUrl;  
  users! : string
  folowers! : string

  constructor( private http: HttpClient) { }

    getData(): Observable<any> {
      return this.http.get<any>( environment.apiUrl[0]);
      
    }

    getFollowers(): Observable<any> {
      return this.http.get<any>( environment.apiUrl[1]);
      
    }

  ngOnInit(): void {
  }
}