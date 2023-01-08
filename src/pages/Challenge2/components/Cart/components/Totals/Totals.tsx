import React from "react";
import { useStore } from "effector-react";

import {
  formatPriceToDisplay,
  getTaxAmount,
} from "../../../../Challenge2.utils";
import { $cartItems } from "../../../../store/cart";

import {
  StyledTotals,
  StyledTotalsItem,
  StyledTotalsItemAmount,
  StyledTotalsItemLabel,
} from "./Totals.styled";

export const Totals = () => {
  const cartItems = useStore($cartItems);

  const subtotal = cartItems.reduce((acc, cartItem) => {
    acc += cartItem.count * Number(cartItem.product.price);

    return acc;
  }, 0);
  const tax = getTaxAmount(subtotal);
  const total = subtotal + tax;

  return (
    <StyledTotals>
      <StyledTotalsItem>
        <StyledTotalsItemLabel>Subtotal:</StyledTotalsItemLabel>
        <StyledTotalsItemAmount>
          {formatPriceToDisplay(subtotal, "dol")}
        </StyledTotalsItemAmount>
      </StyledTotalsItem>
      <StyledTotalsItem>
        <StyledTotalsItemLabel>Tax:</StyledTotalsItemLabel>
        <StyledTotalsItemAmount>
          {formatPriceToDisplay(tax, "dol")}
        </StyledTotalsItemAmount>
      </StyledTotalsItem>
      <StyledTotalsItem>
        <StyledTotalsItemLabel>Total:</StyledTotalsItemLabel>
        <StyledTotalsItemAmount textColor="#6B00F5">
          {formatPriceToDisplay(total, "dol")}
        </StyledTotalsItemAmount>
      </StyledTotalsItem>
    </StyledTotals>
  );
};
