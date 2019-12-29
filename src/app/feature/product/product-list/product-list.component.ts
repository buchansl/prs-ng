import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = "Product-List";
  products: Product[] = [];
  jr: JsonResponse;

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    console.log("Calling product service list...");
    this.productSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.products = this.jr.data as Product[];
      console.log(this.products);
    });
  }
  searchCriteria: string = '';
  sortCriteria: string = "id";
  sortOrder: string = "asc";
  sortBy(column: string): void {
    if(column == this.sortCriteria) {
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
