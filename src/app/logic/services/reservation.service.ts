import { Injectable } from '@angular/core';
import { Driver } from '../entities/driver';
import { Reservation } from '../entities/reservation';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private store:StoreService) { }

  reserve(reservation:Reservation):number{
    reservation.status = "Request sent"
    return this.store.stor("reservations",reservation)
  }
  findAll():Reservation[]{
    return this.store.findAll("reservations")
  }
  setStatus(reservation:Reservation,status:"Rejected"|"Sending"|"Received"){
    reservation.status = status
    this.store.update("reservations",reservation.id!,reservation)
  }
}
