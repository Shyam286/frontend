import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin:any;
  constructor(private login:AdminLoginService) { }

  ngOnInit(): void {

    this.login.getCurrentAdmin().subscribe((data:any)=>{
        this.admin=data;
    } ,
    (error)=>{
      alert('error');
    }  )
  }



}
