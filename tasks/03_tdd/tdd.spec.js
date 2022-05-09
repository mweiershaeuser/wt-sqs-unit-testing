import { describe, it, expect } from "@jest/globals";
import { getWorkingTime } from "./tdd";

describe("getWorkingTime()", () => {
  it("should return 8 hours for given startTime '09:00' and endTime '17:00'.", () => {
    expect(getWorkingTime("09:00", "17:00h")).toBe(8);
  });

  it("should return 8 hours and 15 minutes for given startTime '08:30' and endTime '16:45'.", () => {
    expect(getWorkingTime("08:30", "16:45")).toBe(8.25);
  });

  it("should return 7 hours and 55 minutes for given startTime '09:15' and endTime '17:10'.", () => {
    expect(getWorkingTime("09:15", "17:10h")).toBe(7 + 55 / 60);
  });

  describe("should throw error", () => {
    it("for given startTime '09:00' and endTime '08:00'.", () => {
      expect(() => getWorkingTime("09:00", "08:00h")).toThrow(
        new Error("End time must be greater than start time!")
      );
    });

    it("for given startTime '09:15' and endTime '09:10'.", () => {
      expect(() => getWorkingTime("09:15", "09:10h")).toThrow(
        new Error("End time must be greater than start time!")
      );
    });
  });

  describe("with given breaks", () => {
    it("should return 8 hours for given startTime '09:00', endTime '17:30' and 30 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30])).toBe(8);
    });

    it("should return 7 hours and 40 minutes for given startTime '09:00', endTime '17:30' and 30 and 20 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30, 20])).toBe(7 + 40 / 60);
    });

    it("should return 6 hours and 50 minutes for given startTime '09:00', endTime '17:30' and 30, 20 and 50 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30, 20, 50])).toBe(6 + 50 / 60);
    });

    it("should throw error for given startTime '09:00', endTime '10:00' and 61 minutes break.", () => {
      expect(() => getWorkingTime("09:00", "10:00h", [61])).toThrow(
        new Error("Breaks can not be bigger than time span!")
      );
    });
  });
});
