import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ActivitesComponent } from './activites/activites.component';

import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { RgpdComponent } from './rgpd/rgpd.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    ProfilComponent,

    LoginformComponent,

    RegisterformComponent,

    ActivitesComponent,


    ModifprofilComponent,


    RgpdComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
