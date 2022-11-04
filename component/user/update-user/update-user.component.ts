import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id=0;
  user:any;
  constructor(private uUpdate:UserloginService) { }

  ngOnInit(): void {
    this.uUpdate.getCurrentUser().subscribe((user:any)=>{
      this.user=user;
  } ,
    (error)=>{
         alert('error');
      })
  }
  public updateUser(){
   
    this.uUpdate.updateUser(this.user).subscribe(
      (data)=>{
        Swal.fire("Updated !!",'Profile  updated','success');
      },
      (error)=>{
        Swal.fire("Error !!",'error in updating','error');
        console.log(error);
      }
    )
  }

}
