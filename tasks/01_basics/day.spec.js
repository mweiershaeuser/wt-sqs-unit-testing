import { describe, it, expect } from "@jest/globals";
import Day from "../src/day";

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

      // Mock der globalen fetch-Funktion -> Rückgabewert ist über isHoliday steuerbar.
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

    // ToDo: Erstelle hier Tests
  });
});
