import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hide = true;
  constructor(
    private fb:FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    username:["",[Validators.required]],
    password:["",[Validators.required]]
  })

  ngOnInit(): void {
    /*const data={
      username:"alex@das.cl",
      password:"123"
    };
    this.authSvc.login(data).subscribe(
      user=>{
        console.log(user);
      }
    )*/
  }

  onLogin(){
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe(
      user=>{
        console.log(user);
        if(user){
          this.router.navigate(['/product']);
        }
        else{
          this.router.navigate(['/login']);
        }
      }
    )
  }

  isValidField(field: string):string{
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
