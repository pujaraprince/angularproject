import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path :'home', component:HomeComponent},
  {path :'about', component:AboutComponent},
  {path :'contact', component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppRoutingModule { }
// ye componet dekh sahi hai kya?
//bro ye konsa version hai angular ka
//alag dikh raha hai meko  /8/ hi hai i think //ye module thik hai
//error ky hai?? command me toh koi error nahi aa raha pata nahi kya error hai