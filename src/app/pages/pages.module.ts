import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreditsComponent } from './credits/credits.component';



@NgModule({
  declarations: [
  
  
    HomeComponent,
          DetailsComponent,
          WelcomeComponent,
          CreditsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
