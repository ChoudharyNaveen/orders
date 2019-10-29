import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let FormModalComponent = class FormModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        console.log("DATA IS DATA", this.data);
    }
    onSubmit(f) {
        const order = {
            'customerName': this.cname,
            'customerAddress': this.caddress,
            'customerPhone': this.cphone,
            'orderDueDate': this.cdate,
            'orderTotal': this.ctotal
        };
        console.log("order details", order);
        this.dialogRef.close(order);
    }
};
FormModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-form-modal',
        templateUrl: './form-modal.component.html',
        styleUrls: ['./form-modal.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], FormModalComponent);
export { FormModalComponent };
//# sourceMappingURL=form-modal.component.js.map