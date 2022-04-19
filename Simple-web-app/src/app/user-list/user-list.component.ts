import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServiceComponent } from '../services/user-service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy {

  @Input() users!: any[]
 private subscription!: Subscription;



  constructor(private userService: UserServiceComponent,
              private router: Router) { }

  ngOnInit(): void {
      this.userService.getData().subscribe((data) => {
        this.users = data;
      })
   
  }
 
  onSelect(user: {id: any}) {
    this.router.navigate(['/user-detail', user.id])
  }
 

  ngOnDestroy(): void {
    //  this.subscription.unsubscribe()
  }

}
