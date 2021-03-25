import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProfilComponent} from './profil/profil.component';
import {LoginformComponent} from './loginform/loginform.component';
import {RegisterformComponent} from './registerform/registerform.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'loginform', component: LoginformComponent },
  { path: 'registerform', component: RegisterformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
