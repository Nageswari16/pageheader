import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DynamicTabPageConfig } from '../urls/dynamic-tab-page-url.config';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngxf-uploader";
import * as i2 from "./data-store.service";
export class DynamicTabPageService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3BhZ2UtaGVhZGVyL3NyYy9saWIvcGljcy1wYWdlLWhlYWRlci9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBTXZDLE1BQU0sT0FBTyxxQkFBcUI7SUFJWjtJQUE0QztJQUhoRSxXQUFXLENBQUk7SUFDUCxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDM0QsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsWUFBb0IsYUFBa0MsRUFBVSxhQUErQjtRQUEzRSxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRCxzQkFBc0I7SUFDekIsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFjLEVBQUUsVUFBb0IsRUFBRSxNQUFlO1FB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LElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RyxDQUFDO3dHQXhHVSxxQkFBcUI7NEdBQXJCLHFCQUFxQixjQUZwQixNQUFNOzs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VDb25maWcgfSBmcm9tICcuLi91cmxzL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IE5neGZVcGxvYWRlclNlcnZpY2UgfSBmcm9tICduZ3hmLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljVGFiUGFnZVNlcnZpY2Uge1xyXG4gIGh0dHBTZXJ2aWNlOmFueVxyXG4gIHByaXZhdGUgaXNQYWdlRGVzaWduID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgb2JzZXJ2ZVBhZ2UgPSB0aGlzLmlzUGFnZURlc2lnbi5hc09ic2VydmFibGUoKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwbG9hZFNlcnZpY2U6IE5neGZVcGxvYWRlclNlcnZpY2UsIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3BpY3MtY29yZSBwYWdlaGVhZGVyJylcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZVBhZ2UodGFiUGFnZUlkOiBhbnksIHBlcm1pc3Npb24/OiBib29sZWFuLCBhY3Rpb24/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRBY3RpdmVQYWdlLnJlcGxhY2UoJ3tpZH0nLCB0YWJQYWdlSWQpfSR7cGVybWlzc2lvblxyXG4gICAgICAgID8gJz9hcHBseVBlcm1pc3Npb25zPXRydWUnIDogJyd9JHtwZXJtaXNzaW9uICYmIGFjdGlvbiA9PT0gJ2FkZCdcclxuICAgICAgICAgID8gJyZhY3Rpb249YWRkJyA6ICcnfSR7cGVybWlzc2lvbiAmJiBhY3Rpb24gPT09ICdlZGl0J1xyXG4gICAgICAgICAgICA/ICcmYWN0aW9uPWVkaXQnIDogJyd9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldER5bmFtaWNQYWdlKHBhZ2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfS8ke3BhZ2VJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VCeUlkKHBhZ2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlQnlJZC5yZXBsYWNlKCd7aWR9JywgcGFnZUlkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0QnlTb3VyY2VJZChzb3VyY2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuTmFycmF0aXZlLmdldEluY2lkZW50TGlzdEJ5SWQucmVwbGFjZSgne2lkfScsIHNvdXJjZUlkKSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRSZXNwb25zZUJ5UGFnZUlkKHJlc3BvbnNlSWQ6IGFueSwgcGFnZUlkOiBhbnkpIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAvLyAgICAgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRSZXNwb25zZUJ5UGFnZUlkXHJcbiAgLy8gICAgICAgLnJlcGxhY2UoJ3tyZXNwb25zZUlkfScsIHJlc3BvbnNlSWQpXHJcbiAgLy8gICAgICAgLnJlcGxhY2UoJ3twYWdlSWR9JywgcGFnZUlkKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIGNyZWF0ZUZvcm1SZXNwb25zZShpZDogYW55LCByZXF1ZXN0RGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcclxuICAgICAgaWRcclxuICAgICAgICA/IER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UudXBkYXRlRm9ybVJlc3BvbnNlXHJcbiAgICAgICAgOiBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmNyZWF0ZUZvcm1SZXNwb25zZSxcclxuICAgICAgcmVxdWVzdERhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyU3VydmV5KGhpc3RvcnksIElkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXHJcbiAgICAgIER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50Lk5vdGlmaWNhdGlvbi5jcmVhdGVTdXJ2ZXlDb25maWdcclxuICAgICAgICAucmVwbGFjZSgne2lkfScsIGhpc3Rvcnk/LnN0YXRlPy51c2Vyc3VydmV5aWQpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tzdGF0dXN9JywgJ0NvbXBsZXRlZCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3twYWdlZGF0YWlkfScsIElkKSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtUmVzcG9uc2UoaWQ6IGFueSwgcmVxdWVzdERhdGE6IGFueSwgRWRpdEdyaWRQYWdlSUQ/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGAke0R5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UucGF0Y2hGb3JtUmVzcG9uc2V9LyR7aWR9P0VkaXRHcmlkUGFnZUlEPSR7RWRpdEdyaWRQYWdlSUR9YCwgcmVxdWVzdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0UmVwb3J0KGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5GaW5hbmNlLmV4cG9ydERvY3VtZW50LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGUoZmlsZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZCh7XHJcbiAgICAgIHVybDogdGhpcy5odHRwU2VydmljZS5iYXNlVXJsICsgJy8nICsgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS51cGxvYWREb2N1bWVudCxcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKClcclxuICAgICAgICAuc2V0KCdjdHlwZScsICdmaWxlJylcclxuICAgICAgICAuc2V0KCd1bmlxdWVpZCcsICc2YjYxYWMxZS0yMjFhLTQ5NWMtOTU3Yi1hZDg1ZjY1YmUyNWEnKVxyXG4gICAgICAgIC5zZXQoJ3JvbGUnLCAncm9sZT1DUF9QVUJMSUMnKSxcclxuICAgICAgZmlsZXM6IGZpbGUsXHJcbiAgICAgIHByb2Nlc3M6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5pcXVlSWQoYXBpOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5GaW5hbmNlLmdldFVuaXF1ZUlkICsgYXBpKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZSkge1xyXG4gICAgdGhpcy5pc1BhZ2VEZXNpZ24ubmV4dChwYWdlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5jcmVhdGVBdHRhY2htZW50LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFlvdXRoU3VtbWFyeURldGFpbHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC55b3V0aFN1bW1hcnkuZ2V0RGV0YWlsc31gLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEFsZXJ0Q291bnQoeW91dGhJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQueW91dGhTdW1tYXJ5LmdldEFsZXJ0Q291bnR9LyR7eW91dGhJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFJpc2tWYWx1ZSh5b3V0aElkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC55b3V0aFN1bW1hcnkuZ2V0Umlza1ZhbHVlfS8ke3lvdXRoSWR9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==