export declare type NumberFormats = 'abbreviate' | 'dec2bin' | 'dec2hex' | '1.0-0' | '1.1-1' | '1.2-2' | '1.3-3' | 'comma-separate' | 'bin2hex';
export declare type TextFormats = 'lowercase' | 'uppercase' | 'camelcase' | 'capitalize' | 'reverse';
export declare type MathOperationType = 'sqrt' | 'pow' | 'round' | 'ceil' | 'floor' | 'trunc' | 'abs' | 'fahrenheit2celsius' | 'celsius2fahrenheit';
export declare type CoutryConvertType = 'currencycode2Symbol' | 'currencycode2country';
export interface Countries {
    name: string;
    wikipedia: string;
    currency: CountriesCurrency;
    country: CountriesCountry;
}
interface CountriesCurrency {
    centralBank: string;
    code: string;
    name: string;
    symbol: string;
}
interface CountriesCountry {
    capital: string;
    codes: CountriesCountryCodes;
    dialCode: string;
    flag: string;
    language: CountriesCountryLanguage;
    name: string;
}
interface CountriesCountryCodes {
    two: string;
    three: string;
}
interface CountriesCountryLanguage {
    name: string;
    script: string;
}
export declare const CountriesList: {
    [key: string]: Countries;
};
export {};
