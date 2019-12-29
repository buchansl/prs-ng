import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './feature/base/base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { LineItemListComponent } from './feature/line-item/line-item-list/line-item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LineItemDetailComponent } from './feature/line-item/line-item-detail/line-item-detail.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequetsDetailComponent } from './feature/request/requets-detail/requets-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { RequestLinesComponent } from './feature/request-lines/request-lines.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SortPipe,
    MenuComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    LineItemListComponent,
    LineItemDetailComponent,
    UserDetailComponent,
    VendorDetailComponent,
    ProductDetailComponent,
    RequetsDetailComponent,
    UserLoginComponent,
    RequestLinesComponent,
    RequestApproveComponent,
    RequestReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
