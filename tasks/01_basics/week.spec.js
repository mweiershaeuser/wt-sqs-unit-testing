import { describe, it, expect } from "@jest/globals";
import Week from "../src/week";

describe("Week", () => {
  let week;
  let monday;

  beforeEach(() => {
    monday = new Date(2022, 4, 9, 12, 0, 0, 0);
    week = new Week(monday);
  });

  describe("getWorkedHours()", () => {
    // Lege hier Variablen an, die z. B. Mock-Werte oder Spies halten.

    beforeEach(() => {
      // Setup, z. B. Spies
    });

    // ToDo: Erstelle hier Tests
  });

  describe("hoursFullfilled()", () => {
    // Lege hier Variablen an, die z. B. Mock-Werte oder Spies halten.

    beforeEach(() => {
      // Setup, z. B. Spies
    });

    // ToDo: Erstelle hier Tests
  });
});
