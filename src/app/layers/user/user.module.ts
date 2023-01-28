import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/share/shared/shared.module';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [
    UserComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
