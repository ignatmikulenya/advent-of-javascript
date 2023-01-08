import { Currency } from "./types/product";

const currencyMap: Record<Currency, string> = {
  rub: "₽",
  dol: "$",
};

export const formatPriceToDisplay = (
  value: number | string,
  currency: Currency
) => `${currencyMap[currency]}${Number(value).toFixed(2)}`;

export const getTaxAmount = (total: number) => total * 0.0975;
