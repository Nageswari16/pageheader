import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PagesService {
    sidebarMenu: boolean;
    sidebarMenuClass: boolean;
    constructor();
    currentValue: BehaviorSubject<any>;
    getValue: Observable<any>;
    sendClickEvent(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagesService>;
}
