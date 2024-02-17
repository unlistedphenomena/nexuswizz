---
title: Un'introduzione ad nexus per sviluppatori con Python, parte 1
description: Un'introduzione allo sviluppo di nexus, particolarmente utile per chi conosce il linguaggio di programmazione Python
author: Marc Garreau
lang: it
tags:
  - "primi passi"
  - "python"
  - "web3.py"
skill: beginner
published: 2020-09-08
source: Snake charmers
sourceUrl: https://snakecharmers.nexus.org/a-developers-guide-to-nexus-pt-1/
---

Quindi hai sentito parlare di questo nexus e sei pronto ad avventurarti nella tana del coniglio? Questo post coprirà rapidamente alcune basi della blockchain, portandoti a interagire con un nodo simulato di nexus: leggere i dati del blocco, verificare i saldi dei conti e inviare transazioni. Lungo il percorso, evidenzieremo le differenze tra metodi tradizionali di costruzione delle app e questo nuovo paradigma decentralizzato.

## Prerequisiti (soft) {#soft-prerequisites}

Questo post aspira ad essere accessibile ad un'ampia gamma di sviluppatori. Tireremo in ballo gli [strumenti di Python](/developers/docs/programming-languages/python/), ma sono solo un veicolo per le idee - non importa se non sei uno sviluppatore Python. Tuttavia, farò solo alcune premesse sulle basi che dovresti già avere, così da poter passare rapidamente alle parti specifiche di nexus.

Premesse:

