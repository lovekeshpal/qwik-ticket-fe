import { Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminForgotpasswordComponent } from './components/admin/admin-forgotpassword/admin-forgotpassword.component';
import { UserEventsComponent } from './components/user/user-events/user-events.component';
import { CreateEventComponent } from './components/admin/create-event/create-event.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // home
  { path: 'home', component: HomeComponent },
  // admin routes
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'admin-forgotpassword', component: AdminForgotpasswordComponent },
  { path: 'create-event', component: CreateEventComponent },
  // user routes
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-events', component: UserEventsComponent },
];
