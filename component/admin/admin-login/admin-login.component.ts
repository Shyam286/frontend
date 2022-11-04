import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

    adminLoginData={
    username:'',
    password:'',
    role:'admin',
  };
  constructor(private snack:MatSnackBar, private login:AdminLoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('submitted');
            if(
              this.adminLoginData.username.trim() == '' ||
                this.adminLoginData.username==null
                ) {
                    this.snack.open('username is required !!','',{
                      duration:3000,
                });
                return;
            }
            if (
              this.adminLoginData.password.trim() == '' ||
                this.adminLoginData.password==null
                ) {
                    this.snack.open('password is required !!','',{
                      duration:3000,
                });
                return;
              }

      //request server to generate token

              this.login.generateToken(this.adminLoginData).subscribe(
                (data:any)=>{
                  console.log('success');
                  console.log(data);
                  
                  //login
                  this.login.loginAdmin(data.token);

                  this.login.getCurrentAdmin().subscribe(
                    (admin:any)=>{
                      this.login.setAdmin(admin);
                      console.log('done');

                      console.log(admin);
                      //redirect to admin dashboard

                    // if(this.login.getUserRole()=='admin'){
                        //admin dash-board
                      this.router.navigate(['admin/profile']);
                      this.login.loginStatusSubject.next(true);
                      //}
                      //else{
                        //this.login.logout();
                    // }
                    });

                },
                (error)=>{
                  console.log("Error !");
                  console.log(error);
                }
            );
  }

}
