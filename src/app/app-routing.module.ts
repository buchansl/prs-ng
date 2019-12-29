import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequetsDetailComponent } from './feature/request/requets-detail/requets-detail.component';
import { LineItemListComponent } from './feature/line-item/line-item-list/line-item-list.component';
import { RequestLinesComponent } from './feature/request-lines/request-lines.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemDetailComponent } from './feature/line-item/line-item-detail/line-item-detail.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'users/login', component: UserLoginComponent},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'requests/list', component: RequestListComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/edit/:id', component: RequestEditComponent},
  { path: 'requests/detail/:id', component: RequetsDetailComponent},
  { path: 'requests/lines/:id', component: RequestLinesComponent},
  { path: 'requests/review/:id', component: RequestReviewComponent},
  { path: 'requests/approve/:id', component: RequestApproveComponent},
  { path: 'lineitems/list/:id', component: LineItemListComponent},
  { path: 'lineitems/create/:id', component: LineItemCreateComponent},
  { path: 'lineitems/edit/:id', component: LineItemEditComponent},
  { path: 'lineitems/detail/:id', component: LineItemDetailComponent},
  
  { path: '**', component: UserListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
