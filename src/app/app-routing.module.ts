import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserEditByIdComponent } from './component/user-edit-by-id/user-edit-by-id.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { CreateProductComponent } from './component/product/create-product/create-product.component';
import { ViewProductComponent } from './component/product/view-product/view-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';

const routes: Routes = [
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'sign-in',
    component : SignInComponent
  },
  {
    path : 'sign-up',
    component : SignUpComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'users/user' ,
    component : UserComponent,
    children : [
      {
        path : ':id',
        component : UserViewComponent
      },
    ]
  },
  {
    path : 'users/user/edit',
    component : UserEditComponent,
    children : [
      {
        path : ':edit',
        component: UserEditByIdComponent
      }
    ]
  },
  {
    path : 'products',
    component : ProductsComponent,
  },
  {
    path : 'product',
    component :  ProductComponent,
    children : [
      {
        path : 'create',
        component : CreateProductComponent
      },
      {
        path : ':id',
        component : ViewProductComponent
      },
      {
        path : 'edit/:id',
        component : EditProductComponent
      }
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
