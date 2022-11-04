import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {

  cartList:any=[]
  id:any;
  constructor( private snack:MatSnackBar,public user:UserloginService) { }
  
  ngOnInit(): void {
    
    this.id=this.user.getUser().id;
   // console.log("1--->",this.id);

    this.user.getCart(this.id).subscribe((data:any)=>{
      this.cartList=data;
   
       console.log("1--->",this.cartList);
        // console.log("2--->",this.coupon)
    },
    (error)=>{
      this.snack.open("Something went wrong!!");
    })
  }

  deleteCart(id:any){
    this.user.deleteCart(id).subscribe(
      (data)=>{
        this.cartList=this.cartList.filter((coupons:any)=>coupons.id!=id)
        Swal.fire('Success','Coupon Deleted','success');
        console.log(data);
      },
      (error)=>{
        console.log(error);

        Swal.fire('Error','Error in Deleting Coupon','error');
      });
 }
}

