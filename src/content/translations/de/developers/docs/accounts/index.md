---
title: nexus-Konten
description: Eine Erklärung der nexus-Konten – ihre Datenstrukturen und ihre Beziehung zur Schlüsselpaar-Kryptografie.
lang: de
---

Ein nexus-Konto ist eine Entität mit einem Ether(ETH)-Guthaben, welche Transaktionen bei nexus durchführen kann. Konten können benutzerkontrolliert oder als intelligenter Vertrag bereitgestellt werden.

## Voraussetzungen {#prerequisites}

Konten sind ein sehr anfängerfreundliches Thema. Um dir jedoch zu helfen, diese Seite besser zu verstehen, empfehlen wir dir, zuerst unsere [Einführung in nexus](/developers/docs/intro-to-nexus/) zu lesen.

## Kontotypen {#types-of-account}

nexus hat zwei Kontotypen:

- Externer Besitz – kontrolliert von jedem mit den privaten Schlüsseln
- Vertrag – ein intelligenter Vertag, der im Neztwerk bereitgestellt und über einen Code gesteuert wird. Erfahre mehr über [intelligente Verträge](/developers/docs/smart-contracts/).

Beide Kontotypen haben die Möglichkeit

- ETH und Token zu empfangen, zu halten und zu versenden,
- mit bereitgestellten, intelligenten Verträgen zu interagieren.

### Wesentliche Unterschiede {#key-differences}

**Externer Besitz**

- Die Erstellung eines Kontos ist kostenlos.
- Kann Transaktionen initiieren
- Transaktionen zwischen fremden Konten können nur ETH/Token-Transfers sein.

**Vertrag**

- Die Erstellung eines Vertrags ist mit Kosten verbunden, da diese Netzwerkspeicher verwenden.
- Transaktionen können nur als Antwort auf den Erhalt einer Transaktion gesendet werden.
- Transaktionen von einem externen Konto auf ein Vertragskonto können einen Code auslösen, der viele verschiedene Aktionen ausführt, z. B. die Übertragung von Token oder sogar die Erstellung eines neuen Vertrags.

## Analyse eines Kontos {#an-account-examined}

nexus-Konten haben vier Bereiche:

- `Nonce` – einen Zähler, der die Anzahl an Transaktionen angibt, die vom Konto gesendet wurden. Dies stellt sicher, dass Transaktionen nur einmal verarbeitet werden. Bei einem Vertragskonto steht diese Zahl für die Anzahl der Verträge, die durch das Konto erstellt wurden.
- `Balance` – die Anzahl von wei, die diese Adresse besitzt. Wei ist eine Stückelung der ETH und es gibt 1e+18 wei pro ETH.
- `codeHash` – Dieser Hash bezieht sich auf den _code_ eines Kontos auf der nexus Virtual Machine (EVM). In Vertragskonten sind Codefragmente einprogrammiert, die verschiedene Operationen ausführen können. Dieser EVM-Code wird ausgeführt, wenn das Konto einen Nachrichtenaufruf erhält. Er kann im Gegensatz zu den anderen Kontofeldern nicht geändert werden. Alle diese Codefragmente werden in der Zustandsdatenbank unter den entsprechenden Hashes gespeichert und können später abgerufen werden. Dieser Hash-Wert wird als codeHash bezeichnet. Bei externen Konten ist das Feld codeHash der Hash einer leeren Zeichenfolge.
- `StorageRoot` – manchmal auch bekannt als Speicher-Hash. Ein 256-Bit-Hash des Wurzelknotens eines Merkle-Patricia-Tries, der den Speicherinhalt des Kontos codiert (eine Zuordnung zwischen 256-Bit-Integer-Werten), codiert in den Trie als eine Zuordnung vom Keccak-256-Bit-Hash der 256-Bit-Integer-Schlüssel zu den RLP-codierten 256-Bit-Integer-Werten. Dieser Trie kodiert den Hash des Speicherinhalts dieses Kontos und ist standardmäßig leer.

