import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent extends BaseComponent implements OnInit {

  title: string = "Request Lines";
  request: Request = new Request();
  lineitems: LineItem[] = [];
  jr: JsonResponse;
  id: number = 0;
  lineitem: LineItem;

  constructor(
    
    private requestSvc: RequestService,
    private lineitemSvc: LineItemService,
    private router: Router, 
    private route: ActivatedRoute,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reloadData();
   
  }


  reloadData(): void {this.requestSvc.get(this.id).subscribe(jr =>{
    this.request = jr.data as Request;
  });
    this.lineitemSvc.linesForRequest(this.id).subscribe (jresp => {
      this.jr = jresp;
      this.lineitems = this.jr.data as LineItem[];
    });
  
}
delete() {
  this.lineitemSvc.delete(this.id).subscribe(jr => {
   
    if (jr.errors != null) {
      console.log("Error deleting request: "+jr.errors);
    }
    this.router.navigateByUrl("requests/list");
  });
}
        submitForReview(): void{
         this.requestSvc.submitForReview(this.request).subscribe (jresp => {
           this.jr = jresp;
           this.request = this.jr.data as Request;
            this.router.navigateByUrl("reviews/list");
         })
       }
      }
