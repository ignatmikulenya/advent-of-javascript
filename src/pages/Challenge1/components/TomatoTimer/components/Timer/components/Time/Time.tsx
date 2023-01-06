import React from "react";

import { formatTimeToDisplay } from "../../Timer.utils";

import { StyledInput, StyledTime } from "./Time.styled";

type TimeProps = {
  isDisabled: boolean;
  minutes: string;
  seconds: string;
  onTimeChange: (value: string) => void;
};

export const Time: React.FunctionComponent<TimeProps> = ({
  isDisabled,
  minutes,
  seconds,
  onTimeChange,
}) => {
  const handleTimeInput = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      event.preventDefault();

      const { value, dataset } = event.target;
      const convertedValue = Number(value);

      if (
        !Number.isNaN(convertedValue) &&
        convertedValue >= 0 &&
        convertedValue <= 59
      ) {
        const { time } = dataset;
        const formattedValue = formatTimeToDisplay(convertedValue);

        if (time === "minutes") {
          onTimeChange(`${formattedValue}:${seconds}`);
        } else if (time === "seconds") {
          onTimeChange(`${minutes}:${formattedValue}`);
        }
      }
    },
    [minutes, seconds, onTimeChange]
  );

  return (
    <StyledTime>
      <StyledInput
        data-time="minutes"
        disabled={isDisabled}
        value={minutes}
        onChange={handleTimeInput}
      />
      <span>:</span>
      <StyledInput
        data-time="seconds"
        disabled={isDisabled}
        value={seconds}
        onChange={handleTimeInput}
      />
    </StyledTime>
  );
};
