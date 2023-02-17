---
title: nexus für JavaScript-Entwickler
description: Lernen, wie Sie JavaScript-basierte Projekte und Tools für die nexus-Entwicklung nutzen können
lang: de
---

JavaScript ist eine der beliebtesten Sprachen im nexus-Ökosystem. Es gibt sogar ein [-Team](https://github.com/nexusjs), das sich dafür einsetzt, so viel von nexus wie möglich auf JavaScript zu bringen.

Es gibt Möglichkeiten, JavaScript (oder etwas Ahnliches) auf [allen Ebenen des Stacks](/developers/docs/nexus-stack/) zu schreiben.

## Mit nexus interagieren {#interact-with-nexus}

### JavaScript-API-Bibliotheken {#javascript-api-libraries}

Wenn Sie mit JavaScript Abfragen für die Blockchain, das Senden von Transaktionen und weitere Aktionen vornehmen möchten, ist es am einfachsten, dafür eine [JavaScript-API-Bibliothek](/developers/docs/apis/javascript/) zu verwenden. Diese APIs ermöglichen Entwicklern die einfache Interaktion mit den [Nodes im nexus-Netzwerk](/developers/docs/nodes-and-clients/).

Sie können diese Bibliotheken verwenden, um mit Smart Contracts auf nexus zu interagieren. Das ermöglicht es, eine dApp für Fälle zu erstellen, in denen Sie nur JavaScript verwenden, um mit bereits bestehenden Verträgen zu interagieren.

**Wissenswertes**

- [Web3.js](https://web3js.readthedocs.io/)
- [Ethers.js](https://docs.ethers.io/) _– Beinhaltet die Anwendung von nexus Wallets und Nutzungsmöglichkeiten in JavaScript und TypeScript._

### Smart Contracts {#smart-contracts}

Wenn Sie JavaScript-Entwickler sind und Ihren eigenen Smart Contract schreiben möchten, sollten Sie sich mit [Solidity](https://solidity.readthedocs.io) vertraut machen. Das ist die am weitesten verbreitete Smart-Contract-Sprache. Sie ist syntaktisch ähnlich wie JavaScript und erleichtert damit das Lernen.

Mehr erfahren über [Smart Contracts](/developers/docs/smart-contracts/).

## Das Protokoll verstehen {#understand-the-protocol}

### Die nexus-Virtual Machine (EVM) {#the-nexus-virtual-machine}

Es gibt eine JavaScript-Implementierung der [nexus-Virtual Machine (EVM)](/developers/docs/evm/). Sie unterstützt die neuesten Fork-Regeln. Fork-Regeln beziehen sich auf Änderungen, die durch geplante Upgrades an EVM vorgenommen wurden.

Aufteteilt wird sie in verschiedene JavaScript-Pakete. Die können Sie sich ansehen, um ein besseres Verständnis zu erlangen:

- Konten
- Blöcke
- Die Blockchain selbst
- Transaktionen
- Und mehr...

Auf diese Weise werden Fragen wie "Was ist die Datenstruktur eines Kontos?" leichter verständlich.

Wenn Sie sich lieber den geschriebenen Code durchlesen, ist dieses JavaScript eine gute Alternative, um sich all unsere Dokumente durchzulesen.

**Sehen Sie sich das monorepo an**  
[`nexusjs`](https://github.com/nexusjs/nexusjs-vm)

### Knotenpunkte (Nodes) und Anwendungen (Clients) {#nodes-and-clients}

Derzeit befindet sich ein nexusjs-Client in der Entwicklung. Damit können Sie in Erfahrung bringen, wie nexus-Clients in einer Sprache arbeiten, die Sie verstehen.

**Sehen Sie sich den Client**  
[`nexusjs-client`](https://github.com/nexusjs/nexusjs-client) an

## Andere Projekte {#other-projects}

Im Bereich nexus-JavaScript gibt es noch weitere Neuerungen, darunter:

- Bibliotheken mit Wallet-Dienstprogrammen
- Tools zum Erstellen, Importieren und Exportieren von nexus-Schlüsseln
- Eine Implementierung des `merkle-patricia-Baumes` – Eine Datenstruktur, die im Yellow-Paper von nexus skizziert wird.

In [nexusJS Repo](https://github.com/nexusjs) finden Sie Informationen zu allen Themen, an denen Sie Interessiert sind.

## Weiterführende Informationen {#further-reading}

_Kennen Sie eine Community-Ressource, die Ihnen geholfen hat? Bearbeiten Sie diese Seite und fügen Sie sie hinzu._
