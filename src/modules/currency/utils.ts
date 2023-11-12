export function parseCurrency(value: number): string {
  return new Intl.NumberFormat("e-gb", {
    style: "currency",
    currency: "KES",
  }).format(value);
}
