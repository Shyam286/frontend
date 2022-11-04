import { Component, OnInit } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from 'src/app/service/adminService/admin-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private admins:AdminLoginService,private formBuilder:FormBuilder, private snack:MatSnackBar) { }


  public admin={
    id:'',
    name:'',
    email:'',
    username:'',
    password:'',
  };

  ngOnInit(): void {
  }
  formSubmit()
  {
    console.log(this.admin);
    if(this.admin.name ==''|| this.admin.name==null)
      {
          this.snack.open('name is required !!','',{
            duration:3000,
      });
    return;
      }
      if(this.admin.username ==''|| this.admin.username==null)
      {
          this.snack.open('username is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.admin.email ==''|| this.admin.email==null)
      {
          this.snack.open('email is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.admin.password ==''|| this.admin.password==null)
      {
          this.snack.open('password is required !!','',{
            duration:3000,
      });
      return;
    }

      if(this.admin.id ==''|| this.admin.id==null)
      {
          this.snack.open('username is required !!','',{
            duration:3000,
      });
      return;
    }
    //addUser: 

            this.admins.addAdmin(this.admin).subscribe(
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

      
