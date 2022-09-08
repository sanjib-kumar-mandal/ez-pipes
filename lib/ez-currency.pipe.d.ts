import { PipeTransform } from "@angular/core";
import { CoutryConvertType } from "./ez-pipes-angular.type";
import * as i0 from "@angular/core";
export declare class EzCurrencyPipe implements PipeTransform {
    transform(value: any, format: CoutryConvertType): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzCurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzCurrencyPipe, "ezCurrency", false>;
}
