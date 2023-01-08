import { createStore } from "effector";

import { Product } from "../types/product";

import { fetchMenuFx } from "./api";

const $menuItems = createStore<Product[]>([]);

$menuItems.on(fetchMenuFx.doneData, (_, payload) => payload);

export { $menuItems };
