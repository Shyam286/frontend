// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor(private http: HttpClient) { }

//   getCart(id: any) {

//     return this.http.get(`http://localhost:8084/cart/getCartByUserId/`+id);
//     throw new Error('Method not implemented.');
//   }

//   public addCart(cart:any){
//     console.log("5",cart);
//     return this.http.post(`http://localhost:8084/cart/addCart`,cart,{responseType:'text'});
//   }

//   public deleteCart(id:any){
//     return this.http.delete(`http://localhost:8084/cart/delete/${id}`,{responseType:'text'});
//   }
// }
