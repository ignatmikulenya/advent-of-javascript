import styled from "styled-components";

export const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 45px;

  margin: 0;
  padding: 0 30px 45px 15px;

  list-style-type: none;
`;

export const StyledMenuItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: row;

  &:nth-child(4n + 1):before {
    --background: #e1f1fe;
  }

  &:nth-child(4n + 2):before {
    --background: #ffe2f0;
  }

  &:nth-child(4n + 3):before {
    --background: #f7f7fe;
  }

  &:nth-child(4n + 4):before {
    --background: #defef0;
  }

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 30px;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--background);

    width: 100%;
    height: 100%;
    display: block;

    z-index: 1;
  }
`;

export const StyledItemImage = styled.img`
  position: relative;
  top: -30px;

  flex-shrink: 0;

  margin-right: 20px;

  width: 148px;
  height: 148px;

  z-index: 2;
`;

export const StyledItemContent = styled.div`
  position: relative;

  padding-top: 30px;

  z-index: 3;
`;

export const StyledItemName = styled.p`
  margin: 0 0 16px 0;
  padding: 0;

  font-size: 1.125rem;
  line-height: 20px;
`;

export const StyledItemPrice = styled.p`
  margin: 0 0 20px 0;
  padding: 0;

  font-size: 2rem;
  line-height: 1;
  font-weight: bold;
`;

type StyledAddButtonProps = {
  inCart: boolean;
};

export const StyledAddButton = styled.button<StyledAddButtonProps>`
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px 18px;

  border: none;
  border-radius: 20px;
  background: ${(props) => (props.inCart ? "black" : "#6b00f5")};

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;

  cursor: pointer;

  & img {
    margin-right: 10px;
  }
`;
