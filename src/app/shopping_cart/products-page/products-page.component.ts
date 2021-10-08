import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {PRODUCTS} from "../mock-products";

 @Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  productListPage:Product[] = PRODUCTS;

  constructor() { }


  ngOnInit(): void {
  }

}
