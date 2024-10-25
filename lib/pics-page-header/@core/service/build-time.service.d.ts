import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class BuildTimeService {
    private http;
    constructor(http: HttpClient);
    getBuildTime(): import("rxjs").Observable<{
        buildTime: string;
        buildNumber: string;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BuildTimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BuildTimeService>;
}
