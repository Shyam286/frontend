import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/service/userService/userlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  userLoginData={
    username:'',
    password:'',
  };
  constructor(private snack:MatSnackBar, private login:UserloginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('submitted');
            if(
              this.userLoginData.username.trim() == '' ||
                this.userLoginData.username==null
                ) {
                    this.snack.open('username is required !!','',{
                      duration:3000,
                });
                return;
            }
            if (
              this.userLoginData.password.trim() == '' ||
                this.userLoginData.password==null
                ) {
                    this.snack.open('password is required !!','',{
                      duration:3000,
                });
                return;
              }

      //request server to generate token

            this.login.generateToken(this.userLoginData).subscribe(
              (data:any)=>{
                console.log('success');
                console.log(data);
                
                //login
                this.login.loginUser(data.token);

                this.login.getCurrentUser().subscribe(
                  (user:any)=>{
                    this.login.setUser(user);
                    console.log(user);
                    //redirect to user dashboard

                  
                    this.router.navigate(['']);
                    this.login.loginStatusSubject.next(true);
                  });

              },
              (error)=>{
                console.log("Error !");
                console.log(error);
              }
          );
  }
}
