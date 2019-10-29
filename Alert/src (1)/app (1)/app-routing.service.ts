import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { SignupAppComponent } from './signup-app/signup-app.component';
import { OrderAppComponent } from './order-app/order-app.component';

const appRoutes:Routes =[
    { path:'',redirectTo:'/login',pathMatch:'full'},
    { path:'login',component:LoginAppComponent },
    { path:'signup',component:SignupAppComponent},
    { path:'orders',component:OrderAppComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
 export class AppRouter{

 }