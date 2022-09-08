import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EzCurrencyPipe } from './ez-currency.pipe';
import { EzDebouncePipe } from './ez-debounce.pipe';
import { EzDefaultPipe } from './ez-default.pipe';
import { EzElementPositionPipe } from './ez-element-position.pipe';
import { EzMathPipe } from './ez-math.pipe';
import { EzNumberPipe } from './ez-number.pipe';
import { EzOrdinalSuffixPipe } from './ez-ordinal-suffix.pipe';
import { EzTextPipe } from './ez-text.pipe';
import { EzTypingPipe } from './ez-typing.pipe';
import { EzWordcountPipe } from './ez-word-count.pipe';
import * as i0 from "@angular/core";
export class EzPipesModule {
}
EzPipesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EzPipesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzPipesModule, declarations: [EzNumberPipe,
        EzCurrencyPipe,
        EzTextPipe,
        EzDebouncePipe,
        EzDefaultPipe,
        EzOrdinalSuffixPipe,
        EzWordcountPipe,
        EzElementPositionPipe,
        EzTypingPipe,
        EzMathPipe], imports: [CurrencyPipe,
        DatePipe,
        DecimalPipe,
        PercentPipe,
        LowerCasePipe,
        UpperCasePipe,
        SlicePipe,
        JsonPipe,
        AsyncPipe,
        I18nPluralPipe,
        I18nSelectPipe,
        KeyValuePipe,
        TitleCasePipe], exports: [CurrencyPipe,
        DatePipe,
        DecimalPipe,
        PercentPipe,
        LowerCasePipe,
        UpperCasePipe,
        SlicePipe,
        JsonPipe,
        AsyncPipe,
        I18nPluralPipe,
        I18nSelectPipe,
        KeyValuePipe,
        TitleCasePipe,
        EzNumberPipe,
        EzCurrencyPipe,
        EzTextPipe,
        EzDebouncePipe,
        EzDefaultPipe,
        EzOrdinalSuffixPipe,
        EzWordcountPipe,
        EzElementPositionPipe,
        EzTypingPipe,
        EzMathPipe] });
EzPipesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzPipesModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EzNumberPipe,
                        EzCurrencyPipe,
                        EzTextPipe,
                        EzDebouncePipe,
                        EzDefaultPipe,
                        EzOrdinalSuffixPipe,
                        EzWordcountPipe,
                        EzElementPositionPipe,
                        EzTypingPipe,
                        EzMathPipe
                    ],
                    imports: [
                        CurrencyPipe,
                        DatePipe,
                        DecimalPipe,
                        PercentPipe,
                        LowerCasePipe,
                        UpperCasePipe,
                        SlicePipe,
                        JsonPipe,
                        AsyncPipe,
                        I18nPluralPipe,
                        I18nSelectPipe,
                        KeyValuePipe,
                        TitleCasePipe
                    ],
                    exports: [
                        CurrencyPipe,
                        DatePipe,
                        DecimalPipe,
                        PercentPipe,
                        LowerCasePipe,
                        UpperCasePipe,
                        SlicePipe,
                        JsonPipe,
                        AsyncPipe,
                        I18nPluralPipe,
                        I18nSelectPipe,
                        KeyValuePipe,
                        TitleCasePipe,
                        EzNumberPipe,
                        EzCurrencyPipe,
                        EzTextPipe,
                        EzDebouncePipe,
                        EzDefaultPipe,
                        EzOrdinalSuffixPipe,
                        EzWordcountPipe,
                        EzElementPositionPipe,
                        EzTypingPipe,
                        EzMathPipe
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXotcGlwZXMtYW5ndWxhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lei1waXBlcy1hbmd1bGFyL3NyYy9saWIvZXotcGlwZXMtYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osUUFBUSxFQUFFLFdBQVcsRUFDckIsY0FBYyxFQUNkLGNBQWMsRUFDZCxRQUFRLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFDckMsV0FBVyxFQUFFLFNBQVMsRUFDdEIsYUFBYSxFQUNiLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUF3RHZELE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBcER0QixZQUFZO1FBQ1osY0FBYztRQUNkLFVBQVU7UUFDVixjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixVQUFVLGFBR1YsWUFBWTtRQUNaLFFBQVE7UUFDUixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixhQUFhO1FBQ2IsU0FBUztRQUNULFFBQVE7UUFDUixTQUFTO1FBQ1QsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYSxhQUdiLFlBQVk7UUFDWixRQUFRO1FBQ1IsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFNBQVM7UUFDVCxRQUFRO1FBQ1IsU0FBUztRQUNULGNBQWM7UUFDZCxjQUFjO1FBQ2QsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLFVBQVU7UUFDVixjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixVQUFVOzJHQUdELGFBQWE7MkZBQWIsYUFBYTtrQkF0RHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osUUFBUTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixhQUFhO3dCQUNiLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osUUFBUTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixhQUFhO3dCQUNiLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLFVBQVU7d0JBQ1YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osVUFBVTtxQkFDWDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBBc3luY1BpcGUsXG4gIEN1cnJlbmN5UGlwZSwgXG4gIERhdGVQaXBlLCBEZWNpbWFsUGlwZSwgXG4gIEkxOG5QbHVyYWxQaXBlLCBcbiAgSTE4blNlbGVjdFBpcGUsIFxuICBKc29uUGlwZSwgS2V5VmFsdWVQaXBlLCBMb3dlckNhc2VQaXBlLCBcbiAgUGVyY2VudFBpcGUsIFNsaWNlUGlwZSwgXG4gIFRpdGxlQ2FzZVBpcGUsIFxuICBVcHBlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFekN1cnJlbmN5UGlwZSB9IGZyb20gJy4vZXotY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBFekRlYm91bmNlUGlwZSB9IGZyb20gJy4vZXotZGVib3VuY2UucGlwZSc7XG5pbXBvcnQgeyBFekRlZmF1bHRQaXBlIH0gZnJvbSAnLi9lei1kZWZhdWx0LnBpcGUnO1xuaW1wb3J0IHsgRXpFbGVtZW50UG9zaXRpb25QaXBlIH0gZnJvbSAnLi9lei1lbGVtZW50LXBvc2l0aW9uLnBpcGUnO1xuaW1wb3J0IHsgRXpNYXRoUGlwZSB9IGZyb20gJy4vZXotbWF0aC5waXBlJztcbmltcG9ydCB7IEV6TnVtYmVyUGlwZSB9IGZyb20gJy4vZXotbnVtYmVyLnBpcGUnO1xuaW1wb3J0IHsgRXpPcmRpbmFsU3VmZml4UGlwZSB9IGZyb20gJy4vZXotb3JkaW5hbC1zdWZmaXgucGlwZSc7XG5pbXBvcnQgeyBFelRleHRQaXBlIH0gZnJvbSAnLi9lei10ZXh0LnBpcGUnO1xuaW1wb3J0IHsgRXpUeXBpbmdQaXBlIH0gZnJvbSAnLi9lei10eXBpbmcucGlwZSc7XG5pbXBvcnQgeyBFeldvcmRjb3VudFBpcGUgfSBmcm9tICcuL2V6LXdvcmQtY291bnQucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV6TnVtYmVyUGlwZSxcbiAgICBFekN1cnJlbmN5UGlwZSxcbiAgICBFelRleHRQaXBlLFxuICAgIEV6RGVib3VuY2VQaXBlLFxuICAgIEV6RGVmYXVsdFBpcGUsXG4gICAgRXpPcmRpbmFsU3VmZml4UGlwZSxcbiAgICBFeldvcmRjb3VudFBpcGUsXG4gICAgRXpFbGVtZW50UG9zaXRpb25QaXBlLFxuICAgIEV6VHlwaW5nUGlwZSxcbiAgICBFek1hdGhQaXBlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDdXJyZW5jeVBpcGUsXG4gICAgRGF0ZVBpcGUsXG4gICAgRGVjaW1hbFBpcGUsXG4gICAgUGVyY2VudFBpcGUsXG4gICAgTG93ZXJDYXNlUGlwZSxcbiAgICBVcHBlckNhc2VQaXBlLFxuICAgIFNsaWNlUGlwZSxcbiAgICBKc29uUGlwZSxcbiAgICBBc3luY1BpcGUsXG4gICAgSTE4blBsdXJhbFBpcGUsXG4gICAgSTE4blNlbGVjdFBpcGUsXG4gICAgS2V5VmFsdWVQaXBlLFxuICAgIFRpdGxlQ2FzZVBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEN1cnJlbmN5UGlwZSxcbiAgICBEYXRlUGlwZSxcbiAgICBEZWNpbWFsUGlwZSxcbiAgICBQZXJjZW50UGlwZSxcbiAgICBMb3dlckNhc2VQaXBlLFxuICAgIFVwcGVyQ2FzZVBpcGUsXG4gICAgU2xpY2VQaXBlLFxuICAgIEpzb25QaXBlLFxuICAgIEFzeW5jUGlwZSxcbiAgICBJMThuUGx1cmFsUGlwZSxcbiAgICBJMThuU2VsZWN0UGlwZSxcbiAgICBLZXlWYWx1ZVBpcGUsXG4gICAgVGl0bGVDYXNlUGlwZSxcbiAgICBFek51bWJlclBpcGUsXG4gICAgRXpDdXJyZW5jeVBpcGUsXG4gICAgRXpUZXh0UGlwZSxcbiAgICBFekRlYm91bmNlUGlwZSxcbiAgICBFekRlZmF1bHRQaXBlLFxuICAgIEV6T3JkaW5hbFN1ZmZpeFBpcGUsXG4gICAgRXpXb3JkY291bnRQaXBlLFxuICAgIEV6RWxlbWVudFBvc2l0aW9uUGlwZSxcbiAgICBFelR5cGluZ1BpcGUsXG4gICAgRXpNYXRoUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV6UGlwZXNNb2R1bGUgeyB9XG4iXX0=