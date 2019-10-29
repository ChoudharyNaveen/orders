import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginAppComponent = class LoginAppComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
    onSubmit(f) {
        this.http.get(`http://localhost:8083/login-check?email=${f.form.value.email}&pswd=${f.form.value.pswd}`).subscribe((userId) => {
            console.log("After Insertion", userId);
            this.router.navigate(['./orders']);
        }, err => {
            console.log(err);
        });
    }
    signUpUser(e) {
        console.log("NAVIGATE");
        this.router.navigate(['./signup']);
    }
};
LoginAppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login-app',
        templateUrl: './login-app.component.html',
        styleUrls: ['./login-app.component.css']
    })
], LoginAppComponent);
export { LoginAppComponent };
//# sourceMappingURL=login-app.component.js.map