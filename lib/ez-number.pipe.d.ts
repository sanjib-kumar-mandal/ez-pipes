import { PipeTransform } from '@angular/core';
import { NumberFormats } from './ez-pipes-angular.type';
import * as i0 from "@angular/core";
export declare class EzNumberPipe implements PipeTransform {
    transform(value: number | string, format: NumberFormats): string | number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzNumberPipe, "ezNumber", false>;
}
