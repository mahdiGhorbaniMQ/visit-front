import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Reservation } from 'src/app/logic/entities/reservation';
import { ReservationService } from 'src/app/logic/services/reservation.service';
import { StoreService } from 'src/app/logic/services/store.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  @Input("id") id!:number
  @Output("onClose") onClose = new EventEmitter<boolean>()

  reservation!:Reservation

  @ViewChild("reportForm") reportFormTemlate!:TemplateRef<any>

  // rate:FormControl = new FormControl("",[Validators.required])
  content:FormControl = new FormControl("",[Validators.required])

  form!:FormGroup

  constructor(
    private store:StoreService,
    private dialog: MatDialog,
    private fb:FormBuilder,
    private reservationService:ReservationService
  ){}

  ngOnInit(){
    this.form = this.fb.group({
      // rate:this.rate,
      content:this.content
    })
    try{
      setInterval(()=>{
        this.reservation = this.store.find("reservations",this.id)
      },1000)
    }
    catch(e){}
  }

  cancel(){
    this.reservation.status = "Canceled"
    this.store.update("reservations",this.id,this.reservation)
  }

  report(){
    this.openDialog()
  }

  sendReport(){
    this.store.stor("reports",{
      content:this.content.value,
      reservation:this.id
    })
    this.reservationService.setStatus(this.reservation,"Received")
  }

  openDialog(): void {
    this.dialog.open(this.reportFormTemlate);
  }

  close(){
    this.onClose.emit(true)
  }
}
