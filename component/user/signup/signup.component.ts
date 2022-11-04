import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserloginService } from 'src/app/service/userService/userlogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserloginService,private formBuilder:FormBuilder, private snack:MatSnackBar) { }

  public user={
    id:'',
    name:'',
    email:'',
    username:'',
    password:'',
    city:'',
  };

  signUpForm=this.formBuilder.group({
      name:['', Validators.required,Validators.minLength(2)],
      email:['', Validators.required],
      username:['', Validators.required,Validators.minLength(2)],
      password:['', Validators.required,Validators.minLength(4)],
      city:['', Validators.required,Validators.minLength(2)],
      userId:['', Validators.required],
  
  });


  ngOnInit(): void {}
    
  formSubmit()
  {
    console.log(this.user);
    if(this.user.name ==''|| this.user.name==null)
      {
          this.snack.open('name is required !!','',{
            duration:3000,
      });
    return;
      }
      if(this.user.username ==''|| this.user.username==null)
      {
          this.snack.open('username is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.user.email ==''|| this.user.email==null)
      {
          this.snack.open('email is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.user.password ==''|| this.user.password==null)
      {
          this.snack.open('password is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.user.city ==''|| this.user.city==null)
      {
          this.snack.open('city is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.user.id ==''|| this.user.id==null)
      {
          this.snack.open('username is required !!','',{
            duration:3000,
      });
      return;
    }
    //addUser: 

            this.userService.addUser(this.user).subscribe(
              (data)=>{
                //success
                console.log(data);
                Swal.fire("Success !!", 'Registered Successfully','success');
              },
              (error)=>{
                console.log(error)
                Swal.fire('Error!!','Server error!!', 'error');
                }
            )
          }  
        }

      