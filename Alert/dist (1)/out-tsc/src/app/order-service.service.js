import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let OrderServiceService = class OrderServiceService {
    constructor(http) {
        this.http = http;
    }
    getOrder() {
        return this.http.get('http://localhost:8083/login-check').pipe(map(responseData => {
            const orderArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key))
                    orderArray.push(Object.assign({}, responseData[key], { 'id': "_id" }));
            }
            return orderArray;
        }));
    }
};
OrderServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderServiceService);
export { OrderServiceService };
//# sourceMappingURL=order-service.service.js.map