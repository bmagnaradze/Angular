import { Component, OnInit , Input } from '@angular/core';
import { UserServiceComponent } from '../services/user-service';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() folowers!: any[]
   
  

  constructor(private userService: UserServiceComponent) { }

  ngOnInit(): void {
    this.userService.getFollowers().subscribe((data) => {
      console.log(data);
      this.folowers = data;
    })
  }

}
