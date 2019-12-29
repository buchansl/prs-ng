import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { JsonResponse } from 'src/app/model/json-response.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {
  title: string = "Review-List";
  requests: Request[] = [];
  request: Request;
  jr: JsonResponse;
  id: number = 0;

  constructor(private requestSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    protected sysSvc: SystemService
      )    { 
      super(sysSvc);
    }

  ngOnInit() {
    
    console.log("request")
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.listRequestId(this.id).subscribe(jr => {
      this.jr = jr;
      this.requests = jr.data as Request[];
    });
    
  }
  
  
  listRequestId(): void {
    this.requestSvc.listRequestId(this.id).subscribe(jr => {
      this.requests = jr.data as Request[];
    });
  }

}

  

