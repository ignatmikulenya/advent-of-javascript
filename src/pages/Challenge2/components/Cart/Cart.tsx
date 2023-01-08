import React from "react";
import { useStore } from "effector-react";

import { StyledPanel, StyledPanelHeader } from "../../Challenge2.styled";
import { $cartItems } from "../../store/cart";
import { StyledEmptyCartMessage } from "./Cart.styled";
import { Totals } from "./components/Totals/Totals";
import { CartItems } from "./components/CartItems/CartItems";

export const Cart = () => {
  const cartItems = useStore($cartItems);
  const itemsCount = cartItems.length;

  return (
    <StyledPanel>
      <StyledPanelHeader>Your Cart</StyledPanelHeader>
      {itemsCount === 0 ? (
        <StyledEmptyCartMessage>Your cart is empty.</StyledEmptyCartMessage>
      ) : (
        <CartItems />
      )}
      <Totals />
    </StyledPanel>
  );
};
