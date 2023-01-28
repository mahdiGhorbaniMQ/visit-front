export interface Reservation {
    name:string
    phone:string
    address:string
    destination:string
    status:"Not sent"|"Request sent"|"Canceled"|"Rejected"|"Sending"|"Received"
    id?:number
    driver?:number
}
