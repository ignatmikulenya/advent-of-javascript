import styled from "styled-components";

type StyledRingProps = {
  isStarted: boolean;
};

export const StyledRing = styled.div<StyledRingProps>`
  position: absolute;
  top: 0;
  left: 0;

  transition: stroke 0.5s ease;
  stroke: ${(props) => (props.isStarted ? "#880808" : "#09a65a")};

  z-index: 1;
`;
