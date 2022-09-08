import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzDebouncePipe {
    constructor(changeDetector, zone) {
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.currentValue = null;
        this.transformValue = null;
        this.timeoutHandle = -1;
    }
    transform(value, debounceTime) {
        if (this.currentValue == null) {
            this.currentValue = value;
            return value;
        }
        if (this.currentValue === value) {
            // there is no value that needs debouncing at this point
            clearTimeout(this.timeoutHandle);
            return value;
        }
        if (this.transformValue !== value) {
            // there is a new value that needs to be debounced
            this.transformValue = value;
            clearTimeout(this.timeoutHandle);
            const handler = setTimeout(() => {
                this.zone.run(() => {
                    this.currentValue = this.transformValue;
                    this.transformValue = null;
                    this.changeDetector.markForCheck();
                });
            }, typeof debounceTime == 'number' ? debounceTime : 500);
            this.timeoutHandle = handler;
        }
        return this.currentValue;
    }
}
EzDebouncePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzDebouncePipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Pipe });
EzDebouncePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzDebouncePipe, name: "ezDebounce", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzDebouncePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezDebounce', pure: false }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotZGVib3VuY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2V6LXBpcGVzLWFuZ3VsYXIvc3JjL2xpYi9lei1kZWJvdW5jZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBNkIsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHL0UsTUFBTSxPQUFPLGNBQWM7SUFNeEIsWUFDWSxjQUFpQyxFQUNqQyxJQUFZO1FBRFosbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQVE7UUFOaEIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztJQUtoQyxDQUFDO0lBRUosU0FBUyxDQUFDLEtBQVUsRUFBRSxZQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUM3Qix3REFBd0Q7WUFDeEQsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLLEVBQUU7WUFDL0Isa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO29CQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFLE9BQU8sWUFBWSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQTRCLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7MkdBbkNTLGNBQWM7eUdBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixJQUFJO21CQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2V6RGVib3VuY2UnLCBwdXJlOiBmYWxzZX0pXHJcbmV4cG9ydCBjbGFzcyBFekRlYm91bmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgcHJpdmF0ZSBjdXJyZW50VmFsdWU6IGFueSA9IG51bGw7XHJcbiAgIHByaXZhdGUgdHJhbnNmb3JtVmFsdWU6IGFueSA9IG51bGw7XHJcbiAgIHByaXZhdGUgdGltZW91dEhhbmRsZTogbnVtYmVyID0gLTE7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICkge31cclxuXHJcbiAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkZWJvdW5jZVRpbWU/OiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAvLyB0aGVyZSBpcyBubyB2YWx1ZSB0aGF0IG5lZWRzIGRlYm91bmNpbmcgYXQgdGhpcyBwb2ludFxyXG4gICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xyXG4gICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgIC8vIHRoZXJlIGlzIGEgbmV3IHZhbHVlIHRoYXQgbmVlZHMgdG8gYmUgZGVib3VuY2VkXHJcbiAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpO1xyXG4gICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMudHJhbnNmb3JtVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0sIHR5cGVvZiBkZWJvdW5jZVRpbWUgPT0gJ251bWJlcicgPyBkZWJvdW5jZVRpbWUgOiA1MDApO1xyXG4gICAgICAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IGhhbmRsZXIgYXMgdW5rbm93biBhcyBudW1iZXI7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XHJcbiAgIH1cclxufSJdfQ==