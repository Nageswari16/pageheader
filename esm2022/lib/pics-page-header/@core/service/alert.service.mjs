import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
    type;
    message;
}
export class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wYWdlLWhlYWRlci9zcmMvbGliL3BpY3MtcGFnZS1oZWFkZXIvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyx1QkFBdUIsQ0FBQzs7O0FBSzlCLE1BQU0sT0FBTyxZQUFZO0lBSUY7SUFIWixPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztJQUMvQixvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFFckMsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsa0ZBQWtGO1FBQ2xGLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQzdCLHNDQUFzQztvQkFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsdUJBQXVCO29CQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNB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TSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sc0JBQXNCO0lBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsWUFBWSxFQUFFO1lBQ1osbUJBQW1CLEVBQUUsdUJBQXVCO1lBQzVDLGVBQWUsRUFBRSx5R0FBeUc7U0FDM0g7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG4gZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcclxuICAgIHByaXZhdGUga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzIG9uIHJvdXRlIGNoYW5nZSB1bmxlc3MgJ2tlZXBBZnRlclJvdXRlQ2hhbmdlJyBmbGFnIGlzIHRydWVcclxuICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UpIHtcclxuICAgICAgICAgICAgLy8gb25seSBrZWVwIGZvciBhIHNpbmdsZSByb3V0ZSBjaGFuZ2VcclxuICAgICAgICAgICAgdGhpcy5rZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZXNcclxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxlcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5TdWNjZXNzLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLkVycm9yLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuSW5mbywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLldhcm5pbmcsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydCh0eXBlOiBBbGVydFR5cGUsIG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0ga2VlcEFmdGVyUm91dGVDaGFuZ2U7XHJcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KDxBbGVydD57IHR5cGU6IHR5cGUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIC8vIGNsZWFyIGFsZXJ0c1xyXG4gICAgICB0aGlzLnN1YmplY3QubmV4dCg8YW55Pnt9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBEeW5hbWljT2JqZWN0IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBlbnVtIEFsZXJ0VHlwZSB7XHJcbiAgICBTdWNjZXNzLFxyXG4gICAgRXJyb3IsXHJcbiAgICBJbmZvLFxyXG4gICAgV2FybmluZ1xyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgQWxlcnQge1xyXG4gICAgdHlwZSE6IEFsZXJ0VHlwZTtcclxuICAgIG1lc3NhZ2UhOiBzdHJpbmc7XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSW5zaWdodHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2VyaWVzOiBTZXJpZXNbXTtcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBTZXJpZXMge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1vbnRoOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIFN0YXR1cyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJHcm91cER0byB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyR3JvdXBEdG8+KSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgVXNlclJvbGVQYWdlRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHJvdXRlPzogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxuICAgIGlzbWVudT86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyUm9sZVBhZ2VEdG8+KSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgVXNlclJvbGVEdG8ge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxuICAgIGRlZmF1bHRwYWdlPzogVXNlclJvbGVQYWdlRHRvO1xyXG4gICAgZGVmYXVsdHBhZ2VpZD86IG51bWJlcjtcclxuICAgIHBhcmVudGlkPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHBhcmVudD86IFVzZXJSb2xlRHRvIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJEdG8ge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxuICAgIGRlZmF1bHRwYWdlPzogVXNlclJvbGVQYWdlRHRvO1xyXG4gICAgZGVmYXVsdHBhZ2VpZD86IG51bWJlcjtcclxuICAgIHBhcmVudGlkPzogbnVtYmVyIHwgbnVsbDtcclxuICAgIHBhcmVudD86IFVzZXJSb2xlRHRvIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJEdG8+KSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICAgIE9yZ2FuaXphdGlvbjoge1xyXG4gICAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICAgIGdldE9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4iXX0=