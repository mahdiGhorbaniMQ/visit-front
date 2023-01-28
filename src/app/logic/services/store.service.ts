import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  id = Number.parseInt(
    localStorage.getItem("id")||"0"
  )

  constructor() { }

  stor(topicName:string,data:{}):number{
    let topic:{}[] = JSON.parse(
      localStorage.getItem(topicName) || "[]"
    )
    data = {
      ...data,
      id:++this.id
    } 
    topic.push(data)
    localStorage.setItem(topicName,JSON.stringify(topic))
    localStorage.setItem("id",this.id+"")
    return this.id
  }
  remove(topicName:string,id:number){
    let topic:{}[] = JSON.parse(
      localStorage.getItem(topicName) || "[]"
    )
    let index = topic.findIndex((item:any)=>{
      return item.id == id
    })
    topic = [...topic.slice(0,index),...topic.slice(index+1,topic.length)]
    localStorage.setItem(topicName,JSON.stringify(topic))
  }
  update(topicName:string,id:number,data:{}){
    let topic:{}[] = JSON.parse(
      localStorage.getItem(topicName) || "[]"
    )
    let index = topic.findIndex((item:any)=>{
      return item.id == id
    })
    data = {
      ...data,
      id:id
    }
    topic = [...topic.slice(0,index),...topic.slice(index+1,topic.length),data]
    localStorage.setItem(topicName,JSON.stringify(topic))
  }
  findAll(topicName:string):any[]{
    let topic:{}[] = JSON.parse(
      localStorage.getItem(topicName) || "[]"
    )
    return topic
  }
  find(topicName:string,id:number):any{
    let topic:{}[] = JSON.parse(
      localStorage.getItem(topicName) || "[]"
    )
    const item = topic.find((item:any)=>{
      return item.id == id
    })
    if(item == null) throw new Error()
    return item
  }
}
