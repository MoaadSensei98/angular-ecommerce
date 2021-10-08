import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  shoppingCartList:Product[] = [];
  //shoppingCartRemove = [];
  items = this.productService.getItems();
  //clear = this.productService.clearProduct(items);
  constructor(
            private productService: ProductService
  ) { }
  ngOnInit(): void {
  }

}
