import { Injectable } from '@angular/core';
import { Driver } from '../entities/driver';
import { Reservation } from '../entities/reservation';
import { ReservationService } from './reservation.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor(
    private store:StoreService,
    private reservations:ReservationService
  ) { }


  assignReservation(reservation:Reservation,driver:Driver){
    driver.reservations.push(reservation.id!)
    this.store.update("drivers",driver.id!,driver)
    this.reservations.setStatus(reservation,"Sending")
    reservation.driver = driver.id
    this.store.update("reservations",reservation.id!,reservation)
  }

  findAll():Driver[]{
    return this.store.findAll("drivers")
  }
}
