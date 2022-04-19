import { Component } from '@angular/core';
import { UserServiceComponent } from './services/user-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users!: string[];
  constructor(private userService: UserServiceComponent) {}

  // getUsers() {
  //    this.userService.getData().subscribe((data) => {
  //      console.log(data);
  //      this.users = data;
  //    })
  // }
}
