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
     * 1. Lege Variablen an, die Spies halten sollen. (HELP: Für jeden Wochentag sollte eine Variable angelegt werden)
     */

    beforeEach(() => {
      /**
       * HINWEIS: Dieser Teil wurde in der Demo vorgestellt und daran könnt ihr euch größenteils orientieren.
       * ToDo:
       * 1. Erstelle für jeden zuvor angelegten Wochentag einen Spy mit Mock-Implementation.
       * 1.1 Rufe die Spy-Methode (.spyOn) des jest Objekts auf.
       * 1.2 Innerhalb der Spy-Methode übergibst du als ersten Parameter den jeweiligen Tag (.days[x]) im Testobjekt (week).
       * 1.3 Der zweite Parameter der Spy-Methode ist der Methodenname als String. (HELP: "getWorkingTime" könnte hier gut rein passen ;) )
       * 1.4 Als letzten Schritt, rufe die Methode .mockImplementation auf und übergib eine Funktion, die den gewünschten Mock-Wert (z. B. 0) zurückgibt.
       */
    });

    /**
     * ToDo:
     * 1. Erstelle eine Test-Methode (it oder test), die testet, wenn man an keinem Tag und damit 0 Stunden gearbeitet hat.
     * 1.1 Diese Test-Methode erwartet (expect), dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 0 (.toBe(0)) sein sollten.
     * 2. Erstelle eine Test-Methode, die testet, wenn man an einem Tag in der Woche 8 Stunden gearbeitet hat.
     * 2.1 Rufe die Methode .mockImplementation mit entsprechendem Parameter (Funktion, die 8 zurückgibt) auf einer der oben erstellen Variablen, die einen Spy halten, auf.
     * 2.2 Diese Test-Methode erwartet (expect) anschließend, dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 8 (.toBe(8)) sein sollten.
     * 3. Erstelle eine Test-Methode, die testet, wenn man an zwei Tagen in der Woche insgesamt 12 Stunden (Tag 1: 8 Stunden und Tag 2: 4 Stunden) gearbeitet hat.
     * 3.1 Rufe die Methode .mockImplementation mit entsprechenden Parametern (Funktionen, die 8 bzw. 4 zurückgeben) auf zwei der oben erstellen Variablen, die einen Spy halten, auf.
     * 3.2 Diese Test-Methode erwartet (expect) anschließend, dass in der Woche (week) die gearbeiteten Stunden (.getWorkedHours()) 12 (.toBe(12)) sein sollten.
     */
  });

  describe("hoursFullfilled()", () => {
    /**
     * ToDo:
     * 1. Lege zwei Variablen an, die Spies halten. (HELP: Hier sind besonders die Woche und die bisher gearbeiteten Stunden interessant. Schaue in die week.js! :) )
     */

    beforeEach(() => {
      /**
       * ToDo:
       * 1. Erstelle für jeden zuvor angelegten Wochentag einen Spy.
       * 1.1 Rufe die Spy-Methode (.spyOn) des jest Objekts auf.
       * 1.2 Innerhalb der Spy-Methode übergibst du als ersten Parameter das Testobjekt (week).
       * 1.3 Das zweite Argument der Spy-Methode ist der Methodenname als String. (HELP: Schaue in die week.js!)
       */
    });

    /**
     * ToDo:
     * 1. Erstelle eine Test-Methode (it oder test), die testet, wenn die Summe der gearbeiteten Stunden gleich des Wochenziels ist.
     * 1.1 Rufe jeweils die Methode .mockImplementation mit einer Funktion, die 40 zurückgibt, als Parameter auf den oben erstellten Spies auf.
     * 1.2 Diese Test-Methode erwartet (expect) anschließend, dass in der Woche (week) die erfüllten Stunden (.hoursFullfilled()) wahr (.toBeTruthy()) sind.
     * 2. Erstelle eine Test Methode, die testet, wenn die Summe der gearbeiteten Stunden größer als die des Wochenziels ist.
     * 2.1 Rufe jeweils die Methode .mockImplementation mit Funktionen, die 40 bzw. 42 zurückgeben, als Parameter auf den oben erstellten Spies auf.
     * 2.2 Diese Test-Methode erwartet (expect) anschließend, dass in der Woche (week) die erfüllten Stunden (.hoursFullfilled()) wahr (.toBeTruthy()) sind.
     */
  });
});
