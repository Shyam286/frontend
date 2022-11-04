import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
// import { AllCouponService } from 'src/app/service/Coupon/AllCoupon/all-coupon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footware',
  templateUrl: './footware.component.html',
  styleUrls: ['./footware.component.css']
})
export class FootwareComponent implements OnInit {

  categories:any=[];
 
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
  id:any;

  constructor(private user:UserloginService,private snack:MatSnackBar) { }


  ngOnInit(): void {


    this.user.getCategory("Footware").subscribe((data:any)=>{
      this.categories=data;
    })
    this.cart3.userId=this.user.getUser().id;

  }

    
  public  getCoupon(id2:any){
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
