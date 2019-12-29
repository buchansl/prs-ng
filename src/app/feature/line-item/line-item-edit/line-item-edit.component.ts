import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';
import { Request } from 'src/app/model/request.class';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent extends BaseComponent implements OnInit {

  title: string = "Line-item Edit";
  request: Request = new Request();
  lineItem: LineItem = new LineItem();
  products: Product[] = [];
  id: number = 0;
  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location,
              private userSvc: UserService,
              private lineItemSvc: LineItemService,
              protected sysSvc: SystemService,
              private productSvc: ProductService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineItemSvc.get(this.id).subscribe(jr => {
      this.lineItem = jr.data as LineItem;
    });
    this.productSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
      
    });
   
    

  }

  save(): void {
    this.lineItemSvc.save(this.lineItem).subscribe(jr => {
     
      this.router.navigateByUrl("/requests/lines");
    });
    
  }
    update(): void {
      this.lineItemSvc.update(this.lineItem).subscribe(jr => {
       
        this.router.navigateByUrl("/requests/lines");
      });

    }
    delete() {
      this.lineItemSvc.delete(this.id).subscribe(jr => {
       
        if (jr.errors != null) {
          console.log("Error deleting lineItem: "+jr.errors);
        }
        this.router.navigateByUrl("requests/lines");
      });
    }
    

  compProduct(a: Product, b: Product): boolean {
    console.log(this.lineItem)
      return a && b && a.id === b.id;
    }
  }
