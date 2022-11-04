import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { LoginComponent } from '../user/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coupon:any=[];
  constructor(private coupons:UserloginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    console.log("fetching data")
      this.coupons.getAllCoupon().subscribe((data:any)=>{
        this.coupon=data;
        console.log(this.coupon);
      },
      (error)=>{
        this.snack.open("Something went wrong!!")
      }
      )
  }
}
