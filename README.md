# Ez Pipes Angular
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Instalation

```
npm i ez-pipes --save
```

## Implementation
### Angular

```
@NgModule({
    declarations: [
        ...
    ],
    imports: [
        ...
        EzPipesModule
    ],
    providers: [
        ...
    ]
})
```

## Available Pipes

1. New Pipes
   - EzNumberPipe
     - Options
       - comma-separate
       - abbreviate
       - dec2bin
       - dec2hex
       - bin2hex
       - 1.0-0
       - 1.1-1
       - 1.2-2
       - 1.3-3
   - EzCurrencyPipe
     - Options
       - currencycode2Symbol
       - currencycode2country
   - EzTextPipe
     - Options
       - lowercase
       - uppercase
       - camelcase
       - capitalize
       - reverse
   - EzDebouncePipe
     - Option
       - `debounceTime` in `number`
   - EzDefaultPipe
     - Option
       - `defaultValue` could be `any`
   - EzOrdinalSuffixPipe
     - Value - `number`
   - EzWordcountPipe
     - Value - `string`
   - EzElementPositionPipe
     - Returns - `{x: XXXX.XXXX, y: XXXX.XXXX}` | `null`
   - EzTypingPipe
     - Returns - Typed text
   - EzMathPipe
     - Returns - Calculated Value
     - Options
       - sqrt
       - pow - need a `number` as value
       - round
       - ceil
       - floor
       - trunc
       - abs
       - fahrenheit2celsius
       - celsius2fahrenheit

2. Angular built in pipes [View Doc](https://angular.io/api?type=pipe)
   - CurrencyPipe
   - DatePipe
   - DecimalPipe
   - PercentPipe
   - LowerCasePipe
   - UpperCasePipe
   - SlicePipe
   - JsonPipe
   - AsyncPipe
   - I18nPluralPipe
   - I18nSelectPipe
   - KeyValuePipe
   - TitleCasePipe
