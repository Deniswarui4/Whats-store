import type {Cart, CartItem, Checkout} from "./types";

import {parseCurrency} from "~/currency/utils";

export function getCartItemPrice(item: CartItem): number {
  const optionsPrice = item.options
    ? Object.values(item.options).reduce((price, option) => price + option[0]?.price, 0)
    : 0;

  return (optionsPrice + item.price) * item.quantity;
}

export function getCartTotal(cart: Cart): number {
  return Array.from(cart.values()).reduce((total, item) => total + getCartItemPrice(item), 0);
}

export function getCartItemOptionsSummary(options: CartItem["options"]): string {
  return Object.entries(options!)
    .reduce<string[]>(
      (_options, [category, option]) => _options.concat(`${category}: ${option[0].title}`),
      [],
    )
    .join(", ");
}

export function getCartMessage(cart: Cart, checkout: Checkout): string {
  const whatsmessages = `*Hello, there ModernTech, I want to place the order for:*`;
  const items = Array.from(cart.values())
    .map(
      (item) =>
        `* ${item.title}${item.quantity > 1 ? ` (X${item.quantity})` : ``}${
          item.options && Object.keys(item.options).length > 0
            ? ` [${getCartItemOptionsSummary(item.options)}]`
            : ``
        } - ${parseCurrency(getCartItemPrice(item))}`,
    )
    .join("\n");
  const fields = Array.from(checkout.entries())
    .map(([key, value]) => `* ${key}: ${value}`)
    .join("\n");
    const total = `Total: ${parseCurrency(getCartTotal(cart))}`;
    const powered = `Here's our location: https://maps.app.goo.gl/7B9A48LRvyxs8Urv5 , Thank you so much.`;

  return [whatsmessages, items, fields, total, powered].join("\n\n");
}
