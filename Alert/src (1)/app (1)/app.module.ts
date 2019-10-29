import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { LoginAppComponent } from './login-app/login-app.component';
import { SignupAppComponent } from './signup-app/signup-app.component';
import { OrderAppComponent } from './order-app/order-app.component';
import { FormModalComponent } from './form-modal/form-modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ AppRouter } from './app-routing.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    SignupAppComponent,
    FormModalComponent,
    OrderAppComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    AppRouter,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[FormModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
