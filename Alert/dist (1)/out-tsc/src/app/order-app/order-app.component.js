import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormModalComponent } from '../form-modal/form-modal.component';
let OrderAppComponent = class OrderAppComponent {
    constructor(dialog, http, orderService) {
        this.dialog = dialog;
        this.http = http;
        this.orderService = orderService;
        this.ELEMENT_DATA = [
            { orderNumber: 1, customerName: 'naveen', customerAddress: 'hyderabad', customerPhone: 123456, orderDue: '01/01/2019', orderTotal: 123 },
            { orderNumber: 2, customerName: 'sai', customerAddress: 'hyderabad', customerPhone: 7894561, orderDue: '01/01/2019', orderTotal: 456 },
            { orderNumber: 3, customerName: 'kumar', customerAddress: 'hyderabad', customerPhone: 741852, orderDue: '01/01/2019', orderTotal: 789 },
            { orderNumber: 4, customerName: 'chowdary', customerAddress: 'hyderabad', customerPhone: 963258, orderDue: '01/01/2019', orderTotal: 852 }
        ];
        this.dataSource = this.ELEMENT_DATA;
    }
    ngOnInit() {
        this.orderService.getOrder().subscribe((item) => {
            console.log("item", item);
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(FormModalComponent, {
            width: '250px',
            data: { phone: '123456' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.http.post('http://localhost:8083/order', result).subscribe((prderId) => {
                console.log("After Insertion", prderId);
            });
        });
    }
};
OrderAppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-order-app',
        templateUrl: './order-app.component.html',
        styleUrls: ['./order-app.component.css']
    })
], OrderAppComponent);
export { OrderAppComponent };
//# sourceMappingURL=order-app.component.js.map