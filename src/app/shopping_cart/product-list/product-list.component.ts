import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
 import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 // products: Product[];

  gridView = false;
  @Input() buttonText = '';
  @Input() titlePage = '';
  @Input() products:Product[] = [];


  addToCart(product: Product) {
    this.productSelected.addToCart(product);
    Swal.fire({
      position: 'top',
      imageHeight: 200,
      icon: 'success',
      title: 'The product has been added',
      showConfirmButton: false,
      timer: 1000
    })
   }

  clearProduct(product: Product){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your product has been deleted',
          'success'
        )
          this.productSelected.clearProduct(product)

      }
    })

  }
  constructor(
    private route: ActivatedRoute,
    private productSelected: ProductService
  ) { }

  ngOnInit(): void {
  }
}

