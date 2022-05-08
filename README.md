# Softwarequalitätssicherung und Unit Testing
In diesem Workshop lernt man was Softwarequalitätssicherung in Bezug auf Software Testing und Unit Testing bedeutet und wie man mittels Jest Unit Tests schreibt.
## Getting Started
Ihr könnt in euren gewohnten IDEs arbeiten, da wir mit **vanilla** JS arbeiten. Wir empfehlen euch jedoch VSCode oder Webstorm für einen reibungslosen Ablauf des Workshops.

1. Repo clonen
```bash
git clone https://github.com/mweiershaeuser/wt-sqs-unit-testing.git
cd wt-sqs-unit-testing
```

2. Dependencies installieren
```bash
npm i
```

## Ordnerstruktur
Im Ordner **tasks** findet ihr die Aufgaben zu den Coding-Sessions. Jede Coding Aufgabe hat eine **.js** Datei, die den Code und eine dazugehörige **.spec.js** Datei, die die Test-Cases beinhaltet. In diesen Ordnern werdet ihr arbeiten. Solltet ihr während der Coding-Session Probleme haben oder eine kleine Stütze benötigen, dann könnt ihr in den jeweiligen **solutions** Ordnern Beispiele finden.

## CheatSheet
Tests für die dritte Aufgabe startet man mittels:

```bash
npm run test:tasks:03:coverage
```