import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';
import { UserServiceComponent } from '../services/user-service';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   user$!: Observable<User>
  
   
  

  constructor(private userService: UserServiceComponent,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
      if(id!== null) {
        this.user$ = this.userService.getInfo(id);
      }
    }
  }


