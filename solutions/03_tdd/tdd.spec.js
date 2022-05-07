import { getWorkingTime } from "./tdd";

describe("getWorkingTime()", () => {
  it("should return '08:00' for given startTime '09:00' and endTime '17:00'.", () => {
    expect(getWorkingTime("09:00", "17:00h")).toBe("08:00");
  });

  it("should return '08:15' for given startTime '08:30' and endTime '16:45'.", () => {
    expect(getWorkingTime("08:30", "16:45")).toBe("08:15");
  });

  it("should return '07:55' for given startTime '09:15' and endTime '17:10'.", () => {
    expect(getWorkingTime("09:15", "17:10h")).toBe("07:55");
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
    it("should return '08:00' for given startTime '09:00', endTime '17:30' and 30 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30])).toBe("08:00");
    });

    it("should return '07:40' for given startTime '09:00', endTime '17:30' and 30 and 20 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30, 20])).toBe("07:40");
    });

    it("should return '06:50' for given startTime '09:00', endTime '17:30' and 30, 20 and 50 minutes break.", () => {
      expect(getWorkingTime("09:00", "17:30h", [30, 20, 50])).toBe("06:50");
    });

    it("should throw error for given startTime '09:00', endTime '10:00' and 61 minutes break.", () => {
      expect(() => getWorkingTime("09:00", "10:00h", [61])).toThrow(
        new Error("Breaks can not be bigger than time span!")
      );
    });
  });
});
