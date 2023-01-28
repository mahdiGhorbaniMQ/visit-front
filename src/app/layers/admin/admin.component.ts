import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { Driver } from 'src/app/logic/entities/driver';
import { Reservation } from 'src/app/logic/entities/reservation';
import { DriverService } from 'src/app/logic/services/driver.service';
import { ReservationService } from 'src/app/logic/services/reservation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#9fbd90',
        clockFaceTimeInactiveColor: '#fff'
    }
  };

  selectedReservation!:number|null
  allReservations:any[] = []
  allDrivers:Driver[] = []

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private reservationService: ReservationService,
    private drivers: DriverService,
    private http:HttpClient 
  ){}

  ngOnInit(){
    this.allDrivers = this.drivers.findAll()
    this.allReservations = this.reservationService.findAll()
    let start = new Date()
 
    start.setHours(3)
    start.setMinutes(0)
    start.setSeconds(0)
    start.setMilliseconds(0)
    let end = new Date()

    end.setHours(10)
    end.setMinutes(0)
    end.setSeconds(0)
    end.setMilliseconds(0)

    let period = new Date()

    period.setHours(0)
    period.setMinutes(30)
    period.setSeconds(0)
    period.setMilliseconds(0)

    this.http.get(environment.api+"work-time/",{
      headers : {
          "Authorization": 'Bearer ' + sessionStorage.getItem('token')
      }}
    ).subscribe(console.log,console.log)
  }

  reject(reservation:Reservation){
    this.reservationService.setStatus(reservation,"Rejected")
  }

  assign(driver:Driver,reservation:Reservation){
    this.drivers.assignReservation(reservation,driver)
  }

  getDriver(driverId:number){
    return this.drivers.findAll().find(driver=>driver.id == driverId)!
  }

}
