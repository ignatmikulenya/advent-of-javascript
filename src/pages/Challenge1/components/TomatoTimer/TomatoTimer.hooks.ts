import { useState, useRef, useCallback, useEffect } from "react";

import { formatTimeToDisplay } from "./components/Timer/Timer.utils";

type UseTimerProps = {
  minutes: number | string;
  seconds: number | string;
};

export const useTimer = ({
  minutes: startMinutes,
  seconds: startSeconds,
}: UseTimerProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(
    `${formatTimeToDisplay(startMinutes)}:${formatTimeToDisplay(startSeconds)}`
  );
  const [minutes, seconds] = time.split(":");
  const intervalId = useRef<number | undefined>(undefined);

  const handleStartButtonClick = useCallback(() => {
    if (intervalId.current !== undefined) {
      clearInterval(intervalId.current);
    }

    if (time !== "00:00") {
      setIsStarted(!isStarted);
    }
  }, [isStarted, time]);

  const handleSettingsButtonClick = useCallback(() => {
    if (intervalId.current !== undefined) {
      clearInterval(intervalId.current);
    }

    setIsStarted(false);
  }, []);

  useEffect(() => {
    if (isStarted) {
      intervalId.current = window.setInterval(() => {
        setTime((currentTime) => {
          console.log("CALL");

          const [currentMinutes, currentSeconds] = currentTime.split(":");
          const convertedMinutes = Number(currentMinutes);
          const convertedSeconds = Number(currentSeconds);

          if (convertedSeconds > 0) {
            return `${currentMinutes}:${formatTimeToDisplay(
              convertedSeconds - 1
            )}`;
          } else if (convertedMinutes > 0 && convertedSeconds === 0) {
            return `${formatTimeToDisplay(convertedMinutes - 1)}:59`;
          }

          return currentTime;
        });
      }, 1000);
    }
  }, [isStarted]);

  useEffect(() => {
    if (isStarted && time === "00:00") {
      console.log("CALL 2");

      setIsStarted(false);
      clearInterval(intervalId.current);

      setTimeout(() => {
        window.alert("Time is over");
      });
    }
  }, [isStarted, time]);

  return {
    isStarted,
    time,
    minutes,
    seconds,
    handleSetTime: setTime,
    handleStartButtonClick,
    handleSettingsButtonClick,
  };
};
