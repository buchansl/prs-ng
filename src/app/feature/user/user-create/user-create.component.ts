import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = "User Create";
  user: User = new User();

  constructor(private userSvc: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.userSvc.save(this.user).subscribe(jr => {
      console.log("saved user...");
      console.log(this.user);
      this.router.navigateByUrl("/users/list");
    });
  }

}
