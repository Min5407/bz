export const getTimeInTimeZone = (timezone: number) => {
  const currentUTCTime = new Date();

  const timeInTimeZone = new Date(currentUTCTime.getTime() + timezone * 1000); // Convert to milliseconds

  return timeInTimeZone;
};

export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions
) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    ...options,
  }).format(date);

  return formattedDate;
};
