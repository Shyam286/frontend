import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

   coupon:any=[];


  constructor(private admin:AdminLoginService, private snack:MatSnackBar) { }

  ngOnInit(): void {

    this.admin.getAllCoupon().subscribe((data:any)=>{
      this.coupon=data;
    },
    
    (error)=>{
      this.snack.open("Something went wrong!!");
    })
  }

 deleteCoupon(id:any){
    this.admin.deleteCoupon(id).subscribe(
      (data)=>{
        this.coupon=this.coupon.filter((coupons:any)=>coupons.id!=id)
        Swal.fire('Success','Coupon Deleted','success');
        console.log(data);
      },
      (error)=>{
        console.log(error);

        Swal.fire('Error','Error in Deleting Coupon','error');
      });
 }

}
