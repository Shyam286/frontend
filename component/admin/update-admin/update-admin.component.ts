import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import Swal from 'sweetalert2';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {


  id=0;
  admin:any;

  constructor(private aUpdate:AdminLoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.aUpdate.getCurrentAdmin().subscribe((admin:any)=>{
      this.admin=admin;
  } ,
  (error)=>{
    alert('error');
  }  )
  }

  //update admin

  public updateAdmin(){
   
    this.aUpdate.updateAdmin(this.admin).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("Updated !!",'Profile  updated','success');
      },
      (error)=>{
        Swal.fire("Error !!",'error in updating','error');
        console.log(error);
      }
    )
  }
  

}
