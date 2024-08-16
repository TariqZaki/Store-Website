import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProducts } from '../iproducts';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  // import { ProductsService } from './../products.service';
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  productsData: IProducts[] = [];

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.productsData = res ;
      },

      error: (err) => {
        // console.log(err);
      },
    });
  }
}
