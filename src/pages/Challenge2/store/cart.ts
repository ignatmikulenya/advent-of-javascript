import { createStore, createEvent, sample } from "effector";

import { Product } from "../types/product";

interface CartItem {
  count: number;
  product: Product;
}

const $cartItems = createStore<CartItem[]>([]);
const increaseItemCount = createEvent<string>();
const decreaseItemCount = createEvent<string>();
const addProductToCart = createEvent<Product>();
const removeProductFromCart = createEvent<string>();

$cartItems
  .on(increaseItemCount, (store, payload) => {
    const itemInStore = store.find((value) => value.product.id === payload);

    if (itemInStore) {
      itemInStore.count = itemInStore.count + 1;

      return [...store];
    }

    return store;
  })
  .on(decreaseItemCount, (store, payload) => {
    const itemInStore = store.find((value) => value.product.id === payload);

    if (itemInStore) {
      itemInStore.count = itemInStore.count - 1;

      return [...store];
    }

    return store;
  })
  .on(addProductToCart, (store, payload) => {
    const itemInStore = store.find((value) => value.product.id === payload.id);

    if (!itemInStore) {
      return [
        ...store,
        {
          count: 1,
          product: payload,
        },
      ];
    }

    return store;
  })
  .on(removeProductFromCart, (store, payload) => {
    return store.filter((value) => value.product.id !== payload);
  });

sample({
  clock: decreaseItemCount,
  source: $cartItems,
  filter: (sourceData, clockData) => {
    const itemInSource = sourceData.find(
      (value) => value.product.id === clockData
    );

    if (itemInSource) {
      return itemInSource.count === 0;
    }

    return false;
  },
  fn: (sourceData, clockData) => {
    const itemInSource = sourceData.find(
      (value) => value.product.id === clockData
    );

    if (itemInSource) {
      return itemInSource.product.id;
    }

    return "";
  },
  target: removeProductFromCart,
});

export {
  $cartItems,
  increaseItemCount,
  decreaseItemCount,
  addProductToCart,
  removeProductFromCart,
};
