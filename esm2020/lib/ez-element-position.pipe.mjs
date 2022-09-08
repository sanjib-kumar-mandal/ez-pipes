import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzElementPositionPipe {
    transform(value, xLerp = 1, yLerp = 1) {
        if (value != null) {
            const boundingRect = value.getBoundingClientRect();
            return {
                x: boundingRect.left + xLerp * boundingRect.width,
                y: boundingRect.top + yLerp * boundingRect.height,
            };
        }
        else {
            return null;
        }
    }
}
EzElementPositionPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzElementPositionPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, name: "ezElementPosition" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezElementPosition', pure: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotZWxlbWVudC1wb3NpdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXotcGlwZXMtYW5ndWxhci9zcmMvbGliL2V6LWVsZW1lbnQtcG9zaXRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLHFCQUFxQjtJQUMvQixTQUFTLENBQUMsS0FBa0IsRUFBRSxRQUFnQixDQUFDLEVBQUUsUUFBZ0IsQ0FBQztRQUM5RCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNuRCxPQUFPO2dCQUNILENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSztnQkFDakQsQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNO2FBQ3BELENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7O2tIQVhTLHFCQUFxQjtnSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoe25hbWU6ICdlekVsZW1lbnRQb3NpdGlvbicsIHB1cmU6IHRydWV9KVxyXG5leHBvcnQgY2xhc3MgRXpFbGVtZW50UG9zaXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgIHRyYW5zZm9ybSh2YWx1ZTogSFRNTEVsZW1lbnQsIHhMZXJwOiBudW1iZXIgPSAxLCB5TGVycDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB2YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICB4OiBib3VuZGluZ1JlY3QubGVmdCArIHhMZXJwICogYm91bmRpbmdSZWN0LndpZHRoLFxyXG4gICAgICAgICAgICAgICB5OiBib3VuZGluZ1JlY3QudG9wICsgeUxlcnAgKiBib3VuZGluZ1JlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbn0iXX0=