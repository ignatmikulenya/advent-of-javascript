export type Currency = "rub" | "dol";

export interface Product {
  id: string;
  imgSrc: string;
  name: string;
  shortName: string;
  price: string;
  currency: Currency;
}
