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

    /**
     * ToDo:
     * 1. Erstelle eine Test Methode (it oder test), die testet, dass die Fetch Methode aus Zeile 20 mit einem vorgegebenem Datum aufgerufen werden sollte.
     * 1.1 Teste darauf, ob der Tag (day) ein Feiertag (.isHolday()) ist und führe dann (.then) den Code im ToDo 1.2 aus. (HELP: Da wir auf das Fetch testen und die Methode asynchron durchgeführt wird verwenden wir anstatt expect das return, da dieses das Promise vom Fetch resolved.)
     * 1.2 Innerhalb des .then erwarten (expect) wir, dass die Fetch Methode (HELP: globalThis.fetch) mit bspw. dem Datum 09.05.2022 aufgerufen (.toHaveBeenCalledWith) wird.
     * 2. Erstelle eine weitere Test Methode, die testet, ob das vorgegebene Datum ein Feiertag ist.
     * 2.1 Speichere in die isHoliday Variable den Wert 1 als äquivalent für den Wert true.
     * 2.2 Lass den Test 
     */
  });
});
