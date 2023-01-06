import React from "react";

import { Ring } from "./components/Ring/Ring";
import { Timer } from "./components/Timer/Timer";
import { useTimer } from "./TomatoTimer.hooks";
import { StyledTomatoTimer } from "./TomatoTimer.styled";

export const TomatoTimer = () => {
  const {
    isStarted,
    minutes,
    seconds,
    handleSetTime,
    handleStartButtonClick,
    handleSettingsButtonClick,
  } = useTimer({ minutes: 0, seconds: 0 });

  return (
    <StyledTomatoTimer>
      <Ring isStarted={isStarted} />
      <Timer
        isStarted={isStarted}
        minutes={minutes}
        seconds={seconds}
        onSetTime={handleSetTime}
        onStartButtonClick={handleStartButtonClick}
        onSettingsButtonClick={handleSettingsButtonClick}
      />
    </StyledTomatoTimer>
  );
};
