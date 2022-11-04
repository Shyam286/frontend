import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories:any=[
    // {
    //   id:'1',
    //   couponName:'flipkart',
    //   category:'electronic',
    //   desc:'get 20% off',
    //   couponCode:'111',
    // },
  ]

  constructor(private user:UserloginService) { }

  ngOnInit(): void {
    this.user.getAllCoupon().subscribe((data:any)=>{
      this.categories=data;
    }
    
    )
  }

}
