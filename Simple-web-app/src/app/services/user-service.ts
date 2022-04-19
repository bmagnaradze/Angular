import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';


@Injectable({
    providedIn: 'root'
})
export class UserServiceComponent implements OnInit {

  readonly apiUrl = environment.apiUrl;  
  users! : string

  constructor( private http: HttpClient) { }

    getData(): Observable<any> {
      return this.http.get<User>( environment.apiUrl);
      
    }

    getInfo(id: string){
      const url = this.apiUrl + '/' + id
      return this.http.get<User>(url);
    }

   

  ngOnInit(): void {
  }
}