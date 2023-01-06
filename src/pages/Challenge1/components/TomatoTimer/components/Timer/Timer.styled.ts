import styled from "styled-components";

export const StyledTimer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;

  border-radius: 50%;
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #17171a 100%
  );
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;

  z-index: 2;
`;
