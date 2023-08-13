import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular material


//Components
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi : true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
