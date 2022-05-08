/**
 * Die folgende Funktion soll Anfangs- und Endzeit eines Arbeitstages sowie Pausenzeiten entgegennehmen und daraus die tatsächliche Arbeitszeit errechnen.
 * Die Zeiten folgen dem Format des <input type="time" /> und sind daher Strings der Form "HH:MM".
 *
 * Die Tests in der Datei tdd.spec.ts helfen dir dabei, die Funktion Stück für Stück zu entwickeln.
 * Gehe jeden Test einzeln durch und implementiere immer gerade so viel Code, dass der Test durchläuft.
 * Wenn alle Tests durchlaufen, sollte die Funktion implementiert sein.
 *
 * Nutze zur Ausführung der Tests den folgenden Befehl im root-Verzeichnis des Projekts:
 *
 * npm run test:tasks:03:coverage
 *
 * Solltest du weitere Hilfestellung brauchen, findest du diese am Ende der Datei.
 *
 * @param {string} startTime start of working day in format "HH:MM" (24-hour format)
 * @param {string} endTime end of working day in format "HH:MM" (24-hour format)
 * @param {number[]} breaks breaks, given in minutes
 */
export function getWorkingTime(startTime, endTime, breaks = []) {
  /**
   * HELP
   * Destructuring: Die Methode gibt ein Array zurück, deren Werte vom Typ number
   * in die Variablen (startHours und startMinutes) geschrieben werden.
   *  */
  const [startHours, startMinutes] =
    convertTimeStringToHoursAndMinutes(startTime);
  const [endHours, endMinutes] = convertTimeStringToHoursAndMinutes(endTime);

  let result; // HELP: Soll Ergebnis in "Minuten seit Tagesbeginn" halten
  let resultHours;
  let resultMinutes;

  /**
   * ToDo:
   * 1. Erstelle zwei Variablen, um die Anfangszeit und Endzeit seit Tagesbeginn in Minuten zu normalisieren. (HELP: Berechne die Stunden als Minuten)
   * 2. Erstelle eine IF-Bedingung, um zu überprüfen ob die Startzeit größer gleich der Endzeit ist und lass einen Fehler auswerfen, wenn die Bedingung erfüllt wird.
   * 3. Berechne die Minuten seit Tagesbeginn durch eine Substraktion der Anfangs- und Endzeit und halte diese. (HELP: Nutze dazu die Konstante result)
   */

  return convertHoursAndMinutesToTimeString(resultHours, resultMinutes);
}

function convertTimeStringToHoursAndMinutes(timeString) {
  return timeString.split(":").map((n) => parseInt(n, 10));
}

function convertHoursAndMinutesToTimeString(hours, minutes) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * HELP
 *
 * Umrechnung von Minuten seit Tagesbeginn in separate Werte Stunden & Minuten.
 * Stunden: Math.trunc() rundet Floats ab zu einem Integer-Wert.
 * Minuten: Modulo-Operation (Operator %) ergibt "übrige" Minuten.
 */