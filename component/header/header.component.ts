import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/service/userService/userlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // navbar

  
  isLoggedIn = false;
  user:any=null;

  constructor(public login:UserloginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
    })
  }
public logout(){
  this.login.logout();
  window.location.reload();
}

}
