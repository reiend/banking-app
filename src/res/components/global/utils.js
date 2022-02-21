import { SignificantValue } from "./constants";

export const currencyFormat = (value) => {
  const floatValue  = parseFloat(value);
  const { TWO }     = SignificantValue;
  let rounded       = Math.round(floatValue * TWO) / TWO;
  return rounded;
};

