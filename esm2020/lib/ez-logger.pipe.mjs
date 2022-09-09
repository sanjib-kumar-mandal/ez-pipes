import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzLoggerPipe {
    transform(value, shouldLog = true) {
        if (shouldLog) {
            console.log(value);
        }
        return value;
    }
}
EzLoggerPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzLoggerPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, name: "ezLogger" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezLogger' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotbG9nZ2VyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lei1waXBlcy1hbmd1bGFyL3NyYy9saWIvZXotbG9nZ2VyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxZQUFZO0lBQ3JCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsWUFBcUIsSUFBSTtRQUMzQyxJQUFHLFNBQVMsRUFBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzt5R0FOUSxZQUFZO3VHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtuYW1lOiAnZXpMb2dnZXInfSlcclxuZXhwb3J0IGNsYXNzIEV6TG9nZ2VyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHNob3VsZExvZzogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZihzaG91bGRMb2cpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==