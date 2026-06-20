import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Reg } from './components/reg/reg';
import { DoctorReg } from './components/doctor-reg/doctor-reg';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { UpdateProfile } from './components/update-profile/update-profile';
import { UpdatePassword } from './components/update-password/update-password';
import { BookConsultation } from './components/book-consultation/book-consultation';
import { MyAppointments } from './components/my-appointments/my-appointments';
import { ConsultationHistory } from './components/consultation-history/consultation-history';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { ResetPassword } from './components/reset-password/reset-password';
import { authGuard, patientOnlyGuard } from './services/guard';

export const routes: Routes = [
  { path: 'register', component: Reg },
  { path: 'register-doctor', component: DoctorReg },
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'home', component: Home },
  { path: '', component: Home },

  { path: 'profile', component: Profile, canActivate: [patientOnlyGuard] },
  { path: 'update-profile', component: UpdateProfile, canActivate: [patientOnlyGuard] },
  { path: 'update-password', component: UpdatePassword, canActivate: [authGuard] },
  { path: 'book-appointment', component: BookConsultation, canActivate: [patientOnlyGuard] },
  { path: 'my-appointments', component: MyAppointments, canActivate: [patientOnlyGuard] },
  { path: 'consultation-history', component: ConsultationHistory, canActivate: [patientOnlyGuard] },

  { path: '**', component: Home },
];
