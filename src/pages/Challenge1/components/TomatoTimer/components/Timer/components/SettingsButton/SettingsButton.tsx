import React from "react";

import { StyledSettingsButton } from "./SettingsButton.styled";

type SettingsButtonProps = {
  onClick?: () => void;
};

export const SettingsButton: React.FunctionComponent<SettingsButtonProps> = ({
  onClick,
}) => {
  return (
    <StyledSettingsButton onClick={onClick}>
      <img src="images/challenge1/gear.svg" alt="Settings" />
    </StyledSettingsButton>
  );
};
