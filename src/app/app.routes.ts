import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Reg } from './components/reg/reg';
import { DoctorReg } from './components/doctor-reg/doctor-reg';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { UpdateProfile } from './components/update-profile/update-profile';
import { UpdatePassword } from './components/update-password/update-password';

export const routes: Routes = [
  { path: 'register', component: Reg },
  { path: 'register-doctor', component: DoctorReg },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: '', component: Home },

  { path: 'profile', component: Profile },
  { path: 'update-profile', component: UpdateProfile },
  { path: 'update-password', component: UpdatePassword },
];
