import React from "react";

import {
  StyledChallenge2Page,
  StyledChallengePageContainer,
} from "./Challenge2.styled";
import { Cart } from "./components/Cart/Cart";
import { Menu } from "./components/Menu/Menu";

export const Challenge2Page = () => {
  return (
    <StyledChallengePageContainer>
      <StyledChallenge2Page>
        <Menu />
        <Cart />
      </StyledChallenge2Page>
    </StyledChallengePageContainer>
  );
};
