import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
//import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  public loginStatusSubject= new Subject<boolean>();

   
  constructor(private http: HttpClient) { }

  public addUser(user:any){
    return this.http.post(`http://localhost:8083/user/saveUser`,user,{responseType: 'text'});
  }
  
  //current user: who is logged in
  public getCurrentUser(){
    return this.http.get(`http://localhost:8083/current-user`);

  }

  //generate token

  public generateToken( userLoginData : any )
  {
    return this.http.post(`http://localhost:8083/generate-token`,userLoginData);
  }
 
//get all user
  public getUsers(){
    console.log("get user");
    return this.http.get(`http://localhost:8083/user/getUser`,{responseType:'text'});
  }
//update profile
  public updateUser(user:any){
    console.log("get user");
    return this.http.put(`http://localhost:8083/user/update`,user,{responseType:'text'});
  }

  // public getAdmins(){
  //   console.log("get user");
  //   return this.http.get(`http://localhost:8081/admin/getAdmin`,{responseType:'text'});
  // }

  //------------------------------coupon -----------------------------//
    public getAllCoupon(){
             return this.http.get(`http://localhost:8083/user/getAllCoupon`);
            }
    // public getAllCoupon(){
    //   return this.http.get(`http://localhost:8100/user/getAllCoupon`);
    //  }

    
      public getCategory(category:string){
          return this.http.get("http://localhost:8083/user/getCouponsCategory/"+category);
      }
    
      public getCouponById(id:any){
         console.log("getCouponById---id",id);
        return this.http.get(`http://localhost:8083/user/getCoupons/`+id);
       }
    
    
      //--------------------------cart-----------------------------------//

      getCart(id: any) {

        return this.http.get(`http://localhost:8083/user/getCart/`+id);
      }
    
      public addCart(cart:any){
        console.log("5",cart);
        return this.http.post(`http://localhost:8083/user/addCart`,cart,{responseType:'text'});
      }
    
      public deleteCart(id:any){
        return this.http.delete(`http://localhost:8083/user/deleteCart/${id}`,{responseType:'text'});
      }
    

  //login user: set token in local storage
  public loginUser(token:any)
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
    localStorage.removeItem('user')

    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set user detail in local storage
  public setUser(user: any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr != null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole()
  {
    let user=this.getUser();
    return 'user';
   
  }
}
