import Day from "./day";

export default class Week {
  days = [];

  constructor(monday) {
    this.days.push(new Day(monday));
    for (let i = 1; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      this.days.push(new Day(nextDay));
    }
  }

  getWeekTarget() {
    let weekTarget = 40;

    this.days.forEach((d) => {
      if (d.isHoliday()) {
        weekTarget = weekTarget - 8;
      }
    });

    return weekTarget;
  }

  getWorkedHours() {
    let workedHours = 0;

    this.days.forEach((d) => {
      workedHours = workedHours + d.getWorkingTime();
    });

    return workedHours;
  }

  hoursFullfilled() {
    return this.getWorkedHours() >= this.getWeekTarget();
  }
}
