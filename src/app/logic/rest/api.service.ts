import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  async get(url:string){
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
  }
  post(url:string,body:{}){
    return new Promise<any>((resolve, reject) => {
      this.http.post(url,body).subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
  }
  put(url:string,body:{}){
    return new Promise<any>((resolve, reject) => {
      this.http.post(url,body).subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
  }
  delete(url:string){
    return new Promise<any>((resolve, reject) => {
      this.http.delete(url).subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    }) 
  }
}
