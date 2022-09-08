import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EzNumberPipe {
    transform(value, format) {
        // This may be in string format
        const number = Number(value); // convert into number
        if ([null, '', undefined, NaN].includes(number))
            return; // terminate immediately
        // abbreviate number format
        if (format === 'abbreviate') {
            if (number >= 1000) {
                const suffixes = ["", "k", "m", "b", "t"];
                const suffixNum = Math.floor(("" + number).length / 3);
                let shortValue;
                for (var precision = 2; precision >= 1; precision--) {
                    shortValue = parseFloat((suffixNum != 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(precision));
                    var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                    if (dotLessShortValue.length <= 2) {
                        break;
                    }
                }
                if (shortValue && shortValue % 1 != 0)
                    shortValue = shortValue.toFixed(1);
                return shortValue + suffixes[suffixNum];
            }
            return number;
        }
        else if (format === '1.0-0') {
            return number.toFixed(0);
        }
        else if (format === '1.1-1') {
            return number.toFixed(1);
        }
        else if (format === '1.2-2') {
            return number.toFixed(2);
        }
        else if (format === '1.3-3') {
            return number.toFixed(3);
        }
        else if (format === 'comma-separate') {
            return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (format === 'dec2bin') {
            return number.toString(2);
        }
        else if (format === 'dec2hex') {
            return number.toString(16);
        }
        else if (format === 'bin2hex') {
            return parseInt(value.toString(), 2).toString(16);
        }
        else {
            return number;
        }
    }
}
EzNumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzNumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzNumberPipe, name: "ezNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzNumberPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezNumber' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lei1waXBlcy1hbmd1bGFyL3NyYy9saWIvZXotbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxZQUFZO0lBRXZCLFNBQVMsQ0FBQyxLQUFzQixFQUFFLE1BQXFCO1FBQ3JELCtCQUErQjtRQUMvQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDcEQsSUFBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPLENBQUMsd0JBQXdCO1FBQ2hGLDJCQUEyQjtRQUMzQixJQUFHLE1BQU0sS0FBSyxZQUFZLEVBQUU7WUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsR0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQ3JELElBQUksVUFBVSxDQUFDO2dCQUNmLEtBQUssSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUU7b0JBQ2pELFVBQVUsR0FBRyxVQUFVLENBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEgsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3hFLElBQUksaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFBRSxNQUFNO3FCQUFFO2lCQUNoRDtnQkFDRCxJQUFJLFVBQVUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sVUFBVSxHQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN2QztZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFHLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBRyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjthQUFNLElBQUcsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFHLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBRyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7WUFDckMsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFFO2FBQU0sSUFBRyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzlCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUcsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM5QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFHLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7O3lHQXhDVSxZQUFZO3VHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdW1iZXJGb3JtYXRzIH0gZnJvbSAnLi9lei1waXBlcy1hbmd1bGFyLnR5cGUnO1xuXG5AUGlwZSh7bmFtZTogJ2V6TnVtYmVyJ30pXG5leHBvcnQgY2xhc3MgRXpOdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZvcm1hdDogTnVtYmVyRm9ybWF0cykge1xuICAgIC8vIFRoaXMgbWF5IGJlIGluIHN0cmluZyBmb3JtYXRcbiAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIodmFsdWUpOyAvLyBjb252ZXJ0IGludG8gbnVtYmVyXG4gICAgaWYoW251bGwsICcnLCB1bmRlZmluZWQsIE5hTl0uaW5jbHVkZXMobnVtYmVyKSkgcmV0dXJuOyAvLyB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgICAvLyBhYmJyZXZpYXRlIG51bWJlciBmb3JtYXRcbiAgICBpZihmb3JtYXQgPT09ICdhYmJyZXZpYXRlJykge1xuICAgICAgaWYgKG51bWJlciA+PSAxMDAwKSB7XG4gICAgICAgIGNvbnN0IHN1ZmZpeGVzID0gW1wiXCIsIFwia1wiLCBcIm1cIiwgXCJiXCIsXCJ0XCJdO1xuICAgICAgICBjb25zdCBzdWZmaXhOdW0gPSBNYXRoLmZsb29yKCAoXCJcIitudW1iZXIpLmxlbmd0aC8zICk7XG4gICAgICAgIGxldCBzaG9ydFZhbHVlO1xuICAgICAgICBmb3IgKHZhciBwcmVjaXNpb24gPSAyOyBwcmVjaXNpb24gPj0gMTsgcHJlY2lzaW9uLS0pIHtcbiAgICAgICAgICAgIHNob3J0VmFsdWUgPSBwYXJzZUZsb2F0KCAoc3VmZml4TnVtICE9IDAgPyAobnVtYmVyIC8gTWF0aC5wb3coMTAwMCxzdWZmaXhOdW0pICkgOiBudW1iZXIpLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpO1xuICAgICAgICAgICAgdmFyIGRvdExlc3NTaG9ydFZhbHVlID0gKHNob3J0VmFsdWUgKyAnJykucmVwbGFjZSgvW15hLXpBLVogMC05XSsvZywnJyk7XG4gICAgICAgICAgICBpZiAoZG90TGVzc1Nob3J0VmFsdWUubGVuZ3RoIDw9IDIpIHsgYnJlYWs7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvcnRWYWx1ZSAmJiBzaG9ydFZhbHVlICUgMSAhPSAwKSAgc2hvcnRWYWx1ZSA9IHNob3J0VmFsdWUudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIHNob3J0VmFsdWUrc3VmZml4ZXNbc3VmZml4TnVtXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJzEuMC0wJykge1xuICAgICAgcmV0dXJuIG51bWJlci50b0ZpeGVkKDApO1xuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICcxLjEtMScpIHtcbiAgICAgIHJldHVybiBudW1iZXIudG9GaXhlZCgxKTtcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnMS4yLTInKSB7XG4gICAgICByZXR1cm4gbnVtYmVyLnRvRml4ZWQoMik7XG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJzEuMy0zJykge1xuICAgICAgcmV0dXJuIG51bWJlci50b0ZpeGVkKDMpO1xuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdjb21tYS1zZXBhcmF0ZScpIHtcbiAgICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPzwhXFwuXFxkKikoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2RlYzJiaW4nKSB7XG4gICAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKDIpO1xuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdkZWMyaGV4Jykge1xuICAgICAgcmV0dXJuIG51bWJlci50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2JpbjJoZXgnKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwyKS50b1N0cmluZygxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuICB9XG59XG4iXX0=