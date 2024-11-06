import { Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';

export const routes: Routes = [
    {path: '', redirectTo: 'admin-login', pathMatch: 'full'},
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-register', component: AdminRegisterComponent },
];
