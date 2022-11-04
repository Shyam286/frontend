import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/service/userService/userlogin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any;
  constructor(private login:UserloginService) { }

  ngOnInit(): void {

    this.login.getCurrentUser().subscribe((user:any)=>{
        this.user=user;
    } ,
    (error)=>{
      alert('error');
    }  )
  }
}
