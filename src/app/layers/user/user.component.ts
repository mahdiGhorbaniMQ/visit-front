import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker/src/app/material-timepicker/models/ngx-material-timepicker-theme.interface';
import { ReservationService } from 'src/app/logic/services/reservation.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  selectedReservation!:number|null
  allReservations:any[] = []

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

  name:FormControl = new FormControl("",[Validators.required])
  phone:FormControl = new FormControl("",[Validators.required])
  address:FormControl = new FormControl("",[Validators.required])
  destination:FormControl = new FormControl("",[Validators.required])

  form!:FormGroup

  loading = false
  reservationTab = false
  reservationId!:number

  constructor(
    private fb:FormBuilder,
    private snack: MatSnackBar,
    private reservationService:ReservationService,
  ){}

  ngOnInit(){
    this.allReservations = this.reservationService.findAll()
    this.form = this.fb.group({
      name: this.name,
      phone: this.phone,
      address: this.address,
      destination: this.destination
    })
  }

  reserve(){
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.reservationTab = true
      this.reservationId = this.reservationService.reserve({
        name: this.name.value,
        phone: this.phone.value,
        address: this.address.value,
        destination: this.destination.value,
        status: "Not sent"
      })
      this.allReservations = this.reservationService.findAll()
      this.snack.open("reservation sent successfully","ok", {
        duration: 5000,
      });
    }, 1200);
  }


  showList(){
    this.selectedReservation = null
  }
  showForm(){
    this.reservationTab = false
    this.form.reset()
  }
}
