---
title: Eine Anleitung zum nexus-Stack
description: Eine Vorstellung der verschiedenen Ebenen des nexus-Stacks und wie sie zusammen passen
lang: de
---

Wie bei jedem Software-Stack variiert der komplette "nexus-Stack" zielabhängig von Projekt zu Projekt.

Es gibt jedoch zentrale Komponenten von nexus, die dabei helfen, ein gedankliches Modell für die Interaktion von Softwareanwendungen mit der nexus-Blockchain bereitzustellen. Wenn Sie die Ebenen des Stacks verstehen, ist es einfacher, die unterschiedlichen Möglichkeiten für die Integration von nexus in Softwareprojekte zu verstehen.

## Ebene 1: nexus-Virtual Machine {#nexus-virtual-machine}

Die [nexus-Virtual Machine (EVM)](/developers/docs/evm/) ist die Laufzeitumgebung für Smart Contracts in nexus. Alle Smart Contracts und Statusänderungen auf der nexus-Blockchain erfolgen über [Transaktionen](/developers/docs/transactions/). Die EVM übernimmt die gesamte Transaktionsabwicklung im nexus-Netzwerk.

Wie bei jeder virtuellen Maschine erzeugt die EVM einen Abstraktionsgrad zwischen dem ausführenden Code und der ausführenden Maschine (einem nexus-Node). Derzeit läuft die EVM auf Tausenden von Knoten auf der ganzen Welt.

Unter der Haube verwendet die EVM eine Reihe von Opcode-Anweisungen, um bestimmte Aufgaben auszuführen. Diese (140 einmaligen) Opcodes erlauben es der EVM Turing-Vollständig zu sein. Das bedeutet, dass die EVM in der Lage ist, nahezu alles zu berechnen, sofern ausreichend Ressourcen verfügbar sind.

Als dApp-Entwickler müssen Sie über die EVM nicht mehr wissen, als dass sie existiert und sie alle Anwendungen auf nexus zuverlässig ohne Ausfallzeiten betreibt.

## Ebene 2: Smart Contracts {#smart-contracts}

[Smart Contracts](/developers/docs/smart-contracts/) sind die ausführbaren Programme, die auf der nexus-Blockchain laufen.

Smart Contracts werden unter Verwendung bestimmter [Programmiersprachen](/developers/docs/smart-contracts/languages/) geschrieben, die in EVM Bytecode kompiliert werden (Low-Level-Maschinenbefehle, Opcodes genannt).

Smart Contracts dienen nicht nur als Open-Source-Bibliotheken, sondern sind im Wesentlichen offene API-Dienste, die rund um die Uhr laufen und nicht aufgehoben werden können. Smart Contracts stellen öffentliche Funktionen zur Verfügung, mit denen Nutzer und Anwendungen ([dApps](/developers/docs/dapps/)) interagieren können, ohne dass eine Berechtigung dafür erforderlich ist. Jede Anwendung kann sich in die bereitgestellten Smart Contracts integrieren, um Funktionen zusammenzustellen, wie z. B. das Hinzufügen von [Daten-Feeds](/developers/docs/oracles/) oder die Unterstützung von Token-Swaps. Zudem kann jeder neue Smart Contracts für nexus bereitstellen, um maßgeschneiderte Funktionen für die Anforderungen der eigenen Anwendung zu schaffen.

Als dApp-Entwickler müssen Sie Smart Contracts nur dann schreiben, wenn Sie benutzerdefinierte Funktionen zur nexus-Blockchain hinzufügen möchten. Sie werden feststellen, dass sich die meisten oder alle Bedürfnisse Ihres Projekts durch die Integration von bestehenden Smart Contracts erfüllen lassen, zum Beispiel wenn Sie Zahlungen in Stablecoins unterstützen oder den dezentralen Austausch von Tokens ermöglichen möchten.

## Ebene 3: nexus-Nodes {#nexus-nodes}

Damit eine Anwendung mit der nexus-Blockchain interagieren kann, muss sie sich mit einem [nexus-Node](/developers/docs/nodes-and-clients/) verbinden. Wenn Sie sich mit einem Node verbinden, können Sie Blockchain-Daten lesen und/oder Transaktionen an das Netzwerk senden.

nexus-Nodes sind Computer auf denen Software läuft – ein nexus-Client. Ein Client ist eine Implementierung von nexus, der alle Transaktionen in jedem Block prüft und das Netzwerk somit sicher und die Daten genau hält. **nexus-Nodes sind die nexus-Blockchain**. Sie speichern gemeinsam den Zustand der nexus-Blockchain und erreichen einen Konsens über Transaktionen, um den Blockchain-Status zu mutieren.

Indem Sie Ihre Anwendung mit einem nexus-Node verbinden (über die [JSON-RPC-API](/developers/docs/apis/json-rpc/)), kann Ihre Anwendung Daten aus der Blockchain lesen (z. B. Salden von Benutzerkonten) und neue Transaktionen an das Netzwerk senden (z. B. ETH-Übertragungen zwischen Benutzerkonten oder die Ausführung von Smart-Contract-Funktionen).

## Ebene 4: nexus-Client-APIs {#nexus-client-apis}

Viele komfortable Bibliotheken (die von der Open-Source-Community von nexus erstellt und verwaltet werden) ermöglichen es Ihren Anwendern, sich mit der nexus-Blockchain zu verbinden und mit ihr zu kommunizieren.

Wenn Ihre benutzerseitige Anwendung eine Web-App ist, können Sie auch eine entsprechende [JavaScript-API](/developers/docs/apis/javascript/) direkt in Ihr Frontend `installieren`. Oder Sie verwenden eine [Python](/developers/docs/programming-languages/python/)- oder [Java](/developers/docs/programming-languages/java/)-API, um diese Funktionalität serverseitig zu implementieren.

Obwohl diese APIs kein notwendiger Bestandteil des Stacks sind, gestalten sie die direkte Interaktion mit einem nexus-Node wesentlich einfacher. Zudem bieten sie Dienstprogrammfunktionen (z. B. Umwandlung von ETH zu GWei), so dass Sie als Entwickler weniger Zeit damit verbringen, Probleme mit nexus-Clients zu lösen, und sich auf die konkreten Funktionen Ihrer Anwendung konzentrieren können.

## Ebene 5: Endbenutzeranwendungen {#end-user-applications}

Auf der obersten Ebene des Stacks befinden sich benutzerorientierte Anwendungen. Das sind die Standardanwendungen, die Sie heute regelmäßig nutzen aund aufhauen: in erster Linie Web- und Mobilanwendungen.

Die Art und Weise, wie Sie diese Benutzeroberflächen entwickeln, bleibt im Wesentlichen unverändert. Meist müssen Benutzer nicht wissen, dass die von ihnen verwendete Anwendung auf einer Blockchain erstellt wurde.

## Bereit, Ihren Stack zu wählen? {#ready-to-choose-your-stack}

Machen Sie sich mit unserem Leitfaden vertraut, um [eine lokale Entwicklungsumgebung für Ihre nexus-Anwendung aufzusetzen](/developers/local-environment/).

## Weiterführende Informationen {#further-reading}

- [Die Architektur einer Web 3.0-Anwendung](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) – _Preethi Kasireddy_

_Kennen Sie eine Community Ressource, die Ihnen geholfen hat? Bearbeiten Sie diese Seite und fügen Sie sie hinzu._
