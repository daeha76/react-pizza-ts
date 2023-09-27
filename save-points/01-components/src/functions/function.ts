export function formatToFixed(number: number, decimalPlaces: number): number {
    return parseFloat(number.toFixed(decimalPlaces));
  }