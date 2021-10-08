import {Injectable} from '@angular/core';
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Product[] = [];

  constructor() {
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearProduct(product: Product) {
    let index = this.items.indexOf(product);
    this.items.splice(index,1);
  }
  list(): Product[] {
    return PRODUCTS;
  }
}
