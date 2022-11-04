import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';

@Component({
  selector: 'app-redirect-coupon',
  templateUrl: './redirect-coupon.component.html',
  styleUrls: ['./redirect-coupon.component.css']
})
export class RedirectCouponComponent implements OnInit {

  constructor(private user:UserloginService,private snack:MatSnackBar,private route:ActivatedRoute) { }

  id:any;
  coupon:any;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['rId'];

    this.user.getCouponById(this.id).subscribe(
      (data:any)=>{
        this.coupon=data;
        console.log(this.coupon);
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
