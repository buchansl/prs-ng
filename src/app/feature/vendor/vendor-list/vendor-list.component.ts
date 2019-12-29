import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  title: string = "Vendor-List";
  vendors: Vendor[] = [];
  jr: JsonResponse;

  constructor(private userSvc: VendorService) { }

  ngOnInit() {
    console.log("Calling user service list...");
    this.userSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.vendors = this.jr.data as Vendor[];
      console.log(this.vendors);
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
