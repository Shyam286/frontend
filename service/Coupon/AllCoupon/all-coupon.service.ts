// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllCouponService {

//   constructor(private http:HttpClient) { }

//   public getAllCoupon(){
//                return this.http.get(`http://localhost:8082/coupon/getAllCoupon`);
//               }

//   public getCategory(category:string){
//       return this.http.get("http://localhost:8082/coupon/getCouponByCategory/"+category);
//   }

//   public addCoupon(coupon:any)
//   {
//      return this.http.post(`http://localhost:8082/coupon/addCoupon`,coupon,{responseType: 'text'});
//   }

//   public updateCoupon(coupon:any)
//   {
//      return this.http.put(`http://localhost:8082/coupon/updateCoupon/`,coupon,{responseType: 'text'});
//   }

//   public getCouponById(id:any){
//      console.log("getCouponById---id",id);
//     return this.http.get(`http://localhost:8082/coupon/getCouponById/`+id);
//    }

//    public deleteCoupon(id:any){
//       return this.http.delete(`http://localhost:8082/coupon/delete/${id}`,{responseType: 'text'});
//      }
  
// }
