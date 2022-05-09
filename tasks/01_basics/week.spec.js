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
    /**
     * ToDo:
     * 1. Lege Variablen an die Mock-Werte oder Spies halten. (HELP: Für jeden Wochentag sollte eine Variable angelegt werden)
     */

    beforeEach(() => {
      /**
       * HINWEIS: Dieser Teil wurde in der Demo vorgestellt und daran könnt ihr euch größenteils orientieren.
       * ToDo:
       * 1. Erstelle für jeden zuvor angelegten Spy eine Mock-Funktion
       * 1.1 Rufe mit dem Jest Objekt (jest) gleichzeitig die Spy Methode (.spyOn) auf.
       * 1.2 Innerhalb der Spy Methode legst du als erstes Argument das Objekt mit der Woche (week) und die Tage (.days[]) fest. (HELP: Für jeden Wochentag legst du in .days[] eine numerische Zahl an z.B.: Montag = 1)
       * 1.3 Das zweite Argument der Spy Methode ist der Methodenname. (HELP: "getWorkingTime" könnte hier gut rein passen ;) )
       * 1.4 Als letzten Schritt füge die Methode .mockImplementation mit dem Wert 0 hinzu.
       */
    });

    /**
     * ToDo:
     * 1. Erstelle eine Test Methode (it oder test), die testet, wenn man an keinem Tag gearbeitet und damit 0 Stunden gearbeitet hat.
     * 1.1 Diese Test Methode erwartet (expect), dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 0 (.toBe(0)) sein sollten.
     * 2. Erstelle eine Test Methode, die testet, wenn man an einem Tag in der Woche 8 Stunden gearbeitet hat.
     * 2.1 Hänge die Methode .mockImplementation mit dem Wert 8 an einen der oben erstellen Variablen, die einen Spy halten.
     * 2.2 Diese Test Methode erwartet (expect) anschließend, dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 8 (.toBe(8)) sein sollten.
     * 3. Erstelle eine Test Methode, die testet, wenn man an zwei Tag in der Woche insgesamt 12 Stunden (Tag 1 8 Stunden und Tag 2 4 Stunden) gearbeitet hat.
     * 3.1 Hänge die Methode .mockImplementation mit dem Wert 8 und 4 an zwei der oben erstellen Variablen, die einen Spy halten.
     * 3.2 Diese Test Methode erwartet (expect) anschließend, dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 12 (.toBe(12)) sein sollten.
     */
  });

  describe("hoursFullfilled()", () => {
    /**
     * ToDo:
     * 1. Lege zwei Variablen an die Mock-Werte oder Spies halten. (HELP: Hier sind besonders die Woche und die bisher gearbeiteten Stunden interessant. Zur Orientierung für die Namen kannst du in die week.js schauen.)
     */

    beforeEach(() => {
      /**
       * ToDo:
       * 1. Erstelle für jeden zuvor angelegten Spy eine Mock-Funktion
       * 1.1 Rufe mit dem Jest Objekt (jest) gleichzeitig die Spy Methode (.spyOn) auf.
       * 1.2 Innerhalb der Spy Methode legst du als erstes Argument das Objekt mit der Woche (week) fest. 
       * 1.3 Das zweite Argument der Spy Methode ist der Methodenname. (HELP: Zur Orientierung für die Methodennamen kannst du in die week.js schauen.)
       */
    });

    // ToDo: Erstelle hier Tests
  });
});
