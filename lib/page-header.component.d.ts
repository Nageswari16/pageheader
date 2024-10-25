import { OnInit } from '@angular/core';
import { RBACINFO } from './pics-page-header/@core/urls/page-header-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-page-header/@core/permissions/permission.store';
import { DataStoreService } from './pics-page-header/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class PageHeaderComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    headerEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageHeaderComponent, "lib-page-header", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "headerEvent": { "alias": "headerEvent"; "required": false; }; }, {}, never, never, false, never>;
}
