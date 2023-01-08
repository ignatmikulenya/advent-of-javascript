import React from "react";
import { useEvent, useStore } from "effector-react";

import { StyledPanel, StyledPanelHeader } from "../../Challenge2.styled";
import { formatPriceToDisplay } from "../../Challenge2.utils";
import { $menuItems } from "../../store/menu";
import {
  StyledItemContent,
  StyledItemImage,
  StyledMenuList,
  StyledMenuItem,
  StyledItemName,
  StyledItemPrice,
  StyledAddButton,
} from "./Menu.styled";
import { fetchMenuFx } from "../../store/api";
import {
  $cartItems,
  addProductToCart,
  removeProductFromCart,
} from "../../store/cart";

export const Menu = () => {
  const cartItems = useStore($cartItems);
  const menuItems = useStore($menuItems);
  const fetchMenu = useEvent(fetchMenuFx);

  React.useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return (
    <StyledPanel>
      <StyledPanelHeader>To Go Menu</StyledPanelHeader>
      <StyledMenuList>
        {menuItems.map((menuItem) => {
          const inCart =
            cartItems.findIndex((value) => value.product.id === menuItem.id) >=
            0;

          return (
            <StyledMenuItem key={menuItem.id}>
              <StyledItemImage src={menuItem.imgSrc} alt={menuItem.shortName} />
              <StyledItemContent>
                <StyledItemName>{menuItem.name}</StyledItemName>
                <StyledItemPrice>
                  {formatPriceToDisplay(menuItem.price, menuItem.currency)}
                </StyledItemPrice>
                <StyledAddButton
                  inCart={inCart}
                  onClick={() => {
                    if (inCart) {
                      removeProductFromCart(menuItem.id);
                    } else {
                      addProductToCart(menuItem);
                    }
                  }}
                >
                  {inCart && (
                    <img src="images/challenge2/check.svg" alt="Check" />
                  )}
                  {inCart ? "In Cart" : "Add to Cart"}
                </StyledAddButton>
              </StyledItemContent>
            </StyledMenuItem>
          );
        })}
      </StyledMenuList>
    </StyledPanel>
  );
};
