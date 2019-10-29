import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { SignupAppComponent } from './signup-app/signup-app.component';
import { OrderAppComponent } from './order-app/order-app.component';
const appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginAppComponent },
    { path: 'signup', component: SignupAppComponent },
    { path: 'orders', component: OrderAppComponent }
];
let AppRouter = class AppRouter {
};
AppRouter = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
], AppRouter);
export { AppRouter };
//# sourceMappingURL=app-routing.service.js.map