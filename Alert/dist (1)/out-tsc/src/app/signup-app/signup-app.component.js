import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SignupAppComponent = class SignupAppComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onSubmit(f) {
        const user = {
            'lname': f.form.value.lname,
            'fname': f.form.value.fname,
            'email': f.form.value.email,
            'pswd': f.form.value.pswd
        };
        console.log(user);
        this.http.post('http://localhost:8083/registrer', user).subscribe((userId) => {
            console.log("After Insertion", userId);
            this.router.navigate(['./login']);
        });
    }
};
SignupAppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-signup-app',
        templateUrl: './signup-app.component.html',
        styleUrls: ['./signup-app.component.css']
    })
], SignupAppComponent);
export { SignupAppComponent };
//# sourceMappingURL=signup-app.component.js.map