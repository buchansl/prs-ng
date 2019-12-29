import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent implements OnInit {

   
  title: string = 'Product Detail';
  lineitem: LineItem = new LineItem();
  id: number = 0;

  constructor(private lineitemSvc: LineItemService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    // get the product from the product service
    this.lineitemSvc.get(this.id).subscribe(jr => {
      this.lineitem = jr.data as LineItem;
    });
  }

  delete() {
    this.lineitemSvc.delete(this.id).subscribe(jr => {
      console.log("lineitem delete jr:",jr);
      if (jr.errors != null) {
        console.log("Error deleting product: "+jr.errors);
      }
      this.router.navigateByUrl("requests/lines"+this.id);
    });
  }

}
