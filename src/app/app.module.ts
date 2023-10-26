import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as feather from 'feather-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {FooterComponent} from './component/footer/footer.component';
import {CardComponent} from './component/card/card.component' ;
import {CardRowComponent} from './component/card-row/card-row.component' ;
import {MovementComponent} from './component/movement/movement.component' ;
import { NgChartsModule } from 'ng2-charts';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserEditByIdComponent } from './component/user-edit-by-id/user-edit-by-id.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { CreateProductComponent } from './component/product/create-product/create-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { ViewProductComponent } from './component/product/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    CardRowComponent,
    MovementComponent,
    SignInComponent,
    SignUpComponent,
    UsersComponent,
    UserComponent,
    UserViewComponent,
    UserEditComponent,
    UserEditByIdComponent,
    ProductsComponent,
    ProductComponent,
    CreateProductComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
