import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/feature/base/base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  extends BaseComponent implements OnInit {
  menuItems: MenuItem[] = [];
  id: number = 0;

  constructor(protected sysSvc: SystemService) {
    super(sysSvc)
   }

  ngOnInit() {
    super.ngOnInit();
    if(this.sysSvc.loggedInUser !=null){
      this.id = this.sysSvc.loggedInUser.id
    }
    
    this.menuItems = [
      new MenuItem("User","/users/list","User List"),
      new MenuItem("Vendor","/vendors/list","Vendor List"),
      new MenuItem("Product","/products/list","Product List"),
      new MenuItem("Request","/requests/list","Request List"),
      // new MenuItem("Review","/requests/review/"+this.id,"Review List"),
      new MenuItem("Login", "/users/login", "Login")

    ]
    let reviewerMenu: MenuItem = new MenuItem
      ("Review", "/requests/review/" + this.id, "Line-Item List");
    console.log('menu component - reviewer?', this.isReviewer);
    if (this.sysSvc.loggedInUser.isReviewer==true) {
      this.menuItems.push(reviewerMenu);
    }
  }
    
  }


