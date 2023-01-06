import styled from "styled-components";

export const StyledTime = styled.div`
  position: relative;
  top: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  font-family: "bebas";
  font-size: 196px;
`;

export const StyledInput = styled.input`
  width: 150px;
  height: 170px;

  border: 0;
  border-bottom: 1px dashed white;
  outline: none;
  background: none;
  color: white;

  font-family: "bebas";
  font-size: 196px;
  text-align: center;

  &:disabled {
    border-bottom: none;
  }
`;
