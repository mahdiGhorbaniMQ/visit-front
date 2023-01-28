import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/logic/services/auth.service';
import { ReservationService } from 'src/app/logic/services/reservation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hidePass = true

  name:FormControl = new FormControl("",[Validators.required])
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
      name: this.name,
      username: this.username,
      password: this.password,
    })
  }

  async register(){
    this.loading = true
    try {
      const register = await this.auth.register(this.name.value,this.username.value,this.password.value)
      this.loading = false
      this.snack.open("you successfully registered!","ok", {
        duration: 5000,
      });
      this.router.navigate(["/login"])
    }
    catch(e:any) {      
      this.snack.open(e.error,"ok", {
        duration: 5000,
      });
      this.form.reset()
    }
  }
}
