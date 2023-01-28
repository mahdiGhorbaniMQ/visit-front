import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverModule } from './layers/driver/driver.module';
import { UserModule } from './layers/user/user.module';
import { MaterialModule } from './share/material/material.module';
import { AdminModule } from './layers/admin/admin.module';
import { LoginModule } from './layers/login/login.module';
import { RegisterModule } from './layers/register/register.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    DriverModule,
    MaterialModule,
    HttpClientModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
