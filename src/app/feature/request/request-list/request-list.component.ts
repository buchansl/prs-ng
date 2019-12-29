import { Component, OnInit } from '@angular/core';
import { Request } from 'selenium-webdriver/http';
import { JsonResponse } from 'src/app/model/json-response.class';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from '../../base/base/base.component';
import { LineItemService } from 'src/app/service/line-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent  implements OnInit {

  title: string = "Request-List";
  requests: Request[] = [];
  jr: JsonResponse;

  constructor(private requestSvc: RequestService){

  }



  ngOnInit() {
    this.requestSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.requests = this.jr.data as Request[];
      console.log(this.requests);
    });
  }

}
