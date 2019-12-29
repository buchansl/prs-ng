import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { BaseComponent } from '../../base/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { LineItemService } from 'src/app/service/line-item.service';
import {Request} from '../../../model/request.class';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent extends BaseComponent implements OnInit {

  title: string = "Line-Item Create";
  lineitem: LineItem = new LineItem();
  request: Request = new Request();
  products: Product[] = [];
  id: number = 0;



  constructor(private requestSvc: RequestService,
  private lineitemSvc: LineItemService,
  private productSvc: ProductService,
  private router: Router,
  private route: ActivatedRoute,
              protected sysSvc: SystemService) { 
                super(sysSvc) 
              }

  ngOnInit() {
   // this.request.user = this.sysSvc.loggedInUser;
   this.productSvc.list().subscribe(jr => {
    this.products = jr.data as Product[];

  });
  this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
      this.lineitem.request = this.request;
    });
  }

  save(): void {
    this.lineitemSvc.save(this.lineitem).subscribe(jr => {
      console.log("lineitem="+this.lineitem)
      this.router.navigateByUrl("/requests/lines/" + this.id);
    });
  }
  update(): void {
    this.lineitemSvc.save(this.lineitem).subscribe(jr => {
      
      this.router.navigateByUrl("/requests/lines/");
    });
  }
  

}
