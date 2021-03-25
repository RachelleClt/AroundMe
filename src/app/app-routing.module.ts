import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProfilComponent} from './profil/profil.component';
import {LoginformComponent} from './loginform/loginform.component';
import {RegisterformComponent} from './registerform/registerform.component';
import {ModifprofilComponent} from './modifprofil/modifprofil.component';
import {ActivitesComponent} from './activites/activites.component';
import {RgpdComponent} from './rgpd/rgpd.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'loginform', component: LoginformComponent },
  { path: 'registerform', component: RegisterformComponent },
  { path: 'modifprofil', component: ModifprofilComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'rgpd', component: RgpdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
