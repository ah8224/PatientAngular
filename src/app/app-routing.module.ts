import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authguard/auth.guard';
import { ClaimComponent } from './components/claim/claim.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StatusComponent } from './components/status/status.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { TreatmentplanComponent } from './components/treatmentplan/treatmentplan.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'home/:id',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'status',component:StatusComponent},
  {path:'claim',component:ClaimComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
