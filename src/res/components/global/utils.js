import { FIRST_LETTER, MAX, SignificantValue} from "./constants";
import { ErrorMessage }                       from "./constants";   

export const CurrencyUtils = {
  currencyFormat: (value) => {
    const floatValue  = parseFloat(value);
    const {TWO}       = SignificantValue;
    return Math.round(floatValue * TWO) / TWO;
  },
  isInvalidCurrency: (value) => {
    const {INPUT_CURRENCY_ERROR_MESSAGE} = ErrorMessage;
    if(Number.isNaN(value)) throw new Error(INPUT_CURRENCY_ERROR_MESSAGE);
    return false;
  },
};

export const formatDisplay = (display) => {
  const displayUpperCase          = display.toUpperCase();
  const displayLowerCase          = display.toLowerCase();
  const displayWithoutFirstLetter = displayLowerCase.slice(1);
  return `${displayUpperCase[FIRST_LETTER]}${displayWithoutFirstLetter}`;
};

export const Random = {
  getNumber: (range) => Math.floor(Math.random() * range),
  getKey(salt) {
      const key1 = this.getNumber(MAX);
      const key2 = this.getNumber(MAX);
      return `${salt}-${key1}-${key2}`;
  },  
};

