import { SignificantValue } from "./constants";

export const currencyFormat = (value) => {
  const floatValue  = parseFloat(value);
  const { TWO }     = SignificantValue;
  return Math.round(floatValue * TWO) / TWO;
};

