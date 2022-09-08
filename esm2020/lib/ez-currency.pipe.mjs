import { Pipe } from "@angular/core";
import { CountriesList } from "./ez-pipes-angular.type";
import * as i0 from "@angular/core";
export class EzCurrencyPipe {
    transform(value, format) {
        if (['', null, undefined, NaN].includes(value))
            return value;
        const cur = CountriesList;
        if (format === 'currencycode2Symbol') {
            return cur[value] ? cur[value].currency.symbol : value;
        }
        else if (format === 'currencycode2country') {
            return cur[value] ? cur[value].country.name : value;
        }
        else {
            return value;
        }
    }
}
EzCurrencyPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzCurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzCurrencyPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzCurrencyPipe, name: "ezCurrency" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzCurrencyPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezCurrency' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2V6LXBpcGVzLWFuZ3VsYXIvc3JjL2xpYi9lei1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0seUJBQXlCLENBQUM7O0FBSTNFLE1BQU0sT0FBTyxjQUFjO0lBRXZCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBeUI7UUFDM0MsSUFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM1RCxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBRyxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDakMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDMUQ7YUFBTSxJQUFJLE1BQU0sS0FBSyxzQkFBc0IsRUFBRTtZQUMxQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN2RDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzsyR0FaUSxjQUFjO3lHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsSUFBSTttQkFBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ291bnRyaWVzTGlzdCwgQ291dHJ5Q29udmVydFR5cGUgfSBmcm9tIFwiLi9lei1waXBlcy1hbmd1bGFyLnR5cGVcIjtcclxuXHJcblxyXG5AUGlwZSh7bmFtZTogJ2V6Q3VycmVuY3knfSlcclxuZXhwb3J0IGNsYXNzIEV6Q3VycmVuY3lQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdDogQ291dHJ5Q29udmVydFR5cGUpIHtcclxuICAgICAgICBpZihbJycsIG51bGwsIHVuZGVmaW5lZCwgTmFOXS5pbmNsdWRlcyh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcclxuICAgICAgICBjb25zdCBjdXIgPSBDb3VudHJpZXNMaXN0O1xyXG4gICAgICAgIGlmKGZvcm1hdCA9PT0gJ2N1cnJlbmN5Y29kZTJTeW1ib2wnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJbdmFsdWVdID8gY3VyW3ZhbHVlXS5jdXJyZW5jeS5zeW1ib2wgOiB2YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2N1cnJlbmN5Y29kZTJjb3VudHJ5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyW3ZhbHVlXSA/IGN1clt2YWx1ZV0uY291bnRyeS5uYW1lIDogdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=