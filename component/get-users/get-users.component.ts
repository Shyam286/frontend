import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users:any=[];
  panelOpenState:any;

  constructor(private admin:AdminLoginService, private snack:MatSnackBar, ) { }

  ngOnInit(): void
   {
    console.log("1--->",this.users);

    this.admin.getUsers().subscribe((data:any)=>{
     
      this.users=data;
      console.log("2--->",this.users);
    },
    
    (error)=>{
      console.log(this.users);

      console.log(error);
      this.snack.open("Something went wrong!!");
    })
  }


    public deleteUser(id:any){
      this.admin.deleteUser(id).subscribe(
        (data)=>{
          this.users=this.users.filter((users:any)=>users.id!=id)
          Swal.fire('Success','User Deleted','success');
          console.log(data);
        },
        (error)=>{
          console.log(error);
  
          Swal.fire('Error','Error in Deleting User','error');
        });
   }

  



}
