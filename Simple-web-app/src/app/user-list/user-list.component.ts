import { Component, OnInit, Input } from '@angular/core';
import { UserServiceComponent } from '../services/user-service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users!: any[]


  constructor(private userService: UserServiceComponent) { }

  ngOnInit(): void {
      this.userService.getData().subscribe((data) => {
        console.log(data);
        this.users = data;
      })
   
  }

 

}
