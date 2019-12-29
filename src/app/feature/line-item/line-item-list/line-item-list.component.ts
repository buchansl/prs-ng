import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent extends BaseComponent implements OnInit {

  title: string = "LineItem-List";
  lineitems: LineItem[] = [];
  jr: JsonResponse;

  constructor(private lineitemSvc: LineItemService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log("Calling line-item service list...");
    this.lineitemSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.lineitems = this.jr.data as LineItem[];
      console.log(this.lineitems);
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
  
