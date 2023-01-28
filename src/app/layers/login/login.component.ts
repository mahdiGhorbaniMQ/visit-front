import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/logic/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePass = true

  username:FormControl = new FormControl("",[Validators.required])
  password:FormControl = new FormControl("",[Validators.required])

  form!:FormGroup

  loading = false

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit(){
    this.form = this.fb.group({
      username: this.username,
      password: this.password,
    })
  }

  async login(){
    this.loading = true
    try {
      const login = await this.auth.login(this.username.value,this.password.value)
      this.loading = false      
      this.snack.open("you successfully logged in!","ok", {
        duration: 5000,
      });
      if(login.authorities[0].id==2){
        this.router.navigate(["/admin"])
      }
      else{
        this.router.navigate(["/user"])
      }
    }
    catch(e) {
      this.snack.open("username and password are not match!","ok", {
        duration: 5000,
      });
      this.form.reset()
    }
  }
}
