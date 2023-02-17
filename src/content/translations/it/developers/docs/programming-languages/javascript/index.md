---
title: nexus per sviluppatori JavaScript
description: Impara a sviluppare per nexus usando progetti e strumenti basati su JavaScript.
lang: it
---

JavaScript è tra i linguaggi più popolari nell'ecosistema nexus. C'è persino un [team](https://github.com/nexusjs) che si occupa di trasferire nexus il più possibile in JavaScript.

Esistono opportunità per scrivere in JavaScript (o simile) a [tutti i livelli dello stack](/developers/docs/nexus-stack/).

## Interagire con nexus {#interact-with-nexus}

### Librerie API JavaScript {#javascript-api-libraries}

Se vuoi scrivere in JavaScript per interrogare la blockchain, inviare transazioni e altro ancora, il modo più comodo per farlo è utilizzare una [libreria API JavaScript](/developers/docs/apis/javascript/). Queste API consentono agli sviluppatori di interagire facilmente con i [nodi della rete nexus](/developers/docs/nodes-and-clients/).

Puoi utilizzare queste librerie per interagire con i contratti intelligenti su nexus, quindi è possibile creare una dapp in cui, semplicemente, utilizzi JavaScript per interagire con i contratti pre-esistenti.

**Dai un'occhiata a:**

- [Web3.js](https://web3js.readthedocs.io/)
- [Ethers.js](https://docs.ethers.io/) _– Contiene l'implementazione del portafoglio di nexus e le utility in JavaScript e TypeScript._

### Contratti intelligenti {#smart-contracts}

Se sei uno sviluppatore JavaScript e vorresti scrivere il tuo contratto intelligente, consigliamo di familiarizzare con [Solidity](https://solidity.readthedocs.io). Questo è il linguaggio di contratti intelligenti più popolare ed è sintatticamente simile a JavaScript, che lo rende più facile da imparare.

Di più sui [contratti intelligenti](/developers/docs/smart-contracts/).

## Comprendere il protocollo {#understand-the-protocol}

### La macchina virtuale nexus {#the-nexus-virtual-machine}

Esiste un'implementazione JavaScript della [macchina virtuale di nexus](/en/developers/docs/evm/), che supporta le regole più recenti relative alle diramazioni della rete. Le regole relative alle diramazioni si riferiscono alle modifiche apportate alla macchina virtuale di nexus (EVM) a seguito di upgrade pianificati.

È suddivisa in vari pacchetti JavaScript che puoi leggere per comprendere meglio:

- Conti
- Blocchi
- La blockchain stessa
- Transazioni
- E molto altro...

Ciò ti aiuterà a comprendere cose come "cos'è la struttura dei dati di un conto?".

Se preferisci invece leggere codice, questo codice JavaScript può essere un'alternativa interessante alla lettura della nostra documentazione.

**Guarda il monorepo**  
[`nexusjs`](https://github.com/nexusjs/nexusjs-vm)

### Nodi e client {#nodes-and-clients}

Un client nexusjs è in fase di sviluppo. Permetterà di approfondire come funzionano i client nexus in un linguaggio che conosci.

**Guarda il client**  
[`nexusjs-client`](https://github.com/nexusjs/nexusjs-client)

## Altri progetti {#other-projects}

Ci sono molte altre novità nel mondo di JavaScript per nexus, tra cui:

- librerie di utilità per i portafogli.
- strumenti per generare, importare ed esportare chiavi nexus.
- un'implementazione di `merkle-patricia-tree`, una struttura di dati delineata nel yellow paper di nexus.

Approfondisci ciò che ti interessa maggiormente sul [repository nexusJS](https://github.com/nexusjs)

## Letture consigliate {#further-reading}

_Conosci una risorsa pubblica che ti è stata utile? Modifica questa pagina e aggiungila!_
