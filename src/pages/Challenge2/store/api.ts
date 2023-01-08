import { createEffect } from "effector";

import { Product } from "../types/product";

const MENU_ITEMS: Product[] = [
  {
    id: "1a",
    imgSrc: "images/challenge2/plate__french-fries.png",
    name: "French Fries with Ketchup",
    shortName: "French Fries",
    price: "2.23",
    currency: "dol",
  },
  {
    id: "2b",
    imgSrc: "images/challenge2/plate__salmon-vegetables.png",
    name: "Salmon and Vegetables",
    shortName: "Salmon and Vegetables",
    price: "5.12",
    currency: "dol",
  },
  {
    id: "3c",
    imgSrc: "images/challenge2/plate__spaghetti-meat-sauce.png",
    name: "Spaghetti with Meat Sauce",
    shortName: "Spaghetti Meat Sauce",
    price: "7.82",
    currency: "dol",
  },
  {
    id: "4d",
    imgSrc: "images/challenge2/plate__bacon-eggs.png",
    name: "Bacon, Eggs, and Toast",
    shortName: "Bacon, Eggs, and Toast",
    price: "5.99",
    currency: "dol",
  },
  {
    id: "5e",
    imgSrc: "images/challenge2/plate__chicken-salad.png",
    name: "Chicken Salad with Parmesan",
    shortName: "Chicken Salad with Parmesan",
    price: "6.98",
    currency: "dol",
  },
  {
    id: "6f",
    imgSrc: "images/challenge2/plate__fish-sticks-fries.png",
    name: "Fish Sticks and Fries",
    shortName: "Fish Sticks and Fries",
    price: "6.34",
    currency: "dol",
  },
];

const fetchMenuFx = createEffect(async () => {
  const fetchResponse = await new Promise<Product[]>((resolve) => {
    resolve(MENU_ITEMS);
  });

  return fetchResponse;
});

export { fetchMenuFx };
