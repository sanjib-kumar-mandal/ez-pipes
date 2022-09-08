import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzTypingPipe {
    constructor(changeDetector, zone) {
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.typed = '';
        this.target = '';
        this.currentIndex = -1;
        this.timeoutHandle = -1;
    }
    transform(value, mintypingSpeed = 30) {
        if (this.target !== value) {
            clearTimeout(this.timeoutHandle);
            this.typed = '';
            this.currentIndex = -1;
            this.target = value;
            this.typeNextCharacter(mintypingSpeed);
        }
        return this.typed;
    }
    typeNextCharacter(mintypingSpeed) {
        this.currentIndex++;
        this.typed = this.target.substr(0, this.currentIndex);
        this.changeDetector.markForCheck();
        if (this.typed !== this.target) {
            const time = Math.round(Math.random() * 70) + mintypingSpeed;
            this.timeoutHandle = setTimeout(() => {
                this.zone.run(() => this.typeNextCharacter(mintypingSpeed));
            }, time);
        }
    }
}
EzTypingPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzTypingPipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Pipe });
EzTypingPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzTypingPipe, name: "ezTyping", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzTypingPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezTyping', pure: false }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotdHlwaW5nLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lei1waXBlcy1hbmd1bGFyL3NyYy9saWIvZXotdHlwaW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE2QixJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUcvRSxNQUFNLE9BQU8sWUFBWTtJQU10QixZQUNZLGNBQWlDLEVBQ2pDLElBQVk7UUFEWixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVBoQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixrQkFBYSxHQUFRLENBQUMsQ0FBQyxDQUFDO0lBSUwsQ0FBQztJQUU1QixTQUFTLENBQUMsS0FBYSxFQUFFLGlCQUF5QixFQUFFO1FBQ2pELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU8saUJBQWlCLENBQUMsY0FBc0I7UUFDL0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNUO0lBQ0YsQ0FBQzs7eUdBL0JTLFlBQVk7dUdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUR4QixJQUFJO21CQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2V6VHlwaW5nJywgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgRXpUeXBpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgIHByaXZhdGUgdHlwZWQ6IHN0cmluZyA9ICcnO1xyXG4gICBwcml2YXRlIHRhcmdldDogc3RyaW5nID0gJyc7XHJcbiAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgcHJpdmF0ZSB0aW1lb3V0SGFuZGxlOiBhbnkgPSAtMTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtaW50eXBpbmdTcGVlZDogbnVtYmVyID0gMzApOiBhbnkge1xyXG4gICAgICBpZiAodGhpcy50YXJnZXQgIT09IHZhbHVlKSB7XHJcbiAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKTtcclxuICAgICAgIHRoaXMudHlwZWQgPSAnJztcclxuICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XHJcbiAgICAgICB0aGlzLnRhcmdldCA9IHZhbHVlO1xyXG4gICAgICAgdGhpcy50eXBlTmV4dENoYXJhY3RlcihtaW50eXBpbmdTcGVlZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudHlwZWQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIHByaXZhdGUgdHlwZU5leHRDaGFyYWN0ZXIobWludHlwaW5nU3BlZWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIHRoaXMudHlwZWQgPSB0aGlzLnRhcmdldC5zdWJzdHIoMCwgdGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGlmICh0aGlzLnR5cGVkICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICBjb25zdCB0aW1lID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNzApICsgbWludHlwaW5nU3BlZWQ7XHJcbiAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnR5cGVOZXh0Q2hhcmFjdGVyKG1pbnR5cGluZ1NwZWVkKSk7XHJcbiAgICAgIH0sdGltZSk7XHJcbiAgICB9XHJcbiAgIH1cclxufSJdfQ==