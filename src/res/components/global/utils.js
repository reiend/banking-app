import { FIRST_LETTER, SignificantValue } from "./constants";
import { ErrorMessage }                   from "./constants";   

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

