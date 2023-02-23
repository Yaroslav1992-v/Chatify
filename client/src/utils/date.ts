export function getTime(date: Date): string {
  const hours = date.getHours() % 12 || 12; // convert 24-hour time to 12-hour time
  const minutes = date.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
  const ampm = date.getHours() >= 12 ? "PM" : "AM"; // determine AM or PM

  return `${hours}:${minutes} ${ampm}`;
}
export function formatMessageDate(date: Date): string {
  const today = new Date().toLocaleDateString();
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString(); // subtract 24 hours in milliseconds to get yesterday's date
  const customDateFormat = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);

  if (today === new Date(date).toLocaleDateString()) {
    return "today";
  } else if (yesterday === new Date(date).toLocaleDateString()) {
    return "yesterday";
  } else {
    return customDateFormat;
  }
}
