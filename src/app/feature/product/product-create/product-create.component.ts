import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  title: string = "Product Create";
  product: Product = new Product();
  vendors: Vendor[]= []; 

  constructor(private productSvc: ProductService,
              private router: Router,
              private vendorSvc: VendorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
      console.log("vendors: ",this.vendors);
    });
  }

  save(): void {
    console.log("product create save - product:",this.product);
    this.productSvc.save(this.product).subscribe(jr => {
      console.log("saved Product...");
      console.log(this.product);
      this.router.navigateByUrl("/products/list");
    });
   
  }

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

 

}

