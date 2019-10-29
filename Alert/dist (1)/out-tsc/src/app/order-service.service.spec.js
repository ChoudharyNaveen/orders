import { TestBed } from '@angular/core/testing';
import { OrderServiceService } from './order-service.service';
describe('OrderServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(OrderServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=order-service.service.spec.js.map