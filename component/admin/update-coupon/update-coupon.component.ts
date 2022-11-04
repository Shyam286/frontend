import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  // coupon={
  //   id:'',
  //   couponName:'',
  //   category:'',
  //   desc:'',
	//   couponCode:'',
  // };
   
  
  constructor(private admin:AdminLoginService,private snack:MatSnackBar,private route:ActivatedRoute) { }
  
  id=0;
  coupon:any;

  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['cId'];

    this.admin.getCouponById(this.id).subscribe(
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
//update form
public updateCoupon(){

  //validate
  this.admin.updateCoupon(this.coupon).subscribe(
    (data)=>{
      Swal.fire("Updated !!",'coupon updated','success');
    },
    (error)=>{
      Swal.fire("Error !!",'error in updating','error');
      console.log(error);
    }
  )
}

}
