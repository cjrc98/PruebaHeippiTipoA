import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CreditsComponent } from './pages/credits/credits.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'details/:id', component:DetailsComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'credits', component:CreditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
