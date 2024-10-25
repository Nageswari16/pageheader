import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PagesService {
    sidebarMenu;
    sidebarMenuClass;
    constructor() {
        // This is intentional
    }
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    sendClickEvent(value) {
        this.currentValue.next(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagesService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wYWdlLWhlYWRlci9zcmMvbGliL3BpY3MtcGFnZS1oZWFkZXIvQGNvcmUvc2VydmljZS9wYWdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsV0FBVyxDQUFVO0lBQ3JCLGdCQUFnQixDQUFVO0lBQzFCO1FBQ0Usc0JBQXNCO0lBQ3hCLENBQUM7SUFDRCxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7SUFDNUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsY0FBYyxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzt3R0FWVSxZQUFZOzRHQUFaLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc1NlcnZpY2Uge1xyXG4gIHNpZGViYXJNZW51OiBib29sZWFuO1xyXG4gIHNpZGViYXJNZW51Q2xhc3M6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG4gIGN1cnJlbnRWYWx1ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XHJcbiAgZ2V0VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZS5hc09ic2VydmFibGUoKTtcclxuICBzZW5kQ2xpY2tFdmVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==