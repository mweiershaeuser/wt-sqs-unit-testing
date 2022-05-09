import { getWorkingTime } from "../solutions/03_tdd/tdd";

export default class Day {
  date;

  startTime;
  endTime;

  breaks = [];

  constructor(date) {
    this.date = date;
  }

  getWorkingTime = () =>
    getWorkingTime(this.startTime, this.endTime, this.breaks);

  async isHoliday() {
    const response = await fetch(
      `https://ipty.de/feiertag/api.php?do=isFeiertag&datum=${this.date
        .getDate()
        .toString()
        .padStart(2, "0")}.${(this.date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${this.date.getFullYear()}`
    );
    const holidayCheck = await response.json();

    return holidayCheck ? true : false;
  }
}
