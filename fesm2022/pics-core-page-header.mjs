import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i1$2 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as i1$1 from 'ngxf-uploader';
import * as i2 from '@angular/platform-browser';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpeedDialModule } from 'primeng/speeddial';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { KnobModule } from 'primeng/knob';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

let PageHeaderService$1 = class PageHeaderService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService$1, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PageHeaderURL {
    static EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true&isEnable=true'
        }
    };
}
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DataStoreService {
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

const CONFIGURATOR_TITLE = 'Low Code Configurator';
class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'CONFIGURATOR_TITLE' },
        { page: 'tab-order', title: 'CONFIGURATOR_TITLE' },
        { page: 'workflow', title: 'CONFIGURATOR_TITLE' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'config-dashboard-user', title: 'Config Dashboard User' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of eight (8) characters'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value.trim();
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength, 10);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        /* No error */
        return null;
    }
}

class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AlertService {
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
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
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
class UserRoleDto {
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
class UserDto {
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
class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}

class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/solution/formresponse-attachment/create'
        },
        youthSummary: {
            getDetails: '/solution/youth-summary',
            getRiskValue: '/solution/youth-summary/getRiskValue',
            getAlertCount: '/solution/youth-summary/getAlertCount'
        }
    };
}

class DynamicTabPageService {
    uploadService;
    _storeservice;
    httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        console.log('pics-core pageheader');
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        // This is intentional
    }
    getActivePage(tabPageId, permission, action) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission
            ? '?applyPermissions=true' : ''}${permission && action === 'add'
            ? '&action=add' : ''}${permission && action === 'edit'
            ? '&action=edit' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    // getResponseByPageId(responseId: any, pageId: any) {
    //   return this.httpService.get(
    //     DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
    //       .replace('{responseId}', responseId)
    //       .replace('{pageId}', pageId)
    //   );
    // }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData, EditGridPageID) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}?EditGridPageID=${EditGridPageID}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    getYouthSummaryDetails(data) {
        return this.httpService.post(`${DynamicTabPageConfig.EndPoint.youthSummary.getDetails}`, data);
    }
    getAlertCount(youthId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.youthSummary.getAlertCount}/${youthId}`);
    }
    getRiskValue(youthId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.youthSummary.getRiskValue}/${youthId}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1$1.NgxfUploaderService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NgxfUploaderService }, { type: DataStoreService }]; } });

class PageHeaderService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class BuildTimeService {
    http;
    constructor(http) {
        this.http = http;
    }
    getBuildTime() {
        return this.http.get('/assets/buildtime.json');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BuildTimeService, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BuildTimeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BuildTimeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }]; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class HeaderComponent {
    _router;
    titleService;
    buildTimeService;
    datePipe;
    _storeservice;
    username;
    showname;
    dnone;
    currentUser = [];
    formList = [];
    authorizedList = [];
    wso2ApiManager;
    wso2EnterpriseIntegrator;
    businessRulesAPI;
    pageList;
    localstorage;
    isAdmin;
    userpage;
    isCountyCaseManager;
    routeToDashboard;
    loadCurrentUsers = true;
    alertService;
    pageHeaderService;
    orgSubs;
    orgId;
    dynamicTabPageService;
    landingPage;
    currentPage;
    currentSubmenuPage;
    buildVersion;
    buildTimestamp;
    buildNumber;
    localTime;
    pagesservice;
    breakpointObserver;
    environment;
    authService;
    appService;
    isMenuOpen = false;
    constructor(injector, _router, titleService, buildTimeService, datePipe, _storeservice) {
        this._router = _router;
        this.titleService = titleService;
        this.buildTimeService = buildTimeService;
        this.datePipe = datePipe;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.environment = res['RBACORG']?.environment;
                this.authService = res['AUTHSERVICE'];
                this.appService = res['APPSERVICE'];
                this.pagesservice = res['PAGESSERVICE'];
            }
        });
        this.localstorage = injector.get(LocalService);
        this.alertService = injector.get(AlertService);
        this.breakpointObserver = injector.get(BreakpointObserver);
        this.username = sessionStorage.getItem('username');
        this.landingPage = JSON.parse(sessionStorage.getItem('user'));
        this.routeToDashboard = `/${this.localstorage.getItem('dashboardRoute')}`;
        this.pageHeaderService = injector.get(PageHeaderService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.dnone = 'd-none';
        this.buildTimeService.getBuildTime().subscribe(data => {
            this.localTime = this.datePipe.transform(data.buildTime, 'short', 'local');
            this.buildTimestamp = this.localTime;
            this.buildNumber = data.buildNumber;
        });
    }
    ngOnInit() {
        this.wso2ApiManager = `${this.environment?.wso2ApiManager}/publisher/apis`;
        this.wso2EnterpriseIntegrator = `${this.environment?.wso2EnterpriseIntegratorHost}/carbon`;
        this.businessRulesAPI = this.environment?.businessRulesHost;
        this.buildVersion = this.environment?.version;
        this.orgSubs = this.authService.orgInfo.subscribe(oid => {
            this.orgId = oid;
            console.log(this.orgId, 'pageheader comp');
            if (this.orgId) {
                this.getAuthorizedPages();
                this.getUserDetails();
            }
        });
        this.authService.currentMenu.subscribe(x => {
            if (x.length > 0) {
                this.currentUser = x;
            }
        });
        this.getAuthMe();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    getAuthMe() {
        this.authService.getAuthMe().subscribe((res) => {
            if (res.data) {
                const userid = res.data.id;
                this.authService.getUserRole(userid).subscribe(data => (this.showname = data.data.firstname));
            }
        }, error => {
            console.log(error);
        });
    }
    async getUserDetails() {
        const dynamicPages = await this.getAuthorizedPages();
        this.currentPage = this.localstorage.getObj('CURRENTMENU');
        this.currentSubmenuPage = this.localstorage.getObj('CURRENTSUBMENU');
        const defaultpageName = this.currentPage ? this.currentPage.name : this.landingPage.userroles[0].defaultpage?.name;
        this.authService.getUserInfo().subscribe(async (res) => {
            this.loadCurrentUsers = true;
            this.currentUser = res[0].data
                ?.filter((data) => !data.parentid)
                ?.map(menu => ({
                ...menu,
                submenu: menu.name === 'Pages'
                    ? dynamicPages
                    : res[0].data
                        ?.filter((menuData) => menuData.parentid)
                        ?.filter((submenu) => submenu.parentid === menu.id && submenu)
                        ?.map(submenuData => ({
                        ...submenuData,
                        submenu2: res[0].data
                            ?.filter((menuData) => menuData.parentid)
                            ?.filter((submenu) => submenu.parentid === submenuData.id && submenu)
                    })) || []
            }));
            this.conditionPageName(defaultpageName);
            if (this._router.url == '/pages/profile') {
                this.appService.addValue('currentPage', 'Profile');
            }
            else if (this.userpage?.route.includes('dynamic-search/search') && !this.userpage.submenu.length) {
                this.checkDynamicPagePermission(this.userpage?.route.split('/')[4]);
            }
            else {
                this.appService.addValue('currentPage', this.userpage);
            }
            this.titleService.setTitle('PICS - ' + this.userpage?.name);
            if (!this.currentPage || !this.currentSubmenuPage) {
                this.currentPage = this.userpage;
                if (this.userpage?.route instanceof Object) {
                    this.currentSubmenuPage = this.userpage?.submenu.filter(x => x.name === this.userpage?.pagename)[0];
                }
                else {
                    this.currentSubmenuPage = this.userpage?.submenu.filter(x => x.route === this.userpage?.route)[0];
                }
            }
            this.getMenuActive();
            setTimeout(() => {
                this.loadCurrentUsers = false;
            }, 100);
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    conditionPageName(defaultpageName) {
        for (const pageName of this.currentUser) {
            if (pageName.name === defaultpageName) {
                this.userpage = pageName;
            }
            else {
                for (const subName of pageName.submenu) {
                    if (subName.name === defaultpageName) {
                        this.userpage = pageName;
                    }
                }
            }
        }
    }
    routerNavigator(route, pageInfo, subMenuInfo, event) {
        this.localstorage.setItem('parentGridPage', '');
        this.currentPage = pageInfo;
        if (subMenuInfo) {
            this.appService.setValue('SubMenu', subMenuInfo?.name);
        }
        else {
            this.appService.setValue('SubMenu', '');
        }
        if (route) {
            if (route instanceof Object) {
                this.currentSubmenuPage = pageInfo.submenu.filter(x => x.name === route.pagename)[0];
                this.routerDynamicNavigate(route, pageInfo);
            }
            else if (route?.includes('https') || route?.includes('http')) {
                window.open(route, '_blank');
            }
            else if (route?.includes('dynamic-search/search')) {
                this.currentSubmenuPage = pageInfo.submenu.filter(x => x.route === route)[0];
                this.checkDynamicPagePermission(route.split('/')[4]);
            }
            else if (route?.includes('master-view')) {
                this.currentSubmenuPage = pageInfo.submenu.filter(x => x.route === route)[0];
                this.checkDynamicPagePermission(route.split('/')[3]);
            }
            else {
                this.currentSubmenuPage = pageInfo.submenu.filter(x => x.route === route)[0];
                this._router.navigate([`pages${route}`]);
                this.appService.addValue('currentPage', pageInfo);
                if (this.currentSubmenuPage) {
                    this.titleService.setTitle('PICS - ' + this.currentSubmenuPage.name);
                }
                else {
                    this.titleService.setTitle('PICS - ' + pageInfo.name);
                }
            }
            this.getMenuActive();
            this.breakpointObserver.observe(['(max-width: 991px)']).subscribe((result) => {
                if (result.matches) {
                    this.pagesservice.sendClickEvent(false);
                }
            });
        }
    }
    checkParams(element) {
        return typeof element === 'string' ? JSON.parse(element) : element;
    }
    routerDynamicNavigate(page, pageInfo) {
        let routingPage = [];
        if (page.tabconfig) {
            const routingTab = this.checkParams(page.tabconfig);
            routingPage = routingTab.filter(x => x.type === 'ROUTING');
        }
        if (routingPage.length > 0) {
            this._router.navigate([`${routingPage[0].pathname}`]);
        }
        else if (page.templatejson && page.tableschemaconfig) {
            this._router.navigate([`pages/dynamicpage/page/modify/${page.pageid}`]);
        }
        else if (page.masterviewconfig) {
            this._router.navigate([`pages/composite-page/${page.pageid}`]);
        }
        else {
            this._router.navigate([`pages/dynamic-search/search/${page.id}`]);
        }
        this.appService.addValue('dynamicPages', pageInfo);
        this.titleService.setTitle('PICS - ' + page.pagename);
    }
    onLoggedout() {
        this._router.navigate(['login']);
        sessionStorage.clear();
    }
    getCustomPage(page) {
        if (page.tabconfig) {
            const routingTab = this.checkParams(page.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    getAuthorizedPages() {
        return this.pageHeaderService
            .getAuthorizedPages(this.orgId)
            .toPromise()
            .then(response => {
            const dynamicPage = response['data']['data'].filter(page => (page.activeVersion &&
                (page.gridconfig || page.templatejson || page.masterviewconfig || this.getCustomPage(page))));
            return dynamicPage.map(page => ({
                id: page.pageversion_id,
                name: page.pagename,
                activeVersion: {
                    pageid: page.pageid,
                    id: page.pageversion_id,
                    pagename: page.pagename,
                    templatejson: page.templatejson,
                    tableschemaconfig: page.tableschemaconfig,
                    masterviewconfig: page.masterviewconfig,
                    tabconfig: page.tabconfig,
                    gridconfig: page.gridconfig
                }
            }));
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    async checkDynamicPagePermission(pageId) {
        const dynamicPages = await this.getAuthorizedPages();
        if (pageId) {
            this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
                if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
                    this.appService.addValue('dynamicPages', res['data'][0].activeVersion.pagename);
                    if (res['data'][0].pagetype === 'MV') {
                        this._router.navigate([`pages/master-view/${res['data'][0].id}`]);
                    }
                    else if (res['data'][0].pagetype === 'COMP') {
                        this._router.navigate([`pages/composite-page/${res['data'][0].id}`]);
                    }
                    else {
                        this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
                    }
                }
                else {
                    this.alertService.error(`You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`);
                }
            });
        }
        else {
            this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
        }
    }
    showsubmenu(_$event) {
        console.log();
    }
    getPageImagedata(page) {
        return page?.additionalinfo?.thumbnail?.url || '';
    }
    getMenuActive() {
        this.currentUser.map((x) => {
            if (x.name === this.currentPage?.name) {
                x.active = true;
                return x.submenu.map(y => {
                    if (y.name === this.currentSubmenuPage?.name) {
                        y.active = true;
                    }
                    else {
                        y.active = false;
                    }
                });
            }
            else {
                x.active = false;
                return x.submenu.map(y => {
                    y.active = false;
                });
            }
        });
        this.localstorage.setObj('MENU', this.currentUser);
        this.localstorage.setObj('CURRENTMENU', this.currentPage);
        this.localstorage.setObj('CURRENTSUBMENU', this.currentSubmenuPage);
        this.authService.getCurrentMenu(this.currentUser);
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.appService.toggleStatus(this.isMenuOpen);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.Title }, { token: BuildTimeService }, { token: i4.DatePipe }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HeaderComponent, selector: "lib-header", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"navigationInner clearfix active\">\r\n    <div class=\"navLogoHeader\">\r\n      <a class=\"text-center\" title=\"Dashboard\">\r\n        <div class=\"d-flex align-items-center pt-3 pl-3 JJIS-logo-mb\">\r\n          <!-- <span>\r\n            <img src=\"/assets/images/cardy.svg\" class=\"logo mr-1\" alt=\"cardy\" width=\"18\" />\r\n          </span> -->\r\n          <span class=\"material-symbols-outlined\" (click)=\"toggleMenu()\">\r\n            {{ isMenuOpen ? 'menu' : 'menu_open' }}\r\n          </span>\r\n          <span [routerLink]=\"[routeToDashboard]\">\r\n            <!-- <img src=\"/assets/images/JJIS-logo-w-text.svg\" class=\"cardy-text\" alt=\"JJIS\" /> -->\r\n            <img src=\"/assets/images/JJIS-logo.svg\" class=\"JJIS-logo\" alt=\"JJIS\" />\r\n            <img src=\"/assets/images/JJIS-logo-text.svg\" class=\"cardy-text\" alt=\"JJIS\" />\r\n            <!-- <small class=\"logo-title\">Mod JJIS</small> -->\r\n          </span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"navMenuList\">\r\n      <div class=\"leftNavigation\">\r\n        <div *ngFor=\"let menu of currentUser\"\r\n          class=\"{{ !menu.submenu.length ? 'menuPanel innerMenuStyle pull-left' : 'menuPanel innerMenuStyle dropdown' }} \"\r\n          [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n\r\n          <a *ngIf=\"!menu.submenu.length\" class=\"newMunulit\" title=\"{{ menu.name }}\"\r\n            (click)=\"routerNavigator(menu.route, menu, {}, $event)\"\r\n            [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n            <div class=\"menuIcons\" tabindex=\"0\">\r\n              <span class=\"material-symbols-outlined mr-2\">\r\n                {{ menu.additionalinfo.icon }}\r\n              </span>\r\n              <span class=\"page-name\">{{ menu.name }}</span>\r\n            </div>\r\n          </a>\r\n          <a *ngIf=\"menu.submenu.length\" class=\"newMunulit\" data-toggle=\"dropdown\" title=\"{{ menu.name }}\"\r\n            aria-label=\"menu name\" tabindex=\"0\">\r\n            <div class=\"menuIcons\">\r\n              <span class=\"material-symbols-outlined mr-2\">\r\n                {{ menu.additionalinfo.icon }}\r\n              </span>\r\n              <span class=\"page-name\">{{ menu.name }}</span>\r\n            </div>\r\n          </a>\r\n\r\n          <div *ngIf=\"menu.submenu.length\">\r\n            <div class=\"innerMenuNew dropdown-menu smenu-arrow\" [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n              <!-- <em class=\"fa fa-caret-left innerMenuarrow\"></em> -->\r\n              <p class=\"innerHead\">\r\n                {{ menu.name }}\r\n                <i class=\"menuup-arrow\"></i>\r\n              </p>\r\n              <ul class=\"innerMenuListing\">\r\n                <li *ngFor=\"let submenu of menu?.submenu\"\r\n                  class=\"{{ !submenu?.submenu2?.length ? 'clearfix' : 'menuPanel innerMenuStyle' }}\">\r\n                  <a (click)=\"routerNavigator(submenu?.route || submenu?.activeVersion, menu, submenu, $event)\"\r\n                     class=\"clearfix submenulink\" title=\"{{ submenu?.name }}\"\r\n                    [ngClass]=\"submenu?.active === true ? 'active' : ''\" tabindex=\"0\">\r\n                    <span class=\"f-left d-flex flex-row align-items-center\">\r\n                      <!-- <em class=\"material-symbols-outlined mr-1\">minimize</em>  -->\r\n                      {{ submenu?.name }}</span>\r\n                  </a>\r\n                  <div *ngIf=\"submenu?.submenu2?.length\" class=\"innerMenuNew submenu\" [ngClass]=\"dnone\">\r\n                    <em class=\"fa fa-caret-left innerMenuarrow\"></em>\r\n                    <ul class=\"innerMenuListing\">\r\n                      <li class=\"clearfix\">\r\n                        <p class=\"innerHead\">{{ submenu?.name }}</p>\r\n                      </li>\r\n                      <li class=\"clearfix\" *ngFor=\"let submenu2 of submenu?.submenu2\">\r\n                        <a (click)=\"routerNavigator(submenu2?.route, menu, $event)\" title=\"{{ submenu2?.name }}\"\r\n                          data-target=\"#view\" data-toggle=\"modal\" class=\"clearfix\" tabindex=\"0\">\r\n                          <span class=\"f-left\">{{ submenu2?.name }}</span>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-none menuPanel innerMenuStyle dropdown bottomposition user-panel\" routerLinkActive=\"active\">\r\n          <a class=\"newMunulit d-flex flex-row align-items-center\" data-toggle=\"dropdown\">\r\n            <div class=\"menuIcons\">\r\n              <img src=\"/assets/images/profilephoto.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"user-details\">\r\n              <div class=\"username\">{{ showname }}</div>\r\n              <div class=\"userrole\">Admin</div>\r\n            </div>\r\n          </a>\r\n          <div class=\"innerMenuNew dropdown-menu\">\r\n            <em class=\"fa fa-caret-left innerMenuarrow\"></em>\r\n            <ul class=\"innerMenuListing\">\r\n              <li class=\"clearfix\">\r\n                <a class=\"clearfix\">\r\n                  <span class=\"d-flex align-items-center\" (click)=\"onLoggedout()\">\r\n                    <small class=\"material-symbols-outlined mr-2\">logout</small>\r\n                    <span>Logout</span>\r\n                  </span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"menuPanel innerMenuStyle bottomposition cardinalitypower d-none\" routerLinkActive=\"active\">\r\n          <a href=\"https://www.cardinality.ai/\" target=\"_blank\" class=\"newMunulit\">\r\n            <img src=\"/assets/images/cardinalitypower.png\" alt=\"cardinality-logo\" width=\"50\" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"navFooter\">\r\n      <div>Version: {{ buildVersion }}</div>\r\n      <div>Last Build: {{ buildNumber}} - {{ buildTimestamp }}</div>\r\n      <!-- <a [routerLink]=\"[routeToDashboard]\" class=\"text-center logo-link\" title=\"Dashboard\">\r\n        <div class=\"d-flex align-items-center justify-content-center\">\r\n          <span>\r\n            <img src=\"/assets/images/cardy.svg\" class=\"logo mr-1\" alt=\"cardy\" width=\"18\" />\r\n          </span>\r\n          <span>\r\n            <img src=\"/assets/images/cardinality_ai_white.svg\" class=\"cardy-text\" alt=\"cardinality\" />\r\n          </span>\r\n        </div>\r\n      </a> -->\r\n    </div>\r\n  </div>\r\n", styles: ["body{margin:0}.pageWrapper{width:100%;display:flex;flex-wrap:nowrap;justify-content:flex-start;height:100vh;overflow:hidden}.menuPanel .newMunulit .menuIcons img{width:100%;height:100%;display:block;transition:all .3s linear 0s}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a img{width:18px;display:block}.menuPanel.innerMenuStyle a:hover{color:var(--light-d-light);background-color:var(--menu-hover)}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a.active{color:var(--light-d-light);border-left:2px solid #C9E982}.userProfile .menuPanel .newMunulit .menuIcons{padding:5px}.userProfile .menuPanel .newMunulit .menuIcons img{border-radius:50%}.userProfile .menuPanel.innerMenuStyle .innerMenuNew{top:auto;bottom:0}.userProfile .menuPanel.innerMenuStyle .innerMenuNew .innerMenuarrow{top:auto;bottom:12px}.userProfile .menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li:first-child a:hover{background-color:transparent;cursor:default}.pop-upSec{padding:0}.pop-upSec li{padding-right:0;height:45px}.modal-footer{padding:15px 25px}.Document-Table{padding-right:0}.contentSection{padding:10px;width:100%;height:calc(100vh - 52px);overflow-y:auto;position:relative}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:0 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px;background-color:#fff}.topAddNewMenu .leftFlowMenu span.pageName{font-weight:600;color:#333;padding-left:0}.topAddNewMenu .leftFlowMenu span{display:inline-block;padding:0 6px;line-height:40px;color:#555;font-size:var(--base-font-size);text-transform:uppercase}.topAddNewMenu .leftFlowMenu span.active{color:#21487f}.rightAddBtn{padding-right:0}.dropdown button{width:100%;padding:3px 6px;line-height:26px;border:1px solid transparent}.topInputSearchIc{padding-right:5px;font-size:var(--font-14)}.dropdown{width:16%;float:left}.RightInput{width:83%}.dropdown-menu{position:absolute;width:200px;top:36px;border:1px solid;box-shadow:0 6px 12px #0000002d;background-clip:padding-box}.dropdown-menu>li a{padding:3px 20px}.dropdown-menu li{padding:6px 10px}input:focus{border:inherit!important}.search-box input{width:100%;display:block;line-height:40px;padding:0 15px 0 40px;border:solid 1px;border-radius:3px;outline:none}.clickImg{margin:7px 0}.iconImg{height:16px;width:24px;padding-right:3px}.grid_panel .panel .panel-heading{min-height:77px}.grid_panel .panel .panel-heading img{width:40px;height:40px;margin:0 auto;border-radius:100%}.grid_panel .panel .person-nm-title{margin:0 0 5px;font-size:var(--font-14);padding-top:8px;font-weight:600;float:left;padding-left:10px}.grid_panel .panel .designation-wrapper{border:1px solid;padding:3px 7px;display:block;border-radius:15px;line-height:11px;max-width:210px;overflow:hidden;text-overflow:ellipsis;margin:0 0 5px;width:max-content;-webkit-line-clamp:2;-webkit-box-orient:vertical}.grid_panel .panel .designation-wrapper span{font-size:var(--font-11);display:inline-block;vertical-align:top;position:relative;padding-right:5px}.grid_panel .panel .designation-wrapper span:before{display:block;content:\",\";position:absolute;right:0;bottom:0}.grid_panel .panel .designation-wrapper span:last-child{padding-right:0}.grid_panel .panel .designation-wrapper span:last-child:before{display:none}.grid_panel .panel .designation-wrapper span+span{padding-left:5px}.grid_panel .panel .panel-body.container-height{max-height:260px;overflow:auto}.profileImg{float:left}.profile-icon{margin:6px 0 0}.profile-icon img{width:36px;height:36px;border-radius:50%}.profile-icon.open .dropdown-toggle{box-shadow:none}.profile-icon.open .dropdown-menu{left:auto;right:80px;top:45px;margin:0;padding:0;width:165px}.profile-icon.open .dropdown-menu p{font-size:var(--font-16);font-weight:600;padding-left:15px}.profile-icon.open .dropdown-menu .divider{padding:1px 0;margin:0}select,button,textarea,input{font-size:inherit!important}.overallSec{padding:0 15px;width:100%;height:100vh;overflow-y:auto;position:relative}.open>.dropdown-menu{display:block}.innerHead{color:#000;text-transform:uppercase;font-size:var(--base-font-size);padding:0 10px 8px;border-bottom:solid 1px rgb(199,199,199);margin:0}.navigationInner{width:60px;height:100%;overflow:hidden}.navigationInner .navLogoHeader{width:100%;height:70px;display:flex;align-items:center;justify-content:center;position:relative}.navigationInner .navLogoHeader:after{content:\"\";position:absolute;left:20px;width:calc(100% - 40px);height:1px;background:#838b96;bottom:-10px}.navigationInner .navFooter{width:100%;height:50px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column;padding:0 22px;color:var(--light-d-light);opacity:.6;font-weight:200;font-size:10px}.navigationInner .navLogoHeader a{display:block;padding:0;width:100%;outline:0}.navigationInner .navLogoHeader a .logo{margin:0;padding:0}.navigationInner .userProfile{width:100%;display:block}.navigationInner .userProfile a{display:block;padding:10px;width:100%}.navigationInner .userProfile a .userImg{width:30px;height:30px;border-radius:50%;object-fit:cover;object-position:top center;margin-right:15px;margin-top:3px}.navigationInner .userProfile a .rightContent{width:calc(100% - 45px)}.navigationInner .userProfile a .rightContent p{font-size:var(--base-font-size);color:#dbdbdb}.navigationInner .userProfile a .rightContent p.userName{text-transform:uppercase}.navigationInner .userProfile.dropup.open .dropdown-menu{display:block;width:100%;background:#262a2f;border-radius:0}.navigationInner .userProfile.dropup.open .dropdown-menu li{padding-left:45px}.navigationInner .userProfile.dropup.open .dropdown-menu li a{color:#f0a141;cursor:pointer;display:block}.navigationInner .userProfile.dropup.open .dropdown-menu li a:hover,.navigationInner .userProfile.dropup.open .dropdown-menu li a:active,.navigationInner .userProfile.dropup.open .dropdown-menu li a:focus{background:transparent;color:#f0a141}.navigationInner .navMenuList{width:100%;height:calc(100vh - 115px);position:relative}.navigationInner .navMenuList .leftNavigation{top:20px;width:100%;height:calc(100vh - 140px);overflow:auto}.navigationInner .navMenuList .leftNavigation .panel{margin-bottom:0;background-color:transparent;border:0;border-radius:0;box-shadow:none;padding:3px 13px 3px 10px}.navigationInner .navMenuList .leftNavigation .panel .navMenu{display:block;padding:10px;width:100%;background-color:#262a2f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.navigationInner .navMenuList .leftNavigation .panel .navMenu.collapsed{background-color:transparent}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon{width:30px;height:30px;margin-right:15px;position:relative;padding:4px;letter-spacing:.5px}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon img{width:100%;height:100%}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon .count{display:block;position:absolute;top:-4px;left:12px;padding:1px 3px;border-radius:999px;font-size:var(--font-10);font-weight:400;color:#fff;background-color:#21487f}.navigationInner .navMenuList .leftNavigation .panel .navMenu .rightContent{width:calc(100% - 45px)}.navigationInner .navMenuList .leftNavigation .panel .navMenu .rightContent p{font-size:var(--base-font-size);color:#dbdbdb;line-height:30px;text-transform:uppercase}.navigationInner .navMenuList .leftNavigation .panel .panel-collapse.collapse.in{background-color:#262a2f}.navigationInner .navMenuList .leftNavigation .panel .innerMenu{width:100%;padding-left:50px}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li{width:100%;position:relative}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a{display:block;width:100%;padding:10px 15px;transition:all .3s linear 0s;font-size:var(--base-font-size);color:#dbdbdb;border-left:solid 2px transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a:hover,.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a.active,.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a:focus{border-left:solid 2px #21487f;color:#21487f;text-decoration:none}.submenu{top:0!important;padding:10px 15px 10px 13px}.submenu .dropdown-menu{font-size:var(--base-font-size);padding:5px}.menuPanel{position:relative;width:100%}.menuPanel .newMunulit .menuIcons{display:flex;align-items:center;height:37px;padding:6px;margin:0;transition:all .3s linear 0s;cursor:pointer;color:var(--light-d-light)}.menuPanel .newMunulit .menuIcons .material-symbols-outlined{font-size:var(--font-26);font-variation-settings:var(--var-icon-font)}.menuPanel .newMunulit .menuIcons svg,.menuPanel .newMunulit .menuIcons img{width:100%;height:100%;display:block}.menuPanel .newMunulit .menuIcons svg .a,.menuPanel .newMunulit .menuIcons img .a{fill:var(--primary)}.menuPanel .newMunulit .menuIcons:hover img{opacity:1}.menuPanel .newMunulit.active .menuIcons{position:relative}.menuPanel .newMunulit.active .menuIcons svg,.menuPanel .newMunulit.active .menuIcons img{opacity:1}.menuPanel .newMunulit.active .menuIcons svg .a,.menuPanel .newMunulit.active .menuIcons img .a{fill:#fff}.menuPanel .newMunulit.active .menuIcons svg path,.menuPanel .newMunulit.active .menuIcons svg rect,.menuPanel .newMunulit.active .menuIcons img path,.menuPanel .newMunulit.active .menuIcons img rect{fill:#fff}.menuPanel .newMunulit.active .menuIcons .page-name{font-weight:500}.menuPanel .newMunulit:hover .menuIcons{color:var(--light-d-light)}.menuPanel:hover .menuIcons,.menuPanel.active .menuIcons{color:#fff!important;background-color:transparent}.menuPanel:hover .menuIcons svg,.menuPanel:hover .menuIcons img,.menuPanel.active .menuIcons svg,.menuPanel.active .menuIcons img{opacity:1}.menuPanel:hover .menuIcons svg .a,.menuPanel:hover .menuIcons img .a,.menuPanel.active .menuIcons svg .a,.menuPanel.active .menuIcons img .a{fill:#fff}.menuPanel:hover .menuIcons svg path,.menuPanel:hover .menuIcons svg rect,.menuPanel:hover .menuIcons img path,.menuPanel:hover .menuIcons img rect,.menuPanel.active .menuIcons svg path,.menuPanel.active .menuIcons svg rect,.menuPanel.active .menuIcons img path,.menuPanel.active .menuIcons img rect{fill:#fff}.menuPanel:hover .newMunulit,.menuPanel.active .newMunulit{background:var(--menu-highlight)}.menuPanel:hover .dropdown-menu.active,.menuPanel.active .dropdown-menu.active{display:block;transform:none!important}.menuPanel:hover .dropdown-menu.active .submenulink span,.menuPanel.active .dropdown-menu.active .submenulink span,.menuPanel:hover .dropdown-menu.active .submenulink.active span,.menuPanel.active .dropdown-menu.active .submenulink.active span{color:var(--light-d-light)}.menuPanel.innerMenuStyle.dropdown .newMunulit:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:7px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17);color:var(--light-d-light)}.menuPanel.innerMenuStyle.dropdown.show .newMunulit:after{content:\"\\e5ce\"}.menuPanel.innerMenuStyle .innerMenuNew.alignBottom{top:auto;bottom:10px}.menuPanel.innerMenuStyle .innerMenuNew.alignBottom .innerMenuarrow{position:absolute;top:auto;bottom:2px;left:1px;font-size:32px;color:#fff;z-index:-1}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuarrow{position:absolute;top:2px;left:1px;font-size:32px;color:var(--menu-panel);z-index:-1}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing.overflow{max-height:250px;overflow:auto}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li{list-style:none;margin:0 0 0 40px;border-left:1px solid var(--menu-hover)}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li:hover{background-color:#431e8d12}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label{width:100%;display:block;padding:7px 15px;transition:all .3s linear 0s;text-decoration:none;height:auto;overflow:hidden;font-weight:400;font-size:var(--font-15);cursor:pointer;color:#000}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label img{width:18px;display:block;margin-right:10px}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label span{width:calc(100% - 28px);padding:0;color:#000}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label:hover,.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label.active{background-color:transparent;text-decoration:none}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a{font-weight:500;font-size:var(--font-15);cursor:pointer}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a em.material-symbols-outlined{position:relative;top:-8px}.menuPanel.innerMenuStyle.open .innerMenuNew{height:auto;transform:translate(0);overflow:inherit}.innerstyle{top:-40px;left:70px}.innerMenuNew.dropdown-menu.show{transform:none!important;will-change:auto!important;left:74px!important}.menuPanel.bottomposition,.menuPanel.bottomposition.settingtab{position:absolute;bottom:0}.menuPanel.bottomposition.cardinalitypower{position:absolute;bottom:-45px}.menuPanel.innerMenuStyle.cardinalitypower .newMunulit:after{background-image:none}ul.innerMenuListing li{padding:0!important}.user-panel{padding:0 15px}.user-panel .newMunulit{background:var(--secondary-color);border-radius:9px;padding:5px}.user-panel .newMunulit .user-details{padding-left:5px}.user-panel .newMunulit .user-details .username{font-size:var(--font-12);color:var(--light-d-light);font-weight:600;line-height:normal}.user-panel .newMunulit .user-details .userrole{font-size:var(--font-11);color:var(--light-d-light);font-weight:300;line-height:normal}.user-panel .newMunulit .menuIcons{width:40px;height:40px;background-position:center}.user-panel .newMunulit .menuIcons img{z-index:1}.user-panel .newMunulit .menuIcons:before{display:none}.user-panel .newMunulit:after{content:\"\\e5d4\"!important}.user-panel .innerMenuListing a{font-size:var(--base-font-size)}.user-panel .innerMenuListing .material-symbols-outlined{font-size:var(--font-16)}.innerMenuListing::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.innerMenuListing::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.innerMenuListing::-webkit-scrollbar-thumb{background-color:#a9a9a9}.navMenuList::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.navMenuList::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.navMenuList::-webkit-scrollbar-thumb{background-color:#a9a9a9}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-header', template: "<app-alert></app-alert>\r\n<div class=\"navigationInner clearfix active\">\r\n    <div class=\"navLogoHeader\">\r\n      <a class=\"text-center\" title=\"Dashboard\">\r\n        <div class=\"d-flex align-items-center pt-3 pl-3 JJIS-logo-mb\">\r\n          <!-- <span>\r\n            <img src=\"/assets/images/cardy.svg\" class=\"logo mr-1\" alt=\"cardy\" width=\"18\" />\r\n          </span> -->\r\n          <span class=\"material-symbols-outlined\" (click)=\"toggleMenu()\">\r\n            {{ isMenuOpen ? 'menu' : 'menu_open' }}\r\n          </span>\r\n          <span [routerLink]=\"[routeToDashboard]\">\r\n            <!-- <img src=\"/assets/images/JJIS-logo-w-text.svg\" class=\"cardy-text\" alt=\"JJIS\" /> -->\r\n            <img src=\"/assets/images/JJIS-logo.svg\" class=\"JJIS-logo\" alt=\"JJIS\" />\r\n            <img src=\"/assets/images/JJIS-logo-text.svg\" class=\"cardy-text\" alt=\"JJIS\" />\r\n            <!-- <small class=\"logo-title\">Mod JJIS</small> -->\r\n          </span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"navMenuList\">\r\n      <div class=\"leftNavigation\">\r\n        <div *ngFor=\"let menu of currentUser\"\r\n          class=\"{{ !menu.submenu.length ? 'menuPanel innerMenuStyle pull-left' : 'menuPanel innerMenuStyle dropdown' }} \"\r\n          [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n\r\n          <a *ngIf=\"!menu.submenu.length\" class=\"newMunulit\" title=\"{{ menu.name }}\"\r\n            (click)=\"routerNavigator(menu.route, menu, {}, $event)\"\r\n            [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n            <div class=\"menuIcons\" tabindex=\"0\">\r\n              <span class=\"material-symbols-outlined mr-2\">\r\n                {{ menu.additionalinfo.icon }}\r\n              </span>\r\n              <span class=\"page-name\">{{ menu.name }}</span>\r\n            </div>\r\n          </a>\r\n          <a *ngIf=\"menu.submenu.length\" class=\"newMunulit\" data-toggle=\"dropdown\" title=\"{{ menu.name }}\"\r\n            aria-label=\"menu name\" tabindex=\"0\">\r\n            <div class=\"menuIcons\">\r\n              <span class=\"material-symbols-outlined mr-2\">\r\n                {{ menu.additionalinfo.icon }}\r\n              </span>\r\n              <span class=\"page-name\">{{ menu.name }}</span>\r\n            </div>\r\n          </a>\r\n\r\n          <div *ngIf=\"menu.submenu.length\">\r\n            <div class=\"innerMenuNew dropdown-menu smenu-arrow\" [ngClass]=\"menu?.active === true ? 'active' : ''\">\r\n              <!-- <em class=\"fa fa-caret-left innerMenuarrow\"></em> -->\r\n              <p class=\"innerHead\">\r\n                {{ menu.name }}\r\n                <i class=\"menuup-arrow\"></i>\r\n              </p>\r\n              <ul class=\"innerMenuListing\">\r\n                <li *ngFor=\"let submenu of menu?.submenu\"\r\n                  class=\"{{ !submenu?.submenu2?.length ? 'clearfix' : 'menuPanel innerMenuStyle' }}\">\r\n                  <a (click)=\"routerNavigator(submenu?.route || submenu?.activeVersion, menu, submenu, $event)\"\r\n                     class=\"clearfix submenulink\" title=\"{{ submenu?.name }}\"\r\n                    [ngClass]=\"submenu?.active === true ? 'active' : ''\" tabindex=\"0\">\r\n                    <span class=\"f-left d-flex flex-row align-items-center\">\r\n                      <!-- <em class=\"material-symbols-outlined mr-1\">minimize</em>  -->\r\n                      {{ submenu?.name }}</span>\r\n                  </a>\r\n                  <div *ngIf=\"submenu?.submenu2?.length\" class=\"innerMenuNew submenu\" [ngClass]=\"dnone\">\r\n                    <em class=\"fa fa-caret-left innerMenuarrow\"></em>\r\n                    <ul class=\"innerMenuListing\">\r\n                      <li class=\"clearfix\">\r\n                        <p class=\"innerHead\">{{ submenu?.name }}</p>\r\n                      </li>\r\n                      <li class=\"clearfix\" *ngFor=\"let submenu2 of submenu?.submenu2\">\r\n                        <a (click)=\"routerNavigator(submenu2?.route, menu, $event)\" title=\"{{ submenu2?.name }}\"\r\n                          data-target=\"#view\" data-toggle=\"modal\" class=\"clearfix\" tabindex=\"0\">\r\n                          <span class=\"f-left\">{{ submenu2?.name }}</span>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-none menuPanel innerMenuStyle dropdown bottomposition user-panel\" routerLinkActive=\"active\">\r\n          <a class=\"newMunulit d-flex flex-row align-items-center\" data-toggle=\"dropdown\">\r\n            <div class=\"menuIcons\">\r\n              <img src=\"/assets/images/profilephoto.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"user-details\">\r\n              <div class=\"username\">{{ showname }}</div>\r\n              <div class=\"userrole\">Admin</div>\r\n            </div>\r\n          </a>\r\n          <div class=\"innerMenuNew dropdown-menu\">\r\n            <em class=\"fa fa-caret-left innerMenuarrow\"></em>\r\n            <ul class=\"innerMenuListing\">\r\n              <li class=\"clearfix\">\r\n                <a class=\"clearfix\">\r\n                  <span class=\"d-flex align-items-center\" (click)=\"onLoggedout()\">\r\n                    <small class=\"material-symbols-outlined mr-2\">logout</small>\r\n                    <span>Logout</span>\r\n                  </span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"menuPanel innerMenuStyle bottomposition cardinalitypower d-none\" routerLinkActive=\"active\">\r\n          <a href=\"https://www.cardinality.ai/\" target=\"_blank\" class=\"newMunulit\">\r\n            <img src=\"/assets/images/cardinalitypower.png\" alt=\"cardinality-logo\" width=\"50\" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"navFooter\">\r\n      <div>Version: {{ buildVersion }}</div>\r\n      <div>Last Build: {{ buildNumber}} - {{ buildTimestamp }}</div>\r\n      <!-- <a [routerLink]=\"[routeToDashboard]\" class=\"text-center logo-link\" title=\"Dashboard\">\r\n        <div class=\"d-flex align-items-center justify-content-center\">\r\n          <span>\r\n            <img src=\"/assets/images/cardy.svg\" class=\"logo mr-1\" alt=\"cardy\" width=\"18\" />\r\n          </span>\r\n          <span>\r\n            <img src=\"/assets/images/cardinality_ai_white.svg\" class=\"cardy-text\" alt=\"cardinality\" />\r\n          </span>\r\n        </div>\r\n      </a> -->\r\n    </div>\r\n  </div>\r\n", styles: ["body{margin:0}.pageWrapper{width:100%;display:flex;flex-wrap:nowrap;justify-content:flex-start;height:100vh;overflow:hidden}.menuPanel .newMunulit .menuIcons img{width:100%;height:100%;display:block;transition:all .3s linear 0s}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a img{width:18px;display:block}.menuPanel.innerMenuStyle a:hover{color:var(--light-d-light);background-color:var(--menu-hover)}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a.active{color:var(--light-d-light);border-left:2px solid #C9E982}.userProfile .menuPanel .newMunulit .menuIcons{padding:5px}.userProfile .menuPanel .newMunulit .menuIcons img{border-radius:50%}.userProfile .menuPanel.innerMenuStyle .innerMenuNew{top:auto;bottom:0}.userProfile .menuPanel.innerMenuStyle .innerMenuNew .innerMenuarrow{top:auto;bottom:12px}.userProfile .menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li:first-child a:hover{background-color:transparent;cursor:default}.pop-upSec{padding:0}.pop-upSec li{padding-right:0;height:45px}.modal-footer{padding:15px 25px}.Document-Table{padding-right:0}.contentSection{padding:10px;width:100%;height:calc(100vh - 52px);overflow-y:auto;position:relative}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:0 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px;background-color:#fff}.topAddNewMenu .leftFlowMenu span.pageName{font-weight:600;color:#333;padding-left:0}.topAddNewMenu .leftFlowMenu span{display:inline-block;padding:0 6px;line-height:40px;color:#555;font-size:var(--base-font-size);text-transform:uppercase}.topAddNewMenu .leftFlowMenu span.active{color:#21487f}.rightAddBtn{padding-right:0}.dropdown button{width:100%;padding:3px 6px;line-height:26px;border:1px solid transparent}.topInputSearchIc{padding-right:5px;font-size:var(--font-14)}.dropdown{width:16%;float:left}.RightInput{width:83%}.dropdown-menu{position:absolute;width:200px;top:36px;border:1px solid;box-shadow:0 6px 12px #0000002d;background-clip:padding-box}.dropdown-menu>li a{padding:3px 20px}.dropdown-menu li{padding:6px 10px}input:focus{border:inherit!important}.search-box input{width:100%;display:block;line-height:40px;padding:0 15px 0 40px;border:solid 1px;border-radius:3px;outline:none}.clickImg{margin:7px 0}.iconImg{height:16px;width:24px;padding-right:3px}.grid_panel .panel .panel-heading{min-height:77px}.grid_panel .panel .panel-heading img{width:40px;height:40px;margin:0 auto;border-radius:100%}.grid_panel .panel .person-nm-title{margin:0 0 5px;font-size:var(--font-14);padding-top:8px;font-weight:600;float:left;padding-left:10px}.grid_panel .panel .designation-wrapper{border:1px solid;padding:3px 7px;display:block;border-radius:15px;line-height:11px;max-width:210px;overflow:hidden;text-overflow:ellipsis;margin:0 0 5px;width:max-content;-webkit-line-clamp:2;-webkit-box-orient:vertical}.grid_panel .panel .designation-wrapper span{font-size:var(--font-11);display:inline-block;vertical-align:top;position:relative;padding-right:5px}.grid_panel .panel .designation-wrapper span:before{display:block;content:\",\";position:absolute;right:0;bottom:0}.grid_panel .panel .designation-wrapper span:last-child{padding-right:0}.grid_panel .panel .designation-wrapper span:last-child:before{display:none}.grid_panel .panel .designation-wrapper span+span{padding-left:5px}.grid_panel .panel .panel-body.container-height{max-height:260px;overflow:auto}.profileImg{float:left}.profile-icon{margin:6px 0 0}.profile-icon img{width:36px;height:36px;border-radius:50%}.profile-icon.open .dropdown-toggle{box-shadow:none}.profile-icon.open .dropdown-menu{left:auto;right:80px;top:45px;margin:0;padding:0;width:165px}.profile-icon.open .dropdown-menu p{font-size:var(--font-16);font-weight:600;padding-left:15px}.profile-icon.open .dropdown-menu .divider{padding:1px 0;margin:0}select,button,textarea,input{font-size:inherit!important}.overallSec{padding:0 15px;width:100%;height:100vh;overflow-y:auto;position:relative}.open>.dropdown-menu{display:block}.innerHead{color:#000;text-transform:uppercase;font-size:var(--base-font-size);padding:0 10px 8px;border-bottom:solid 1px rgb(199,199,199);margin:0}.navigationInner{width:60px;height:100%;overflow:hidden}.navigationInner .navLogoHeader{width:100%;height:70px;display:flex;align-items:center;justify-content:center;position:relative}.navigationInner .navLogoHeader:after{content:\"\";position:absolute;left:20px;width:calc(100% - 40px);height:1px;background:#838b96;bottom:-10px}.navigationInner .navFooter{width:100%;height:50px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column;padding:0 22px;color:var(--light-d-light);opacity:.6;font-weight:200;font-size:10px}.navigationInner .navLogoHeader a{display:block;padding:0;width:100%;outline:0}.navigationInner .navLogoHeader a .logo{margin:0;padding:0}.navigationInner .userProfile{width:100%;display:block}.navigationInner .userProfile a{display:block;padding:10px;width:100%}.navigationInner .userProfile a .userImg{width:30px;height:30px;border-radius:50%;object-fit:cover;object-position:top center;margin-right:15px;margin-top:3px}.navigationInner .userProfile a .rightContent{width:calc(100% - 45px)}.navigationInner .userProfile a .rightContent p{font-size:var(--base-font-size);color:#dbdbdb}.navigationInner .userProfile a .rightContent p.userName{text-transform:uppercase}.navigationInner .userProfile.dropup.open .dropdown-menu{display:block;width:100%;background:#262a2f;border-radius:0}.navigationInner .userProfile.dropup.open .dropdown-menu li{padding-left:45px}.navigationInner .userProfile.dropup.open .dropdown-menu li a{color:#f0a141;cursor:pointer;display:block}.navigationInner .userProfile.dropup.open .dropdown-menu li a:hover,.navigationInner .userProfile.dropup.open .dropdown-menu li a:active,.navigationInner .userProfile.dropup.open .dropdown-menu li a:focus{background:transparent;color:#f0a141}.navigationInner .navMenuList{width:100%;height:calc(100vh - 115px);position:relative}.navigationInner .navMenuList .leftNavigation{top:20px;width:100%;height:calc(100vh - 140px);overflow:auto}.navigationInner .navMenuList .leftNavigation .panel{margin-bottom:0;background-color:transparent;border:0;border-radius:0;box-shadow:none;padding:3px 13px 3px 10px}.navigationInner .navMenuList .leftNavigation .panel .navMenu{display:block;padding:10px;width:100%;background-color:#262a2f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.navigationInner .navMenuList .leftNavigation .panel .navMenu.collapsed{background-color:transparent}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon{width:30px;height:30px;margin-right:15px;position:relative;padding:4px;letter-spacing:.5px}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon img{width:100%;height:100%}.navigationInner .navMenuList .leftNavigation .panel .navMenu .notificatonIcon .count{display:block;position:absolute;top:-4px;left:12px;padding:1px 3px;border-radius:999px;font-size:var(--font-10);font-weight:400;color:#fff;background-color:#21487f}.navigationInner .navMenuList .leftNavigation .panel .navMenu .rightContent{width:calc(100% - 45px)}.navigationInner .navMenuList .leftNavigation .panel .navMenu .rightContent p{font-size:var(--base-font-size);color:#dbdbdb;line-height:30px;text-transform:uppercase}.navigationInner .navMenuList .leftNavigation .panel .panel-collapse.collapse.in{background-color:#262a2f}.navigationInner .navMenuList .leftNavigation .panel .innerMenu{width:100%;padding-left:50px}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li{width:100%;position:relative}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a{display:block;width:100%;padding:10px 15px;transition:all .3s linear 0s;font-size:var(--base-font-size);color:#dbdbdb;border-left:solid 2px transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a:hover,.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a.active,.navigationInner .navMenuList .leftNavigation .panel .innerMenu li a:focus{border-left:solid 2px #21487f;color:#21487f;text-decoration:none}.submenu{top:0!important;padding:10px 15px 10px 13px}.submenu .dropdown-menu{font-size:var(--base-font-size);padding:5px}.menuPanel{position:relative;width:100%}.menuPanel .newMunulit .menuIcons{display:flex;align-items:center;height:37px;padding:6px;margin:0;transition:all .3s linear 0s;cursor:pointer;color:var(--light-d-light)}.menuPanel .newMunulit .menuIcons .material-symbols-outlined{font-size:var(--font-26);font-variation-settings:var(--var-icon-font)}.menuPanel .newMunulit .menuIcons svg,.menuPanel .newMunulit .menuIcons img{width:100%;height:100%;display:block}.menuPanel .newMunulit .menuIcons svg .a,.menuPanel .newMunulit .menuIcons img .a{fill:var(--primary)}.menuPanel .newMunulit .menuIcons:hover img{opacity:1}.menuPanel .newMunulit.active .menuIcons{position:relative}.menuPanel .newMunulit.active .menuIcons svg,.menuPanel .newMunulit.active .menuIcons img{opacity:1}.menuPanel .newMunulit.active .menuIcons svg .a,.menuPanel .newMunulit.active .menuIcons img .a{fill:#fff}.menuPanel .newMunulit.active .menuIcons svg path,.menuPanel .newMunulit.active .menuIcons svg rect,.menuPanel .newMunulit.active .menuIcons img path,.menuPanel .newMunulit.active .menuIcons img rect{fill:#fff}.menuPanel .newMunulit.active .menuIcons .page-name{font-weight:500}.menuPanel .newMunulit:hover .menuIcons{color:var(--light-d-light)}.menuPanel:hover .menuIcons,.menuPanel.active .menuIcons{color:#fff!important;background-color:transparent}.menuPanel:hover .menuIcons svg,.menuPanel:hover .menuIcons img,.menuPanel.active .menuIcons svg,.menuPanel.active .menuIcons img{opacity:1}.menuPanel:hover .menuIcons svg .a,.menuPanel:hover .menuIcons img .a,.menuPanel.active .menuIcons svg .a,.menuPanel.active .menuIcons img .a{fill:#fff}.menuPanel:hover .menuIcons svg path,.menuPanel:hover .menuIcons svg rect,.menuPanel:hover .menuIcons img path,.menuPanel:hover .menuIcons img rect,.menuPanel.active .menuIcons svg path,.menuPanel.active .menuIcons svg rect,.menuPanel.active .menuIcons img path,.menuPanel.active .menuIcons img rect{fill:#fff}.menuPanel:hover .newMunulit,.menuPanel.active .newMunulit{background:var(--menu-highlight)}.menuPanel:hover .dropdown-menu.active,.menuPanel.active .dropdown-menu.active{display:block;transform:none!important}.menuPanel:hover .dropdown-menu.active .submenulink span,.menuPanel.active .dropdown-menu.active .submenulink span,.menuPanel:hover .dropdown-menu.active .submenulink.active span,.menuPanel.active .dropdown-menu.active .submenulink.active span{color:var(--light-d-light)}.menuPanel.innerMenuStyle.dropdown .newMunulit:after{font-family:Material Icons,monospace;content:\"\\e5cf\";display:block;position:absolute;left:auto;right:7px;width:17px;height:24px;top:50%;transform:translateY(-50%);font-size:var(--font-17);color:var(--light-d-light)}.menuPanel.innerMenuStyle.dropdown.show .newMunulit:after{content:\"\\e5ce\"}.menuPanel.innerMenuStyle .innerMenuNew.alignBottom{top:auto;bottom:10px}.menuPanel.innerMenuStyle .innerMenuNew.alignBottom .innerMenuarrow{position:absolute;top:auto;bottom:2px;left:1px;font-size:32px;color:#fff;z-index:-1}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuarrow{position:absolute;top:2px;left:1px;font-size:32px;color:var(--menu-panel);z-index:-1}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing.overflow{max-height:250px;overflow:auto}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li{list-style:none;margin:0 0 0 40px;border-left:1px solid var(--menu-hover)}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing li:hover{background-color:#431e8d12}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label{width:100%;display:block;padding:7px 15px;transition:all .3s linear 0s;text-decoration:none;height:auto;overflow:hidden;font-weight:400;font-size:var(--font-15);cursor:pointer;color:#000}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label img{width:18px;display:block;margin-right:10px}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label span{width:calc(100% - 28px);padding:0;color:#000}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label:hover,.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing label.active{background-color:transparent;text-decoration:none}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a{font-weight:500;font-size:var(--font-15);cursor:pointer}.menuPanel.innerMenuStyle .innerMenuNew .innerMenuListing a em.material-symbols-outlined{position:relative;top:-8px}.menuPanel.innerMenuStyle.open .innerMenuNew{height:auto;transform:translate(0);overflow:inherit}.innerstyle{top:-40px;left:70px}.innerMenuNew.dropdown-menu.show{transform:none!important;will-change:auto!important;left:74px!important}.menuPanel.bottomposition,.menuPanel.bottomposition.settingtab{position:absolute;bottom:0}.menuPanel.bottomposition.cardinalitypower{position:absolute;bottom:-45px}.menuPanel.innerMenuStyle.cardinalitypower .newMunulit:after{background-image:none}ul.innerMenuListing li{padding:0!important}.user-panel{padding:0 15px}.user-panel .newMunulit{background:var(--secondary-color);border-radius:9px;padding:5px}.user-panel .newMunulit .user-details{padding-left:5px}.user-panel .newMunulit .user-details .username{font-size:var(--font-12);color:var(--light-d-light);font-weight:600;line-height:normal}.user-panel .newMunulit .user-details .userrole{font-size:var(--font-11);color:var(--light-d-light);font-weight:300;line-height:normal}.user-panel .newMunulit .menuIcons{width:40px;height:40px;background-position:center}.user-panel .newMunulit .menuIcons img{z-index:1}.user-panel .newMunulit .menuIcons:before{display:none}.user-panel .newMunulit:after{content:\"\\e5d4\"!important}.user-panel .innerMenuListing a{font-size:var(--base-font-size)}.user-panel .innerMenuListing .material-symbols-outlined{font-size:var(--font-16)}.innerMenuListing::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.innerMenuListing::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.innerMenuListing::-webkit-scrollbar-thumb{background-color:#a9a9a9}.navMenuList::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.navMenuList::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.navMenuList::-webkit-scrollbar-thumb{background-color:#a9a9a9}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.Title }, { type: BuildTimeService }, { type: i4.DatePipe }, { type: DataStoreService }]; } });

class PageHeaderComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    headerEvent;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.headerEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
            this._storeservice.setData('AUTHSERVICE', val.AUTHSERVICE);
            this._storeservice.setData('APPSERVICE', val.APPSERVICE);
            this._storeservice.setData('PAGESSERVICE', val.PAGESSERVICE);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageHeaderComponent, selector: "lib-page-header", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", headerEvent: "headerEvent" }, ngImport: i0, template: `<lib-header></lib-header>`, isInline: true, dependencies: [{ kind: "component", type: HeaderComponent, selector: "lib-header" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-page-header', template: `<lib-header></lib-header>` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], headerEvent: [{
                type: Input
            }] } });

class PrimengModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule], exports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule, CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule,
            SidebarModule,
            PanelModule,
            DragDropModule,
            AutoCompleteModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule,
                        PanelModule,
                        DragDropModule,
                        AutoCompleteModule,
                    ],
                    exports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule,
                        SidebarModule,
                        PanelModule,
                        DragDropModule,
                        AutoCompleteModule,
                    ]
                }]
        }] });

class MaterialUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule], exports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule, CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ],
                    exports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ]
                }]
        }] });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsPageHeaderModule {
    constructor() {
        console.log('PICSPageHeaderModule Called');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsPageHeaderModule, declarations: [HeaderComponent], imports: [CommonModule,
            PrimengModule,
            MaterialUIModule,
            ReactiveFormsModule,
            AlertModule], exports: [HeaderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPageHeaderModule, imports: [CommonModule,
            PrimengModule,
            MaterialUIModule,
            ReactiveFormsModule,
            AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HeaderComponent
                    ],
                    imports: [
                        CommonModule,
                        PrimengModule,
                        MaterialUIModule,
                        ReactiveFormsModule,
                        AlertModule
                    ],
                    exports: [
                        HeaderComponent
                    ]
                }]
        }], ctorParameters: function () { return []; } });

class PageHeaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderModule, declarations: [PageHeaderComponent], imports: [CommonModule,
            PicsPageHeaderModule], exports: [PageHeaderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            PicsPageHeaderModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageHeaderComponent
                    ],
                    imports: [
                        CommonModule,
                        PicsPageHeaderModule
                    ],
                    exports: [
                        PageHeaderComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of page-header
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PageHeaderComponent, PageHeaderModule, PageHeaderService$1 as PageHeaderService };
//# sourceMappingURL=pics-core-page-header.mjs.map
