import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, LowerCasePipe, UpperCasePipe, SlicePipe, JsonPipe, AsyncPipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
export { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';

const CountriesList = {
    "ARS": {
        "name": "Argentina",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "ARS",
            "name": "Argentine peso",
            "centralBank": ""
        },
        "country": {
            "name": "Argentina",
            "capital": "Buenos Aires",
            "flag": "",
            "dialCode": "+54",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "AWG": {
        "name": "Aruba",
        "wikipedia": "",
        "currency": {
            "symbol": "ƒ",
            "code": "AWG",
            "name": "Aruban florin",
            "centralBank": ""
        },
        "country": {
            "name": "Aruba",
            "capital": "Oranjestad",
            "flag": "",
            "dialCode": "+297",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "AUD": {
        "name": "Australia",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "AUD",
            "name": "Australian dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Australia",
            "capital": "Canberra",
            "flag": "",
            "dialCode": "+61",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BSD": {
        "name": "The Bahamas",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "BSD",
            "name": "Bahamian dollar",
            "centralBank": ""
        },
        "country": {
            "name": "The Bahamas",
            "capital": "Nassau",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BBD": {
        "name": "Barbados",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "BBD",
            "name": "Barbados Dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Barbados",
            "capital": "Bridgetown",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BYN": {
        "name": "Belarus",
        "wikipedia": "",
        "currency": {
            "symbol": "Br",
            "code": "BYN",
            "name": "Belarusian rubel",
            "centralBank": ""
        },
        "country": {
            "name": "Belarus",
            "capital": "Minsk",
            "flag": "",
            "dialCode": "+375",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BMD": {
        "name": "Bermuda",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "BMD",
            "name": "Bermuda Dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Bermuda",
            "capital": "Hamilton",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BOB": {
        "name": "Bolivia",
        "wikipedia": "",
        "currency": {
            "symbol": "$b",
            "code": "BOB",
            "name": "Boliviano",
            "centralBank": ""
        },
        "country": {
            "name": "Bolivia",
            "capital": "Sucre",
            "flag": "",
            "dialCode": "+591",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BWP": {
        "name": "Botswana",
        "wikipedia": "",
        "currency": {
            "symbol": "P",
            "code": "BWP",
            "name": "Botswana pula",
            "centralBank": ""
        },
        "country": {
            "name": "Botswana",
            "capital": "Gaborone",
            "flag": "",
            "dialCode": "+267",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BGN": {
        "name": "Bulgaria",
        "wikipedia": "",
        "currency": {
            "symbol": "лв",
            "code": "BGN",
            "name": "Bulgarian lev",
            "centralBank": ""
        },
        "country": {
            "name": "Bulgaria",
            "capital": "Sofia",
            "flag": "",
            "dialCode": "+359",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BRL": {
        "name": "Brazil",
        "wikipedia": "",
        "currency": {
            "symbol": "R$",
            "code": "BRL",
            "name": "Brazilian real",
            "centralBank": ""
        },
        "country": {
            "name": "Brazil",
            "capital": "Brasília",
            "flag": "",
            "dialCode": "+55",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "BND": {
        "name": "Brunei",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "BND",
            "name": "Brunei dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Brunei",
            "capital": "Bandar Seri Begawan",
            "flag": "",
            "dialCode": "+673",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "KHR": {
        "name": "Cambodia",
        "wikipedia": "",
        "currency": {
            "symbol": "៛",
            "code": "KHR",
            "name": "Cambodian Riel",
            "centralBank": ""
        },
        "country": {
            "name": "Cambodia",
            "capital": "Phnom Penh",
            "flag": "",
            "dialCode": "+855",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CAD": {
        "name": "Canada",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "CAD",
            "name": "Canadian Dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Canada",
            "capital": "Ottawa",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CLP": {
        "name": "Chile",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "CLP",
            "name": "Chilean peso",
            "centralBank": ""
        },
        "country": {
            "name": "Chile",
            "capital": "Santiago",
            "flag": "",
            "dialCode": "+56",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CNY": {
        "name": "China",
        "wikipedia": "",
        "currency": {
            "symbol": "¥",
            "code": "CNY",
            "name": "Chinese Yuan",
            "centralBank": ""
        },
        "country": {
            "name": "China",
            "capital": "Beijing",
            "flag": "",
            "dialCode": "+86",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "COP": {
        "name": "Colombia",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "COP",
            "name": "Colombian peso",
            "centralBank": ""
        },
        "country": {
            "name": "Colombia",
            "capital": "Bogotá",
            "flag": "",
            "dialCode": "+57",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "HRK": {
        "name": "Croatia",
        "wikipedia": "",
        "currency": {
            "symbol": "kn",
            "code": "HRK",
            "name": "Croatian kuna",
            "centralBank": ""
        },
        "country": {
            "name": "Croatia",
            "capital": "Zagreb",
            "flag": "",
            "dialCode": "+385",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CUP": {
        "name": "Cuba",
        "wikipedia": "",
        "currency": {
            "symbol": "₱",
            "code": "CUP",
            "name": "Cuban peso",
            "centralBank": ""
        },
        "country": {
            "name": "Cuba",
            "capital": "Havana",
            "flag": "",
            "dialCode": "+53",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CZK": {
        "name": "Czechia",
        "wikipedia": "",
        "currency": {
            "symbol": "Kč",
            "code": "CZK",
            "name": "Czech koruna",
            "centralBank": ""
        },
        "country": {
            "name": "Czechia",
            "capital": "Prague",
            "flag": "",
            "dialCode": "+420",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "DKK": {
        "name": "Denmark",
        "wikipedia": "",
        "currency": {
            "symbol": "kr",
            "code": "DKK",
            "name": "Danish krone",
            "centralBank": ""
        },
        "country": {
            "name": "Denmark",
            "capital": "Copenhagen",
            "flag": "",
            "dialCode": "+45",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "DOP": {
        "name": "Dominican Republic",
        "wikipedia": "",
        "currency": {
            "symbol": "RD$",
            "code": "DOP",
            "name": "Dominican peso",
            "centralBank": ""
        },
        "country": {
            "name": "Dominican Republic",
            "capital": "Santo Domingo",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "EGP": {
        "name": "Egypt",
        "wikipedia": "",
        "currency": {
            "symbol": "£",
            "code": "EGP",
            "name": "Egyptian pound",
            "centralBank": ""
        },
        "country": {
            "name": "Egypt",
            "capital": "Cairo",
            "flag": "",
            "dialCode": "+20",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "EUR": {
        "name": "Germany",
        "wikipedia": "",
        "currency": {
            "symbol": "€",
            "code": "EUR",
            "name": "Euro",
            "centralBank": ""
        },
        "country": {
            "name": "Germany",
            "capital": "Berlin",
            "flag": "",
            "dialCode": "+49",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "FJD": {
        "name": "Fiji",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "FJD",
            "name": "Fijian dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Fiji",
            "capital": "Suva",
            "flag": "",
            "dialCode": "+679",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "GHS": {
        "name": "Ghana",
        "wikipedia": "",
        "currency": {
            "symbol": "¢",
            "code": "GHS",
            "name": "Ghanaian cedi",
            "centralBank": ""
        },
        "country": {
            "name": "Ghana",
            "capital": "Accra",
            "flag": "",
            "dialCode": "+233",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "GTQ": {
        "name": "Guatemala",
        "wikipedia": "",
        "currency": {
            "symbol": "Q",
            "code": "GTQ",
            "name": "Guatemalan quetzal",
            "centralBank": ""
        },
        "country": {
            "name": "Guatemala",
            "capital": "Guatemala City",
            "flag": "",
            "dialCode": "+502",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "GYD": {
        "name": "Guyana",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "GYD",
            "name": "Guyanese dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Guyana",
            "capital": "Georgetown",
            "flag": "",
            "dialCode": "+592",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "HNL": {
        "name": "Honduras",
        "wikipedia": "",
        "currency": {
            "symbol": "L",
            "code": "HNL",
            "name": "Honduran lempira",
            "centralBank": ""
        },
        "country": {
            "name": "Honduras",
            "capital": "Tegucigalpa",
            "flag": "",
            "dialCode": "+504",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "HKD": {
        "name": "Hong Kong",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "HKD",
            "name": "Hong Kong dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Hong Kong",
            "capital": "N/A",
            "flag": "",
            "dialCode": "+852",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "HUF": {
        "name": "Hungary",
        "wikipedia": "",
        "currency": {
            "symbol": "Ft",
            "code": "HUF",
            "name": "Hungarian forint",
            "centralBank": ""
        },
        "country": {
            "name": "Hungary",
            "capital": "Budapest",
            "flag": "",
            "dialCode": "+36",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "ISK": {
        "name": "Iceland",
        "wikipedia": "",
        "currency": {
            "symbol": "kr",
            "code": "ISK",
            "name": "Icelandic króna",
            "centralBank": ""
        },
        "country": {
            "name": "Iceland",
            "capital": "Reykjavík",
            "flag": "",
            "dialCode": "+354",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "INR": {
        "name": "India",
        "wikipedia": "",
        "currency": {
            "symbol": "₹",
            "code": "INR",
            "name": "Indian rupee",
            "centralBank": ""
        },
        "country": {
            "name": "India",
            "capital": "New Delhi",
            "flag": "",
            "dialCode": "+91",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "IDR": {
        "name": "Indonesia",
        "wikipedia": "",
        "currency": {
            "symbol": "Rp",
            "code": "IDR",
            "name": "Indonesian rupiah",
            "centralBank": ""
        },
        "country": {
            "name": "Indonesia",
            "capital": "Jakarta",
            "flag": "",
            "dialCode": "+62",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "IRR": {
        "name": "Iran",
        "wikipedia": "",
        "currency": {
            "symbol": "﷼",
            "code": "IRR",
            "name": "Iranian rial",
            "centralBank": ""
        },
        "country": {
            "name": "Iran",
            "capital": "Jakarta",
            "flag": "",
            "dialCode": "+98",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "ILS": {
        "name": "Israel",
        "wikipedia": "",
        "currency": {
            "symbol": "₪",
            "code": "ILS",
            "name": "Israeli Shekel",
            "centralBank": ""
        },
        "country": {
            "name": "Israel",
            "capital": "Jerusalem",
            "flag": "",
            "dialCode": "+972",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "JMD": {
        "name": "Jamaica",
        "wikipedia": "",
        "currency": {
            "symbol": "J$",
            "code": "JMD",
            "name": "Jamaican dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Jamaica",
            "capital": "Kingston",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "JPY": {
        "name": "Japan",
        "wikipedia": "",
        "currency": {
            "symbol": "¥",
            "code": "JPY",
            "name": "Japanese yen",
            "centralBank": ""
        },
        "country": {
            "name": "Japan",
            "capital": "Tokyo",
            "flag": "",
            "dialCode": "+81",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "KRW": {
        "name": "South Korea",
        "wikipedia": "",
        "currency": {
            "symbol": "₩",
            "code": "KRW",
            "name": "South Korean won",
            "centralBank": ""
        },
        "country": {
            "name": "South Korea",
            "capital": "Seoul",
            "flag": "",
            "dialCode": "+82",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "LAK": {
        "name": "Laos",
        "wikipedia": "",
        "currency": {
            "symbol": "₭",
            "code": "LAK",
            "name": "Lao kip",
            "centralBank": ""
        },
        "country": {
            "name": "Laos",
            "capital": "Vientiane",
            "flag": "",
            "dialCode": "+856",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "LBP": {
        "name": "Lebanon",
        "wikipedia": "",
        "currency": {
            "symbol": "£",
            "code": "LBP",
            "name": "Lebanese pound",
            "centralBank": ""
        },
        "country": {
            "name": "Lebanon",
            "capital": "Beirut",
            "flag": "",
            "dialCode": "+961",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "LRD": {
        "name": "Liberia",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "LRD",
            "name": "Liberian dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Liberia",
            "capital": "Monrovia",
            "flag": "",
            "dialCode": "+231",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "MYR": {
        "name": "Malaysia",
        "wikipedia": "",
        "currency": {
            "symbol": "RM",
            "code": "MYR",
            "name": "Malaysian ringgit",
            "centralBank": ""
        },
        "country": {
            "name": "Malaysia",
            "capital": "Federal Territory of Kuala Lumpur",
            "flag": "",
            "dialCode": "+60",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "MUR": {
        "name": "Mauritius",
        "wikipedia": "",
        "currency": {
            "symbol": "₨",
            "code": "MUR",
            "name": "Mauritian rupee",
            "centralBank": ""
        },
        "country": {
            "name": "Mauritius",
            "capital": "Port Louis",
            "flag": "",
            "dialCode": "+230",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "MXN": {
        "name": "Mexico",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "MXN",
            "name": "Mexican peso",
            "centralBank": ""
        },
        "country": {
            "name": "Mexico",
            "capital": "Mexico City",
            "flag": "",
            "dialCode": "+52",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "MZN": {
        "name": "Mozambique",
        "wikipedia": "",
        "currency": {
            "symbol": "MT",
            "code": "MZN",
            "name": "Mozambican metical",
            "centralBank": ""
        },
        "country": {
            "name": "Mozambique",
            "capital": "Maputo",
            "flag": "",
            "dialCode": "+258",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "NPR": {
        "name": "Nepal",
        "wikipedia": "",
        "currency": {
            "symbol": "₨",
            "code": "NPR",
            "name": "Nepalese rupee",
            "centralBank": ""
        },
        "country": {
            "name": "Nepal",
            "capital": "Kathmandu",
            "flag": "",
            "dialCode": "+977",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "NZD": {
        "name": "New Zealand",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "NZD",
            "name": "New Zealand dollar",
            "centralBank": ""
        },
        "country": {
            "name": "New Zealand",
            "capital": "Wellington",
            "flag": "",
            "dialCode": "+64",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "NGN": {
        "name": "Nigeria",
        "wikipedia": "",
        "currency": {
            "symbol": "₦",
            "code": "NGN",
            "name": "Nigerian naira",
            "centralBank": ""
        },
        "country": {
            "name": "Nigeria",
            "capital": "Abuja",
            "flag": "",
            "dialCode": "+234",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "NOK": {
        "name": "Norway",
        "wikipedia": "",
        "currency": {
            "symbol": "kr",
            "code": "NOK",
            "name": "Norwegian krone",
            "centralBank": ""
        },
        "country": {
            "name": "Norway",
            "capital": "Oslo",
            "flag": "",
            "dialCode": "+47",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "OMR": {
        "name": "Oman",
        "wikipedia": "",
        "currency": {
            "symbol": "﷼",
            "code": "OMR",
            "name": "Omani rial",
            "centralBank": ""
        },
        "country": {
            "name": "Oman",
            "capital": "Muscat",
            "flag": "",
            "dialCode": "+968",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PKR": {
        "name": "Pakistan",
        "wikipedia": "",
        "currency": {
            "symbol": "₨",
            "code": "PKR",
            "name": "Pakistani rupee",
            "centralBank": ""
        },
        "country": {
            "name": "Pakistan",
            "capital": "Islamabad",
            "flag": "",
            "dialCode": "+92",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PAB": {
        "name": "Panama",
        "wikipedia": "",
        "currency": {
            "symbol": "B/.",
            "code": "PAB",
            "name": "Panamanian balboa",
            "centralBank": ""
        },
        "country": {
            "name": "Panama",
            "capital": "Panama City",
            "flag": "",
            "dialCode": "+507",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PYG": {
        "name": "Paraguay",
        "wikipedia": "",
        "currency": {
            "symbol": "Gs",
            "code": "PYG",
            "name": "Paraguayan guaraní",
            "centralBank": ""
        },
        "country": {
            "name": "Paraguay",
            "capital": "Asunción",
            "flag": "",
            "dialCode": "+595",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PEN": {
        "name": "Peru",
        "wikipedia": "",
        "currency": {
            "symbol": "S/.",
            "code": "PEN",
            "name": "Sol",
            "centralBank": ""
        },
        "country": {
            "name": "Peru",
            "capital": "Lima",
            "flag": "",
            "dialCode": "+51",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PHP": {
        "name": "Philippines",
        "wikipedia": "",
        "currency": {
            "symbol": "₱",
            "code": "PHP",
            "name": "Philippine peso",
            "centralBank": ""
        },
        "country": {
            "name": "Philippines",
            "capital": "Manila",
            "flag": "",
            "dialCode": "+63",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "PLN": {
        "name": "Poland",
        "wikipedia": "",
        "currency": {
            "symbol": "zł",
            "code": "PLN",
            "name": "Polish złoty",
            "centralBank": ""
        },
        "country": {
            "name": "Poland",
            "capital": "Warsaw",
            "flag": "",
            "dialCode": "+48",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "QAR": {
        "name": "Qatar",
        "wikipedia": "",
        "currency": {
            "symbol": "﷼",
            "code": "QAR",
            "name": "Qatari Riyal",
            "centralBank": ""
        },
        "country": {
            "name": "Qatar",
            "capital": "Doha",
            "flag": "",
            "dialCode": "+974",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "RON": {
        "name": "Romania",
        "wikipedia": "",
        "currency": {
            "symbol": "lei",
            "code": "RON",
            "name": "Romanian leu",
            "centralBank": ""
        },
        "country": {
            "name": "Romania",
            "capital": "Bucharest",
            "flag": "",
            "dialCode": "+40",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "RUB": {
        "name": "Russia",
        "wikipedia": "",
        "currency": {
            "symbol": "₽",
            "code": "RUB",
            "name": "Russian ruble",
            "centralBank": ""
        },
        "country": {
            "name": "Russia",
            "capital": "Moscow",
            "flag": "",
            "dialCode": "+7",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "SAR": {
        "name": "Saudi Arabia",
        "wikipedia": "",
        "currency": {
            "symbol": "﷼",
            "code": "SAR",
            "name": "Saudi riyal",
            "centralBank": ""
        },
        "country": {
            "name": "Saudi Arabia",
            "capital": "Riyadh",
            "flag": "",
            "dialCode": "+966",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "RSD": {
        "name": "Serbia",
        "wikipedia": "",
        "currency": {
            "symbol": "Дин.",
            "code": "RSD",
            "name": "Serbian dinar",
            "centralBank": ""
        },
        "country": {
            "name": "Serbia",
            "capital": "Belgrade",
            "flag": "",
            "dialCode": "+381",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "SGD": {
        "name": "Singapore",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "SGD",
            "name": "Singapore dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Singapore",
            "capital": "Singapore",
            "flag": "",
            "dialCode": "+65",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "SOS": {
        "name": "Somalia",
        "wikipedia": "",
        "currency": {
            "symbol": "S",
            "code": "SOS",
            "name": "Somali shilling",
            "centralBank": ""
        },
        "country": {
            "name": "Somalia",
            "capital": " Mogadishu",
            "flag": "",
            "dialCode": "+252",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "ZAR": {
        "name": "South Africa",
        "wikipedia": "",
        "currency": {
            "symbol": "R",
            "code": "ZAR",
            "name": "South African rand",
            "centralBank": ""
        },
        "country": {
            "name": "South Africa",
            "capital": "Cape Town, Pretoria, Bloemfontein",
            "flag": "",
            "dialCode": "+27",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "SEK": {
        "name": "Sweden",
        "wikipedia": "",
        "currency": {
            "symbol": "kr",
            "code": "SEK",
            "name": "Swedish krona",
            "centralBank": ""
        },
        "country": {
            "name": "Sweden",
            "capital": "Stockholm",
            "flag": "",
            "dialCode": "+46",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "CHF": {
        "name": "Switzerland",
        "wikipedia": "",
        "currency": {
            "symbol": "CHF",
            "code": "CHF",
            "name": "Swiss franc",
            "centralBank": ""
        },
        "country": {
            "name": "Switzerland",
            "capital": "Bern",
            "flag": "",
            "dialCode": "+41",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "SYP": {
        "name": "Syria",
        "wikipedia": "",
        "currency": {
            "symbol": "£",
            "code": "SYP",
            "name": "Syrian pound",
            "centralBank": ""
        },
        "country": {
            "name": "Syria",
            "capital": "Damascus",
            "flag": "",
            "dialCode": "+963",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "TWD": {
        "name": "Taiwan",
        "wikipedia": "",
        "currency": {
            "symbol": "NT$",
            "code": "TWD",
            "name": "New Taiwan dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Taiwan",
            "capital": "Taipei City",
            "flag": "",
            "dialCode": "+886",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "THB": {
        "name": "Thailand",
        "wikipedia": "",
        "currency": {
            "symbol": "฿",
            "code": "THB",
            "name": "Thai baht",
            "centralBank": ""
        },
        "country": {
            "name": "Thailand",
            "capital": "Bangkok",
            "flag": "",
            "dialCode": "+66",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "TRY": {
        "name": "Turkey",
        "wikipedia": "",
        "currency": {
            "symbol": "₺",
            "code": "TRY",
            "name": "Turkish lira",
            "centralBank": ""
        },
        "country": {
            "name": "Turkey",
            "capital": "Ankara",
            "flag": "",
            "dialCode": "+90",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "UAH": {
        "name": "Ukraine",
        "wikipedia": "",
        "currency": {
            "symbol": "₴",
            "code": "UAH",
            "name": "Ukrainian hryvnia",
            "centralBank": ""
        },
        "country": {
            "name": "Ukraine",
            "capital": "Kyiv",
            "flag": "",
            "dialCode": "+380",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "AED": {
        "name": "United Arab Emirates",
        "wikipedia": "",
        "currency": {
            "symbol": "د.إ",
            "code": "AED",
            "name": "United Arab Emirates dirham",
            "centralBank": ""
        },
        "country": {
            "name": "United Arab Emirates",
            "capital": "Abu Dhabi",
            "flag": "",
            "dialCode": "+971",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "GBP": {
        "name": "United Kingdom",
        "wikipedia": "",
        "currency": {
            "symbol": "£",
            "code": "GBP",
            "name": "Pound sterling",
            "centralBank": ""
        },
        "country": {
            "name": "United Kingdom",
            "capital": "London",
            "flag": "",
            "dialCode": "+44",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "USD": {
        "name": "United States",
        "wikipedia": "",
        "currency": {
            "symbol": "$",
            "code": "USD",
            "name": "United States Dollar",
            "centralBank": ""
        },
        "country": {
            "name": "United States",
            "capital": "Washington, D.C.",
            "flag": "",
            "dialCode": "+1",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "UYU": {
        "name": "Uruguay",
        "wikipedia": "",
        "currency": {
            "symbol": "$U",
            "code": "UYU",
            "name": "Peso Uruguayo",
            "centralBank": ""
        },
        "country": {
            "name": "Uruguay",
            "capital": "Montevideo",
            "flag": "",
            "dialCode": "+598",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "UZS": {
        "name": "Uzbekistan",
        "wikipedia": "",
        "currency": {
            "symbol": "лв",
            "code": "UZS",
            "name": "Uzbekistani sum",
            "centralBank": ""
        },
        "country": {
            "name": "Uzbekistan",
            "capital": "Tashkent",
            "flag": "",
            "dialCode": "+998",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "VEF": {
        "name": "Venezuela",
        "wikipedia": "",
        "currency": {
            "symbol": "Bs",
            "code": "VEF",
            "name": "Venezuelan bolívar",
            "centralBank": ""
        },
        "country": {
            "name": "Venezuela",
            "capital": "Caracas",
            "flag": "",
            "dialCode": "+58",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "VND": {
        "name": "Vietnam",
        "wikipedia": "",
        "currency": {
            "symbol": "₫",
            "code": "VND",
            "name": "Vietnamese dong",
            "centralBank": ""
        },
        "country": {
            "name": "Vietnam",
            "capital": "Hanoi",
            "flag": "",
            "dialCode": "+84",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "YER": {
        "name": "Yemen",
        "wikipedia": "",
        "currency": {
            "symbol": "﷼",
            "code": "YER",
            "name": "Yemeni rial",
            "centralBank": ""
        },
        "country": {
            "name": "Yemen",
            "capital": "Sana'a",
            "flag": "",
            "dialCode": "+967",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    },
    "ZWD": {
        "name": "Zimbabwe",
        "wikipedia": "",
        "currency": {
            "symbol": "Z$",
            "code": "ZWD",
            "name": "United States Dollar",
            "centralBank": ""
        },
        "country": {
            "name": "Zimbabwe",
            "capital": "Harare",
            "flag": "",
            "dialCode": "+263",
            "language": {
                "name": "",
                "script": ""
            },
            "codes": {
                "two": "",
                "three": ""
            }
        }
    }
};

class EzCurrencyPipe {
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

class EzDebouncePipe {
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

class EzDefaultPipe {
    transform(value, defaultValue) {
        return value || defaultValue;
    }
}
EzDefaultPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzDefaultPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzDefaultPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzDefaultPipe, name: "ezDefault" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzDefaultPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezDefault', pure: true }]
        }] });

class EzElementPositionPipe {
    transform(value, xLerp = 1, yLerp = 1) {
        if (value != null) {
            const boundingRect = value.getBoundingClientRect();
            return {
                x: boundingRect.left + xLerp * boundingRect.width,
                y: boundingRect.top + yLerp * boundingRect.height,
            };
        }
        else {
            return null;
        }
    }
}
EzElementPositionPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzElementPositionPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, name: "ezElementPosition" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzElementPositionPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezElementPosition', pure: true }]
        }] });

class EzMathPipe {
    transform(value, method, withNumber) {
        if (!value)
            return '';
        if (method === 'sqrt') {
            return Math.sqrt(value);
        }
        else if (method === 'pow') {
            return Math.pow(value, withNumber !== null && withNumber !== void 0 ? withNumber : value);
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

class EzNumberPipe {
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

class EzOrdinalSuffixPipe {
    transform(i) {
        const j = i % 10, k = i % 100;
        if (j === 1 && k !== 11) {
            return i + 'st';
        }
        if (j === 2 && k !== 12) {
            return i + 'nd';
        }
        if (j === 3 && k !== 13) {
            return i + 'rd';
        }
        return i + 'th';
    }
}
EzOrdinalSuffixPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzOrdinalSuffixPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, name: "ezOrdinalSuffix" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzOrdinalSuffixPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'ezOrdinalSuffix'
                }]
        }] });

class EzTextPipe {
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

class EzTypingPipe {
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

class EzWordcountPipe {
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

class EzLoggerPipe {
    transform(value, shouldLog = true) {
        if (shouldLog) {
            console.log(value);
        }
        return value;
    }
}
EzLoggerPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EzLoggerPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, name: "ezLogger" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: EzLoggerPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ezLogger' }]
        }] });

class EzPipesModule {
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
        EzMathPipe,
        EzLoggerPipe], imports: [CurrencyPipe,
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
        EzMathPipe,
        EzLoggerPipe] });
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
                        EzMathPipe,
                        EzLoggerPipe
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
                        EzMathPipe,
                        EzLoggerPipe
                    ]
                }]
        }] });

/*
 * Public API Surface of ez-pipes-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EzCurrencyPipe, EzDebouncePipe, EzDefaultPipe, EzElementPositionPipe, EzLoggerPipe, EzMathPipe, EzNumberPipe, EzOrdinalSuffixPipe, EzPipesModule, EzTextPipe, EzTypingPipe, EzWordcountPipe };
//# sourceMappingURL=ez-pipes.mjs.map
