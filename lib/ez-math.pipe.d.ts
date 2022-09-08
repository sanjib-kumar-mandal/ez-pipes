import { PipeTransform } from "@angular/core";
import { MathOperationType } from "./ez-pipes-angular.type";
import * as i0 from "@angular/core";
export declare class EzMathPipe implements PipeTransform {
    transform(value: number, method: MathOperationType, withNumber?: number): string | number;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzMathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzMathPipe, "ezMath", false>;
}
