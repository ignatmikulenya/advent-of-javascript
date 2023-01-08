import styled from "styled-components";

import { StyledCommonPageContainer } from "../Common/Common.styled";

export const StyledChallengePageContainer = styled(StyledCommonPageContainer)`
  background: url("images/challenge2/bg__left.svg") left 10% no-repeat,
    url("images/challenge2/bg__top-right.svg") right top no-repeat,
    #eff0f6 url("images/challenge2/bg__btm-right.svg") right bottom no-repeat;
`;

export const StyledChallenge2Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  column-gap: 50px;

  font-family: "Poppins", sans-serif;
`;

export const StyledPanel = styled.div`
  padding-top: 50px;

  width: 375px;
  height: 875px;

  border-radius: 25px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 70px #c7cbe3;

  overflow-y: scroll;
`;

export const StyledPanelHeader = styled.h1`
  padding-bottom: 20px;
  padding-left: 40px;

  font-size: 2rem;
  font-weight: bold;
`;
