import React from "react";

import { SettingsButton } from "./components/SettingsButton/SettingsButton";
import { StartButton } from "./components/StartButton/StartButton";
import { Time } from "./components/Time/Time";
import { StyledTimer } from "./Timer.styled";

type TimerProps = {
  isStarted: boolean;
  minutes: string;
  seconds: string;
  onSetTime: (value: string) => void;
  onStartButtonClick: () => void;
  onSettingsButtonClick: () => void;
};

export const Timer: React.FunctionComponent<TimerProps> = ({
  isStarted,
  minutes,
  seconds,
  onSetTime,
  onStartButtonClick,
  onSettingsButtonClick,
}) => {
  return (
    <StyledTimer>
      <Time
        isDisabled={isStarted}
        minutes={minutes}
        seconds={seconds}
        onTimeChange={onSetTime}
      />
      <StartButton isStarted={isStarted} onClick={onStartButtonClick} />
      <SettingsButton onClick={onSettingsButtonClick} />
    </StyledTimer>
  );
};
