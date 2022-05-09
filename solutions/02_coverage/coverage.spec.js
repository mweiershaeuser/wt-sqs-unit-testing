import { describe, it, expect } from "@jest/globals";
import { getWorkingTime } from "../03_tdd/tdd";
import Day from "../src/day";

jest.mock("../03_tdd/tdd");

describe("Day", () => {
  let day;
  let date;

  beforeEach(() => {
    date = new Date(2022, 4, 9, 12, 0, 0, 0);
    day = new Day(date);
  });

  describe("getWorkingTime()", () => {
    let workingTime;

    beforeEach(() => {
      workingTime = 8;
      getWorkingTime.mockImplementation(() => workingTime);
    });

    it("should call external getWorkingTime() with correct parameters.", () => {
      day.startTime = "09:00";
      day.endTime = "17:30";
      day.breaks = [30];

      let result = day.getWorkingTime();

      expect(getWorkingTime).toHaveBeenCalledWith("09:00", "17:30", [30]);
      expect(result).toBe(workingTime);
    });
  });
});
