import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPageComponent} from "./products-page/products-page.component";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  { path: 'productPage', component: ProductsPageComponent },
  { path: 'shoppingCartPage', component: ShoppingCartPageComponent },

  { path: '',
    redirectTo: '/productPage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
