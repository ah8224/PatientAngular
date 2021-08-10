import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { TreatmentplanComponent } from './components/treatmentplan/treatmentplan.component';
import { StatusComponent } from './components/status/status.component';
import { ClaimComponent } from './components/claim/claim.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TreatmentComponent,
    TreatmentplanComponent,
    StatusComponent,
    ClaimComponent
  ],
  imports: [
    HttpClientJsonpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
