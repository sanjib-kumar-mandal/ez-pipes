import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzMathPipe {
    transform(value, method, withNumber) {
        if (!value)
            return '';
        if (method === 'sqrt') {
            return Math.sqrt(value);
        }
        else if (method === 'pow') {
            return Math.pow(value, withNumber ?? value);
        }
        else if (method === 'round') {
            return Math.round(value);
        }
        else if (method === 'ceil') {
            return Math.ceil(value);
        }
        else if (method === 'floor') {
            return Math.floor(value);
        }
        else if (method === 'trunc') {
            return Math.trunc(value);
        }
        else if (method === 'abs') {
            return Math.abs(value);
        }
        else if (method === 'fahrenheit2celsius') {
            return ((5 / 9) * (value - 32)) + ' ℃';
        }
        else if (method === 'celsius2fahrenheit') {
            return ((value - 32) * 5 / 9) + ' °F';
        }
        return value;
    }
}
EzMathPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzMathPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzMathPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzMathPipe, name: "ezMath" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzMathPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezMath' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotbWF0aC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXotcGlwZXMtYW5ndWxhci9zcmMvbGliL2V6LW1hdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEQsTUFBTSxPQUFPLFVBQVU7SUFFbkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUF5QixFQUFFLFVBQW1CO1FBQ25FLElBQUcsQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBRyxNQUFNLEtBQUssTUFBTSxFQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFLLElBQUcsTUFBTSxLQUFLLEtBQUssRUFBQztZQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQztTQUMvQzthQUFNLElBQUcsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFHLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU0sSUFBRyxNQUFNLEtBQUssT0FBTyxFQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjthQUFNLElBQUcsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFHLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBRyxNQUFNLEtBQUssb0JBQW9CLEVBQUU7WUFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO1NBQ3hDO2FBQU0sSUFBRyxNQUFNLEtBQUssb0JBQW9CLEVBQUU7WUFDdkMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDekM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzt1R0F4QlEsVUFBVTtxR0FBVixVQUFVOzJGQUFWLFVBQVU7a0JBRHRCLElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdGhPcGVyYXRpb25UeXBlIH0gZnJvbSBcIi4vZXotcGlwZXMtYW5ndWxhci50eXBlXCI7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2V6TWF0aCd9KVxyXG5leHBvcnQgY2xhc3MgRXpNYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBtZXRob2Q6IE1hdGhPcGVyYXRpb25UeXBlLCB3aXRoTnVtYmVyPzogbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgICAgICBpZighdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgICBpZihtZXRob2QgPT09ICdzcXJ0Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQodmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIGlmKG1ldGhvZCA9PT0gJ3Bvdycpe1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codmFsdWUsIHdpdGhOdW1iZXIgPz8gdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdyb3VuZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdjZWlsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYobWV0aG9kID09PSAnZmxvb3InKXtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICd0cnVuYycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmModmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdhYnMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ2ZhaHJlbmhlaXQyY2Vsc2l1cycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoNSAvIDkpICogKHZhbHVlIC0gMzIpKSsnIOKEgyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ2NlbHNpdXMyZmFocmVuaGVpdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgodmFsdWUgLSAzMikgKiA1IC8gOSkgKyAnIMKwRic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==