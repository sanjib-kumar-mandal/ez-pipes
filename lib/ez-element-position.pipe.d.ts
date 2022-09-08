import { PipeTransform } from "@angular/core";
import * as i0 from "@angular/core";
export declare class EzElementPositionPipe implements PipeTransform {
    transform(value: HTMLElement, xLerp?: number, yLerp?: number): {
        x: number;
        y: number;
    } | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzElementPositionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzElementPositionPipe, "ezElementPosition", false>;
}
