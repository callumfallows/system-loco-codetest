import moment from "moment";

export const calculateTimeFromNow = (dateString: string): string => {
  const date = moment(dateString);
  const now = moment();
  const duration = moment.duration(now.diff(date));

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (years > 0) {
    return `${years} year(s) ago`;
  }
  if (months > 0) {
    return `${months} month(s) ago`;
  }
  if (days > 0) {
    return `${days} day(s) ago`;
  }
  if (hours > 0) {
    return `${hours} hour(s) ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  }
  return `${seconds} second(s) ago`;
};
