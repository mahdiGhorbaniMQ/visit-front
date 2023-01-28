import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layers/admin/admin.component';
import { DriverComponent } from './layers/driver/driver.component';
import { LoginComponent } from './layers/login/login.component';
import { NotFoundComponent } from './layers/not-found/not-found.component';
import { RegisterComponent } from './layers/register/register.component';
import { UserComponent } from './layers/user/user.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "driver",
    component: DriverComponent
  },  
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
