import { describe, it, expect } from "@jest/globals";
import { getWorkingTime } from "../03_tdd/tdd";
import Day from "../01_basics/day";

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

    // ToDo: Erstelle hier Test(-s), sodass die Coverage der day.js steigt.
  });
});
