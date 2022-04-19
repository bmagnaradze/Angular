import { Component, OnInit , Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interface/user.interface';
import { FollowersService } from '../services/followers.service';
import { UserServiceComponent } from '../services/user-service';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit , OnDestroy{
   user$!: Observable<User>;
   followers!: string [];
   private subscription!: Subscription;
    close = new EventEmitter<void>();
   
   
  

  constructor(private userService: UserServiceComponent,
               private route: ActivatedRoute,
               private followersService: FollowersService,
               private router: Router) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
      if(id!== null) {
        this.user$ = this.userService.getInfo(id);
      }
    }

    onGetFollowers() {
    this.followersService.getFollowers().subscribe(data => {
      this.followers = data;
    });
    }
     
    // onSelect(follower: string ) {
    //   this.router.navigate(['/user-detail',  follower])
    // }
    
    

  // onClose() {
  //   this.close.emit();
  // }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
   
  }

  
