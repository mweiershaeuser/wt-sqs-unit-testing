# Softwarequalitätssicherung durch Unit Testing - Workshop 2022

Willkommen im Repository zum Workshop "Softwarequalitätssicherung durch Unit Testing". Der Workshop behandelt Motivation zu und Relevanz sowie Konzeption und Umsetzung von Unit Tests anhand praktischer Beispiele im JavaScript-Kontext. Dazu wird das Testing-Framework [Jest](https://jestjs.io/) genutzt. Das vorliegende Repository enthält alle Materialien, die zur Teilnahme des Workshops notwendig sind. Bitte behandle die unten stehende Setup-Guide vor Workshop-Beginn.

Der Workshop wurde im Rahmen des Moduls "Web Technologien" des Studiengangs Medieninformatik (Master) mit Schwerpunkt Weaving the Web im Sommersemester 2022 an der Technischen Hochschule Köln (TH Köln) konzipiert. Weitere Informationen zum Modul und Workshop findet ihr [hier](https://th-koeln.github.io/mi-master-wtw/workshops/2022/sqs_unit-testing/index/).

**Ansprechpartner**

- [Daniel Heuser](https://github.com/Darkkap)
- [Melvin Weiershäuser](https://github.com/mweiershaeuser)

## Getting Started

Ihr könnt in euren gewohnten IDEs arbeiten, da wir mit **vanilla** JS arbeiten. Wir empfehlen euch für einen reibungslosen Ablauf des Workshops [Visual Studio Code](https://code.visualstudio.com/).

Bitte stellt sicher, dass ihr über eine funktionierende Installation von [Node.js](https://nodejs.org/en/) (Version 14 oder 16) und npm verfügt.

1. Workshop-Repository clonen

```bash
git clone https://github.com/mweiershaeuser/wt-sqs-unit-testing.git
cd wt-sqs-unit-testing
```

2. Dependencies installieren

```bash
npm install
```

## Ordnerstruktur

```
📂 wt-sqs-unit-testing
|-- 📂 solutions            // Lösungen, äquivalente Struktur zu tasks
|-- 📂 tasks                // Aufgaben
    |-- 📂 00_demo          // genutzter Beispiel- und Referenz-Code
    |-- 📂 0x_<topic>       // Aufgabe x zum Thema <topic>
        |-- 📄 *.js         // Source-Code
        |-- 📄 *.spec.js    // Test-Code
    |-- 📂 src              // Source-Code, der getestet wird.
```

## Test-Ausführung

Die geschriebenen Tests können mittels der Jest-CLI ausgeführt werden. Für diesen Workshop wurden für alle notwendigen CLI-Befehle npm-Skripte geschrieben, die dem folgenden Muster folgen:

```bash
npm run test:<tasks | solutions>:<0x>:<coverage>
```

Dadurch können alle Aufgaben und Lösungen variabel einzeln oder gemeinsam mit optionaler Coverage-Erfassung ausgeführt werden.

Alle verfügbaren Skripte können der [package.json](package.json) entnommen werden.

### Beispiele

**Alle Tests**

```bash
npm run test
```

**Alle Tests mit Coverage**

```bash
npm run test:coverage
```

**Alle Aufgaben**

```bash
npm run test:tasks
```

**Alle Lösungen mit Coverage**

```bash
npm run test:solutions:coverage
```

**Aufgabe 3 mit Coverage**

```bash
npm run test:tasks:03:coverage
```
