import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './@shared/primeng.module';
import { MaterialUIModule } from './@shared/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from './@shared/alert/alert.module';
import * as i0 from "@angular/core";
export class PicsPageHeaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1wYWdlLWhlYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcGFnZS1oZWFkZXIvc3JjL2xpYi9waWNzLXBhZ2UtaGVhZGVyL3BpY3MtcGFnZS1oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMEIsUUFBUSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBa0IzRCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7d0dBSFUsb0JBQW9CO3lHQUFwQixvQkFBb0IsaUJBWjdCLGVBQWUsYUFHZixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsV0FBVyxhQUdYLGVBQWU7eUdBRU4sb0JBQW9CLFlBVDdCLFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixXQUFXOzs0RkFLRixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFDO3dCQUNOLGVBQWU7cUJBQ2hCO2lCQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHJpbWVuZ01vZHVsZSB9IGZyb20gJy4vQHNoYXJlZC9wcmltZW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsVUlNb2R1bGUgfSBmcm9tICcuL0BzaGFyZWQvbWF0ZXJpYWwtdWkubW9kdWxlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIZWFkZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFByaW1lbmdNb2R1bGUsXHJcbiAgICBNYXRlcmlhbFVJTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIEhlYWRlckNvbXBvbmVudFxyXG4gIF19KVxyXG5leHBvcnQgY2xhc3MgUGljc1BhZ2VIZWFkZXJNb2R1bGUgeyBcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgY29uc29sZS5sb2coJ1BJQ1NQYWdlSGVhZGVyTW9kdWxlIENhbGxlZCcpXHJcbiAgfVxyXG59XHJcbiJdfQ==