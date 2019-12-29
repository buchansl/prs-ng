import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  title: string = "User Edit";
  request: Request = new Request();
  users: User[];
  id: number = 0;
  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location,
              private userSvc: UserService,
              protected sysSvc: SystemService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      
    });

  }

  save(): void {
    this.requestSvc.save(this.request).subscribe(jr => {
     
      this.router.navigateByUrl("/requests/list");
    });
  }
    update(): void {
      this.requestSvc.update(this.request).subscribe(jr => {
        console.log("edited request...");
        console.log(this.request);
        this.router.navigateByUrl("/requests/list");
      });

    }
    delete() {
      this.requestSvc.delete(this.id).subscribe(jr => {
       
        if (jr.errors != null) {
          console.log("Error deleting movie: "+jr.errors);
        }
        this.router.navigateByUrl("requests/list");
      });
    }
    backClicked() {
      this.loc.back();
    }
    compUser(a: User, b: User): boolean {
      return a && b && a.id === b.id;
    }
  }

