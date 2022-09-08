import { ChangeDetectorRef, NgZone, PipeTransform } from "@angular/core";
import * as i0 from "@angular/core";
export declare class EzTypingPipe implements PipeTransform {
    private changeDetector;
    private zone;
    private typed;
    private target;
    private currentIndex;
    private timeoutHandle;
    constructor(changeDetector: ChangeDetectorRef, zone: NgZone);
    transform(value: string, mintypingSpeed?: number): any;
    private typeNextCharacter;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzTypingPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzTypingPipe, "ezTyping", false>;
}
