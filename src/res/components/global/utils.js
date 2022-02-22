import { SignificantValue } from "./constants";

export const currencyFormat = (value) => {
  const floatValue  = parseFloat(value);
  const { TWO }     = SignificantValue;
  return Math.round(floatValue * TWO) / TWO;
};

export const formatDisplay = (display) => {
  const displayUpperCase          = display.toUpperCase();
  const displayLowerCase          = display.toLowerCase();
  const displayWithoutFirstLetter = displayLowerCase.slice(1);
  return `${displayUpperCase[0]}${displayWithoutFirstLetter}`;
};

