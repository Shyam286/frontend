import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  coupon={
    id:'',
    couponName:'',
    category:'',
    desc:'',
    url:'',
	  couponCode:'',
    
  }
  constructor(private admin:AdminLoginService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
          if(this.coupon.id==null)
            {
              this.snack.open('Id  required !!','',{
                duration:3000,
            });
              return;
           }

    this.admin.addCoupon(this.coupon).subscribe(
      (data:any)=>{
        this.coupon.id='';
        this.coupon.couponName='';
        this.coupon.category='';
        this.coupon.couponCode='';
        this.coupon.url='';
        this.coupon.desc='';
        Swal.fire("Success !!", 'Coupon is added successfuly','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!!','Server error!!', 'error');
      }
      );
  }
}
