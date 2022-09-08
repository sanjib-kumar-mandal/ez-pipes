import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class EzTextPipe {
    transform(value, format) {
        if ([null, '', undefined, NaN].includes(value))
            return value; // terminate immediately
        if (format === 'lowercase') {
            return value.toLowerCase();
        }
        else if (format === 'uppercase') {
            return value.toUpperCase();
        }
        else if (format === 'camelcase') {
            return value.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        }
        else if (format === 'capitalize') {
            return value.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        }
        else if (format === 'reverse') {
            return value.split("").reverse().join("");
        }
        return value;
    }
}
EzTextPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzTextPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzTextPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzTextPipe, name: "ezText" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzTextPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezText' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotdGV4dC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXotcGlwZXMtYW5ndWxhci9zcmMvbGliL2V6LXRleHQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEQsTUFBTSxPQUFPLFVBQVU7SUFFbkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUFtQjtRQUN4QyxJQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsd0JBQXdCO1FBQ3JGLElBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QjthQUFNLElBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QjthQUFNLElBQUksTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsVUFBUyxJQUFJLEVBQUUsS0FBSztnQkFDNUQsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBRyxNQUFNLEtBQUssWUFBWSxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEc7YUFBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7O3VHQWxCUSxVQUFVO3FHQUFWLFVBQVU7MkZBQVYsVUFBVTtrQkFEdEIsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dEZvcm1hdHMgfSBmcm9tIFwiLi9lei1waXBlcy1hbmd1bGFyLnR5cGVcIjtcclxuXHJcbkBQaXBlKHtuYW1lOiAnZXpUZXh0J30pXHJcbmV4cG9ydCBjbGFzcyBFelRleHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogVGV4dEZvcm1hdHMpIHtcclxuICAgICAgICBpZihbbnVsbCwgJycsIHVuZGVmaW5lZCwgTmFOXS5pbmNsdWRlcyh2YWx1ZSkpIHJldHVybiB2YWx1ZTsgLy8gdGVybWluYXRlIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgaWYoZm9ybWF0ID09PSAnbG93ZXJjYXNlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAndXBwZXJjYXNlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2NhbWVsY2FzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3KS9nLCBmdW5jdGlvbih3b3JkLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwID8gd29yZC50b0xvd2VyQ2FzZSgpIDogd29yZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgIH0pLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdjYXBpdGFsaXplJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLm1hcChzID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSkuam9pbignICcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=