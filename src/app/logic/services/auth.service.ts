import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo:any = null
  isAuthenticated = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return new Promise<any>((resolve, reject) => {
      this.http.post(environment.api+"auth/login",{username,password}).subscribe((res:any)=>{
        sessionStorage.setItem("token",res.jwt)
        this.isAuthenticated.next(true)
        this.userInfo = res
        resolve(res)
      },err=>reject(err))
    })
  }
  register(name:string,username:string,password:string){
    return new Promise<any>((resolve, reject) => {
      this.http.post(environment.api+"auth/register",{name,username,password}).subscribe(resolve,err=>reject(err))
    })
  }
}
