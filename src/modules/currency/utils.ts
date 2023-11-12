export function parseCurrency(value: number): string {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "KES",
  }).format(value);
}
