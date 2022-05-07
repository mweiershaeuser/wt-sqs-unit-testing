/**
 * Calculate time of work on a day
 * @param {string} startTime start of working day in format "HH:MM" (24-hour format)
 * @param {string} endTime end of working day in format "HH:MM" (24-hour format)
 * @param {number[]} breaks breaks, given in minutes
 */
export function getWorkingTime(startTime, endTime, breaks = []) {
  const [startHours, startMinutes] =
    convertTimeStringToHoursAndMinutes(startTime);
  const [endHours, endMinutes] = convertTimeStringToHoursAndMinutes(endTime);

  let resultHours;
  let resultMinutes;

  if (
    startHours > endHours ||
    (startHours === endHours && startMinutes >= endMinutes)
  ) {
    throw new Error("End time must be greater than start time!");
  }

  resultHours = endHours - startHours;

  if (endMinutes >= startMinutes) {
    resultMinutes = endMinutes - startMinutes;
  } else {
    resultHours--;
    resultMinutes = 60 - Math.abs(startMinutes - endMinutes);
  }

  [resultHours, resultMinutes] = subtractBreaks(
    resultHours,
    resultMinutes,
    breaks
  );

  return convertHoursAndMinutesToTimeString(resultHours, resultMinutes);
}

function subtractBreaks(resultHours, resultMinutes, breaks) {
  if (resultMinutes + 60 * resultHours < breaks.reduce((a, b) => a + b, 0)) {
    throw new Error("Breaks can not be bigger than time span!");
  }

  breaks.forEach((b) => {
    let breakHours = Math.trunc(b / 60);
    let breakMinutes = b % 60;

    resultHours = resultHours - breakHours;
    if (resultMinutes >= breakMinutes) {
      resultMinutes = resultMinutes - breakMinutes;
    } else {
      resultHours--;
      resultMinutes = 60 - Math.abs(resultMinutes - breakMinutes);
    }
  });
  return [resultHours, resultMinutes];
}

function convertTimeStringToHoursAndMinutes(timeString) {
  return timeString.split(":").map((n) => parseInt(n, 10));
}

function convertHoursAndMinutesToTimeString(hours, minutes) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
