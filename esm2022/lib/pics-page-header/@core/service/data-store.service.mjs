import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test codesss
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3BhZ2UtaGVhZGVyL3NyYy9saWIvcGljcy1wYWdlLWhlYWRlci9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTXZDLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbkIsbUJBQW1CLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBUyxDQUFDLENBQUM7SUFDM0QsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUU5RDtRQUNFLGVBQWU7SUFDakIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzt3R0FqQ1UsZ0JBQWdCOzRHQUFoQixnQkFBZ0IsY0FGZixNQUFNOzs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhU3RvcmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGN1cnJlbnRTdG9yZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30gYXMgYW55KTtcclxuICBwdWJsaWMgY3VycmVudFN0b3JlID0gdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRlc3QgY29kZXNzc1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgY3VycmVudFN0b3JlID0gdGhpcy5nZXRDdXJyZW50U3RvcmUoKTtcclxuICAgIGN1cnJlbnRTdG9yZVtrZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QubmV4dChjdXJyZW50U3RvcmUpO1xyXG4gIH1cclxuXHJcbiAgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgY3VycmVudFN0b3JlID0gdGhpcy5nZXRDdXJyZW50U3RvcmUoKTtcclxuICAgIHJldHVybiBjdXJyZW50U3RvcmVba2V5XTtcclxuICB9XHJcblxyXG4gIGNsZWFyU3RvcmUoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RvcmUgPSB0aGlzLmdldEN1cnJlbnRTdG9yZSgpO1xyXG4gICAgT2JqZWN0LmtleXMoY3VycmVudFN0b3JlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgZGVsZXRlIGN1cnJlbnRTdG9yZVtrZXldO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QubmV4dChjdXJyZW50U3RvcmUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFN0b3JlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0LnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=