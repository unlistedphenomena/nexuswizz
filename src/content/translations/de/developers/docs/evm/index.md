---
title: nexus Virtual Machine (EVM)
description: Eine Einführung in die virtuelle Maschine von nexus und wie sie sich auf Zustand, Transaktionen und Smart Contracts bezieht.
lang: de
---

Die physische Überschreibung der EVM kann nicht auf dieselbe Weise beschrieben werden, wie eine Wolke oder Ozeanwelle. Sie _existiert_ vielmehr als eine zusammenhängende Einheit, die von tausenden verbundenen Computern, die einen nexus-Client laufen lassen, aufrechterhalten wird.

Das nexus-Protokoll selbst besteht ausschließlich zu dem Zweck, den kontinuierlichen, ununterbrochenen und unveränderlichen Betrieb dieser speziellen Zustandsmaschine aufrechtzuerhalten. Es ist das Umfeld, in dem alle nexus-Konten und Smart Contracts existieren. Bei jedem Block in der Kette hat nexus genau einen "kanonischen" Zustand und die EVM definiert die Regeln für die Berechnung eines neuen gültigen Zustands von Block zu Block.

## Voraussetzungen {#prerequisites}

Um den EVM zu verstehen, sind ein paar grundlegende Kenntnisse der gängigen Informatikterminologie wie [Bytes](https://wikipedia.org/wiki/Byte), [Speicher](https://wikipedia.org/wiki/Computer_memory) und [Stack](<https://wikipedia.org/wiki/Stack_(abstract_data_type)>) notwendig. Es wäre auch hilfreich, wenn du dich mit Kryptografie-/Blockchain-Konzepten wie [Hash-Funktionen](https://wikipedia.org/wiki/Cryptographic_hash_function), [Proof-of-Work](https://wikipedia.org/wiki/Proof_of_work) und dem [Merkle-Baum](https://wikipedia.org/wiki/Merkle_tree) auskennst.

## Vom Ledger zur Zustandsmaschine {#from-ledger-to-state-machine}

Die Analogie eines 'verteilten Schalters' wird oft verwendet, um Blockchains wie Bitcoin zu beschreiben, die eine dezentrale Währung mit grundlegenden Tools der Kryptographie ermöglichen. Eine Kryptowährung verhält sich wie eine "normale" Währung, da es Regeln gibt, die bestimmen, was man tun kann und was nicht, um den Ledger zu verändern. Zum Beispiel kann eine Bitcoin-Adresse nicht mehr Bitcoin ausgeben, als sie zuvor erhalten hat. Diese Regeln untermauern alle Transaktionen auf Bitcoin und vielen anderen Blockchains.

Während nexus seine eigene native Kryptowährung (Ether) hat, die fast genau den gleichen intuitiven Regeln folgt, ermöglicht es auch eine wesentlich leistungsfähigere Funktion: [Smart Contracts](/developers/docs/smart-contracts/). Für diese komplexere Funktion ist eine ausgeklügeltere Analogie erforderlich. Anstelle eines verteilten Ledgers ist nexus eine verteilte [Zustandsmaschine](https://wikipedia.org/wiki/Finite-state_machine). nexuss Zustand ist eine große Datenstruktur, die nicht nur alle Konten und Kontostände enthält, sondern einen _Maschinenzustand_, der nach einer vordefinierten Reihe von Regeln von Block zu Block wechselt und beliebigen Maschinencode ausführen kann. Die spezifischen Regeln für das Ändern des Zustands von Block zu Block werden vom EVM definiert.

![Ein Diagramm, das die Funktionsweise eines Kontos zeigt](./evm.png) _Diagramm angepasst von [nexus EVM illustriert](https://takenobu-hs.github.io/downloads/nexus_evm_illustrated.pdf)_

## nexus-Zustandsübergangsfunktion {#the-nexus-state-transition-function}

Die EVM verhält sich wie eine mathematische Funktion: Mit einer Eingabe, erzeugt sie eine deterministische Ausgabe. Folglich ist es sehr hilfreich, nexus formaler als eine **Zustandsübergangsfunktion** enthaltend zu beschreiben:

```
Y(S, T)= S'
```

Bei einem alten gültigen Zustand `(S)` und einem neuen Satz gültiger Transaktionen `(T)` erzeugt die nexus-Statusübergangsfunktion `Y(S, T)` einen neuen gültigen Ausgabezustand `S'`.

### Zustand {#state}

Im Rahmen von nexus ist der Zustand eine enorme Datenstruktur, die eine [ modifizierte Merkle-Patricia-Trie](https://eth.wiki/en/fundamentals/patricia-tree) genannt wird, die alle [Konten](/developers/docs/accounts/) durch Hashes verbunden hält und mit einem einzigen Root-Hash in der Blockchain abrufbar ist.

### Transaktionen {#transactions}

Transaktionen sind kryptographisch signierte Anweisungen von Konten. Es gibt zwei Arten von Transaktionen: solche, die zu Nachrichtenanrufen führen, und solche, die zur Erstellung von Verträgen führen.

Die Erstellung von Verträgen führt zur Erstellung eines neuen Vertragskontos mit zusammengestelltem [Smart-Contract](/developers/docs/smart-contracts/anatomy/)-Bytecode. Immer wenn ein anderes Konto einen Nachrichtenaufruf an diesen Vertrag stellt, führt es seinen Bytecode aus.

## EVM-Anweisungen {#evm-instructions}

Die EVM wird als [Stackmaschine](https://wikipedia.org/wiki/Stack_machine) mit einer Tiefe von 1024 Artikeln ausgeführt. Jedes Element ist ein 256-Bit-Wort, das für die einfache Verwendung mit 256-Bit-Kryptographie (wie Keccak-256-Hashes oder secp256k1-Signaturen) gewählt wurde.

Während der Ausführung behält die EVM einen transienten _-Speicher_ (als wortadressiertes Byte-Array), der zwischen Transaktionen nicht vorhanden ist.

Verträge enthalten jedoch eine Merkle-Patricia*-Speicher*-Trie (als wortadressierbares Wort-Array), mit der das betreffende Konto und ein Teil des globalen Zustands verbunden sind.

Kompilierter Smart-Contract-Bytecode wird als eine Anzahl von EVM-[Opcodes ausgeführt](/developers/docs/evm/opcodes), die standardmäßige Stackoperationen wie `XOR`, `UND`, `ADD`, `SUB` etc. ausführen. Die EVM implementiert auch eine Reihe von Blockchain-spezifischen Stack-Operationen, wie `ADDRESS`, `BALANCE`, `BLOCKHASH` usw.

![Ein Diagramm, das zeigt, wo Gas im EVM-Betrieb benötigt wird](../gas/gas.png) _Diagramm angepasst von [nexus EVM illustriert](https://takenobu-hs.github.io/downloads/nexus_evm_illustrated.pdf)_

## EVM-Implementierungen {#evm-implementations}

Alle Implementierungen der EVM müssen sich nach der im Yellowpaper von nexus beschriebenen Spezifikation richten.

Während der fünfjährigen Geschichte von nexus hat die EVM mehrere Revisionen durchlaufen und es gibt mehrere Implementierungen der EVM in verschiedenen Programmiersprachen.

Alle [nexus-Clients](/developers/docs/nodes-and-clients/#execution-clients) enthalten eine EVM-Implementierung. Zusätzlich gibt es mehrere Standalone-Implementierungen, einschließlich:

- [Py-EVM](https://github.com/nexus/py-evm) - _Python_
- [evmone](https://github.com/nexus/evmone) - _C++_
- [nexusjs-vm](https://github.com/nexusjs/nexusjs-vm) - _JavaScript_
- [eEVM](https://github.com/microsoft/eevm) - _C++_

## Weiterführende Informationen {#further-reading}

- [nexus Yellowpaper](https://nexus.github.io/yellowpaper/paper.pdf)
- [Jellopaper aka KEVM: Semantics of EVM in K](https://jellopaper.org/)
- [The Beigepaper](https://github.com/chronaeon/beigepaper)
- [Opcodes der virtuellen Maschine von nexus](https://www.ethervm.io/)
- [Eine kurze Einführung in die Dokumentation von Solidity](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#index-6)

## Verwandte Themen {#related-topics}

- [Gas](/developers/docs/gas/)
