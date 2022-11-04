import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupon:any=[];

  id=0;

  coupon2:any;

  isLoggedIn = false;
  
  cart3={
      userId:'',
        couponList:{
          id:'',
          couponName:'',
          category:'',
          desc:'',
          url:'',
          couponCode:''
        }
      };

  constructor(public user:UserloginService, private snack:MatSnackBar,private route:ActivatedRoute) { }

  ngOnInit(): void {

    //-------------fetch All coupon--------------//
    this.user.getAllCoupon().subscribe((data:any)=>{
      this.coupon=data;
      console.log(this.coupon)
    },
    
    (error)=>{
      this.snack.open("Something went wrong!!");
    })
    this.cart3.userId=this.user.getUser().id;
  }


//----------fetch coupon------------//
  public  getCoupon(id2:any)
  {
    console.log("getCoupon id  1->",id2);

      this.user.getCouponById(id2).subscribe((data:any)=>{
        this.cart3.couponList=data;
        this.addToCart(this.cart3);
        },
        (error)=>{
          this.snack.open("Something went wrong!!");
        })
      //  console.log("2",id2);
        // console.log(this.cart3.couponList);
    }


//------------add coupon to cart----------//
  public addToCart(ct:any){
        console.log("addToCart 2)-->",this.cart3.userId);
        //  this.cart3.couponList=aC;
       
        this.user.addCart(ct).subscribe(
          (data:any)=>{

            Swal.fire("Added to Cart !!",'Cart added','success');
          },
          (error)=>{
            Swal.fire("Error !!",'error in adding cart','error');
            console.log(error);
          }
    )
  }
}
