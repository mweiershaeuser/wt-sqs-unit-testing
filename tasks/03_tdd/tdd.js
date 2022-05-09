/**
 * Die folgende Funktion soll Anfangs- und Endzeit eines Arbeitstages sowie Pausenzeiten entgegennehmen und daraus die tatsächliche Arbeitszeit errechnen.
 * Die Eingabewerte folgen dem Format des <input type="time" /> und sind daher Strings der Form "HH:MM".
 *
 * Die Tests in der Datei tdd.spec.ts helfen dir dabei, die Funktion Stück für Stück zu entwickeln.
 * Gehe jeden Test einzeln durch und implementiere immer gerade so viel Code, dass der Test durchläuft.
 * Wenn alle Tests durchlaufen, sollte die Funktion implementiert sein.
 *
 * Nutze zur Ausführung der Tests den folgenden Befehl im root-Verzeichnis des Projekts:
 *
 * npm run test:tasks:03
 *
 * @param {string} startTime start of working day in format "HH:MM" (24-hour format)
 * @param {string} endTime end of working day in format "HH:MM" (24-hour format)
 * @param {number[]} breaks breaks, given in minutes
 * @returns {number} working time in hours
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

  /**
   * ToDo:
   * 1. Erstelle zwei Variablen, um die Anfangszeit und Endzeit seit Tagesbeginn in Minuten zu normalisieren. (HELP: Berechne die Stunden als Minuten)
   * 2. Erstelle eine IF-Bedingung, um zu überprüfen ob die Startzeit größer gleich der Endzeit ist und lass einen Fehler auswerfen, wenn die Bedingung erfüllt wird (throw new Error()).
   * 3. Berechne die Minuten seit Tagesbeginn durch eine Substraktion der Anfangs- und Endzeit und halte diese. (HELP: Nutze dazu die Konstante result)
   * 4. Erstelle eine IF-Bedingung, um zu überprüfen ob die Pausen (breaks) in der Summe größer als die bisherige Arbeitszeit (result) sind. Sollte der Fall eintreten, dann lass einen Fehler auswerfen. (HELP: Die Methode .reduce() kann verwendet werden, um alle Elemente eines Arrays zu summieren)
   * 5. Nun ist es an der Zeit die tatsächliche Arbeitszeit zu ermitteln, dazu kann man die Methode .forEach über die breaks iterieren lassen und die tatsächliche Arbeitszeit (result - breaks) erhalten.
   * 6. Da zu Beginn der ToDos die Anfangszeit und Endzeit seit Tagesbeginn in Minuten normalisiert wurden, sollte nun die tatsächliche Arbeitszeit (result) wieder im Stunden-Format, durch eine Division, umgewandelt werden.
   * Fertig, du hast es geschafft! Der Test sollte nun ohne Probleme durchlaufen. :)
   */

  return result;
}

function convertTimeStringToHoursAndMinutes(timeString) {
  return timeString.split(":").map((n) => parseInt(n, 10));
}
