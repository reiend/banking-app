export const currencyFormat = (value) => {
  const formatValue = parseFloat(value);
  let rounded       = Math.round(formatValue * 100) / 100;
  return rounded;
};