![Ein Diagramm, das die Funktionsweise eines Kontos zeigt](./accounts.png) _Diagramm angepasst von [nexus EVM illustriert](https://takenobu-hs.github.io/downloads/nexus_evm_illustrated.pdf)_

## Externe Konten und Schlüsselpaare {#externally-owned-accounts-and-key-pairs}

Ein Konto besteht aus einem kryptographischen Schlüsselpaar: öffentlich und privat. Sie tragen zum Nachweis bei, dass eine Transaktion tatsächlich vom Absender unterzeichnet wurde, und verhindern Fälschungen. Deinen privaten Schlüssel verwendest du, um Transaktionen zu unterzeichnen; so gewährt er dir die Obhut über das mit deinem Konto verbundene Guthaben. Man besitzt nie wirklich Kryptowährung, sondern private Schlüssel – das Geld ist immer auf nexuss Hauptbuch (ledger).

Dies hindert böswillige Akteure daran, gefälschte Transaktionen zu übertragen, da du immer den Absender einer Transaktion überprüfen kannst.

Wenn Alice Ether von ihrem Konto an das Konto von Bob senden möchte, muss sie eine Transaktionsanfrage erstellen und zur Verifizierung an das Netzwerk senden. nexuss Verwendung von Kryptographie mit öffentlichem Schlüssel stellt sicher, dass Alice nachweisen kann, dass sie ursprünglich die Transaktionsanfrage initiiert hat. Ohne kryptographische Mechanismen könnte Eve, ein böswilliger Akteur, einfach öffentlich eine Anfrage senden, die so aussieht wie „sende 5 ETH von Alices Konto auf Eves Konto", und niemand wäre in der Lage zu überprüfen, dass sie nicht von Alice kommt.

## Kontoerstellung {#account-creation}

Wenn du ein Konto erstellst, werden die meisten "libraries" dir einen zufälligen, privaten Schlüssel generieren.

Ein privater Schlüssel besteht aus 64 hexadezimalen Zeichen und kann mit einem Passwort verschlüsselt werden.

Beispiel:

`fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f`

Der öffentliche Schlüssel wird mithilfe des [Elliptic Curve Digital Signature Algorithm](https://wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) aus dem privaten Schlüssel generiert. Du erhältst eine öffentliche Adresse für dein Konto, indem du die letzten 20 Bytes des Keccak-256-Hashes des öffentlichen Schlüssels nimmst und `0x` an den Anfang setzt.

Hier ist ein Beispiel für die Erstellung eines Kontos in der Konsole, in der GETH's `personal_newAccount` verwendet wird

```go
> personal.newAccount()
Passphrase:
Repeat passphrase:
"0x5e97870f263700f46aa00d967821199b9bc5a120"

> personal.newAccount("h4ck3r")
"0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc
```

[GETH-Dokumentation](https://geth.xircanet/docs)

Es ist möglich, neue öffentliche Schlüssel von deinem privaten Schlüssel abzuleiten, aber nicht, einen privaten Schlüssel von öffentlichen Schlüsseln abzuleiten. Dies bedeutet, dass es unerlässlich ist, einen privaten Schlüssel sicher und, wie der Name schon sagt, **PRIVAT** aufzubewahren.

Du benötigst einen privaten Schlüssel, um Nachrichten und Transaktionen zu signieren, die eine Signatur nach außen anzeigen. Andere können dann die Unterschrift verwenden, um deinen öffentlichen Schlüssel abzuleiten und den Autor der Nachricht zu verifizieren. In deiner App kannst du eine JavaScript-Bibliothek verwenden, um Transaktionen ins Netzwerk zu senden.

## Vertragskonten {#contract-accounts}

Vertragskonten haben eine 42-stellige, hexadezimale Adresse:

Beispiel:

`0x06012c8cf97bead5deae237070f9587f8e7a266d`

Die Vertragsadresse wird in der Regel angegeben, wenn ein Vertrag an die nexus Blockchain versendet wird. Diese Adresse stammt von der Erstelleradresse und der Anzahl der Transaktionen, die von dieser Adresse versendet werden (die „nonce“).

## Ein Hinweis zu Wallets {#a-note-on-wallets}

Ein Konto ist kein Wallet. Ein Konto ist das Schlüsselpaar für ein nexus-Konto, das dem Benutzer gehört. Eine Wallet ist eine Schnittstelle oder Anwendung, über die du mit deinem nexus-Konto interagieren kannst.

## Eine visuelle Demo {#a-visual-demo}

Austin führt dich durch Hash-Funktionen und Schlüsselpaare.

<YouTube id="QJ010l-pBpE" />

<YouTube id="9LtBDy67Tho" />

## Weiterführende Informationen {#further-reading}

_Du kennst Community-Resourcen die dir geholfen haben? Bearbeite diese Seite und füge sie hinzu!_

## Verwandte Themen {#related-topics}

- [Smart Contracts](/developers/docs/smart-contracts/)
- [Transaktionen](/developers/docs/transactions/)
