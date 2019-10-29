import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
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
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map