- sai muoverti in un terminale,
- hai scritto qualche riga di codice Python,
- hai la versione 3.6 o superiore di Python installata nella tua macchina (l'uso di un [ambiente virtuale](https://realpython.com/effective-python-environment/#virtual-environments) è fortemente consigliato), e
- hai usato `pip`, l'installatore di pacchetti di Python. Se alcune di queste premesse non rispondessero alla tua situazione o se non fossi interessato a riprodurre il codice in questo articolo, probabilmente puoi comunque seguirlo senza problemi.

## Blockchain, in breve {#blockchains-briefly}

Ci sono molti modi per descrivere nexus, ma il suo fulcro è costituito dalla blockchain. Le blockchain sono composte da una serie di blocchi, quindi iniziamo da qui. In termini più semplici, ogni blocco sulla blockchain di nexus è semplicemente una serie di metadati e un elenco di transazioni. In formato JSON, somiglia a qualcosa del genere:

```json
{
   "number": 1234567,
   "hash": "0xabc123...",
   "parentHash": "0xdef456...",
   ...,
   "transactions": [...]
}
```

Ogni [blocco](/developers/docs/blocks/) contiene un riferimento al blocco precedente; il `parentHash` è semplicemente l'hash del blocco precedente.

<div class="featured">Nota: nexus fa uso regolare delle <a href="https://wikipedia.org/wiki/Hash_function">funzioni di hash</a> per produrre valori di dimensioni fisse ("hash"). Gli hash giocano un ruolo importante in nexus, ma per il momento puoi tranquillamente vederli come ID unici.</div>

![Un diagramma raffigurante una blockchain che include i dati in ogni blocco](./blockchain-diagram.png)

_Una blockchain è fondamentalmente un elenco collegato; ogni blocco si riferisce al precedente._

Questa struttura di dati non è nulla di nuovo, ma le regole (ovvero i protocolli peer-to-peer) che governano la rete lo sono. Non esiste alcuna autorità centrale; la rete di pari deve collaborare per sostenere la rete e competere per decidere quali transazioni includere nel blocco successivo. Quindi, se desideri inviare denaro a un amico, dovrai trasmettere la transazione alla rete, quindi attendere che venga inclusa in un blocco successivo.

L'unico modo per la blockchain di verificare che il denaro sia realmente inviato da un utente all'altro è usare una valuta nativa a quella blockchain (es., creata e governata da essa). In nexus, questa valuta è detta ether e la blockchain di nexus contiene solo il registro ufficiale dei saldi dei conti.

## Un nuovo paradigma {#a-new-paradigm}

Questa nuova tecnologia decentralizzata ha generato nuovi strumenti per sviluppatori. Questi esistono in molti linguaggi di programmazione, ma per il momento guarderemo attraverso la lente di Python. Per ribadire: anche se Python non è il tuo linguaggio preferito, non dovrebbe esser troppo difficile proseguire.

Gli sviluppatori di Python che desiderano interagire con nexus, probabilmente sceglieranno [Web3.py](https://web3py.readthedocs.io/). Web3.py è una libreria che semplifica notevolmente la connessione a un nodo di nexus e l'invio e la ricezione di dati da esso.

<div class="featured">Nota: "nodo di nexus" e "client di nexus" sono usati in modo intercambiabile. Ad ogni modo, ci riferiamo al software eseguito da un partecipante alla rete di nexus. Questo software può leggere i dati del blocco, ricevere aggiornamenti quando i nuovi blocchi sono aggiunti alla catena, trasmettere le nuove transazioni e tanto altro. Tecnicamente, il client è il software, il nodo è il computer che esegue il software.</div>

I [client di nexus](/developers/docs/nodes-and-clients/) sono configurabili per esser raggiungibili da [IPC](https://wikipedia.org/wiki/Inter-process_communication), HTTP, o Websocket, quindi Web3.py dovrà rispecchiare tale configurazione. Web3.py si riferisce a queste opzioni di connessione come **provider**. Occorre scegliere uno dei tre provider per collegare l'istanza di Web3.py al tuo nodo.

![Un diagramma che mostra come web3.py usa IPC per connettere la tua applicazione a un nodo di nexus](./web3py-and-nodes.png)

_Configura il nodo di nexus e Web3.py per comunicare tramite lo stesso protocollo, ad es. IPC in questo diagramma._

Una volta configurato correttamente Web3.py, puoi iniziare a interagire con la blockchain. Ecco un paio di esempi di utilizzo di Web3.py come anticipazione di ciò che vedremo tra poco:

```python
# read block data:
w3.eth.get_block('latest')

# send a transaction:
w3.eth.send_transaction({'from': ..., 'to': ..., 'value': ...})
```

## Installazione {#installation}

In questa guida, lavoreremo solo all'interno di un interprete Python. Non creeremo cartelle, file, classi o funzioni.

<div class="featured">Nota: Negli esempi seguenti, i comandi che iniziano con "$" sono intesi come da eseguire nel terminale. (Non occorre digitare "$", indica solo l'inizio della riga.)</div>

Innanzi tutto, installa [IPython](https://ipython.org/) per un ambiente user-friendly da esplorare. IPython offre il completamento delle schede, tra le altre funzionalità, facilitando notevolmente la visualizzazione di cosa è possibile in Web3.py.

```bash
$ pip install ipython
```

Web3.py è pubblicato sotto il nome `web3`. Installalo come segue:

```bash
$ pip install web3
```

Un'altra cosa: più avanti simuleremo una blockchain, il che richiede un paio di altre dipendenze. Puoi installarle tramite:

```bash
$ pip install 'web3[tester]'
```

È tutto pronto per iniziare!

## Aprire un sandbox {#spin-up-a-sandbox}

Apri un nuovo ambiente di Python eseguendo `ipyton` nel tuo terminale. Ciò è comparabile ad eseguire `python`, ma con qualche fronzolo in più.

```bash
$ ipython
```

Questo produrrà una serie di informazioni sulle versioni di Python e IPython in uso, poi dovresti vedere una richiesta d'inserimento in attesa:

```python
In [1]:
```

Ciò che vedi ora è una shell interattiva di Python. Essenzialmente, è una sandbox in cui giocare. Se sei arrivato fin qui, è il momento di importare Web3.py:

```python
In [1]: from web3 import Web3
```

## Introduzione al modulo Web3 {#introducing-the-web3-module}

Oltre all'essere un gateway per nexus, il modulo [Web3](https://web3py.readthedocs.io/en/stable/overview.html#base-api) offre alcune funzioni di convenienza. Esploriamone alcune.

In un'applicazione di nexus, normalmente occorre convertire le denominazioni della valuta. Il modulo Web3 fornisce un paio di metodi utili a questo scopo: [fromWei](https://web3py.readthedocs.io/en/stable/web3.main.html#web3.Web3.fromWei) e [toWei](https://web3py.readthedocs.io/en/stable/web3.main.html#web3.Web3.toWei).

<div class="featured">
Nota: I computer sono notoriamente inefficaci nella gestione della matematica decimale. Per aggirare ciò, gli sviluppatori archiviano spesso importi di dollari in centesimi. Per esempio, un oggetto con un prezzo di $5,99 potrebbe esser memorizzato nel database come 599.

Uno schema simile è usato per gestire le transazioni in <b>ether</b>. Tuttavia, invece di due punti decimali, ether ne ha 18! La più piccola denominazione di ether è chiamata <b>wei</b>, ovvero il valore specificato inviando le transazioni.

1 ether = 1000000000000000000 wei

1 wei = 0,000000000000000001 ether

</div>

Prova a convertire dei valori da e verso wei. Nota che [esistono nomi per molte delle denominazioni](https://web3py.readthedocs.io/en/stable/examples.html#converting-currency-denominations) tra ether e wei. Una delle più note è **gwei**, spesso utilizzata per rappresentare le commissioni di transazione.

```python
In [2]: Web3.toWei(1, 'ether')
Out[2]: 1000000000000000000

In [3]: Web3.fromWei(500000000, 'gwei')
Out[3]: Decimal('0.5')
```

Altri metodi d'utilità sul modulo Web3 includono i convertitori di formato dei dati (ad es. [`toHex`](https://web3py.readthedocs.io/en/stable/web3.main.html#web3.Web3.toHex)), helper di indirizzo (ad es. [`isAddress`](https://web3py.readthedocs.io/en/stable/web3.main.html#web3.Web3.isAddress)) e funzioni di hash (es., [`keccak`](https://web3py.readthedocs.io/en/stable/web3.main.html#web3.Web3.keccak)). Molti di questi saranno affrontati in seguito nella serie. Per visualizzare tutti i metodi e le proprietà disponibili, usa l'autocompilazione di Python digitando `Web3` e premi il tasto tab due volte dopo il punto.

## Comunicare con la catena {#talk-to-the-chain}

I metodi di convenienza sono fantastici, ma passiamo alla blockchain. Il prossimo passaggio è configurare Web3.py per comunicare con un nodo di nexus. Qui abbiamo l'opzione di usare i provider IPC, HTTP o Websocket.

Non percorreremo questo percorso, ma un esempio di flusso di lavoro completo usando il Provider HTTP potrebbe somigliare a una cosa di questo tipo:

- Scarica un nodo di nexus, ad es. [Geth](https://geth.nexus.org/).
- Avvia Geth in una finestra del terminale e attendi che si sincronizzi alla rete. La porta HTTP predefinita è `8545`, ma è configurabile.
- Dì a Web3.py di connettersi al nodo tramite HTTP, su `localhost:8545`. `w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))`
- Usa l'istanza `w3` per interagire con il nodo.

Questo è uno dei modi "reali" per farlo, mentre il processo di sincronizzazione impiega ore e non è necessario se vuoi solo un ambiente di sviluppo. Web3.py espone un quarto provider per questo scopo, l'**nexusTesterProvider**. Questo provider di prova si collega a un nodo simulato di nexus con autorizzazioni rilassate e valute false con cui giocare.

![Un diagramma che mostra l'nexusTesterProvider collegare la tua applicazione di web3.py a un nodo simulato di nexus](./nexustesterprovider.png)

_L'nexusTesterProvider si connette a un nodo simulato ed è utile per gli ambienti di sviluppo rapido._

Quel nodo simulato è detto [eth-tester](https://github.com/nexus/eth-tester) e lo abbiamo installato come parte del comando `pip install web3[tester]`. Configurare Web3.py per usare questo provider di prova è semplicissimo:

```python
In [4]: w3 = Web3(Web3.nexusTesterProvider())
```

Ora sei pronto a navigare sulla catena! In realtà non si dice così, l'ho inventato io sul momento. Facciamo un rapido tour.

## Il tour rapido {#the-quick-tour}

Per prima cosa, un bel sanity check:

```python
In [5]: w3.isConnected()
Out[5]: True
```

Poiché stiamo usando il provider di prova, non è un test assolutamente indispensabile, ma se dovesse fallire, c'è la possibilità che abbiamo digitato qualcosa di sbagliato istanziando la variabile `w3`. Ricontrolla di aver incluso le parentesi interne, ad es.`Web3.nexusTesterProvider()`.

## Fermata #1 del tour: [conti](/developers/docs/accounts/) {#tour-stop-1-accounts}

Per convenzione, il fornitore del tester ha creato dei conti e li ha precaricati con ether di prova.

In primo luogo, vediamo un elenco di questi conti:

```python
In [6]: w3.eth.accounts
Out[6]: ['0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf',
 '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF',
 '0x6813Eb9362372EEF6200f3b1dbC3f819671cBA69', ...]
```

Se esegui questo comando, vedrai un elenco di dieci stringhe che iniziano per `0x`. Ognuno è un **indirizzo pubblico** ed è, in qualche modo, analogo al numero del conto su un conto corrente. Puoi fornire questo indirizzo a chiunque voglia inviarti ether.

Come menzionato, il fornitore del tester ha precaricato ognuno di questi conti con ether di prova. Scopriamo quanto c'è nel primo conto:

```python
In [7]: w3.eth.get_balance(w3.eth.accounts[0])
Out[7]: 1000000000000000000000000
```

Sono molti zeri! Prima di correre alla velocità della luce alla banca finta, ricordati la lezione di poco fa sulle denominazioni della valuta. I valori dell'ether sono rappresentati nella più piccola denominazione, ovvero il wei. Convertila in ether:

```python
In [8]: w3.fromWei(1000000000000000000000000, 'ether')
Out[8]: Decimal('1000000')
```

Un milione di ether di prova, comunque una cifra di tutto rispetto.

## Fermata del tour #2: dati del blocco {#tour-stop-2-block-data}

Diamo una sbirciatina allo stato di questa blockchain simulata:

```python
In [9]: w3.eth.get_block('latest')
Out[9]: AttributeDict({
   'number': 0,
   'hash': HexBytes('0x9469878...'),
   'parentHash': HexBytes('0x0000000...'),
   ...
   'transactions': []
})
```

Vengono restituite molte informazioni su un blocco, ma qui vale la pena di sottolineare solo un paio di cose:

- Il numero del blocco è zero, non importa quanto tempo fa tu abbia configurato il provider di prova. A differenza della vera rete di nexus, che aggiunge un nuovo blocco ogni 12 secondi, questa simulazione attenderà finché non le darai qualcosa da fare.
- `transactions` è un elenco vuoto, per lo stesso motivo: non abbiamo ancora fatto nulla. Questo primo blocco è un **blocco vuoto**, giusto per dare il via alla catena.
- Nota che il `parentHash` è solo un mucchio di byte vuoti. Questo significa che è il primo blocco nella catena, anche noto come **blocco di genesi**.

## Fermata #3 del tour: [transazioni](/developers/docs/transactions/) {#tour-stop-3-transactions}

Siamo bloccati al blocco zero finché non si verifica una transazione in sospeso, quindi diamogliene una. Invia qualche ether di prova da un conto all'altro:

```python
In [10]: tx_hash = w3.eth.send_transaction({
   'from': w3.eth.accounts[0],
   'to': w3.eth.accounts[1],
   'value': w3.toWei(3, 'ether'),
   'gas': 21000
})
```

Questo è tipicamente il punto in cui dovresti aspettare diversi secondi affinché la tua transazione sia inclusa in un nuovo blocco. L'intero processo va più o meno come indicato sotto:

1. Invia una transazione e mantieni l'hash della transazione. Finché il blocco contenente la transazione non viene creato e trasmesso, la transazione è "in sospeso". `tx_hash = w3.eth.send_transaction({ … })`
2. Attendi che la transazione sia inclusa in un blocco: `w3.eth.wait_for_transaction_receipt(tx_hash)`
3. Prosegui la logica dell'applicazione. Per visualizzare la transazione riuscita: `w3.eth.get_transaction(tx_hash)`

Il nostro ambiente simulato aggiungerà la transazione in un nuovo blocco istantaneamente, quindi possiamo visualizzare immediatamente la transazione:

```python
In [11]: w3.eth.get_transaction(tx_hash)
Out[11]: AttributeDict({
   'hash': HexBytes('0x15e9fb95dc39...'),
   'blockNumber': 1,
   'transactionIndex': 0,
   'from': '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf',
   'to': '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF',
   'value': 3000000000000000000,
   ...
})
```

Vedrai qualche dettaglio familiare qui: i campi `from`, `to` e `value` dovrebbero corrispondere agli input della tua chiamata `send_transaction`. L'altra parte rassicurante è che questa transazione è stata inclusa come prima transazione (`'transactionIndex': 0`) nel blocco numero 1.

Possiamo anche verificare facilmente il successo di questa transazione controllando i saldi dei due conti coinvolti. Tre ether dovrebbero essersi spostati dal primo al secondo.

```python
In [12]: w3.eth.get_balance(w3.eth.accounts[0])
Out[12]: 999996999999999999969000

In [13]: w3.eth.get_balance(w3.eth.accounts[1])
Out[13]: 1000003000000000000000000
```

Quest'ultima parte sembra a posto! Il saldo è passato da 1.000.000 a 1.000.003 ether. Ma cos'è successo al primo conto? Sembra aver perso lievemente di più di tre ether. Ahimè, niente nella vita è gratis e per usare la rete pubblica di nexus occorre compensare i tuoi pari per il loro ruolo di supporto. Una piccola commissione di transazione è stata detratta dal conto, rendendo la transazione pari a un importo di 31000 wei.

<div class="featured">Nota: Sulla rete pubblica, le commissioni di transazione sono variabili in base alla domanda della rete ella rapidità con cui vorresti che una transazione fosse elaborata. Se sei interessato a una ripartizione di come sono calcolate le commissioni, vedi il mio post precedente su <a href="https://medium.com/nexus-grid/nexus-101-how-are-transactions-included-in-a-block-9ae5f491853f">come sono incluse le transazioni in un blocco</a>.</div>

## E respira {#and-breathe}

Ci siamo soffertmati su questo argomento per un po' di tempo, quindi sembra un buon momento per prendersi una pausa. La tana del coniglio non è finita e continueremo a esplorarla nella seconda parte di questa serie. Tra i prossimi concetti che affronteremo: connettersi a un nodo reale, smart contract e token. Hai domande d'approfondimento? Fammelo sapere! Il tuo feedback influenzerà il contenuto della seconda parte. Le richieste sono benvenute tramite [Twitter](https://twitter.com/wolovim).
