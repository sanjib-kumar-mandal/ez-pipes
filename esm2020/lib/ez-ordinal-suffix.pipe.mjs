import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzOrdinalSuffixPipe {
    transform(i) {
        const j = i % 10, k = i % 100;
        if (j === 1 && k !== 11) {
            return i + 'st';
        }
        if (j === 2 && k !== 12) {
            return i + 'nd';
        }
        if (j === 3 && k !== 13) {
            return i + 'rd';
        }
        return i + 'th';
    }
}
EzOrdinalSuffixPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzOrdinalSuffixPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, name: "ezOrdinalSuffix" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'ezOrdinalSuffix'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotb3JkaW5hbC1zdWZmaXgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2V6LXBpcGVzLWFuZ3VsYXIvc3JjL2xpYi9lei1vcmRpbmFsLXN1ZmZpeC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzVCLFNBQVMsQ0FBQyxDQUFTO1FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDWixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Z0hBZFEsbUJBQW1COzhHQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFIL0IsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2V6T3JkaW5hbFN1ZmZpeCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV6T3JkaW5hbFN1ZmZpeFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGogPSBpICUgMTAsXHJcbiAgICAgICAgICAgIGsgPSBpICUgMTAwO1xyXG4gICAgICAgIGlmIChqID09PSAxICYmIGsgIT09IDExKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpICsgJ3N0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPT09IDIgJiYgayAhPT0gMTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkgKyAnbmQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaiA9PT0gMyAmJiBrICE9PSAxMykge1xyXG4gICAgICAgICAgICByZXR1cm4gaSArICdyZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpICsgJ3RoJztcclxuICAgIH1cclxufSJdfQ==