import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User = null;
  constructor(private route: Router
   ) { 

  }
  isAdmin(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.isAdmin;
  }
  isReviewer(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.isReviewer;
  }

  checkLogin(): void {
    
    if(this.loggedInUser == null) {
      this.route.navigateByUrl("/users/login");
    }
  }
}
