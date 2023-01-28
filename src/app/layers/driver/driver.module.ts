import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { SharedModule } from 'src/app/share/shared/shared.module';



@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DriverComponent
  ]
})
export class DriverModule { }
