import { describe, it, expect } from "@jest/globals";
import Week from "../src/week";

describe("Week", () => {
  let week;
  let monday;

  beforeEach(() => {
    monday = new Date(2022, 4, 9, 12, 0, 0, 0);
    week = new Week(monday);
  });

  it("should create week with all 7 days", () => {
    let days = [
      "9.5.2022",
      "10.5.2022",
      "11.5.2022",
      "12.5.2022",
      "13.5.2022",
      "14.5.2022",
      "15.5.2022",
    ];
    expect(week.days.map((d) => d.date.toLocaleDateString("de-DE"))).toEqual(
      days
    );
  });

  describe("getWeekTarget()", () => {
    let mondaySpy;
    let tuesdaySpy;
    let wednesdaySpy;
    let thursdaySpy;
    let fridaySpy;
    let saturdaySpy;
    let sundaySpy;

    beforeEach(() => {
      mondaySpy = jest
        .spyOn(week.days[0], "isHoliday")
        .mockImplementation(() => false);
      tuesdaySpy = jest
        .spyOn(week.days[1], "isHoliday")
        .mockImplementation(() => false);
      wednesdaySpy = jest
        .spyOn(week.days[2], "isHoliday")
        .mockImplementation(() => false);
      thursdaySpy = jest
        .spyOn(week.days[3], "isHoliday")
        .mockImplementation(() => false);
      fridaySpy = jest
        .spyOn(week.days[4], "isHoliday")
        .mockImplementation(() => false);
      saturdaySpy = jest
        .spyOn(week.days[5], "isHoliday")
        .mockImplementation(() => false);
      sundaySpy = jest
        .spyOn(week.days[6], "isHoliday")
        .mockImplementation(() => false);
    });

    it("should return 40 when there are no holidays.", () => {
      expect(week.getWeekTarget()).toBe(40);
    });

    it("should return 32 when there is a holiday.", () => {
      mondaySpy.mockImplementation(() => true);
      expect(week.getWeekTarget()).toBe(32);
    });

    it("should return 24 when there are two holidays.", () => {
      mondaySpy.mockImplementation(() => true);
      thursdaySpy.mockImplementation(() => true);
      expect(week.getWeekTarget()).toBe(24);
    });
  });
});
