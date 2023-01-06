import React from "react";

import { StyledRing } from "./Ring.styled";

type RingProps = {
  isStarted: boolean;
};

export const Ring: React.FunctionComponent<RingProps> = ({ isStarted }) => {
  return (
    <StyledRing isStarted={isStarted}>
      <svg width={518} height={518} viewBox="0 0 518 518">
        <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
      </svg>
    </StyledRing>
  );
};
