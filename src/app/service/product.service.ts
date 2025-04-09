import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log('product service');
    
  }

  getProductData(){
    return [
      {
        name: 'mobile',
        branch: 'apple',
        price: '100000'
      },
      {
        name: 'laptop',
        branch: 'apple',
        price: '1000000'
      },
      {
        name: 'washing machine',
        branch: 'IFB',
        price: '10000'
      }
    ]
  }
}
