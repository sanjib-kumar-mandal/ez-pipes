import { PipeTransform } from "@angular/core";
import { TextFormats } from "./ez-pipes-angular.type";
import * as i0 from "@angular/core";
export declare class EzTextPipe implements PipeTransform {
    transform(value: string, format: TextFormats): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EzTextPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EzTextPipe, "ezText", false>;
}
