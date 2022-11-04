import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
 

  public loginStatusSubject= new Subject<boolean>();

  constructor(private http: HttpClient) { }

  addAdmin(admin:any) {
    return this.http.post(`http://localhost:8081/admin/saveAdmin`,admin,{responseType: 'text'});

  }

  //current user: who is logged in
  public getCurrentAdmin(){
    return this.http.get(`http://localhost:8081/current-admin`);

  }

  //update admin profile

  public updateAdmin(admin:any){
    return this.http.put(`http://localhost:8081/admin/update/`,admin,{responseType:'text'});

  }
  //generate token

  public generateToken( adminLoginData : any )
  {
    return this.http.post(`http://localhost:8081/generate-token`,adminLoginData);
  }


  //------------------User microservice---------------------//

  public getUsers(){
    console.log("get user");
    return this.http.get(`http://localhost:8081/admin/getUsers`);
  }

  public deleteUser(id:any){
    console.log("get user");
    return this.http.delete(`http://localhost:8081/admin/deleteUser/${id}`,{responseType: 'text'});
  }
 

  //------------------Coupon microservice---------------------//

  public getAllCoupon()
  {
    return this.http.get(`http://localhost:8081/admin/getCoupon`);
  }


  public getCategory(category:string){
    return this.http.get("http://localhost:8081/admin/getCouponsByCategory/"+category);
}

public addCoupon(coupon:any)
  {
     return this.http.post(`http://localhost:8081/admin/addCoupon`,coupon,{responseType: 'text'});
  }

  public updateCoupon(coupon:any)
  {
     return this.http.put(`http://localhost:8081/admin/updateCoupon`,coupon,{responseType: 'text'});
  }

  public getCouponById(id:any){
    console.log("getCouponById---id",id);
   return this.http.get(`http://localhost:8081/admin/getCoupons/`+id);
  }

  public deleteCoupon(id:any){
    return this.http.delete(`http://localhost:8081/admin/deleteCoupon/${id}`,{responseType: 'text'});
   }

  //login user: set token in local storage
  public loginAdmin(token:any)
  {
    localStorage.setItem('token',token);
    return true;
  }

  //user is login or not

  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token')
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //logout: removes token from local storage

  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('admin')

    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set user detail in local storage
  public setAdmin(admin: any){
    localStorage.setItem('admin',JSON.stringify(admin));
  }

  //getUser
  public getAdmin(){
    let adminStr=localStorage.getItem('admin');
    if(adminStr != null)
    {
      return JSON.parse(adminStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole()
  {
    let user=this.getAdmin().role;
    return 'admin';
   
  }}
