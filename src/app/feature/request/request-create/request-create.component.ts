import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { Product } from 'src/app/model/product.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {
  title: string = "Request Create";
  request: Request = new Request();


  constructor(private requestSvc: RequestService,
              private router: Router,
              protected sysSvc: SystemService) { 
                super(sysSvc)
              }

  ngOnInit() {
    this.request.user = this.sysSvc.loggedInUser;
  }

  save(): void {
    this.requestSvc.save(this.request).subscribe(jr => {
      console.log("saved user...");
      console.log(this.request);
      this.router.navigateByUrl("/requests/list");
    });
 
  }
  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

}
