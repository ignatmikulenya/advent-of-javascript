import React from "react";
import { useStore } from "effector-react";

import {
  $cartItems,
  decreaseItemCount,
  increaseItemCount,
} from "../../../../store/cart";
import { formatPriceToDisplay } from "../../../../Challenge2.utils";

import {
  StyledCartItem,
  StyledCartItemCounter,
  StyledCartItemCounterButton,
  StyledCartItemCounterDecreaseIcon,
  StyledCartItemCounterIncreaseIcon,
  StyledCartItemCounterQuantity,
  StyledCartItemImage,
  StyledCartItemImageBlock,
  StyledCartItemInfo,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemQuantity,
  StyledCartItems,
  StyledCartItemSubtotal,
} from "./CartItems.styled";

export const CartItems = () => {
  const cartItems = useStore($cartItems);

  return (
    <StyledCartItems>
      {cartItems.map(({ count, product }) => (
        <StyledCartItem key={product.id}>
          <StyledCartItemImageBlock>
            <StyledCartItemImage
              src={product.imgSrc}
              alt="Fish Sticks and Fries"
            />
            <StyledCartItemQuantity>{count}</StyledCartItemQuantity>
          </StyledCartItemImageBlock>
          <StyledCartItemInfo>
            <StyledCartItemName>{product.name}</StyledCartItemName>
            <StyledCartItemPrice>
              {formatPriceToDisplay(product.price, product.currency)}
            </StyledCartItemPrice>
          </StyledCartItemInfo>
          <StyledCartItemCounter>
            <StyledCartItemCounterButton
              onClick={() => {
                decreaseItemCount(product.id);
              }}
            >
              <StyledCartItemCounterDecreaseIcon
                src="images/challenge2/chevron.svg"
                alt="Chevron"
              />
            </StyledCartItemCounterButton>
            <StyledCartItemCounterQuantity>
              {count}
            </StyledCartItemCounterQuantity>
            <StyledCartItemCounterButton
              onClick={() => {
                increaseItemCount(product.id);
              }}
            >
              <StyledCartItemCounterIncreaseIcon
                src="images/challenge2/chevron.svg"
                alt="Chevron"
              />
            </StyledCartItemCounterButton>
          </StyledCartItemCounter>
          <StyledCartItemSubtotal>
            {formatPriceToDisplay(
              count * Number(product.price),
              product.currency
            )}
          </StyledCartItemSubtotal>
        </StyledCartItem>
      ))}
    </StyledCartItems>
  );
};
