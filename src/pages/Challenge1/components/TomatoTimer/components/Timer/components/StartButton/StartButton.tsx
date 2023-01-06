import React from "react";

import { StyledStartButton } from "./StartButton.styled";

type StartButtonProps = {
  isStarted: boolean;
  onClick?: () => void;
};

export const StartButton: React.FunctionComponent<StartButtonProps> = ({
  isStarted,
  onClick,
}) => {
  return (
    <StyledStartButton onClick={onClick}>
      {isStarted ? "stop" : "start"}
    </StyledStartButton>
  );
};
