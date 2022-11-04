import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  isLoggedIn = false;
  admin:any=null;

  constructor(public login:AdminLoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.admin=this.login.getAdmin();
    
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.admin=this.login.getAdmin();
    })
  }
public logout(){
  this.login.logout();
  window.location.reload();
}
}
