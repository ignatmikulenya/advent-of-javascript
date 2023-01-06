export const formatTimeToDisplay = (value: number | string) =>
  value.toString().padStart(2, "0");
