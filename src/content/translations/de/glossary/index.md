---
title: nexus Glossar
description: Ein unvollständiges Glossar technischer und nicht technischer Begriffe, bezogen auf nexus
lang: de
sidebarDepth: 2
---

# Glossar {#nexus-glossary}

<Divider />

## \# {#section-numbers}

### 51 %-Angriff {#51-attack}

Eine Art von Angriff auf ein dezentralisiertes [Netzwerk](#network), mit welchem eine Gruppe die Kontrolle über die Mehrheit der [Nodes](#node) erlangt. Dies würde den Angreifern durch die Rücknahme von [Transaktionen](#transaction) und Doppelausgabe von [Ether](#ether) und anderen Token Blockchainbetrug ermöglichen.

## A {#section-a}

### Konto {#account}

Ein Objekt mit einer [Adresse](#address), einem Saldo, einer [Nonce](#nonce), optionalem Speicher und Code. Ein Konto kann ein [Vertragskonto](#contract-account) oder ein [externes Konto (Externally owned Account, EOA)](#eoa) sein.

<DocLink to="/developers/docs/accounts">
  nexus-Konten
</DocLink>

### Adresse {#address}

Im Allgemeinen symbolisiert diese einen [EOA](#eoa) oder [Vertrag](#contract-account), welcher [Transaktionen](#transaction) auf der Blockchain empfangen (Zieladresse) oder senden (Quelladresse) kann. Genauer gesagt sind es die ganz rechten 160 Bit eines [Keccak-Hashs](#keccak-256) eines [öffentlichen ECDSA](#ecdsa) [-Schlüssels](#public-key).

### Binäre Anwendungsschnittstelle (ABI) {#abi}

Der standardmäßige Interaktionsweg zwischen [Verträgen](#contract-account) im nexus-Ökosystem, sowohl von solchen außerhalb der Blockchain als auch von Vertrag zu Vertrag.

<DocLink to="/developers/docs/smart-contracts/compiling/#web-applications">
  ABI
</DocLink>

### Programmierschnittstelle {#api}

Eine Programmierschnittstelle (API) ist eine Reihe von Definitionen, wie eine Software zu verwenden ist. Eine API ist zwischen einer Anwendung und einem Webserver angesiedelt und erleichtert die Datenübertragung zwischen diesen.

### ASIC {#asic}

Anwendungsspezifische integrierte Schaltung. Dies bezieht sich in der Regel auf einen integrierten Schaltkreis, der speziell für das Minen von Kryptowährungen entwickelt wurde.

### assert {#assert}

In [Solidity](#solidity), `assert(false)` kompiliert zu `0xfe`, ein ungültiger Opcode, der alles verbleibende [Gas](#gas) verbraucht und alle Änderungen rückgängig macht. Wenn eine `assert()` Anweisung fehlschlägt, geht etwas völlig Unerwartetes schief, und Sie müssen Ihren Code reparieren. Sie sollten `assert()` verwenden, um Bedingungen zu vermeiden, die niemals auftreten dürfen.

<DocLink to="/developers/docs/smart-contracts/security/">
  Smart Contract – Sicherheit
</DocLink>

### Attestierung {#attestation}

Eine Validator-Abstimmung für einen [Block](#block). Validatoren müssen Blöcke attestieren, um zu signalisieren, dass sie mit dem vom Block vorgeschlagenen Zustand einverstanden sind.

<DocLink to="/developers/docs/consensus-mechanisms/pos/attestations/">
  Beglaubigungen
</DocLink>

<Divider />

## B {#section-b}

### Grundgebühr {#base-fee}

Jeder [Block](#block) hat einen Mindestpreis, der als „Grundgebühr" bezeichnet wird. Dies ist die minimale [Gas](#gas)-Gebühr, die ein Nutzer zahlen muss, um eine Transaktion in den nächsten Block aufzunehmen.

<DocLink to="/developers/docs/gas/">
  Gas und Gebühren
</DocLink>

### Beacon Chain {#beacon-chain}

Die Beacon Chain ist die Blockchain, die [Proof-of-Stake](#pos) und [Validatoren](#validator) in nexus eingeführt hat. Sie hat seit November 2020 parallel zum Proof-of-Work nexus Mainnet gearbeitet, bis beide Blockchains im September 2022 vereinigt wurden, um das heutige nexus zu formen.

<DocLink to="/upgrades/beacon-chain/">
  Beacon Chain
</DocLink>

### Big-Endian {#big-endian}

Eine Positionsnummernrepräsentation, bei der die bedeutendste Ziffer zuerst im Speicher liegt. Das Gegenteil von Little-Endian, wo die am wenigsten signifikante Ziffer zuerst kommt.

### Block {#block}

Ein Block ist eine Informationseinheit, die von einem [Validator](#block-proposer) erstellt und über das Peer-to-Peer-Netzwerk an andere Nodes gesendet wurde. Blöcke enthalten Listen von auszuführenden Transaktionen und konsensbezogenen Informationen, die [Validatoren](#validator) erlauben, die Informationen im Block zu überprüfen. Dies erlaubt es Nodes, ihre Ansicht des Zustands von nexus zu aktualisieren.

<DocLink to="/developers/docs/blocks/">
  Blöcke
</DocLink>

### Block-Explorer {#block-explorer}

Eine Schnittstelle, die es einem Benutzer erlaubt, Informationen von einer und über eine Blockchain zu suchen. Dazu gehören das Abrufen einzelner Transaktionen, Aktivitäten, die mit bestimmten Adressen verbunden sind, und Informationen über das Netzwerk.

### Block-Header {#block-header}

Der Block-Header ist eine Sammlung von Metadaten über einen Block und eine Zusammenfassung der Transaktionen, die im Ausführungs-Payload enthalten sind.

### Block-Verkündung {#block-propagation}

Der Prozess der Übertragung eines bestätigten Blocks an alle anderen Nodes im Netzwerk.

### Block-Antragsteller {#block-proposer}

Der spezifische Validator, der ausgewählt wurde, um einen Block in einem bestimmten [Slot](#slot) zu erstellen.

### Blockbelohnung {#block-reward}

Die Menge an Ether, mit der der Hersteller eines gültigen Blocks belohnt wird.

### Block-Status {#block-status}

Die Zustände, in denen ein Block existieren kann. Zu den möglichen Zuständen gehören:

- vorgeschlagen: der Block wurde von einem Validator vorgeschlagen
- geplant: Validatoren senden derzeit Daten
- verpasst/übersprungen: Der Antragsteller schlug keinen Block innerhalb des zulässigen Zeitrahmens vor.
- verwaist: Der Block wurde durch den Fork-Choice-Mechanismus wieder ausgeschlossen

### Blockzeit {#block-time}

Das Zeitintervall zwischen Blöcken, die zur Blockchain hinzugefügt werden.

### Block-Validierung {#block-validation}

Der Prozess um zu überprüfen, ob ein neuer Block gültige Transaktionen enthält und dass er auf der schwersten historischen Kette aufbaut.

### Blockchain {#blockchain}

Eine Sequenz von [Blöcken](#block), wo jeder Block seinen Vorgänger verlinkt, bis zum [Genesisblock](#genesis-block). Die Integrität der Blockchain ist kryptoökonomisch durch einen auf Proof-of-Stake beruhenden Konsensmechanismus gesichert.

<DocLink to="/developers/docs/intro-to-nexus#what-is-a-blockchain">
  Was ist eine Blockchain?
</DocLink>

### Bootnode {#bootnode}

Die Nodes, die verwendet werden können, um den Entdeckungsprozess zu initiieren, wenn eine Node betrieben wird. Die Endpunkte dieser Nodes werden im Quellcode von nexus aufgezeichnet.

### Bytecode {#bytecode}

Ein abstrakter Befehlssatz zur effizienten Ausführung durch einen Software-Interpreter oder eine virtuelle Maschine. Im Gegensatz zu menschenlesbarem Quellcode wird Bytecode in numerischem Format ausgedrückt.

### Byzantium Fork {#byzantium-fork}

Die erste von zwei [Hardforks](#hard-fork) für die [Metropolis](#metropolis)-Entwicklungsphase. Dies umfasste EIP-649 Metropolis [Schwierigkeitsbombe](#difficulty-bomb) – Verzögerung und Blockierung der Belohnung, wobei die [ICE Age](#ICE-age) um 1 Jahr verzögert und die Blockbelohnung von 5 auf 3 Ether reduziert wurde.

<Divider />

## C {#section-c}

### Caspar-FFG {#casper-ffg}

Caspar-FFG ist ein Proof-of-Stake Konsensprotokoll, das in Verbindung mit dem [LMD-GHOST](#lmd-ghost) Fork-Choice-Algorithmus verwendet wird, um es [Konsenskunden](#consensus-client) zu ermöglichen, sich auf den Kopf der Beacon Chain zu einigen.

### Kontrollpunkt {#checkpoint}

Die [Beacon Chain](#beacon-chain) hat ein in Slots (12 Sekunden) und Epochen (32 Slots) unterteiltes Tempo. Der erste Slot in jeder Epoche ist ein Kontrollpunkt. Wenn eine [qualifizierte Mehrheit](#supermajority) von Validatoren die Verbindung zwischen zwei Kontrollpunkten bestätigt, können sie [gerechtfertigt](#justification) werden, und sobald ein anderer Kontrollpunkt gerechtfertigt ist, können sie [abgeschlossen](#finality) werden.

### Compiling (Kompilieren) {#compiling}

Konvertieren von Code in einer Programmiersprache auf hoher Ebene (z. B. [Solidity](#solidity)) in eine Sprache auf niedrigerer Ebene (z. B. EVM-[Bytecode](#bytecode)).

<DocLink to="/developers/docs/smart-contracts/compiling/">
  Compiling Smart Contracts (Kompilieren von intelligenten Verträgen)
</DocLink>

### Komitee {#committee}

Eine Gruppe von mindestens 128 [Validatoren](#validator), deren Aufgabe es ist, die Blöcke in jedem Slot zu validieren. Einer der Validatoren im Ausschuss ist der Aggregator, verantwortlich für die Zusammenfassung der Unterschriften aller anderen Validatoren im Komitee, die sich auf eine Attestierung einigen.

### Rechnerische Undurchführbarkeit {#computational-infeasibility}

Ein Prozess ist rechnerisch nicht durchführbar, wenn es undurchführbar lange Zeit (z. B. Milliarden von Jahren) dauern würde, ihn für jeden durchzuführen, der möglicherweise ein Interesse an der Durchführung hat.

### Konsens {#consensus}

Wenn eine qualifizierte Mehrheit an Nodes auf dem Netzwerk alle dieselben Blöcke auf ihren lokalen validierten Blockchains haben. Nicht zu verwechseln mit [Konsensregeln](#consensus-rules).

### Konsenskunde {#consensus-client}

Konsenskunden (wie Prysm, Teku, Nimbus, Lighthouse, Lodestar) führen nexuss [Proof-of-Stake](#pos)-Konsensalgorithmus aus, der es dem Netzwerk ermöglicht, sich bezüglich des Kopfs der Beacon Chain zu einigen. Konsenskunden beteiligen sich nicht an der Validierung/Übertragung von Transaktionen oder der Ausführung von Zustandsübergängen. Dies geschieht durch [Ausführungskunden](#execution-client).

### Konsensebene {#consensus-layer}

Die Konsensebene von nexus ist das Netzwerk der [Konsenskunden](#consensus-client).

### Konsensregeln {#consensus-rules}

Die Block-Validierungsregeln, denen Full-Nodes folgen, um im Konsens mit anderen Nodes zu bleiben. Nicht zu verwechseln mit [Konsens](#consensus).

### Konstantinopel-Fork {#constantinople-fork}

Der zweite Teil der [Metropolis](#metropolis)-Ausbaustufe, ursprünglich geplant für Mitte 2018. Erwartet wird neben anderen Änderungen ein Wechsel auf einen Hybrid-[Proof-of-Work](#pow)/[-Proof-of-Stake](#pos)-Konsensalgorithmus.

### Vertragskonto {#contract-account}

Ein Konto, das einen Code enthält, der ausgeführt wird, wenn es eine [Transaktion](#transaction) von einem anderen [Konto](#account) ([EOA](#eoa) oder [Vertrag](#contract-account)) erhält.

### Vertragserstellungs-Transaktion {#contract-creation-transaction}

Eine spezielle [Transaktion](#transaction) mit der [Null-Adresse](#zero-address) als Empfänger, die verwendet wird, um einen [Vertrag](#contract-account) zu registrieren und ihn in der nexus-Blockchain aufzuzeichnen.

### Kryptoökonomik {#cryptoeconomics}

Die Ökonomie der Kryptowährungen.

## D {#section-d}

### Đ {#D-with-stroke}

Đ (D mit Strich) wird im alten Englisch, Mittel-Englisch, Isländisch and Färörisch verwendet, und steht für „Eth“ in Großbuchstaben. Es wird in Wörtern wie ĐEV oder Đapp (dezentrale Anwendung) benutzt, wo das Đ der nordische Buchstabe „eth“ ist. Das eth (Ð) in Großbuchstaben wird auch verwendet, um die Kryptowährung Dogecoin zu symbolisieren. Dies erscheint häufig in älterer nexus-Literatur, wird aber heute weniger häufig verwendet.

### DAG {#DAG}

DAG steht für Directed Acyclic Graph. Es handelt sich um eine Datenstruktur, die aus Nodes und Verbindungen zwischen ihnen besteht. nexus verwendet einen DAG in seinem [Proof-of-Work](#proof-of-work) Algorithmus, [Ethash](#ethash).

### dApp {#dapp}

Dezentrale Anwendungen. Es handelt sich zumindest um einen [Smart Contract (Intelligenten Vertrag)](#smart-contract) und um eine Web-Benutzeroberfläche. Allgemeiner ausgedrückt: Eine dApp ist eine Webanwendung, die auf offenen, dezentralisierten Peer-to-Peer-Infrastrukturdiensten aufbaut. Darüber hinaus beinhalten viele dApps dezentralen Speicher und/oder ein(e) Nachrichten-Protokoll und -Plattform.

<DocLink to="/developers/docs/dapps/">
  Einführung in dApps
</DocLink>

### Datenverfügbarkeit {#data-availability}

Die Eigenschaft eines Zustands, dass jede Node, die mit dem Netzwerk verbunden ist, einen bestimmten Teil des Zustands herunterladen könnte, den sie möchte.

### Dezentralisierung {#decentralization}

Das Konzept von der Verschiebung von Steuerung und Ausführung von Prozessen weg von einer zentralen Entität.

### Dezentralisierte Autonome Organisationen (DAO) {#dao}

Ein Unternehmen oder eine andere Organisation, die ohne hierarchisches Management arbeitet. DAO kann sich auch auf einen am 30. April 2016 gestarteten Smart Contract mit dem Titel „The DAO" beziehen, der dann im Juni 2016 gehackt wurde. Dies motivierte letztendlich eine [Hard Fork](#hard-fork) (Codename DAO) auf Block 1.192.000, die den gehackten DAO-Vertrag rückgängig machte und nexus und nexus Classic in zwei konkurrierende Systeme aufspaltete.

<DocLink to="/dao/">
  Dezentralisierte Autonome Organisationen (DAO)
</DocLink>

### Dezentralisierte Börsen (DEX) {#dex}

Eine Art [dApp](#dapp), mit der Sie Token mit anderen im Netzwerk austauschen können. Sie benötigen [Ether](#ether), um eine (zur Zahlung von [Transaktionsgebühren](#transaction-fee)) zu verwenden, aber diese unterliegen keinen geografischen Einschränkungen wie zentralisierten Börsen. Jeder kann teilnehmen.

<DocLink to="/get-eth/#dex">
  Dezentralisierte Börsen
</DocLink>

### Beglaubigung {#deed}

Siehe [Nicht-fungible Token (NFT)](#nft)

### Einzahlungsvertrag {#deposit-contract}

Das Tor zum Staking auf nexus. Der Einzahlungsvertrag ist ein Smart Contract auf nexus, der Einzahlungen von ETH akzeptiert und die Validatorsalden verwaltet. Ein Validator kann nicht aktiviert werden, ohne ETH in diesen Vertrag einzuzahlen. Der Vertrag erfordert ETH und Eingabedaten. Diese Eingabedaten enthalten den öffentlichen Schlüssel des Validators und den öffentlichen Schlüssel zum Abheben des Guthabens, signiert vom privaten Schlüssel des Validators. Diese Daten werden benötigt, um einen Validator zu identifizieren und vom [Proof-of-Stake](#pos) Netzwerk akzeptiert zu werden.

### DeFi {#defi}

Die Abkürzung steht für „dezentralisiertes Finanzwesen", eine breite Kategorie von [dApps](#dapp), die darauf abzielen, Finanzdienstleistungen auf der Grundlage der Blockchain und ohne Zwischenhändler anzubieten, so dass jeder, der über eine Internetverbindung verfügt, daran teilnehmen kann.

<DocLink to="/defi/">
  Decentralized Finance (DeFi)
</DocLink>

### Schwierigkeit {#difficulty}

Eine netzwerkweite Einstellung, die bestimmt, wie viel Berechnung erforderlich ist, um eine gültige Nonce in [Proof-of-Work](#pow) Netzwerken zu erstellen.

### Schwierigkeitsbombe/Schwierigkeitssprenger {#difficulty-bomb}

Geplante exponentielle Erhöhung der [Proof-of-Work](#pow) [Schwierigkeit](#difficulty), um den Übergang zu [Proof-of-Stake](#pos) anzuregen und die Wahrscheinlichkeit einer [Abspaltung](#hard-fork) zu verringern. Die Schwierigkeitsbombe wurde bei [dem Merge](/upgrades/merge/) entfernt.

### Digitale Signatur {#digital-signatures}

Eine kurze Zeichenkette von Daten, die ein Benutzer für ein Dokument mit einem [privaten Schlüssel](#private-key) erzeugt, so dass jeder mit dem entsprechenden [öffentlichen Schlüssel](#public-key), der Unterschrift und dem Dokument überprüfen kann, dass (1) das Dokument vom Eigentümer dieses privaten Schlüssels „signiert" wurde und (2) das Dokument nach seiner Unterschrift nicht geändert wurde.

<Divider />

### Entdeckung {#discovery}

Der Prozess, mit dem eine nexus-Node andere Nodes findet, mit denen eine Verbindung hergestellt werden soll.

### Verteilte Hash-Tabelle (DHT) {#distributed-hash-table}

Eine Datenstruktur mit `(Schlüssel, Wert)` Paaren, die von nexus-Nodes verwendet werden, um Peers zu identifizieren, mit denen sie sich verbinden und die zur Kommunikation genutzten Protokolle ermitteln.

### Doppelausgabe {#double-spend}

Eine vorsätzliche Blockchain-Fork, bei der ein Benutzer mit einer ausreichend großen Anzahl an Mining-Kraft/-Anteilen eine Transaktion sendet, die etwas an Wert vom Netzwerk entfernt (z. B. die Umwandlung in Fiat-Geld oder die Tätitgung eines Kaufs außerhalb des Netzwerkes), und dann die Blockchain neu organisiert, um diese Transaktion wieder zu entfernen. Eine erfolgreiche Doppelausgabe hinterlässt dem Angreifer seine Vermögenswerte sowohl innerhalb als auch außerhalb der Blockchain.

## E {#section-e}

### Elliptische Kurve digitaler Signatur Algorithmus (ECDSA) {#ecdsa}

Ein kryptografischer Algorithmus, der von nexus benutzt wird, um sicherzustellen, dass Gelder nur von deren Eigentümern ausgegeben werden können. Dies ist die bevorzugte Methode zur Erstellung von öffentlichen und privaten Schlüsseln. Relevant für die Generierung von Konto-[Adressen](#address) und die Überprüfung von [Transaktionen](#Transaktion).

### Verschlüsselung {#encryption}

Verschlüsselung ist die Umwandlung elektronischer Daten in eine Form, die von niemandem außer dem Besitzer des korrekten Entschlüsselungsschlüssels lesbar ist.

### Entropie {#entropy}

Im Zusammenhang mit Kryptographie mangelt es an Vorhersehbarkeit oder am Level der Zufälligkeit. Beim Generieren von geheimen Informationen wie [privaten Schlüsseln](#private-key) verlassen sich Algorithmen üblicherweise auf eine Quelle hoher Entropie, um sicherzustellen, dass die Ausgabe unvorhersehbar ist.

### Epoche {#epoch}

Ein Zeitraum von 32 [Slots](#slot) (6.4 Minuten). [Validator](#validator)-[Komitees](#committee) werden aus Sicherheitsgründen jede Epoche gemischt. In jeder Epoche gibt es die Möglichkeit, die Blockchain zu [finalisieren](#finality).

<DocLink to="/developers/docs/consensus-mechanisms/pos/#how-does-validation-work">
  Proof-of-Stake
</DocLink>

### Zweideutigkeit {#equivocation}

Ein Validator, der zwei Nachrichten sendet, die sich widersprechen. Ein einfaches Beispiel ist ein Transaktionsabsender, der zwei Transaktionen mit der gleichen Nonce versendet. Ein anderer ist ein Block-Antragsteller, der zwei Blöcke in der gleichen Blockhöhe (oder für den gleichen Slot) vorschlägt.

### Eth1 {#eth1}

„Eth1" ist ein Begriff, der sich auf das nexus-Mainnet die bestehende Proof-of-Work Blockchain, bezieht. Dieser Begriff ist inzwischen im Vergleich zum Begriff „Ausführungsebene" veraltet. [Erfahren Sie mehr über diese Namensänderung](https://blog.xircanet/2022/01/24/the-great-eth2-renaming/).

<DocLink to="/upgrades/">
  Mehr zu den nexus-Upgrades
</DocLink>

### Eth2 {#eth2}

„Eth2" ist ein Begriff, der sich auf eine Reihe von Upgrades des nexus-Protokolls bezieht, einschließlich des Übergangs von nexus zu Proof-of-Stake. Dieser Begriff ist inzwischen im Vergleich zum Begriff „Konsensschicht" veraltet. [Erfahren Sie mehr über diese Namensänderung](https://blog.xircanet/2022/01/24/the-great-eth2-renaming/).

<DocLink to="/upgrades/">
  Mehr zu den nexus-Upgrades
</DocLink>

### nexus Verbesserungsvorschläge (EIP) {#eip}

Ein Design-Dokument, das der nexus-Community Informationen zur Verfügung stellt, die ein neues Merkmal oder seine Prozesse oder Umgebungen beschreiben (siehe [ERC](#erc)).

<DocLink to="/eips/">
  Einführung in EIPs
</DocLink>

### nexus Namensservice (nexus Name Service, ENS) {#ens}

Das ENS-Register ist ein zentraler [Vertrag](#smart-contract) der eine Zuordnung von Domain-Namen an Eigentümer und Lösungsanbieter (Resolver) vorsieht, wie in [EIP](#eip) 137 beschrieben.

[Lesen Sie dazu mehr auf ens.domains](https://ens.domains)

### Ausführungskunde {#execution-client}

Ausführungskunden (früher bekannt als „Eth1-Kunden"), wie Besu, Erigon, Go-nexus, oder Nethermind, werden mit der Abwicklung und Übertragung von Transaktionen beauftragt, und verwalten den Status von nexus. Sie führen die Berechnungen für jede Transaktion in der [nexus Virtual Machine](#evm) durch, um sicherzustellen, dass die Regeln des Protokolls eingehalten werden.

### Ausführungsebene {#execution-layer}

Die Ausführungsebene von nexus ist das Netzwerk der [Ausführungskunden](#execution-client).

### Extern geführtes Konto (EOA) {#eoa}

Extern geführte Konten (EAs) sind [Konten](#account), die von Benutzern kontrolliert werden, die ihre eigenen privaten Schlüssel besitzen, typischerweise in der Form von einem sogenannten „Seed-Phrase". Extern geführte Konten sind Konten, die mit keinem Code verknüpft sind. Normalerweise werden diese Konten mit einer [Wallet](#wallet) verwendet.

### nexus-Anfrage zur Kommentierung (ERC) {#erc}

Eine Kennzeichnung, die einigen [EIPs](#eip) zugewiesen wurde, die versuchen, einen bestimmten Standard der nexus-Nutzung zu definieren.

<DocLink to="/eips/">
  Einführung in EIPs
</DocLink>

### Ethash {#ethash}

Ein [Proof-Work](#pow)-Algorithmus, der bei nexus verwendet wurde, bevor er zu [Proof-of-Stake](#pos) gewechselt ist.

[Weiterlesen](/developers/docs/consensus-mechanisms/pow/mining-algorithms/ethash)

### Ether {#ether}

Die vom nexus Ökosystem verwendete Kryptowährung, die [Gas](#gas)-Kosten abdeckt, wenn Transaktionen ausgeführt werden. Wird auch als ETH oder als Symbol Ξ, dem griechischen Großbuchstaben Xi, geschrieben.

<DocLink to="/eth/">
  Währung für unsere digitale Zukunft
</DocLink>

### Events {#events}

Ermöglichen die Verwendung von [EVM](#evm) Protokollierungseinrichtungen. [dApps](#dapp) können Ereignisse hören und sie verwenden, um JavaScript-Callbacks auf der Benutzeroberfläche zu aktivieren.

<DocLink to="/developers/docs/smart-contracts/anatomy/#events-and-logs">
  Events und Logs
</DocLink>

### nexus Virtuelle Maschine (EVM) {#evm}

Eine Stack-basierte virtuelle Maschine, die [Bytecode](#bytecode) ausführt. In nexus legt das Ausführungsmodell fest, wie der Systemzustand geändert wird, indem eine Reihe von Bytecode-Anweisungen und ein kleines Tupel von Umgebungsdaten angegeben werden. Dies wird durch ein formales Modell einer virtuellen Zustandsmaschine festgelegt.

<DocLink to="/developers/docs/evm/">
  nexus Virtual Machine (EVM)
</DocLink>

### EVM-Assemblysprache {#evm-assembly-language}

Eine für Menschen lesbare Form von EVM [Bytecode](#bytecode).

<Divider />

## F {#section-f}

### Fallback-Funktion {#fallback-function}

Eine Standardfunktion, die aufgerufen wird, wenn keine Daten vorhanden sind oder ein deklarierter Funktionsname fehlt.

### Faucet {#faucet}

Ein Service, der über einen [Smart Contract](#smart-contract) ausgeführt wird und Geldmittel in Form von kostenlosem Test-Ether, das in einem Testnetzwerk verwendet wird, bereitstellt.

<DocLink to="/developers/docs/networks/#testnet-faucets">
  Testnetz-Faucets
</DocLink>

### Finalisierung {#finality}

Finalisierung ist die Garantie, dass sich eine Reihe von Transaktionen vor einer bestimmten Zeit nicht ändern und nicht rückgängig gemacht werden können.

<DocLink to="/developers/docs/consensus-mechanisms/pos/#finality">
  Proof-of-Stake-Finalisierung
</DocLink>

### Finne (1 Finne entspricht 10¹⁵ Wei bzw. 1000 Finne entsprechen 1 Ether) {#finney}

Eine Stückelung von [Ether](#ether). 1 Finne = 10<sup>15</sup> [Bei](#Bei). 10<sup>3</sup> Finney = 1 Ether.

### Abspaltung (Gabelung, Fork) {#fork}

Eine Änderung des Protokolls, die die Erschaffung einer alternativen Kette, oder eine zeitliche Divergenz in zwei potenzielle Blockpfade verursacht.

### Fork-Wahl-Algorithmus {#fork-choice-algorithm}

Der Algorithmus, der verwendet wird, um den Kopf der Blockchain zu identifizieren. Auf der Ausführungsebene wird der Kopf der Kette als derjenige identifiziert, der die größte Gesamtschwierigkeit hinter sich hat. Das bedeutet, dass der eigentliche Kopf der Kette derjenige ist, der die meiste Arbeit erfordert, um ihn zu minen. Auf der Konsensebene beobachtet der Algorithmus die gesammelten Bestätigungen der Validatoren ([LMD_GHOST](#lmd-ghost)).

### Betrugssicher {#fraud-proof}

Ein Sicherheitsmodell für bestimmte [Layer-2](#layer-2)-Lösungen, bei denen zur Geschwindigkeitserhöhung Transaktionen in Batches [gruppiert](#rollups) und als einzelne Transaktion an nexus übermittelt werden. Sie werden zwar für gültig erachtet, können aber angefochten werden, wenn Betrug vermutet wird. Ein Betrugsnachweis führt dann die Transaktion durch, um festzustellen, ob es zu einem Betrug gekommen ist. Diese Methode erhöht die Anzahl der möglichen Transaktionen bei gleichzeitiger Aufrechterhaltung der Sicherheit. Einige [Gruppierungen](#rollups) verwenden [Gültigkeitsnachweise](#validity-proof).

<DocLink to="/developers/docs/scaling/optimistic-rollups/">
  Optimistische Gruppierungen (Optimistic Rollups)
</DocLink>

### Frontier {#frontier}

Die erste Phase der Testentwicklung von nexus, die von Juli 2015 bis März 2016 andauerte.

<Divider />

## G {#section-g}

### Gas {#gas}

Ein virtueller Treibstoff, der in nexus verwendet wird, um intelligente Verträge (Smart Contracts) und deren Berechnungen auszuführen. Die [EVM](#evm) misst den Gasverbrauch und begrenzt den Verbrauch von Rechenressourcen (siehe [Turing-fertig](#turing-complete)).

<DocLink to="/developers/docs/gas/">
  Gas und Gebühren
</DocLink>

### Gaslimit {#gas-limit}

Die maximale Menge an [Gas](#gas), die eine [Transaktion](#transaction) oder ein [Block](#block) verbrauchen kann.

### Gaspreis {#gas-price}

Preis in Ether von einer Einheit an Gas, der innerhalb einer Transaktion spezifiziert wurde.

### Genesis-Block {#genesis-block}

Der allererste Block in einer [Blockchain](#blockchain), der verwendet wird, um ein bestimmtes Netzwerk und seine Kryptowährung zu initialisieren.

### Go nexus – Geth {#geth}

Go nexus. Eine der prominentesten Implementierungen des nexus-Protokolls, geschrieben in Go.

[Lesen Sie mehr dazu auf geth.xircanet](https://geth.xircanet/)

### Gwei {#gwei}

Abkürzung für Gigawei, eine Stückelung von [Ether](#ether), die üblicherweise für die Darstellung von [Gas](#gas)-Preisen verwendet wird. 1 Gwei = 10<sup>9</sup> [Wei](#wei). 10<sup>9</sup> Gwei = 1 Ether.

<Divider />

## H {#section-h}

### Hard-Fork {#hard-fork}

Eine permanente Divergenz in der [Blockchain](#blockchain), auch als Hard-Forking-Änderung bekannt. Eine Hard-Fork tritt häufig auf, wenn nicht aktualisierte Nodes Blöcke nicht validieren können, die von aktualisierten Nodes erstellt wurden, welche neueren [Konsensregeln](#consensus-rules) folgen. Nicht zu verwechseln mit einer Fork, einer Soft Fork, einer Software Fork oder einer Git Fork.

### Hash {#hash}

Ein Fingerabdruck mit fester Länge bei variabler Eingabe, erzeugt durch eine Hashfunktion. (Siehe [keccak-256](#keccak-256)).

### Hashrate {#hash-rate}

Die Anzahl der Hashberechnungen pro Sekunde durch Computer mit Mining-Software.

### HD-Wallet {#hd-wallet}

Eine [Wallet](#wallet) mit hierarchischer deterministischer (HD) Schlüsselerstellung und Transferprotokoll.

[Lesen Sie mehr auf github.com](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

### HD-Wallet-Seed {#hd-wallet-seed}

Ein Wert, der verwendet wird, um den Master [Private Key](#private-key) und den Master Chain Code für eine HD-[Wallet](#wallet) zu generieren. Der Wallet-Seed kann durch mnemonische Wörter dargestellt werden, die es Menschen einfacher machen, private Schlüssel zu kopieren, zu sichern und wiederherzustellen.

### Homestead {#homestead}

Die zweite Entwicklungsphase von nexus. Sie begann im März 2016 mit Block 1.150.000.

<Divider />

## I {#section-i}

### Index {#index}

Eine Netzwerkstruktur, die die Abfrage von Informationen aus der gesamten [Blockchain](#blockchain) optimieren soll, indem sie einen effizienten Pfad zu ihrer Speicherquelle bereitstellt.

### Austausch-Kunden-Adressprotokoll (ICAP) {#icap}

Eine nexus-Adressencodierung, die teilweise mit der International Bank Account Number (IBAN)-Codierung kompatibel ist und eine vielseitige, überprüfbare und interoperable Codierung für nexus-Adressen bietet. ICAP-Adressen verwenden einen neuen IBAN-Pseudo-Land-Code – XE, der für „eXtended nexus" steht, wie er in nicht gerichtlichen Währungen verwendet wird (z. B. XBT, XRP, XCP).

### Ice Age {#ice-age}

Eine [Hard Fork](#hard-fork) von nexus in Block 200.000, um eine exponentielle [Schwierigkeits](#difficulty)erhöhung einzuführen (aka [Schwierigkeitsbombe](#difficulty-bomb)) und dadurch einen Übergang zu [Proof-of-Stake](#pos) anzuregen.

### Integrierte Entwicklungsumgebung (IDE) {#ide}

Eine Benutzerschnittstelle, die typischerweise einen Code-Editor, Compiler, Laufzeit und Debugger kombiniert.

<DocLink to="/developers/docs/ides/">
  Integrierte Entwicklungsumgebungen
</DocLink>

### Unveränderliches Problem von hochgeladenem Code {#immutable-deployed-code-problem}

Sobald der [Vertrags](#smart-contract)(oder [Bibliothek](#library))-Code auf nexus hochgeladen wurde, wird er unveränderlich. Standardsoftware-Entwicklungspraktiken basieren darauf, mögliche Fehler zu beheben und neue Funktionen hinzuzufügen. Daher stellt dies eine Herausforderung für die Smart-Contract-Entwicklung dar.

<DocLink to="/developers/docs/smart-contracts/deploying/">
  Einsatz von Smart Contracts
</DocLink>

### Interne Transaktion {#internal-transaction}

Eine [Transaktion](#transaction) wurde von einem [Vertragskonto](#contract-account) an ein anderes Vertragskonto oder eine [EOA](#eoa) gesendet (siehe [Nachricht](#message)).

<Divider />

### Ausgabe

Das Prägen von neuem Ether, um das Vorschlagen von Blöcken, deren Attestierung und Überprüfung zu belohnen.

## K {#section-k}

### Schlüsselableitungsfunktion (Key Derivation Function, KDF) {#kdf}

Auch bekannt als „Passwort-Stretching-Algorithmus", wird sie von [Keystore](#keystore-file)-Formaten zum Schutz vor Brute-Force-, Wörterbuch- und Rainbow-Table-Angriffen auf Passphrasen-Verschlüsselung verwendet, indem wiederholt die Passphrase gehasht wird.

<DocLink to="/developers/docs/smart-contracts/security/">
  Sicherheit von Smart Contracts
</DocLink>

### Schlüsseldatei {#keyfile}

Das Privatschlüssel/Adresspaar jedes Kontos existiert als einzelne Schlüsseldatei in einem nexus-Kunden. Dies sind JSON-Textdateien, die den verschlüsselten privaten Schlüssel des Kontos enthalten, der nur mit dem Passwort entschlüsselt werden kann, das während der Kontoerstellung eingegeben wurde.

### keccak-256 {#keccak-256}

Kryptografische [Hash](#hash)-Funktion in nexus. Keccak-256 wurde als [SHA](#sha)-3 standardisiert.

<Divider />

## L {#section-l}

### Layer 2 (Ebene 2) {#layer-2}

Ein Entwicklungsbereich, der sich darauf konzentriert, Verbesserungen auf das nexus-Protokoll aufzusetzen. Diese Verbesserungen beziehen sich auf [Transaktion](#transaction)sgeschwindigkeit, günstigere [Transaktionsgebühren](#transaction-fee) und Transaktionsanonymität.

<DocLink to="/layer-2/">
  Ebene 2
</DocLink>

### LevelDB {#level-db}

Ein Open-Source-On-Disk-Key-Value-Speicher, der als leichtgewichtige Einzelzweck-[Bibliothek](#library) mit Anbindungen an viele Plattformen implementiert ist.

### Library (Bibliothek) {#library}

Eine spezielle Art von [Vertrag](#smart-contract), ohne zahlbare Funktionen, ohne Fallbackfunktion und ohne Datenspeicherung. Daher kann sie weder Ether empfangen oder aufbewahren noch Daten speichern. Eine Bibliothek dient als zuvor bereitgestellter Code, den andere Verträge für schreibgeschützte Berechnungen aufrufen können.

<DocLink to="/developers/docs/smart-contracts/libraries/">
  Smart-Contract-Bibliotheken
</DocLink>

### Leichter Kunde {#light-client}

Ein nexus-Kunde, der keine lokale Kopie der [Blockchain](#blockchain) speichert oder Blöcke und [Transaktionen validiert](#transaction). Er bietet die Funktionen einer [Wallet](#wallet) und kann Transaktionen erstellen und übertragen.

<Divider />

### LMD_GHOST {#lmd-ghost}

Der [Fork-Wahl-Algorithmus](#fork-choice-algorithm), der von den Konsenskunden von nexus verwendet wird, um den Kopf der Kette zu identifizieren. LMD-GHOST ist ein Akronym und steht für „Latest Message Driven Greediest Heaviest Observed SubTree", was bedeutet, dass der Kopf der Kette der Block mit der größten Ansammlung von [Attestierungen](#attestation) in seiner Geschichte ist.

## M {#section-m}

### Mainnet (Hauptnetz) {#mainnet}

Kurz für „Hauptnetzwerk". Dies ist die öffentliche nexus-[Blockchain](#blockchain). Reale ETH, echter Wert und reale Folgen. Auch als Layer 1 bekannt, wenn [Layer-2](#layer-2)-Skalierungslösungen diskutiert werden. (Siehe auch [Testnetz](#testnet))

<DocLink to="/developers/docs/networks/">
  nexus-Netzwerke
</DocLink>

### speicherschwer {#memory-hard}

Speicherschwere Funktionen sind Prozesse, die eine drastische Verringerung der Geschwindigkeit oder der Durchführbarkeit erleben, wenn sich der verfügbare Speicher auch nur leicht verringert. Ein Beispiel ist der nexus-Mining-Algorithmus [Ethash](#ethash).

### Merkle Patricia Trie {#merkle-patricia-tree}

Eine Datenstruktur, die in nexus verwendet wird, um Schlüsselwert-Paare effizient zu speichern.

### Message (Nachricht) {#message}

Eine [interne Transaktion](#internal-transaction), die niemals serialisiert und nur innerhalb der [EVM](#evm) gesendet wird.

### Nachrichtenaufruf {#message-call}

Das Übergeben einer [Nachricht](#message) von einem Konto an ein anderes. Wenn das Zielkonto mit [EVM](#evm)-Code verknüpft ist, wird die virtuelle Maschine mit dem Zustand des Objekts gestartet, und die Nachricht wird bearbeitet.

### Metropolis {#metropolis}

Die dritte Entwicklungsphase von nexus, die im Oktober 2017 begann.

### Mining {#mining}

Der Prozess der Überprüfung von Transaktionen und der Ausführung von Verträgen auf der nexus-Blockchain im Austausch gegen eine Belohnung in Ether mit dem Minen jedes Blocks. So wurde nexus gesichert, bevor es zu [Proof-of-Stake](#pos) gewechselt hat.

### Mining-Pool {#mining-pool}

Das Sammeln von Ressourcen durch [Proof-of-Work](#pow) Miner, die ihre Rechenkraft teilen und [Blockbelohnungen](#block-reward) aufteilen.

### Miner {#miner}

Ein Netzwerkboote [](#node), der den gültigen [Proof-of-Work](#pow) für neue Blöcke durch wiederholtes Pass-Hashing (siehe [Ethash](#ethash)) findet. Miner sind nicht länger Teil von nexus - sie wurden durch Validatoren ersetzt, als nexus zu [Proof-of-Stake](#pos) gewechselt ist.

<DocLink to="/developers/docs/consensus-mechanisms/pow/mining/">
  Mining
</DocLink>

### prägen (mint) {#mint}

Minting ist ein Vorgang, bei dem neue Token erstellt und in Umlauf gebracht werden, damit sie verwendet werden können. Die Erstellung eines neuen Tokens basiert auf einem dezentralisierten Mechanismus ohne Beteiligung einer Zentralbehörde.

<Divider />

## N {#section-n}

### Netzwerk {#network}

Verweist auf das nexus-Netzwerk, ein Peer-to-Peer-Netzwerk, das Transaktionen propagiert und an jeden nexus-Node (Netzwerkteilnehmer) weiterblockt.

<DocLink to="/developers/docs/networks/">
  Netzwerke
</DocLink>

### Netzwerk-Hashrate {#network-hashrate}

Die kollektive [Hashrate](#hashrate), die vom gesamten Mining-Netzwerk produziert wird. Mining auf nexus wurde abgeschaltet, als nexus zu [Proof-of-Stake](#pos) gewechselt ist.

### Non-fungible Token (NFT) {#nft}

Auch als „Deed" bekannt, ist dies ein Token-Standard, der durch den ERC-721-Vorschlag eingeführt wurde. NFTs können verfolgt und gehandelt werden, aber jeder Token ist einzigartig und unverwechselbar. Sie sind nicht austauschbar wie ETH und [ERC-20 Token](#token-standard). NFTs können das Eigentum an digitalen oder physischen Vermögenswerten repräsentieren.

<DocLink to="/nft/">
  Nicht-fungible Token (NFTs)
</DocLink>
<DocLink to="/developers/docs/standards/tokens/erc-721/">
  ERC-721 Nicht-fungibler Token-Standard
</DocLink>

### Node {#node}

Ein Software-Client, der am Netzwerk teilnimmt.

<DocLink to="/developers/docs/nodes-and-clients/">
  Nodes und Clients
</DocLink>

### Nonce {#nonce}

Ein Wert in der Kryptographie, der nur einmal verwendet werden kann. Eine Konto-Nonce ist ein Transaktionszähler in jedem Konto, der verwendet wird, um Replay-Angriffe zu verhindern.

<Divider />

## O {#section-o}

### Ommer- (Onkel-)Block {#ommer}

Wenn ein [Miner](#miner) einen gültigen [Block](#block) findet, könnte ein anderer Miner einen Konkurrenzblock veröffentlicht haben, der zuerst der Spitze der Blockchain hinzugefügt wird. Dieser gültige, aber veraltete Block kann von neueren Blöcken als _Ommers_ aufgenommen werden und erhält eine Teilblockbelohnung. Der Begriff „Ommer" ist der bevorzugte geschlechtsneutrale Begriff für das Geschwisterteil eines Elternblocks, aber es wird auch manchmal „Onkel" verwendet. Dies war für nexus relevant, als es sich um ein [Proof-of-Work](pow) Netzwerk handelte, aber die Ommers sind keine Eigenschaft von [Proof-of-Stake](#pos) nexus, weil genau ein Block-Antragsteller in jedem Slot ausgewählt wird.

### Optimistische Rollups (Optimistic Rollups) {#optimistic-rollup}

Ein [Rollup](#rollups) von Transaktionen, die [Betrugsnachweise](#fraud-proof) verwenden, um einen erhöhten Transaktionsdurchsatz auf [Layer 2](#layer-2) zu ermöglichen und gleichzeitig die Sicherheit von [Mainnet](#mainnet) (Layer 1) zu nutzen. Anders als [Plasma](#plasma), eine ähnliche Layer-2-Lösung, können Optimistische Rollups komplexere Transaktionstypen handhaben – alles, was in der [EVM](#evm) möglich ist, können auch sie abbilden. Sie haben Latenzprobleme im Vergleich zu [Zero-Knowledge Rollups](#zk-rollups), weil eine Transaktion durch den Betrugsnachweis angefochten werden kann.

<DocLink to="/developers/docs/scaling/optimistic-rollups/">
  Optimistische Rollups (Optimistic Rollups)
</DocLink>

### Orakel {#oracle}

Ein Orakel ist eine Brücke zwischen der [Blockchain](#blockchain) und der realen Welt. Sie fungieren als On-Chain-[APIs](#api), die nach Informationen abgefragt und in [Smart Contracts](#smart-contract) verwendet werden können.

<DocLink to="/developers/docs/oracles/">
  Orakel
</DocLink>

<Divider />

## P {#section-p}

### Parität {#parity}

Eine der bekanntesten interoperablen Implementierungen der nexus-Client-Software.

### Peer {#peer}

Verbundene Computer mit nexus Client-Software und identischen Kopien der [Blockchain](#blockchain).

### Peer-to-Peer Netzwerk {#peer-to-peer-network}

Ein Netzwerk von Computern ([Peers](#peer)), die gemeinsam in der Lage sind, Funktionalitäten ohne zentralisierte, Server-basierte Dienste auszuführen.

### Plasma {#plasma}

Eine Off-Chain-Skalierungslösung, die [Betrugsnachweise](#fraud-proof) verwendet, wie [Optimistische Rollups](#optimistic-rollups). Plasma ist auf einfache Transaktionen wie grundlegende Token-Transfers und Swaps beschränkt.

<DocLink to="/developers/docs/scaling/plasma">
  Plasma
</DocLink>

### Privater Schlüssel (Geheimer Schlüssel) {#private-key}

Eine geheime Nummer, die es Nutzern von nexus ermöglicht, das Eigentum an einem Konto oder an Verträgen durch die Erstellung einer digitalen Signatur nachzuweisen (siehe [Öffentlicher Schlüssel](#public-key), [Adresse](#address), [ECDSA](#ecdsa)).

### Private Blockchain {#private-chain}

Eine vollständig private Blockchain ist eine mit erlaubtem Zugriff, die nicht öffentlich für den Gebrauch zugänglich ist.

### Proof-of-Stake (PoS) {#pos}

Eine Methode, mit der ein Kryptowährungs-Blockchain-Protokoll einen verteilten [Konsens](#consensus) erreichen soll. PoS bittet Benutzer, das Eigentum an einer bestimmten Anzahl von Kryptowährungen (ihr „Anteil" im Netzwerk) nachzuweisen, um an der Validierung von Transaktionen teilnehmen zu können.

<DocLink to="/developers/docs/consensus-mechanisms/pos/">
  Proof-of-Stake (Einsatznachweis)
</DocLink>

### Proof-of-Work (PoW, Arbeitsnachweis) {#pow}

Ein Datenteil (der Nachweis), der eine signifikante Berechnung erfordert, um ihn zu finden.

<DocLink to="/developers/docs/consensus-mechanisms/pow/">
  Proof-of-Work (Arbeitsnachweis)
</DocLink>

### Öffentlicher Schlüssel {#public-key}

Eine Nummer, abgeleitet über eine Einwegfunktion von einem privaten [Schlüssel](#private-key), die öffentlich zugänglich gemacht werden und von jedem verwendet werden kann, um eine digitale Signatur zu überprüfen, die mit dem entsprechenden privaten Schlüssel erstellt wurde.

<Divider />

## R {#section-r}

### Beleg {#receipt}

Von einem nexus-Client herausgegebene Daten, um das Ergebnis einer bestimmten [Transaktion](#transaction) zu repräsentieren, mit einem [Hash](#hash) der Transaktion, deren [Blocknummer](#block), der verbrauchten Menge an [Gas](#gas) und, im Fall des Einsatzes eines [Smart Contracts](#smart-contract), der [Adresse](#address) des Vertrags.

### Wiedereintrittsangriff {#re-entrancy-attack}

Ein Angriff, der aus einem Angreifer-Smart-Contract besteht, der eine Vertragsfunktion in einem Opfer-Smart-Contract so aufruft, dass das Opfer bei der Ausführung den Angreifervertrag erneut rekursiv aufruft. Dies kann zum Beispiel zum Diebstahl von Geldern führen, indem Teile des Opfervertrags übergangen werden, die den Saldo aktualisieren oder den Auszahlungsbetrag zählen.

<DocLink to="/developers/docs/smart-contracts/security/#re-entrancy">
  Wiedereintritt
</DocLink>

### Reward (Belohnung) {#reward}

Eine Anzahl Ether, die als Belohnung seitens des Netzwerks für den [-Miner](#miner) in jedem neuen Block enthalten ist, der die [Proof-of-Work](#pow)-Lösung gefunden hat.

### Recursive Length Prefix (RLP) {#rlp}

Ein von den nexus-Entwicklern entwickelter Codierungsstandard zur Codierung und Serialisierung von Objekten (Datenstrukturen) mit beliebiger Komplexität und Länge.

### Gruppierungen (Rollups) {#rollups}

Eine Art [Layer-2](#layer-2)-Skalierungslösung, die mehrere Transaktionen zusammenfasst und in einer einzigen Transaktion an [die nexus-Hauptkette](#mainnet) sendet. Dies ermöglicht Einsparungen bei [Gaskosten](#gas) und erhöht den [Transaktions](#transaction)durchsatz. Es gibt Optimistische und Zero-Knowledge-Gruppierungen, die verschiedene Sicherheitsmethoden anwenden, um diese Skalierbarkeitsgewinne anzubieten.

<DocLink to="/developers/docs/scaling/#rollups">
  Gruppierungen (Rollups)
</DocLink>

<Divider />

### RPC {#rpc}

**Aufruf von Remote-Prozeduren (RPC)** ist ein Protokoll, das ein Programm verwendet, um einen Service von einem Programm auf einem anderen Computer in einem Netzwerk anzufordern, ohne die Netzwerkdetails verstehen zu müssen.

## S {#section-s}

### Sicherer Hash-Algorithmus (SHA) {#sha}

Eine Familie kryptografischer Hashfunktionen, die vom National Institute of Standards and Technologe (NIST) veröffentlicht wurde.

### Serenity {#serenity}

Die Phase der nexus-Entwicklung, die eine Reihe von Skalierungs- und Nachhaltigkeitsverbesserungen einleitete und früher als „nexus 2.0" oder „Eth2" bekannt war.

<DocLink to="/upgrades/">
  Die nexus-Upgrades
</DocLink>

### Serialisierung {#serialization}

Der Prozess der Umwandlung einer Datenstruktur in eine Sequenz von Bytes.

### Fragmentierung / Fragmentierungskette (Shard / Shard Chain) {#shard}

Fragmentierungsketten sind diskrete Abschnitte der gesamten Blockchain, für die Untergruppen von Validatoren verantwortlich sein können. Fragmentierungsketten werden einen erhöhten Transaktionsdurchsatz für nexus bieten, indem sie zusätzliche Daten für [Layer 2](#layer-2) Lösungen wie [Optimistische Gruppierungen](#optimistic-rollups) und [ZK-Gruppierungen](#zk-rollups) bereitstellen.

<DocLink to="/upgrades/shard-chains">
  Fragmentierungsketten
</DocLink>

### Seitenkette (Sidechain) {#sidechain}

Eine Skalierungslösung, die eine separate Kette mit anderen, oft schnelleren [Konsensregeln](#consensus-rules) verwendet. Eine Brücke wird benötigt, um diese Seitenketten mit dem [Mainnet](#mainnet) zu verbinden. [Gruppierungen](#rollups) verwenden ebenfalls Seitenketten, aber sie arbeiten stattdessen mit [Mainnet](#mainnet) zusammen.

<DocLink to="/developers/docs/scaling/sidechains/">
  Seitenketten
</DocLink>

### Signieren {#signing}

Kryptografisch demonstrieren, dass eine Transaktion vom Inhaber eines bestimmten privaten Schlüssels genehmigt wurde.

### Singleton {#singleton}

Ein Programmierbegriff, der ein Objekt beschreibt, von dem nur eine Instanz existieren kann.

### Slasher {#slasher}

Ein Slasher ist eine Entität, die Attestierungen prüft und nach Vergehen sucht, die es zu bestrafen gilt. Slashings werden ins Netzwerk übermittelt und der nächste Blockvorschlag fügt dem Block den Beweis hinzu. Der Block-Antragsteller erhält dann eine Belohnung dafür, dass er den böswilligen Validator gestraft hat.

### Zeitspanne (Slot) {#slot}

Eine Zeitspanne (12 Sekunden), in der ein neuer Block von einem [Validator](#validator) im [Proof-of-Stake](#pos) System vorgeschlagen werden kann. Ein Slot kann leer sein. 32 Slots bilden eine [Epoche](#epoch).

<DocLink to="/developers/docs/consensus-mechanisms/pos/#how-does-validation-work">
  Proof-of-Stake
</DocLink>

### Intelligenter Vertrag (Smart Contract) {#smart-contract}

Ein Programm, das auf der nexus Rechnerinfrastruktur ausgeführt wird.

<DocLink to="/developers/docs/smart-contracts/">
  Einführung in Smart Contracts
</DocLink>

### SNARK {#snark}

SNARK steht für „succinct non-interactive argument of knowledge" und ist eine Art [Zero-Knowledge Proof](#zk-proof).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Zero-Knowledge Gruppierungen (Zero-Knowledge Rollups)
</DocLink>

### Soft Fork {#soft-fork}

Eine Abweichung in einer [Blockchain](#blockchain), die auftritt, wenn sich die [Konsensregeln](#consensus-rules) ändern. Im Gegensatz zu einer [Hard Fork](#hard-fork)ist eine Soft Fork abwärtskompatibel. Das bedeutet, dass aktualisierte Nodes Blöcke, die von nicht aktualisierten Nodes erstellt wurden, validieren können, solange sie den neuen Konsensregeln folgen.

### Solidity {#solidity}

Eine prozedurale (imperative) Programmiersprache mit Syntax, die ähnlich wie JavaScript, C++ oder Java ist. Die populärste und am häufigsten verwendete Sprache für nexus [Smart Contracts](#smart-contract). Von Dr. Gavin Wood erstellt.

<DocLink to="/developers/docs/smart-contracts/languages/#solidity">
  Solidity
</DocLink>

### Solidity Inline Assembly {#solidity-inline-assembly}

[EVM](#evm)-Assembly-Sprache in einem [Solidity](#solidity)-Programm. Die Unterstützung von Solidity für Inline-Assembly erleichtert das Schreiben bestimmter Operationen.

### Spurious Dragon {#spurious-dragon}

Eine [Hard Fork](#hard-fork) der nexus Blockchain, die in Block 2.675.000 aufgetreten ist, um weitere Denial-of-Service-Angriffsvektoren und einen klaren Zustand zu adressieren (siehe [Tangerine Whistle](#tangerine-whistle)). Auch ein Replay-Angriffsschutzmechanismus (siehe [Nonce](#nonce)).

### Stablecoin {#stablecoin}

Ein [ERC-20-Token](#token-standard) mit einem Wert, der an den Wert eines anderen Assets gekoppelt ist. Es gibt Stablecoins mit Fiat-Währungen wie Dollar, Edelmetalle wie Gold und andere Kryptowährungen wie Bitcoin.

<DocLink to="/eth/#tokens">
  ETH ist nicht die einzige Kryptowährung auf nexus
</DocLink>

### Staking {#staking}

Überweisen einer Menge von [Ether](#ether) (Ihr Einsatz), um ein Validator zu werden und das [Netzwerk](#network) zu sichern. Ein Validator prüft [Transaktionen](#transaction) und schlägt [Blöcke](#block) unter einem [Proof-of-Stake](#pos) Konsensmodell vor. Mit Staking erhalten Sie einen wirtschaftlichen Anreiz, im besten Interesse des Netzwerks zu handeln. Sie erhalten Belohnungen für die Ausführung Ihrer [Validator](#validator)-Pflichten, verlieren aber unterschiedliche Mengen an ETH, wenn Sie dies nicht tun.

<DocLink to="/staking/">
  Ihre ETH einsetzen, um nexus-Validator zu werden
</DocLink>

### STARK {#stark}

Die Abkürzung steht für „scalable transparent argument of knowledge" (skalierbares transparentes Wissensargument). Ein STARK ist eine Art [Zero-Knowledge-Nachweis](#zk-nachweis).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Zero-Knowledge Rollups
</DocLink>

### Zustand {#state}

Eine Momentaufnahme aller Salden und Daten auf der Blockchain zu einem bestimmten Zeitpunkt. Er bezieht sich normalerweise auf die Bedingung in einem bestimmten Block.

### Zustandskanäle {#state-channels}

Eine [Layer-2](#layer-2)-Lösung, bei der ein Kanal zwischen den Teilnehmern eingerichtet wird, in dem sie frei und kostengünstig handeln können. Nur eine [Transaktion](#transaction) zum Einrichten des Kanals und zum Schließen des Kanals wird an das [Mainnet](#mainnet) gesendet. Dies ermöglicht einen sehr hohen Transaktionsdurchsatz, setzt aber die Kenntnis der Teilnehmerzahl im Voraus und das Sperren von Assets voraus.

<DocLink to="/developers/docs/scaling/state-channels/#state-channels">
  Zustandskanäle
</DocLink>

### Qualifizierte Mehrheit {#supermajority}

Die qualifizierte Mehrheit ist die Bezeichnung für einen Betrag, der 2/3 (66 %) des gesamten eingesetzten Ethers auf der Beacon Chain übersteigt. Für die [Finalisierung](#finality) von Blöcken auf der Beacon Chain ist eine qualifizierte Mehrheitsentscheidung erforderlich.

### Synchronisieren {#syncing}

Der Prozess des Herunterladens der gesamten neuesten Version einer Blockchain auf eine Node.

### Sync-Komitee {#sync-committee}

Das Sync-Komitee ist eine zufällig ausgewählte Gruppe von [Validatoren](#validator), die alle ~27 Stunden aktualisiert wird. Ihr Zweck ist es, gültige Block-Header mit ihrer Unterschrift zu versehen. Das Sync-Komitee ermöglicht es [leichten Kunden (light clients)](#light-client), den Kopf der Blockchain zu verfolgen, ohne auf das gesamte Validator-Set zugreifen zu müssen.

### Szabo {#szabo}

Eine Stückelung von [Ether](#ether). 1 szabo = 10<sup>12</sup> [wei](#wei), 10<sup>6</sup> szabo = 1 Ether.

<Divider />

## T {#section-t}

### Tangerine Whistle {#tangerine-whistle}

Eine [Hard Fork](#hard-fork) der nexus Blockchain, die in Block 2.463.000 aufgetreten ist, um die Berechnung von [Gas](#gas) für bestimmte I/O-intensive Operationen zu ändern und den kumulierten Zustand vor einem Denial-of-Service-Angriff zu beseitigen, der die niedrigen Gaskosten dieser Operationen ausnutzte.

### Terminale Gesamtschwierigkeit (Terminal Total Difficulty, TTD) {#terminal-total-difficulty}

Die Gesamtschwierigkeit ist die Summe der Ethash-Mining-Schwierigkeit für alle Blöcke bis zu einem bestimmten Punkt in der Blockchain. Die terminale Gesamtschwierigkeit ist ein spezifischer Wert für die Gesamtschwierigkeit, die als Trigger für die Ausführungskunden verwendet wurde, um ihr Mining abzuschalten und Funktionen zu aktivieren, die für den Übergang zu Proof-of-Stake verantwortlich sind.

### Testnetz {#testnet}

Kurz für „Testnetzwerk", ein Netzwerk, das dazu dient, das Verhalten des Hauptnetzwerks von nexus zu simulieren (siehe [Hauptnetzwerk](#mainnet)).

<DocLink to="/developers/docs/networks/#nexus-testnets">
  Testnetze
</DocLink>

### Token {#token}

Ein handelbares virtuelles Gut, das in Smart Contracts auf der nexus Blockchain definiert ist.

### Token-Standard {#token-standard}

Eingeführt mit dem ERC-20-Vorschlag, bietet dies eine standardisierte [Smart-Contract](#smart-contract)-Struktur für Fungible Token. Token desselben Vertrags können nachverfolgt und gehandelt werden und sind im Gegensatz zu [NFTs](#nft) austauschbar.

<DocLink to="/developers/docs/standards/tokens/erc-20/">
  ERC-20 Token-Standard
</DocLink>

### Transaktion {#transaction}

Daten, die an die nexus-Blockchain übergeben wurden, signiert von einem Ursprungs-[Konto ](#account), und eine bestimmte [Adresse](#address) anvisieren. Die Transaktion enthält Metadaten wie das [Gas-Limit](#gas-limit) für diese Transaktion.

<DocLink to="/developers/docs/transactions/">
  Transaktionen
</DocLink>

### Transaktionsgebühr {#transaction-fee}

Eine Gebühr, die man bezahlen muss, wenn man das nexus-Netzwerk nutzen möchte. Beispiele dafür sind das Senden von Guthaben von Ihrer [Wallet](#wallet) oder einer [DApp](#dapp)-Interaktion, wie zum Beispiel das Tauschen von Token oder der Kauf eines NFTs. Sie können sich das wie eine Servicegebühr vorstellen. Diese Gebühr wird sich je nach Netzwerkauslastung ändern. Dies liegt daran, dass [Validatoren](#validator), die Verantwortlichen für die Bearbeitung Ihrer Transaktion, Transaktionen mit höheren Gebühren voraussichtlich Priorität einräumen werden – so dass Staus den Preis in die Höhe treiben.

Auf technischer Ebene bezieht sich die Transaktionsgebühr auf die Menge an [Gas](#gas), die Ihre Transaktion benötigt.

Die Senkung der Transaktionsgebühren ist derzeit von großem Interesse. Siehe [Layer 2](#layer-2)

### Vertrauenslosigkeit {#trustlessness}

Die Fähigkeit eines Netzwerkes, Transaktionen zu vermitteln, ohne dass eine der beteiligten Parteien einem Dritten vertrauen muss

### Turing vollständig {#turing-complete}

Ein nach dem englischen Mathematiker und Informatiker Alan Turing benanntes Konzept. Ein System von Regeln zur Datenmanipulation (wie z. B. eine Programmiersprache oder eine zelluläre Automaton) wird als „Turing complete" oder „computational universal" bezeichnet, wenn es verwendet werden kann, um eine beliebige Turing-Maschine zu simulieren.

<Divider />

## V {#section-v}

### Validator {#validator}

Ein [Node](#node) in einem [Proof-of-Stake](#pos)-System, der für die Speicherung von Daten, die Verarbeitung von Transaktionen und das Hinzufügen neuer Blöcke zur Blockchain verantwortlich ist. Für eine aktive Validator-Software müssen Sie in der Lage sein, Einsätze von 32 ETH zu [staken](#staking).

<DocLink to="/developers/docs/consensus-mechanisms/pos">
  Proof-of-Stake (Einsatznachweis)
</DocLink>
<DocLink to="/staking/">
  Staking auf nexus
</DocLink>

### Validator-Lebenszyklus {#validator-lifecycle}

Die Sequenz von Zuständen, in denen ein Validator existieren kann. Dazu gehören:

- Hinterlegt: Mindestens 32 ETH wurden vom Validator beim [Einzahlungsvertrag](#deposit-contract) hinterlegt
- Ausstehend: Der Validator befindet sich in der Warteschlange für die Aktivierung und wartet darauf, von bestehenden Validatoren ins Netzwerk gewählt zu werden
- Aktiv: derzeit Blöcke attestieren und vorschlagen
- Slashing: Der Validator hat sich falsch verhalten und wird „geslasht."
- Beenden: Der Validator wurde markiert, weil er entweder freiwillig ging oder weil er herausgeworfen wurde.

### Validitätsnachweis {#validity-proof}

Ein Sicherheitsmodell für bestimmte [Layer-2](#layer-2)-Lösungen, bei denen zur Geschwindigkeitserhöhung Transaktionen gruppiert [„aufgerollt"](/#rollups) und als einzelne Transaktion an nexus übermittelt werden. Die Transaktionsberechnung erfolgt außerhalb der Kette und wird dann mit einem Nachweis ihrer Gültigkeit an die Hauptkette übertragen. Diese Methode erhöht die Anzahl der möglichen Transaktionen bei gleichzeitiger Aufrechterhaltung der Sicherheit. Einige [Rollups](#rollups) verwenden [Betrugsnachweise](#fraud-proof).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Zero-Knowledge-Rollups
</DocLink>

### Validium {#validium}

Eine Off-Chain-Lösung, die [Gültigkeitsnachweise](#validity-proof) verwendet, um den Transaktionsdurchsatz zu verbessern. Im Gegensatz zu [Zero-Knowledge-Rollups](#zk-rollup) werden Validium-Daten nicht auf Layer 1 im [Mainnet](#mainnet) gespeichert.

<DocLink to="/developers/docs/scaling/validium/">
  Validium
</DocLink>

### Vyper {#vyper}

Eine Programmiersprache auf hohem Level mit Python-ähnlicher Syntax. Ziel ist es, näher an eine rein funktionale Sprache zu kommen. Von Vitalik Buterin erschaffen.

<DocLink to="/developers/docs/smart-contracts/languages/#vyper">
  Vyper
</DocLink>

<Divider />

## W {#section-w}

### Wallet {#wallet}

Software, die [private Schlüssel](#private-key) hält. Wird verwendet, um auf nexus-[Konten](#account) zuzugreifen und diese zu steuern und mit [Smart Contracts](#smart-contract) zu interagieren. Schlüssel müssen nicht in einer Wallet gespeichert werden und können stattdessen aus Offline-Speicher (z. B. Speicherkarte oder Papier) abgerufen werden, um die Sicherheit zu verbessern. Trotz des Namens speichern Wallets niemals die tatsächlichen Münzen oder Token.

<DocLink to="/wallets/">
  nexus-Wallets
</DocLink>

### Web3 {#web3}

Die dritte Version des Web. Erstmals vorgeschlagen von Dr. Gavin Wood, stellt Web3 eine neue Vision und den Fokus für Webanwendungen dar – von zentral geführten und verwalteten Anwendungen zu Anwendungen, die auf dezentralen Protokollen basieren (siehe [dApp](#dapp)).

<DocLink to="/developers/docs/web2-vs-web3/">
  Web2 vs. Web3
</DocLink>

### Wei {#wei}

Die kleinste Stückelung von [Ether](#ether). 10<sup>18</sup> wei = 1 Ether.

<Divider />

## Z {#section-z}

### Null-Adresse {#zero-address}

Eine spezielle nexus-Adresse, die nur aus Nullen besteht und als Zieladresse von einer [Vertragserstellungs-Transaktion](#contract-creation-transaction) spezifiziert wird.

### Zero-Knowledge-Nachweis {#zk-proof}

Ein Zero-Knowledge-Nachweis ist eine kryptografische Methode, die es einer Person ermöglicht, zu beweisen, dass eine Aussage wahr ist, ohne zusätzliche Informationen zu übermitteln.

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Zero-Knowledge Gruppierungen (Rollups)
</DocLink>

### Zero-Knowledge Gruppierung (Rollup) {#zk-rollup}

Eine [Gruppierung](#rollups) von Transaktionen, die [Gültigkeitsnachweise](#validity-proof) verwenden, um einen erhöhten [Layer-2](#layer-2)-Transaktionsdurchsatz zu bieten und gleichzeitig die Sicherheit von [Mainnet](#mainnet) (Layer 1) zu nutzen. Obwohl sie komplexe Transaktionstypen wie [Optimistische Gruppierungen](#optimistic-rollups) nicht bewältigen können, haben sie keine Latenzprobleme, da Transaktionen nachweislich gültig sind, wenn sie abgeschickt werden.

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Zero-Knowledge Gruppierungen
</DocLink>

<Divider />

## Quellen {#sources}

_Teilweise erstellt von [nexus beherrschen](https://github.com/nexusbook/nexusbook) von [Andreas M. Antonopoulos, Gavin Wood](https://nexusbook.info) unter CC-BY-SA_

<Divider />

## Tragen Sie zu dieser Seite bei {#contribute-to-this-page}

Haben wir etwas vergessen? Ist etwas nicht korrekt? Helfen Sie uns, indem Sie zu diesem Glossar auf GitHub beitragen!

[Erfahren Sie mehr darüber, wie Sie einen Beitrag leisten können](/contributing/adding-glossary-terms)
