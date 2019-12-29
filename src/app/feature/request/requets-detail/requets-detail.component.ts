import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { Location } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requets-detail',
  templateUrl: './requets-detail.component.html',
  styleUrls: ['./requets-detail.component.css']
})
export class RequetsDetailComponent implements OnInit {

  title: string = 'Request Detail';
  request:  Request = new Request();
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    // get the request from the request service
    console.log("request detail user id =",this.id);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
      console.log('request detail, request: '+this.request);
    });
  }

  delete() {
    this.requestSvc.delete(this.request.id).subscribe(jr => {
      console.log("request delete jr:",jr);
      if (jr.errors != null) {
        console.log("Error deleting request: "+jr.errors);
      }
      this.router.navigateByUrl("requests/list");
    });
    
  }
      save(): void {
        this.requestSvc.save(this.request).subscribe(jr => {
          console.log("edited request...");
          console.log(this.request);
          this.router.navigateByUrl("/requests/list");
        });
  }
      update(): void {
        this.requestSvc.save(this.request).subscribe(jr => {
          console.log("edited request...");
          console.log(this.request);
          this.router.navigateByUrl("/requests/list");
        });
  }

}
