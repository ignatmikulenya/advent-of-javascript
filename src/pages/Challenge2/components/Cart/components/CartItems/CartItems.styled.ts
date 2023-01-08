import styled from "styled-components";

export const StyledCartItems = styled.ul`
  margin: 0 30px 0 25px;
  padding: 0;

  border-bottom: 5px solid #d7d7f9;

  list-style-type: none;
`;

export const StyledCartItem = styled.li`
  display: grid;
  grid-template-areas:
    "plate content content"
    "plate quantity price";

  margin-bottom: 45px;
  padding-bottom: 45px;

  border-bottom: 1px solid #d7d7f9;

  &:last-of-type {
    padding-bottom: 0;

    border-bottom: 0;
  }
`;

export const StyledCartItemImageBlock = styled.div`
  position: relative;

  grid-area: plate;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
`;

export const StyledCartItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 64px;
  height: 64px;

  z-index: 1;
`;

export const StyledCartItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: black;

  font-size: 1rem;
  font-weight: bold;
  color: white;

  z-index: 2;
`;

export const StyledCartItemInfo = styled.div`
  grid-area: content;
`;

export const StyledCartItemName = styled.p`
  margin: 0 0 5px 0;
  padding: 0;

  font-size: 1.125rem;
  line-height: 20px;
`;

export const StyledCartItemPrice = styled.p`
  margin: 0 0 16px 0;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
`;

export const StyledCartItemSubtotal = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  text-align: right;
`;

export const StyledCartItemCounter = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
`;

export const StyledCartItemCounterQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: bold;

  width: 32px;
  height: 32px;
`;

export const StyledCartItemCounterButton = styled.button`
  display: block;

  padding: 0;

  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;
  background-color: #6b00f5;

  cursor: pointer;

  &:hover {
    background: black;
  }
`;

const StyledCartItemCounterButtonIcon = styled.img`
  position: relative;
`;

export const StyledCartItemCounterDecreaseIcon = styled(
  StyledCartItemCounterButtonIcon
)`
  top: 1px;
  left: -1px;
`;

export const StyledCartItemCounterIncreaseIcon = styled(
  StyledCartItemCounterButtonIcon
)`
  top: 1px;
  left: 2px;

  transform: rotate(180deg);
`;
