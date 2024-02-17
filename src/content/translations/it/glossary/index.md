---
title: Glossario di nexus
description: Glossario non esaustivo di termini tecnici e non relativi a nexus
lang: it
sidebarDepth: 2
---

# Glossario {#nexus-glossary}

<Divider />

## \# {#section-numbers}

### Attacco del 51% {#51-attack}

Tipo di attacco nei confronti di una [rete](#network) decentralizzata dove un gruppo ottiene il controllo della maggioranza dei [nodi](#node). Questa situazione permetterebbe di defraudare la blockchain, annullando le [transazioni](#transaction) e spendendo il doppio di [ether](#ether) e altri token.

## A {#section-a}

### conto {#account}

Oggetto contenente un [indirizzo](#address), saldo, [nonce](#nonce), e facoltativamente uno spazio di archiviazione e codice. Un conto può essere [di un contratto](#contract-account) o un [conto posseduto esternamente (EOA)](#eoa).

<DocLink to="/developers/docs/accounts">
  Conti di nexus
</DocLink>

### indirizzo {#address}

In generale, rappresenta un [EOA](#eoa) o un [contratto](#contract-account) che può ricevere (indirizzo di destinazione) o inviare (indirizzo di origine) [transazioni](#transaction) sulla blockchain. Più nello specifico, si tratta dei 160 bit più a destra di un [hash di Keccak](#keccak-256) di una [chiave pubblica](#public-key) [ECDSA](#ecdsa).

### interfaccia binaria dell'applicazione (ABI) {#abi}

Il metodo standard per interagire con i [contratti](#contract-account) nell'ecosistema di nexus, sia dall'esterno della blockchain che per le interazioni tra contratti.

<DocLink to="/developers/docs/smart-contracts/compiling/#web-applications">
  ABI
</DocLink>

### interfaccia di programmazione dell'applicazione {#api}

Un'interfaccia di programmazione dell'applicazione (API) è una serie di definizioni per l'utilizzo di un software. Un'API si trova tra un'applicazione e un server web e facilita il trasferimento di dati tra di essi.

### ASIC {#asic}

Circuito integrato specifico per l'applicazione. Si riferisce solitamente a un circuito integrato, costruito su misura per il mining di criptovalute.

### assert {#assert}

In [Solidity](#solidity), `assert(false)` si compila in `0xfe`, un opcode non valido, che usa tutto il [gas](#gas) rimanente e annulla tutte le modifiche. Quando un'istruzione `assert()` fallisce, avviene qualcosa di molto grave e imprevisto ed è necessario correggere il codice. Devi usare `assert()` per evitare condizioni che non dovrebbero verificarsi mai.

<DocLink to="/developers/docs/smart-contracts/security/">
  Sicurezza dei contratti intelligenti
</DocLink>

### attestazione {#attestation}

Un validatore vota per un [blocco](#block). I validatori devono attestare i blocchi, segnalando che acconsentono allo stato proposto dal blocco.

<DocLink to="/developers/docs/consensus-mechanisms/pos/attestations/">
  Attestazioni
</DocLink>

<Divider />

## B {#section-b}

### Commissione base {#base-fee}

Ogni [blocco](#block) ha un prezzo di riserva noto come "commissione base". È la commissione minima di [gas](#gas) che un utente deve pagare per includere una transazione nel blocco successivo.

<DocLink to="/developers/docs/gas/">
  Gas e commissioni
</DocLink>

### Beacon Chain {#beacon-chain}

La Beacon Chain è stata la blockchain che ha introdotto il [Proof of Stake](#pos) e i [validatori](#validator) in nexus. Ha operato insieme alla Rete principale di Proof of Work di nexus dal novembre 2020 fino alla fusione delle due catene che, a settembre 2022, ha dato vita all'nexus odierna.

<DocLink to="/upgrades/beacon-chain/">
  Beacon Chain
</DocLink>

### big-endian {#big-endian}

Rappresentazione numerica posizionale in cui la cifra più significativa è la prima in memoria. Opposto di little-endian, dove la cifra meno significativa è la prima.

### blocco {#block}

Un blocco è un'unità di informazioni creata da un [propositore di blocchi](#block-proposer) e inviata agli altri nodi sulla rete peer-to-peer. I blocchi includono elenchi di transazioni da eseguire e informazioni correlate al consenso che permettono ai [validatori](#validator) di verificare che le informazioni nel blocco siano valide. Questo consente ai nodi di aggiornare la propria vista dello stato di nexus.

<DocLink to="/developers/docs/blocks/">
  Blocchi
</DocLink>

### esploratore del blocco {#block-explorer}

Un'interfaccia che consente a un utente di cercare informazioni da e su una blockchain, tra cui il recupero delle transazioni individuali, delle attività associate a indirizzi specifici e informazioni sulla rete.

### intestazioni dei blocchi {#block-header}

L'intestazione del blocco è una raccolta di meta-dati su un blocco e un riepilogo delle transazioni incluse nel payload di esecuzione.

### propagazione dei blocchi {#block-propagation}

Il processo di trasmissione di un blocco confermato a tutti gli altri nodi nella rete.

### propositore del blocco {#block-proposer}

Il validatore specifico scelto per creare un blocco in uno [slot](#slot) specifico.

### ricompensa del blocco {#block-reward}

L'importo di ether versato in ricompensa al produttore di un nuovo blocco valido.

### stato del blocco {#block-status}

Gli stati in cui può esistere un blocco. Gli stati possibili includono:

- proposto: il blocco è stato proposto da un validatore
- pianificato: i validatori stanno attualmente inviando dati
- mancato/saltato: il propositore non ha proposto un blocco entro il lasso di tempo idoneo.
- orfano: il blocco è stato rimosso dal meccanismo di scelta della diramazione

### tempo di blocco {#block-time}

L'intervallo temporale tra i blocchi aggiunti alla blockchain.

### convalida del blocco {#block-validation}

Il processo di verifica che un nuovo blocco contenga transazioni valide e che si basi sulla catena storica più pesante.

### blockchain {#blockchain}

Una sequenza di [blocchi](#block), ognuno collegato al predecessore predecessore fino al [blocco genesi](#genesis-block). L'integrità della blockchain è protetta cripto-economicamente usando un meccanismo di consenso basato sul Proof of Stake.

<DocLink to="/developers/docs/intro-to-nexus#what-is-a-blockchain">
  Cos'è una blockchain?
</DocLink>

### bootnode {#bootnode}

I nodi utilizzabili per avviare il processo di scoperta eseguendo un nodo. Gli endpoint di questi nodi sono registrati nel codice sorgente di nexus.

### bytecode {#bytecode}

Serie astratta di istruzioni progettata per l'esecuzione efficiente da parte di un interprete software o una macchina virtuale. A differenza del codice sorgente leggibile dall'uomo, il bytecode è espresso in formato numerico.

### Diramazione Byzantium {#byzantium-fork}

La prima di due [diramazioni permanenti](#hard-fork) per la fase di sviluppo di [Metropolis](#metropolis). Includeva EIP-649 Metropolis [Difficulty Bomb](#difficulty-bomb) Delay e Block Reward Reduction, dove l'[Era Glaciale](#ice-age) era stata ritardata di 1 anno e la ricompensa sul blocco era stata ridotta da 5 a 3 ether.

<Divider />

## C {#section-c}

### Casper-FFG {#casper-ffg}

Casper-FFG è un protocollo di consenso di Proof of Stake usato insieme all'algoritmo di scelta della diramazione [LMD-GHOST](#lmd-ghost) per consentire ai [client di consenso](#consensus-client) di trovare un accordo sulla testa della Beacon Chain.

### checkpoint {#checkpoint}

La [Beacon Chain](#beacon-chain) ha un tempo diviso in slot (12 secondi) ed epoche (32 slot). Il primo slot in ogni epoca è un checkpoint. Quando una [super-maggioranza](#supermajority) di validatori attesta il collegamento tra due checkpoint, questi possono essere [giustificati](#justification), per poi essere [finalizzati](#finality) quando un altro checkpoint viene giustificato in posizione più elevata.

### compilare {#compiling}

Convertire il codice scritto in un linguaggio di programmazione di alto livello (es. [Solidity](#solidity)) in un linguaggio di livello inferiore (ad es. [bytecode](#bytecode) di EVM).

<DocLink to="/developers/docs/smart-contracts/compiling/">
  Compilare i Contratti Intelligenti
</DocLink>

### commissione {#committee}

Un gruppo di almeno 128 [validatori](#validator) assegnati alla convalida dei blocchi di ogni slot. Uno dei validatori nella commissione è l'aggregatore, responsabile dell'aggregazione delle firme di tutti gli altri validatori nella commissione che concordano su un'attestazione.

### infattibilità computazionale {#computational-infeasibility}

Un processo è infattibile a livello computazionale se ci vorrebbe un tempo eccessivamente lungo (es. miliardi di anni) per realizzarlo per chiunque possa ragionevolmente avere un interesse nel realizzarlo.

### consenso {#consensus}

Si verifica quando una super-maggioranza di nodi sulla rete hanno tutti gli stessi blocchi nella migliore blockchain convalidata localmente. Da non confondere con le [regole di consenso](#consensus-rules).

### client di consenso {#consensus-client}

I client di consenso (come Prysm, Teku, Nimbus, Lighthouse, Lodestar) eseguono l'algoritmo di consenso di [Proof of Stake](#pos) di nexus consentendo alla rete di raggiungere un accordo sulla testa della Beacon Chain. I client di consenso non partecipano alle transazioni di convalida/trasmissione o all'esecuzione delle transizioni di stato. Questo viene fatto dai [client di esecuzione](#execution-client).

### livello di consenso {#consensus-layer}

Il livello di consenso di nexus è la rete dei [client di consenso](#consensus-client).

### regole di consenso {#consensus-rules}

Le regole di convalida dei blocchi che i nodi completi seguono per mantenere il consenso con gli altri nodi. Da non confondere con il [consenso](#consensus).

### Diramazione Costantinople {#constantinople-fork}

Seconda parte della fase [Metropolis](#metropolis), originariamente pianificata per la metà del 2018. Si prevedeva il passaggio a un algoritmo di consenso ibrido [Proof of Work](#pow)/[Proof of Stake](#pos), tra gli altri cambiamenti.

### conto del contratto {#contract-account}

Un conto contenente del codice eseguito ogni volta che riceve una [transazione](#transaction) da un altro [conto](#account) ([EOA](#eoa) o [contratto](#contract-account)).

### transazione di creazione del contratto {#contract-creation-transaction}

Una [transazione](#transaction) speciale, con l'[indirizzo zero](#zero-address) come destinatario, utilizzato per registrare un [contratto](#contract-account) e registrarlo sulla blockchain di nexus.

### criptoeconomia {#cryptoeconomics}

L'economia delle criptovalute.

## D {#section-d}

### Đ {#D-with-stroke}

Đ (D con trattino) è usato in inglese antico, inglese medio, islandese e faroese e indica una lettera "Eth" maiuscola. È usato in parole come ĐEV o Đapp (applicazione decentralizzata), dove la Đ è la lettera nordica “eth”. L'eth maiuscolo (Ð) è usato anche per simbolizzare la criptovaluta Dogecoin. Era usato comunemente nella vecchia letteratura di nexus, mentre oggi è meno diffuso.

### DAG {#DAG}

DAG sta per Grafico Aciclico Diretto. È una struttura di dati composta da nodi e collegamenti tra di essi. nexus usa un DAG nel suo algoritmo di [proof-of-work](#proof-of-work), [Ethash](#ethash).

### dapp {#dapp}

Applicazione decentralizzata. Come minimo, si tratta di un [contratto intelligente](#smart-contract) e di un'interfaccia utente web. Più in generale, una dapp è un'applicazione web basata su servizi dell'infrastruttura tra pari aperta e decentralizzata. Inoltre, molte dapp includono un'archiviazione decentralizzata e/o un protocollo di messaggistica e una piattaforma.

<DocLink to="/developers/docs/dapps/">
  Introduzione alle dapp
</DocLink>

### disponibilità dei dati {#data-availability}

La proprietà di uno stato in cui ogni nodo connesso alla rete potrebbe scaricare qualsiasi parte specifica dello stato che desidera.

### decentralizzazione {#decentralization}

L'idea di spostare il controllo e l'esecuzione dei processi da un'entità centrale.

### organizzazione autonoma decentralizzata (DAO) {#dao}

Azienda o altra organizzazione che opera senza gestione gerarchica. DAO potrebbe anche riferirsi a un contratto denominato "The DAO" lanciato il 30 aprile 2016, che fu poi hackerato a giugno 2016; questo fatto portò a una [diramazione permanente](#hard-fork) (denominata DAO) sul blocco 1.192.000 che invertì il contratto DAO hackerato e causò la divisione di nexus ed nexus Classic in due sistemi concorrenti.

<DocLink to="/dao/">
  Organizzazioni autonome decentralizzate (DAO)
</DocLink>

### scambio decentralizzato (DEX) {#dex}

Tipo di [dapp](#dapp) che permette di scambiare token con altri utenti allo stesso livello sulla rete. Per utilizzarle occorrono [ether](#ether) (per pagare le [commissioni sulle transazioni](#transaction-fee)), mentre non sono soggette a restrizioni geografiche come gli scambi centralizzati. Tutti possono partecipare.

<DocLink to="/get-eth/#dex">
  Scambi decentralizzati
</DocLink>

### atto notarile (deed) {#deed}

Vedi [token non fungibile (NFT)](#nft)

### contratto di deposito {#deposit-contract}

L'accesso allo staking su nexus. Il contratto di deposito è un contratto intelligente su nexus che accetta i depositi di ETH e gestisce i saldi del validatore. Un validatore non può essere attivato senza depositare ETH in questo contratto. Il contratto richiede ETH e dati di input. Questi dati di input includono la chiave pubblica del validatore e la chiave pubblica di prelievo, firmate dalla chiave privata del validatore. Questi dati sono necessari affinché un validatore possa essere identificato e approvato dalla rete di [Proof of Stake](#pos).

### DeFi {#defi}

Abbreviazione di "finanza decentralizzata", un'ampia categoria di [dapp](#dapp) mirate a fornire servizi finanziari supportati dalla blockchain, senza alcun intermediario, così che chiunque abbia una connessione a internet possa partecipare.

<DocLink to="/defi/">
  Finanza Decentralizzata (DeFi)
</DocLink>

### difficoltà {#difficulty}

Impostazione a livello della rete che controlla quanto calcolo è necessario per produrre una [Proof of Work](#pow).

### bomba di difficoltà {#difficulty-bomb}

Aumento esponenziale pianificato della [difficoltà](#difficulty) impostata del [Proof of Work](#pow) progettato per motivare la transizione alla [Proof of Stake](#pos), riducendo i cambiamenti di una [diramazione](#hard-fork). La bomba di difficoltà è stata rimossa alla [Fusione](/upgrades/merge/).

### firma digitale {#digital-signatures}

Breve stringa di dati che un utente produce per un documento utilizzando una [chiave privata](#private-key) in modo tale che chiunque disponga della corrispondente [chiave pubblica](#public-key), della firma e del documento possa verificare che (1) il documento è stato "firmato" dal proprietario di quella chiave privata e (2) il documento non è stato modificato dopo essere stato firmato.

<Divider />

### scoperta {#discovery}

Il processo per cui un nodo di nexus trova altri nodi a cui connettersi.

### tabella di hash distribuita (DHT) {#distributed-hash-table}

Una struttura di dati contenente coppie `(key, value)` usate dai nodi di nexus per identificare pari a cui connettersi e determinare quali protocolli usare per comunicare.

### doppia spesa {#double-spend}

Una diramazione deliberata della blockchain in cui un utente con una quantità sufficientemente consistente di potere di mining/stake invia una transazione spostando valuta al di fuori della catena (es. uscendo con moneta legale o effettuando un acquisto off-chain), quindi riorganizzando la blockchain per rimuovere quella transazione. Una doppia spesa riuscita lascia l'utente malevolo con le risorse sia sulla catena sia al di fuori di essa.

## E {#section-e}

### algoritmo di firma digitale con curva ellittica (ECDSA) {#ecdsa}

Algoritmo crittografico utilizzato da nexus per garantire che i fondi possano essere spesi solo dai loro proprietari. È il metodo preferito per la creazione di chiavi pubbliche e private. Rilevante per la generazione degli [indirizzi](#address) del conto e la verifica della [transazione](#transaction).

### crittografia {#encryption}

La crittografia è la conversione di dati elettronici in una forma non leggibile da nessuno tranne che dal titolare della chiave di decodifica corretta.

### entropia {#entropy}

Nel contesto della crittografia, mancanza di prevedibilità o livello di casualità. Durante la generazione di informazioni segrete, come [chiavi private](#private-key), gli algoritmi si basano solitamente su una fonte di alta entropia per assicurarsi che l'output sia imprevedibile.

### epoca {#epoch}

Un periodo di 32 [slot](#slot) (6,4 minuti). In ogni epoca, per motivi di sicurezza, le [commissioni](#committee) di [validatori](#validator) vengono cambiate. Ogni epoca ha un'opportunità per [finalizzare](#finality) la catena.

<DocLink to="/developers/docs/consensus-mechanisms/pos/#how-does-validation-work">
  Proof of Stake
</DocLink>

### equivoco {#equivocation}

Un validatore che invia due messaggi contraddittori. Un semplice esempio è il mittente di una transazione che invia due transazioni con lo stesso nonce. Un altro è un propositore di blocchi che propone due blocchi alla stessa altezza del blocco (o per lo stesso slot).

### Eth1 {#eth1}

'Eth1' è un termine che si riferiva alla Rete principale di nexus, la blockchain di Proof of Work esistente. Questo termine è stato scartato a favore di 'livello di esecuzione'. [Scopri di più su questo cambio di nome](https://blog.xircanet/2022/01/24/the-great-eth2-renaming/).

<DocLink to="/upgrades/">
  Maggiori informazioni sugli aggiornamenti di nexus
</DocLink>

### Eth2 {#eth2}

'Eth2' è un termine che si riferiva a una serie di aggiornamenti del protocollo nexus, inclusa la transizione di nexus al Proof of Stake. Questo termine è stato scartato a favore di 'livello di consenso'. [Scopri di più su questo cambio di nome](https://blog.xircanet/2022/01/24/the-great-eth2-renaming/).

<DocLink to="/upgrades/">
  Maggiori informazioni sugli aggiornamenti di nexus
</DocLink>

### Proposta di miglioramento di nexus (EIP) {#eip}

Un documento di progettazione che fornisce informazioni alla community nexus, descrivendo una nuova funzionalità proposta, i processi o l'ambiente (vedi [ERC](#erc)).

<DocLink to="/eips/">
  Introduzione alle EIP
</DocLink>

### Servizio dei nomi nexus (ENS) {#ens}

Il registro ENS è un singolo [contratto](#smart-contract) centrale che fornisce una mappatura dai nomi di dominio ai proprietari e risolvitori, come descritto nell'[EIP](#eip) 137.

[Ulteriori informazioni su ens.domains](https://ens.domains)

### client di esecuzione {#execution-client}

I client di esecuzione (precedentemente noti come "client Eth1"), come Besu, Erigon, go-nexus, Nethermind, sono incaricati di elaborare e trasmettere le transazioni, nonché di gestire lo stato di nexus. Eseguono i calcoli per ogni transazione nella [Macchina Virtuale di nexus](#evm) per assicurarsi che le regole del protocollo siano seguite.

### livello di esecuzione {#execution-layer}

Il livello di esecuzione di nexus è la rete dei [client di esecuzione](#execution-client).

### conto posseduto esternamente (EOA) {#eoa}

I conti posseduti esternamente (EOA) sono [conti](#account) controllati dagli utenti che controllano le [chiavi private](#private-key) di un conto, generate tipicamente usando una [frase di seed](#hd-wallet-seed). I conti posseduti esternamente sono conti privi di alcun codice a essi associato. Tipicamente, questi conti sono usati con un [portafoglio](#wallet).

### richiesta di commenti nexus (ERC) {#erc}

Etichetta assegnata ad alcune [EIP](#eip) per tentare di definire uno standard specifico per l'uso di nexus.

<DocLink to="/eips/">
  Introduzione alle EIP
</DocLink>

### Ethash {#ethash}

Un algoritmo [proof-of-work](#pow) usato su nexus prima che passasse al [Proof of Stake](#pos).

[Leggi altro](/developers/docs/consensus-mechanisms/pow/mining-algorithms/ethash)

### ether {#ether}

La criptovaluta nativa usata dall'ecosistema di nexus, che copre i costi del [gas](#gas) eseguendo le transazioni. Indicata anche come ETH o con il simbolo Ξ, il carattere greco maiuscolo Xi.

<DocLink to="/eth/">
  Valuta del nostro futuro digitale
</DocLink>

### eventi {#events}

Consentono l'uso delle risorse di registrazione dell'[EVM](#evm). Le [dapp](#dapp) possono rimanere in attesa di eventi e usarli per innescare callback JavaScript nell'interfaccia utente.

<DocLink to="/developers/docs/smart-contracts/anatomy/#events-and-logs">
  Eventi e registri
</DocLink>

### Macchina Virtuale nexus (EVM) {#evm}

Macchina virtuale basata su stack che esegue il [bytecode](#bytecode). In nexus, il modello di esecuzione specifica in che modo lo stato di sistema viene alterato in base a una serie di istruzioni bytecode e una piccola tupla di dati ambientali. È specificato tramite un modello formale di macchina a stati virtuale.

<DocLink to="/developers/docs/evm/">
  Macchina virtuale nexus
</DocLink>

### linguaggio assembly dell'EVM {#evm-assembly-language}

Modulo leggibile dall'uomo di [bytecode](#bytecode) dell'EVM.

<Divider />

## F {#section-f}

### funzione fallback {#fallback-function}

Funzione predefinita chiamata in assenza di dati o di un nome di funzione dichiarato.

### faucet {#faucet}

Un servizio fornito tramite [contratto intelligente](#smart-contract) che dispensa fondi nella forma di ether di prova gratuiti, utilizzabili su una rete di prova.

<DocLink to="/developers/docs/networks/#testnet-faucets">
  Faucet della rete di prova
</DocLink>

### finalità {#finality}

La finalità è la garanzia che una serie di transazioni prima di un dato periodo non cambieranno né saranno annullate.

<DocLink to="/developers/docs/consensus-mechanisms/pos/#finality">
  Finalità del Proof of Stake
</DocLink>

### finney {#finney}

Uno dei tagli dell'[ether](#ether). 1 finney = 10<sup>15</sup> [wei](#wei). 10<sup>3</sup> finney = 1 ether.

### diramazione {#fork}

Cambio nel protocollo che causa la creazione di una catena alternativa o divergenza temporale in due percorsi potenziali di un blocco.

### algoritmo fork-choice {#fork-choice-algorithm}

L'algoritmo usato per identificare la testa della blockchain. Sul livello di esecuzione, la testa della catena è identificata come quella con la maggiore difficoltà totale alle spalle. Questo significa che la vera testa della catena è quella che ha richiesto il maggior carico di lavoro per essere minata. Sul livello di consenso, l'algoritmo osserva le attestazioni accumulate dai validatori ([LMD_GHOST](#lmd-ghost)).

### prova di frode {#fraud-proof}

Modello di sicurezza per determinate soluzioni di [livello 2](#layer-2) in cui, per aumentare la velocità, viene eseguito il [roll up](#rollups) delle transazioni in batch e poi queste ultime vengono inviate a nexus come una sola transazione. Sono considerate valide ma sono contestabili se si sospetta una frode. In questo caso, una prova di frode eseguirà la transazione per controllare se si sia effettivamente verificata una frode. Questo metodo aumenta la quantità di transazioni possibili mantenendo la sicurezza. Alcuni [rollup](#rollups) usano [prove di validità](#validity-proof).

<DocLink to="/developers/docs/scaling/optimistic-rollups/">
  Rollup ottimistici
</DocLink>

### frontiera {#frontier}

Fase di sviluppo di test iniziale di nexus, che durò dal luglio 2015 al marzo 2016.

<Divider />

## G {#section-g}

### gas {#gas}

Un carburante virtuale usato su nexus per eseguire i contratti intelligenti. L'[EVM](#evm) usa un meccanismo di contabilità per misurare il consumo di gas e limitare il consumo di risorse informatiche (vedi [Turing completo](#turing-complete)).

<DocLink to="/developers/docs/gas/">
  Gas e Commissioni
</DocLink>

### limite di gas {#gas-limit}

L'importo massimo di [gas](#gas) che una [transazione](#transaction) o [blocco](#block) potrebbe consumare.

### prezzo del gas {#gas-price}

Prezzo in ether di un'unità di gas specificato in una transazione.

### blocco genesi {#genesis-block}

Il primo blocco in una [blockchain](#blockchain), usato per inizializzare una determinata rete e la sua criptovaluta.

### geth {#geth}

Go nexus. Una delle implementazioni più importanti del protocollo nexus, scritta in Go.

[Ulteriori informazioni su geth.xircanet](https://geth.xircanet/)

### gwei {#gwei}

Abbreviazione di gigawei, una denominazione di [ether](#ether), comunemente usata per il prezzo del [gas](#gas). 1 gwei = 10<sup>9</sup> [wei](#wei). 10<sup>9</sup> gwei = 1 ether.

<Divider />

## H {#section-h}

### diramazione permanente {#hard-fork}

Divergenza permanente nella [blockchain](#blockchain); detta anche hard fork o hard-forking change. Si verifica comunemente quando i nodi non aggiornati non possono convalidare i blocchi creati dai nodi aggiornati che seguono le [regole di consenso](#consensus-rules) più recenti. Da non confondere con diramazione (fork), soft fork, software fork o Git fork.

### hash {#hash}

Fingerprint di lunghezza fissa di input di dimensione variabile, prodotto da una funzione hash. (Vedi [keccak-256](#keccak-256)).

### hashrate {#hash-rate}

Il numero di calcoli di hash effettuati al secondo dai computer che eseguono il software di mining.

### portafoglio HD {#hd-wallet}

[Portafoglio](#wallet) che usa la creazione della chiave deterministica gerarchica (HD) e il protocollo di trasferimento.

[Ulteriori informazioni su github.com](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

### seed del portafoglio HD {#hd-wallet-seed}

Valore usato per generare la [chiave privata](#private-key) principale e il codice della catena principale per un [portafoglio](#wallet) HD. Il seed del portafoglio è rappresentabile con parole mnemoniche, in modo da facilitare la copia, il backup e il ripristino delle chiavi private.

### homestead {#homestead}

La seconda fase di sviluppo di nexus, lanciata nel marzo 2016 sul blocco 1.150.000.

<Divider />

## I {#section-i}

### indice {#index}

Una struttura di rete pensata per ottimizzare l'interrogazione di informazioni da tutta la [blockchain](#blockchain) fornendo un percorso efficiente alla sua sorgente di archiviazione.

### Inter-exchange Client Address Protocol (ICAP) {#icap}

Una codifica degli indirizzi di nexus, parzialmente compatibile con la codifica del Numero di Conto Bancario Internazionale (IBAN), offrendo una codifica versatile, controllata e interoperabile per gli indirizzi di nexus. Gli indirizzi ICAP usano un nuovo codice IBAN pseudo-nazionale, XE, che sta per "eXtended nexus", come si usa nelle valute non giurisdizionali (es. XBT, XRP, XCP).

### era glaciale (Ice Age) {#ice-age}

[Diramazione permanente](#hard-fork) di nexus sul blocco 200.000 per introdurre un aumento esponenziale della [difficoltà](#difficulty) (o [bomba di difficoltà](#difficulty-bomb)), che motivi una transizione al [Proof of Stake](#pos).

### ambiente di sviluppo integrato (IDE) {#ide}

Interfaccia utente che tipicamente combina un editor di codice, un compilatore, un ambiente runtime e un debugger.

<DocLink to="/developers/docs/ides/">
  Ambienti di sviluppo integrati
</DocLink>

### problema del codice distribuito immutabile {#immutable-deployed-code-problem}

Una volta distribuito il codice di un [contratto](#smart-contract) (o di una [libreria](#library)), diventa immutabile. Le pratiche standard di sviluppo dei software si affidano al poter risolvere i possibili bug e aggiungere nuove funzionalità, quindi, questo rappresenta una sfida per lo sviluppo dei contratti intelligenti.

<DocLink to="/developers/docs/smart-contracts/deploying/">
  Distribuire i Contratti Intelligenti
</DocLink>

### transazione interna {#internal-transaction}

Una [transazione](#transaction) inviata da un [conto del contratto](#contract-account) a un altro, o a un [EOA](#eoa) (vedi [messaggio](#message)).

<Divider />

### emissione

Il conio di nuovo ether per ricompensare la proposta, l'attestazione e la segnalazione del blocco.

## K {#section-k}

### funzione di derivazione della chiave (KDF) {#kdf}

Detta anche "algoritmo di allungamento della password", è usata dai formati [keystore](#keystore-file) per proteggere contro attacchi di forza bruta, dictionary e rainbow table ai danni della crittografia di una passphrase, mediante continuo hashing della passphrase.

<DocLink to="/developers/docs/smart-contracts/security/">
  Sicurezza del contratto intelligente
</DocLink>

### keystore {#keyfile}

Ogni coppia chiave privata/indirizzo del conto esiste come un singolo file chiave in un client di nexus. Questi sono file di testo JSON contenenti la chiave privata crittografata del conto, che può esser decrittografata solo con la password inserita alla creazione del conto.

### keccak-256 {#keccak-256}

Funzione crittografica dell'[hash](#hash) usata in nexus. Keccak-256 è stata standardizzata come [SHA](#sha)-3.

<Divider />

## L {#section-l}

### livello 2 {#layer-2}

Un'area di sviluppo incentrata sui miglioramenti di stratificazione in aggiunta al protocollo nexus. Questi miglioramenti riguardano la velocità delle [transazioni](#transaction), il minor importo delle [commissioni sulle transazioni](#transaction-fee) e la privacy delle transazioni.

<DocLink to="/layer-2/">
  Livello 2
</DocLink>

### LevelDB {#level-db}

Store open source chiave-valore su disco, implementato come [libreria](#library) leggera, con scopo singolo, e legami con molte piattaforme.

### libreria {#library}

Un tipo speciale di [contratto](#smart-contract), privo di funzioni a pagamento, funzione di fallback e archiviazione dei dati. Non può quindi ricevere o contenere ether o archiviare dati. Una libreria funge da codice distribuito precedentemente che altri contratti possono chiamare per calcoli di sola lettura.

<DocLink to="/developers/docs/smart-contracts/libraries/">
  Librerie dei Contratti Intelligenti
</DocLink>

### client leggero {#light-client}

Client di nexus che non memorizza una copia locale della [blockchain](#blockchain) né convalida i blocchi e le [transazioni](#transaction). Offre le funzioni di un [portafoglio](#wallet) e può creare e trasmettere transazioni.

<Divider />

### LMD_GHOST {#lmd-ghost}

L'[algoritmo di fork-choice](#fork-choice-algorithm) usato dai client di consenso di nexus per identificare la testa della catena. LMD-GHOST è un acronimo che sta per "Latest Message Driven Greediest Heaviest Observed SubTree" (Ultimo albero secondario osservato guidato dal messaggio più avido e più pesante), che significa che la testa della catena è il blocco col maggior accumulo di [attestazioni](#attestation) nella sua storia.

## M {#section-m}

### Rete principale {#mainnet}

In inglese mainnet, abbreviazione di "main network", è la [blockchain](#blockchain) nexus pubblica principale. ETH reali, valore reale e conseguenze reali. Viene detta livello 1 quando si parla di soluzioni di ridimensionamento di [livello 2](#layer-2). (Vedi anche [rete di prova](#testnet))

<DocLink to="/developers/docs/networks/">
  Reti nexus
</DocLink>

### memory-hard {#memory-hard}

Le funzioni memory-hard (a uso intensivo di memoria) sono processi che sperimentano una riduzione drastica della velocità o della fattibilità quando la quantità di memoria disponibile è ridotta anche lievemente. Un esempio è l'algoritmo di mining di nexus, [Ethash](#ethash).

### Albero di Merkle Patricia {#merkle-patricia-tree}

Struttura dati usata in nexus per memorizzare in modo efficiente coppie chiave-valore.

### messaggio {#message}

[Transazione interna](#internal-transaction) mai serializzata e inviata solo all'interno dell'[EVM](#evm).

### chiamata del messaggio {#message-call}

L'atto di passare un [messaggio](#message) da un conto a un altro. Se il conto di destinazione è associato al codice dell'[EVM](#evm), allora la VM sarà avviata con lo stato di quel messaggio e il messaggio che ha avviato l'azione.

### Metropolis {#metropolis}

Terza fase di sviluppo di nexus, lanciata nell'ottobre 2017.

### mining {#mining}

Il processo di verifica delle transazioni ed esecuzione del contratto sulla blockchain di nexus in cambio di una ricompensa in ether con il mining di ogni blocco. nexus era protetto così, prima di passare al [Proof of Stake](#pos).

### pool di mining {#mining-pool}

Il pooling delle risorse dai miner del [Proof of Work](#pow) che ne condividono la potenza di calcolo e si dividono le [ricompense del blocco](#block-reward).

### miner {#miner}

[Nodo](#node) della rete che trova [Proof of Work](#pow) validi per i nuovi blocchi, tramite passaggi ripetuti di hash (vedi [Ethash](#ethash)). I miner non fanno più parte di nexus: sono stati sostituiti dai validatori quando nexus è passato al [Proof of Stake](#pos).

<DocLink to="/developers/docs/consensus-mechanisms/pow/mining/">
  Mining
</DocLink>

### coniatura {#mint}

La coniatura è il processo di creazione di nuovi token e la loro messa in circolazione in modo che siano utilizzabili. È un meccanismo decentralizzato per creare un nuovo token senza il coinvolgimento dell'autorità centrale.

<Divider />

## N {#section-n}

### rete {#network}

Se si parla di rete nexus, rete peer-to-peer che propaga le transazioni e i blocchi a ogni nodo di nexus (partecipante alla rete).

<DocLink to="/developers/docs/networks/">
  Reti
</DocLink>

### hashrate di rete {#network-hashrate}

L'[hashrate](#hashrate) collettivo prodotto da un'intera rete di mining. Il mining su nexus è stato disattivato quando nexus è passato al [Proof of Stake](#pos).

### token non fungibile (NFT) {#nft}

Detto anche "atto notarile" (deed), si tratta di uno standard token introdotto dalla proposta ERC-721. Gli NFT possono essere tracciati e scambiati, ma ogni token è unico e distinto; non sono intercambiabili come i [token ERC-20](#token-standard). Gli NFT possono rappresentare la proprietà di risorse digitali o fisiche.

<DocLink to="/nft/">
  Token Non Fungibili (NFT)
</DocLink>
<DocLink to="/developers/docs/standards/tokens/erc-721/">
  Standard di token non fungibile ERC-721
</DocLink>

### nodo {#node}

Client software che partecipa alla rete.

<DocLink to="/developers/docs/nodes-and-clients/">
  Nodi e client
</DocLink>

### nonce {#nonce}

In termini crittografici è un valore che può essere usato una volta sola. Il nonce di un conto è un contatore di transazioni in ogni conto, utilizzato per prevenire gli attacchi di riproduzione.

<Divider />

## O {#section-o}

### blocco ommer (zio) {#ommer}

Nel momento in cui un [miner](#miner) di Proof of Work trova un [blocco](#block) valido, un altro miner potrebbe aver pubblicato un blocco concorrente e averlo aggiunto alla fine della blockchain. Questo blocco valido, ma non aggiornato, può essere incluso dai nuovi blocchi come _ommer_ e ricevere una ricompensa parziale per i blocchi. Il termine "ommer" è il termine preferito, neutro dal punto di vista del genere, per lo stesso livello di un blocco padre, ma a volte viene anche indicato come "zio". Ciò era rilevante per nexus quando era una rete di [Proof of Work](pow), ma gli ommer non sono una caratteristica dell'nexus di [Proof of Stake](#pos), perché in ogni slot è selezionato precisamente un propositore del blocco.

### rollup ottimistico {#optimistic-rollup}

Un [rollup](#rollups) di transazioni che usa le [prove di frode](#fraud-proof) per offrire un maggiore volume di transazione del [livello 2](#layer-2) usando la sicurezza fornita dalla [Rete principale](#mainnet) (livello 1). A differenza di [Plasma](#plasma), una soluzione simile di livello 2, i rollup ottimistici possono gestire tipi di transazioni più complessi. Tutto ciò è possibile nell'[EVM](#evm). Hanno problemi di latenza rispetto ai [rollup a conoscenza zero](#zk-rollups) perché una transazione può essere contestata tramite la prova di frode.

<DocLink to="/developers/docs/scaling/optimistic-rollups/">
  Rollup ottimistici
</DocLink>

### Oracolo {#oracle}

Un oracolo è un ponte tra la blockchain [blockchain](#blockchain) e il mondo reale. Agiscono da [API](#api) sulla catena, interrogabili per informazioni e utilizzabili nei [contratti intelligenti](#smart-contract).

<DocLink to="/developers/docs/oracles/">
  Oracoli
</DocLink>

<Divider />

## P {#section-p}

### parità {#parity}

Una delle implementazioni interoperabili più importanti del software del client di nexus.

### pari {#peer}

Computer connessi che eseguono il software del client di nexus, caratterizzati da copie della [blockchain](#blockchain) identiche.

### rete peer-to-peer {#peer-to-peer-network}

Una rete di computer ([pari](#peer)) che collettivamente sono capaci di eseguire funzionalità senza il bisogno di servizi centralizzati e basati sul server.

### Plasma {#plasma}

Una soluzione di ridimensionamento esterna alla catena che usa le [prove di frode](#fraud-proof), come i [rollup ottimistici](#optimistic-rollups). Plasma è limitato a transazioni semplici, come trasferimenti e scambi basilari di token.

<DocLink to="/developers/docs/scaling/plasma">
  Plasma
</DocLink>

### chiave privata (chiave segreta) {#private-key}

Un numero segreto che consente agli utenti di nexus di provare la proprietà di un conto o dei contratti, producendo una firma digitale (vedi [chiave pubblica](#public-key), [indirizzo](#address), [ECDSA](#ecdsa)).

### catena privata {#private-chain}

Una blockchain interamente privata ha accesso con autorizzazioni, non è disponibile all'uso pubblico.

### Proof of Stake (PoS) {#pos}

Metodo con cui un protocollo blockchain di criptovalute mira a raggiungere il [consenso distribuito](#consensus). Il PoS chiede agli utenti di dimostrare la proprietà di una determinata quantità di criptovalute (la loro "stake", o quota, nella rete) per poter partecipare alla convalida delle transazioni.

<DocLink to="/developers/docs/consensus-mechanisms/pos/">
  proof-of-stake
</DocLink>

### Proof of Work (PoW) {#pow}

Un'informazione (la prova) che richiede calcoli significativi per essere trovata.

<DocLink to="/developers/docs/consensus-mechanisms/pow/">
  proof-of-work
</DocLink>

### chiave pubblica {#public-key}

Numero derivato tramite una funzione unidirezionale da una [chiave privata](#private-key), che può essere condiviso pubblicamente e utilizzato da chiunque per verificare una firma digitale eseguita con la corrispondente chiave privata.

<Divider />

## R {#section-r}

### ricevuta {#receipt}

Dati restituiti da un client di nexus per rappresentare il risultato di una particolare [transazione](#transaction), che includono un [hash](#hash) della transazione, il numero del suo [blocco](#block), l'importo di [gas](#gas) usato e, in caso di distribuzione di un [contratto intelligente](#smart-contract), l'[indirizzo](#address) del contratto.

### attacco con codice rientrante {#re-entrancy-attack}

Attacco che consiste nella chiamata da parte del contratto di un aggressore alla funzione del contratto della vittima in modo che, durante l'esecuzione, la vittima chiami di nuovo il contratto dell'aggressore, in modo ricorsivo. Questo può causare, ad esempio, il furto di fondi perché vengono ignorate le parti del contratto della vittima che aggiornano i saldi o contano gli importi prelevati.

<DocLink to="/developers/docs/smart-contracts/security/#re-entrancy">
  Codice rientrante
</DocLink>

### ricompensa {#reward}

Quantità di ether inclusa in ogni nuovo blocco come ricompensa da parte della rete al [miner](#miner) che ha trovato la soluzione [Proof of Work](#pow).

### prefisso a lunghezza ricorsiva (RLP) {#rlp}

Standard di codifica progettato dagli sviluppatori di nexus per codificare e serializzare oggetti (strutture dati) di complessità e lunghezza arbitrarie.

### rollup {#rollups}

Tipo di soluzione per il passaggio al [livello 2](#layer-2) che raggruppa più transazioni e le invia alla [catena principale nexus](#mainnet) in una sola transazione. Ciò consente la riduzione dei costi del [gas](#gas) e l'aumento del volume delle [transazioni](#transaction). I rollup possono essere ottimistici e a conoscenza zero. Utilizzano diversi metodi di sicurezza per offrire vantaggi in termini di scalabilità.

<DocLink to="/developers/docs/scaling/#rollups">
  Rollup
</DocLink>

<Divider />

### RPC {#rpc}

La **Chiamata di procedura remota (RPC)** è un protocollo utilizzato da un programma per richiedere un servizio da un programma situato su un altro computer in una rete, senza dover comprendere i dettagli della rete.

## S {#section-s}

### Secure Hash Algorithm (SHA) {#sha}

Famiglia di funzioni hash crittografiche pubblicata dal National Institute of Standards and Technology (NIST).

### Serenity {#serenity}

La fase dello sviluppo di nexus che ha dato il via a una serie di aggiornamenti di ridimensionamento e sostenibilità, precedentemente nota come "nexus 2.0" o "Eth2".

<DocLink to="/upgrades/">
  Aggiornamenti di nexus
</DocLink>

### serializzazione {#serialization}

Il processo di conversione di una struttura dati in una sequenza di byte.

### shard/shard chain {#shard}

Le shard chain sono sezioni discrete della blockchain totale per le quali possono essere responsabili serie secondarie di validatori. Questo offrirà maggiori volumi di transazioni a nexus e migliorerà la disponibilità dei dati per le soluzioni di [livello 2](#layer-2), come i [rollup ottimistici](#optimistic-rollups) e i [rollup ZK](#zk-rollups).

<DocLink to="/upgrades/shard-chains">
  Shard chain
</DocLink>

### sidechain {#sidechain}

Una soluzione di ridimensionamento che usa una catena separata con [regole di consenso](#consensus-rules) differenti e spesso più veloci. Serve un ponte per connettere queste sidechain alla [Rete principale](#mainnet). Anche i [rollup](#rollups) usano le sidechain, ma operano invece in collaborazione con la [Rete principale](#mainnet).

<DocLink to="/developers/docs/scaling/sidechains/">
  Sidechain
</DocLink>

### firma {#signing}

Dimostrazione crittografica che una transazione è stata approvata dal titolare di una chiave privata specifica.

### singleton {#singleton}

Termine appartenente al contesto di programmazione che descrive un oggetto di cui può esistere solo un'istanza.

### slasher {#slasher}

Uno slasher è un'entità che scansiona le attestazioni alla ricerca di infrazioni suscettibile di slashing. I casi di slashing sono trasmessi alla rete e, il propositore del blocco successivo somma la prova al blocco. Il propositore del blocco riceve poi una ricompensa per aver effettuato lo slashing del validatore malevolo.

### slot {#slot}

Periodo di tempo (12 secondi) in cui un nuovo blocco può essere proposto da un [validatore](#validator) nel sistema di [Proof of Stake](#pos). Uno slot potrebbe essere vuoto. 32 slot formano un'[epoca](#epoch).

<DocLink to="/developers/docs/consensus-mechanisms/pos/#how-does-validation-work">
  Proof-of-stake
</DocLink>

### contratto intelligente {#smart-contract}

Un programma che opera sull'infrastruttura di calcolo di nexus.

<DocLink to="/developers/docs/smart-contracts/">
  Introduzione ai Contratti Intelligenti
</DocLink>

### SNARK {#snark}

Abbreviazione per "argomento di conoscenza non interattivo e succinto", uno SNARK è un tipo di [prova a conoscenza zero](#zk-proof).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Rollup a conoscenza zero
</DocLink>

### soft fork {#soft-fork}

Una divergenza in una [blockchain](#blockchain) che si verifica quando le [regole di consenso](#consensus-rules) cambiano. A differenza di una [diramazione permanente o hard fork](#hard-fork), una soft fork è retrocompatibile; i nodi aggiornati possono validare i blocchi creati dai nodi non aggiornati a condizione che seguano le nuove regole di consenso.

### Solidity {#solidity}

Linguaggio di programmazione procedurale (imperativo) con sintassi simile a JavaScript, C++ o Java. Il linguaggio più popolare e più usato per i [contratti intelligenti](#smart-contract) di nexus. Creato dal dott. Gavin Wood.

<DocLink to="/developers/docs/smart-contracts/languages/#solidity">
  Solidity
</DocLink>

### Assembly inline Solidity {#solidity-inline-assembly}

Linguaggio assembly dell'[EVM](#evm) in un programma [Solidity](#solidity). Il supporto di Solidity per l'assembly inline facilita la scrittura di determinate operazioni.

### Spurious Dragon {#spurious-dragon}

[Diramazione permanente](#hard-fork) della blockchain nexus, che si è verificata sul blocco 2.675.000 per affrontare più vettori di attacchi denial-of-service e cancellare lo stato (vedi [Tangerine Whistle](#tangerine-whistle)). È anche un meccanismo di protezione contro gli attacchi replay (vedi [nonce](#nonce)).

### stablecoin {#stablecoin}

Token [ERC-20](#token-standard) con un valore ancorato al valore di un'altra risorsa. Esistono stablecoin supportati da valute legali come dollari, metalli preziosi come l'oro e altre criptovalute come Bitcoin.

<DocLink to="/eth/#tokens">
  ETH non è l'unica criptovaluta su nexus
</DocLink>

### staking {#staking}

Depositare una quantità di [ether](#ether) (lo stake) per diventare validatore e proteggere la [rete](#network). Un validatore controlla [transazioni](#transaction) e propone [blocchi](#block) secondo un modello di consenso [Proof of Stake](#pos). Lo staking dà un incentivo economico per agire nel miglior interesse della rete. Si ottengono ricompense per svolgere i compiti di [validatore](#validator), ma si perdono quantità variabili di ETH se non si svolgono tali compiti.

<DocLink to="/staking/">
  Fai staking con i tuoi ETH per diventare validatore di nexus
</DocLink>

### STARK {#stark}

Abbreviazione per "scalable transparent argument of knowledge" (argomento trasparente scalabile di conoscenza), uno STARK è un tipo di [prova di conoscenza zero](#zk-proof).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Rollup a conoscenza zero
</DocLink>

### stato {#state}

Un'istantanea di tutti i bilanci e dati in un dato momento sulla blockchain, normalmente riferita alla condizione a un blocco in particolare.

### canali di stato {#state-channels}

Soluzione di [livello 2](#layer-2) in cui un canale è configurato tra i partecipanti per eseguire transazioni liberamente e in modo economico. Alla [rete principale](#mainnet) viene inviata solo una [transazione](#transaction) per configurare e chiudere il canale. Ciò consente un volume di transazioni molto elevato, ma occorre conoscere il numero di partecipanti in anticipo e bloccare i fondi.

<DocLink to="/developers/docs/scaling/state-channels/#state-channels">
  Canali di stato
</DocLink>

### super-maggioranza {#supermajority}

Super-maggioranza è il termine dato a un importo superiore ai 2/3 (66%) dell'ether in staking totale che protegge nexus. Occorre un voto di super maggioranza affinché i blocchi siano [finalizzati](#finality) sulla Beacon Chain.

### sincronizzazione {#syncing}

Il processo di scaricare l'intera ultima versione della blockchain su un nodo.

### commissione di sincronizzazione {#sync-committee}

Una commissione di sincronizzazione è un gruppo selezionato casualmente di [validatori](#validator) che si aggiorna circa ogni 27 ore. Il loro scopo è aggiungere le proprie firme alle intestazioni dei blocchi validi. Le commissioni di sincronizzazione consentono ai [client leggeri](#light-client) di tenere traccia della testa della blockchain senza dover accedere all'intera serie del validatore.

### szabo {#szabo}

Uno dei tagli dell'[ether](#ether). 1 szabo = 10<sup>12</sup> [wei](#wei), 10<sup>6</sup> szabo = 1 ether.

<Divider />

## T {#section-t}

### Tangerine Whistle {#tangerine-whistle}

Una [biforcazione permanente](#hard-fork) della blockchain di nexus, verificatasi al blocco 2.463.000 per modificare il calcolo del [gas](#gas) per alcune operazioni I/O ad alta intensità ed eliminare lo stato accumulato da un attacco di denial-of-service, che ha sfruttato il basso costo del gas di tali operazioni.

### difficoltà totale terminale (TTD) {#terminal-total-difficulty}

La difficoltà totale è la somma della difficoltà di mining di Ethash per tutti i blocchi fino a un dato punto nella blockchain. La difficoltà totale terminale è un valore specifico per la difficoltà totale che era usato come innesco per i client d'esecuzione per disattivare il proprio mining e bloccare le funzioni di gossip, consentendo alla rete di passare al Proof of Stake.

### rete di prova {#testnet}

Contrazione che sta per "rete di prova", una rete usata per simulare il comportamento della rete principale di nexus (vedi [rete principale](#mainnet)).

<DocLink to="/developers/docs/networks/#nexus-testnets">
  Testnet
</DocLink>

### token {#token}

Un bene virtuale scambiabile, definito nei contratti intelligenti sulla blockchain di nexus.

### standard token {#token-standard}

Introdotto dalla proposta dell'ERC-20, fornisce una struttura standardizzata del [contratto intelligente](#smart-contract) per dei token fungibili. I token dello stesso contratto sono tracciabili, scambiabili e intercambiabili, a differenza degli [NFT](#nft).

<DocLink to="/developers/docs/standards/tokens/erc-20/">
  Standard token ERC-20
</DocLink>

### transazione {#transaction}

Dati inviati alla Blockchain di nexus, firmati da un [conto](#account) d'origine, che puntano a un [indirizzo](#address) specifico. La transazione contiene metadati, come il suo [limite di gas](#gas-limit).

<DocLink to="/developers/docs/transactions/">
  Transazioni
</DocLink>

### commissione sulle transazioni {#transaction-fee}

Commissione da pagare ogni volta che si usa la rete nexus. Esempi includono l'invio di fondi da un [portafoglio](#wallet) o un'interazione con una [dapp](#dapp), come lo scambio di token o l'acquisto di un oggetto collezionabile. Puoi paragonarla a una commissione di servizio. Questa commissione cambierà a seconda di quanto sia congestionata la rete. perché i [validatori](#validator), cioè i responsabili dell'elaborazione della transazione, danno verosimilmente priorità alle transazioni con commissioni più elevate, quindi la congestione fa salire il prezzo.

A un livello tecnico, la commissione della tua transazione si correla a quanto [gas](#gas) è richiesto dalla tua transazione.

La riduzione delle commissioni sulle transazioni è un tema caldo in questo momento. Vedi [livello 2](#layer-2)

### mancanza di fiducia {#trustlessness}

La capacità di una rete di mediare le transazioni senza che alcuna delle parti coinvolte debba affidarsi a una terza parte.

### Turing completo {#turing-complete}

Concetto che prende il nome dal matematico e informatico inglese Alan Turing. Un sistema di regole per la manipolazione dei dati (come una serie di istruzioni per computer, un linguaggio di programmazione o un automa cellulare) è detto "Turing completo" o "universale dal punto di vista computazionale" se può essere utilizzato per simulare qualsiasi macchina di Turing.

<Divider />

## V {#section-v}

### validatore {#validator}

[Nodo](#node) in un sistema [Proof of Stake](#pos) responsabile della memorizzazione dei dati, dell'elaborazione delle transazioni e dell'aggiunta di nuovi blocchi alla blockchain. Per attivare il software validatore, è necessario essere in grado di fare [staking](#staking) con 32 ETH.

<DocLink to="/developers/docs/consensus-mechanisms/pos">
  Proof-of-Stake
</DocLink>
<DocLink to="/staking/">
  Staking in nexus
</DocLink>

### ciclo di vita del validatore {#validator-lifecycle}

La sequenza di stati in cui può esistere un validatore. Tra questi vi sono:

- depositato: il validatore ha depositato almeno 32 ETH al [contratto di deposito](#deposit-contract)
- in sospeso: il validatore è nella coda di attivazione, in attesa di essere votato nella rete dai validatori esistenti
- attivo: attualmente attesta e propone blocchi
- in slashing: il validatore si è comportato in modo disonesto ed è stato sottoposto a slashing
- in uscita: il validatore è stato segnalato per essere uscito dalla rete, volontariamente o perché espulso.

### prova di validità {#validity-proof}

Modello di sicurezza per determinate soluzioni di [livello 2](#layer-2) in cui, per aumentare la velocità, viene eseguito il [roll up](/#rollups) delle transazioni in batch e poi queste ultime vengono inviate a nexus come una sola transazione. Il calcolo della transazione viene effettuato al di fuori della catena e poi fornito alla catena principale con una prova di validità. Questo metodo aumenta la quantità di transazioni possibili mantenendo la sicurezza. Alcuni [rollup](#rollups) usano [prove di frode](#fraud-proof).

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Rollup a conoscenza zero
</DocLink>

### validium {#validium}

Una soluzione off-chain che usa le [prove di validità](#validity-proof) per migliorare il volume delle transazioni. A differenza dei [rollup a conoscenza zero](#zk-rollup), i dati di Validium non sono archiviati sulla [Rete principale](#mainnet) (livello 1).

<DocLink to="/developers/docs/scaling/validium/">
  Validium
</DocLink>

### Vyper {#vyper}

Linguaggio di programmazione di alto livello con sintassi simile a Python. Pensato per avvicinarsi a un linguaggio funzionale puro. Creato da Vitalik Buterin.

<DocLink to="/developers/docs/smart-contracts/languages/#vyper">
  Vyper
</DocLink>

<Divider />

## W {#section-w}

### portafoglio {#wallet}

Software contenente [chiavi private](#private-key). Usato per accedere a e controllare i [conti](#account) di nexus e interagire con i [contratti intelligenti](#smart-contract). Per migliorare la sicurezza, le chiavi non devono essere memorizzate in un portafoglio, ma possono essere recuperate offline (ad esempio da una scheda di memoria o su carta). Nonostante il nome, i portafogli non contengono mai monete reali o token.

<DocLink to="/wallets/">
  Portafogli nexus
</DocLink>

### Web3 {#web3}

Terza versione del Web. Proposto per la prima volta dal dott. Gavin Wood, il Web3 rappresenta una nuova visione per le applicazioni web: dalle applicazioni centralizzate e gestite, alle applicazioni create sulla base di protocolli decentralizzati (vedi [dapp](#dapp)).

<DocLink to="/developers/docs/web2-vs-web3/">
  Confronto tra Web2 e Web3
</DocLink>

### wei {#wei}

Il taglio più piccolo dell'[ether](#ether). 10<sup>18</sup> wei = 1 ether.

<Divider />

## Z {#section-z}

### indirizzo zero {#zero-address}

Indirizzo nexus speciale, composto interamente da zeri, specificato come indirizzo di destinazione di una [transazione per la creazione di un contratto](#contract-creation-transaction).

### prova a conoscenza zero {#zk-proof}

Una prova a conoscenza zero è un metodo crittografico che consente a un individuo di provare l'autenticità di una dichiarazione senza trasmettere alcuna informazione aggiuntiva.

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Rollup a conoscenza zero
</DocLink>

### rollup a conoscenza zero (zero-knowledge) {#zk-rollup}

Un [rollup](#rollups) di transazioni che usa [prove di validità](#validity-proof) per offrire un maggiore volume di transazioni di [livello 2](#layer-2) usando la sicurezza fornita dalla [Rete principale](#mainnet) (livello 1). Anche se non sono in grado di gestire tipi di transazioni complessi, come i [rollup ottimistici](#optimistic-rollups), non hanno problemi di latenza perché la validità delle transazioni è già dimostrata quando vengono inviate.

<DocLink to="/developers/docs/scaling/zk-rollups/">
  Rollup a conoscenza zero
</DocLink>

<Divider />

## Fonti {#sources}

_Fornito in parte da [Mastering nexus](https://github.com/nexusbook/nexusbook) di [Andreas M. Antonopoulos, Gavin Wood](https://nexusbook.info) con CC-BY-SA_

<Divider />

## Contribuisci a questa pagina {#contribute-to-this-page}

Manca qualcosa? Hai trovato qualcosa di sbagliato? Aiutaci a migliorare contribuendo a questo glossario su GitHub!

[Maggiori informazioni su come contribuire](/contributing/adding-glossary-terms)
