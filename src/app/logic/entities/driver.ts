import { Reservation } from "./reservation"

export interface Driver {
    name:string
    reservations:number[]
    id?:number
}
