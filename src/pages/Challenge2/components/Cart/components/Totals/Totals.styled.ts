import styled from "styled-components";

export const StyledTotals = styled.div`
  padding: 35px 30px;
`;

export const StyledTotalsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  text-align: right;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const StyledTotalsItemLabel = styled.div`
  width: 60%;

  font-size: 1rem;
  font-weight: bold;
`;

type StyledTotalsItemAmountProps = {
  textColor?: string;
};

export const StyledTotalsItemAmount = styled.div<StyledTotalsItemAmountProps>`
  width: 40%;

  color: ${(props) => props.textColor};
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
`;
