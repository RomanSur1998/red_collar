export function getDiscount(price, discount) {
  let onePercent = +price / (100 - +discount);
  return Math.floor(onePercent * 100);
}
