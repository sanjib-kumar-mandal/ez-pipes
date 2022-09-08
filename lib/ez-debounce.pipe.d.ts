import { ChangeDetectorRef, NgZone, PipeTransform } from "@angular/core";
import * as i0 from "@angular/core";
export declare class EzDebouncePipe implements PipeTransform {
    private changeDetector;
    private zone;
    private currentValue;
    private transformValue;
    private timeoutHandle;
    constructor(changeDetector: ChangeDetectorRef, zone: NgZone);
    transform(value: any, debounceTime?: number): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzDebouncePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzDebouncePipe, "ezDebounce", false>;
}
