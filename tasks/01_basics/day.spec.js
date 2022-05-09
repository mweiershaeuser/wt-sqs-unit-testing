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
     * 1. Erstelle eine Test Methode (it oder test), die testet, dass die Fetch Methode aus Zeile 20 mit einem vorgegebenem Datum aufgerufen wird.
     * 1.1 Führe die zu testende Methode (isHoliday()) des Testobjekts (day) aus und implementiere ToDo 1.2 im Callback (.then()). (HELP: Der durch die asynchrone Methode entstehende Promise sollte in der Testfunktion returned werden, damit Jest weiß, dass warten soll, bis der Promise resolved wird.)
     * 1.2 Innerhalb des Callbacks erwarten (expect) wir, dass die Fetch Methode (HELP: globalThis.fetch) mit bspw. dem Datum 09.05.2022 in der URL aufgerufen (.toHaveBeenCalledWith) wird.
     * 2. Erstelle eine weitere Test Methode, die testet, ob das vorgegebene Datum ein Feiertag ist und den Wert true returned.
     * 2.1 Speichere in die isHoliday Variable den Wert 1 als Äquivalent für den Wert true.
     * 2.2 Führe die zu testende Methode (isHoliday()) des Testobjekts (day) aus und implementiere dann (.then(h)) die Erwartung (expect) zur Überprüfung des Booleans (HELP: h) ob er wahr (.toBeTruthy()) ist.
     * 3. Erstelle eine weitere Test Methode, die testet, ob das vorgegebene Datum ein Feiertag ist und den Wert false returned.
     * 3.1 Speichere in die isHoliday Variable den Wert 0 als äquivalent für den Wert false.
     * 3.2 Führe die zu testende Methode (isHoliday()) des Testobjekts (day) aus und implementiere dann (.then(h)) die Erwartung (expect) zur Überprüfung des Booleans (HELP: h) ob er falsch (.toBeFalsy()) ist.
     */
  });
});
