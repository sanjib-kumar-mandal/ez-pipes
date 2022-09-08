import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EzWordcountPipe {
    transform(value) {
        return value ? value.trim().split(/\s+/).length : 0;
    }
}
EzWordcountPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzWordcountPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzWordcountPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzWordcountPipe, name: "ezWordCount" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzWordcountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'ezWordCount'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotd29yZC1jb3VudC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXotcGlwZXMtYW5ndWxhci9zcmMvbGliL2V6LXdvcmQtY291bnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7NEdBSFUsZUFBZTswR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSDNCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdleldvcmRDb3VudCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV6V29yZGNvdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmxlbmd0aCA6IDA7XHJcbiAgfVxyXG59Il19