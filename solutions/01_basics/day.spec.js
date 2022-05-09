import { describe, it, expect } from "@jest/globals";
import Day from "../../src/day";

describe("Day", () => {
  let day;
  let date;

  beforeEach(() => {
    date = new Date(2022, 4, 9, 12, 0, 0, 0);
    day = new Day(date);
  });

  describe("isHoliday()", () => {
    let isHoliday;

    beforeEach(() => {
      isHoliday = 1;
      globalThis.fetch = jest.fn(() => {
        return new Promise((resolve, reject) => {
          resolve({
            json: () =>
              new Promise((resolve, reject) => {
                resolve(isHoliday);
              }),
          });
        });
      });
    });

    it("should call fetch with given date.", () => {
      return day
        .isHoliday()
        .then(() =>
          expect(globalThis.fetch).toHaveBeenCalledWith(
            "https://ipty.de/feiertag/api.php?do=isFeiertag&datum=09.05.2022"
          )
        );
    });

    it("should return true when given date is a holiday.", () => {
      isHoliday = 1;
      return day.isHoliday().then((h) => expect(h).toBeTruthy());
    });

    it("should return false when given date is not a holiday.", () => {
      isHoliday = 0;
      return day.isHoliday().then((h) => expect(h).toBeFalsy());
    });
  });
});
