import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/share/shared/shared.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
