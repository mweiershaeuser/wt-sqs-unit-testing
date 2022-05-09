/**
 * Calculate time of work on a day
 * @param {string} startTime start of working day in format "HH:MM" (24-hour format)
 * @param {string} endTime end of working day in format "HH:MM" (24-hour format)
 * @param {number[]} breaks breaks, given in minutes
 * @returns {number} working time in hours
 */
export function getWorkingTime(startTime, endTime, breaks = []) {
  const [startHours, startMinutes] =
    convertTimeStringToHoursAndMinutes(startTime);
  const [endHours, endMinutes] = convertTimeStringToHoursAndMinutes(endTime);

  // working time in minutes
  let result;

  // Anfangs- und Endzeit in Minuten seit Tagesbeginn.
  const start = startHours * 60 + startMinutes;
  const end = endHours * 60 + endMinutes;

  if (start >= end) {
    throw new Error("End time must be greater than start time!");
  }

  result = end - start;

  // Array.reduce wird genutzt, um alle Elemente des Arrays zu summieren.
  if (breaks.reduce((a, b) => a + b, 0) > result) {
    throw new Error("Breaks can not be bigger than time span!");
  }

  breaks.forEach((b) => {
    result = result - b;
  });

  result = result / 60;

  return result;
}

function convertTimeStringToHoursAndMinutes(timeString) {
  return timeString.split(":").map((n) => parseInt(n, 10));
}
