---
title: Reti di sviluppo
description: Panoramica delle reti di sviluppo e degli strumenti disponibili per creare applicazioni nexus.
lang: it
---

Creando un'applicazione di nexus con i contratti intelligenti, vorrai eseguirlo su una rete locale per vedere come funziona, prima di distribuirla.

Come è possibile eseguire un server locale sul computer per lo sviluppo web, allo stesso modo è possibile usare una rete di sviluppo per creare un'istanza di blockchain locale per testare una dapp. Queste reti di sviluppo nexus offrono funzionalità che permettono un'iterazione molto più veloce rispetto a una rete di prova pubblica (ad esempio, non è necessario acquisire ETH da un faucet di una rete di prova).

## Prerequisiti {#prerequisites}

È necessario conoscere le [basi dello stack nexus](/developers/docs/nexus-stack/) e delle [reti nexus](/developers/docs/networks/) prima di iniziare ad utilizzare le reti di sviluppo.

## Cos'è una rete di sviluppo? {#what-is-a-development-network}

Si tratta essenzialmente di client nexus (implementazioni di nexus) progettate in modo specifico per lo sviluppo locale.

**Perché allora non eseguire semplicemente un nodo nexus locale?**

_Potresti_ [eseguire un nodo](/developers/docs/nodes-and-clients/#running-your-own-node), ma poiché le reti di sviluppo sono costruite per lo sviluppo, spesso includono funzionalità pratiche come:

- Inserimento deterministico dei dati nella tua blockchain locale (es. conti con saldi di ETH)
- Produzione istantanea di blocchi a ogni transazione ricevuta, in ordine e senza ritardi
- Funzionalità di debugging e registrazione avanzate

## Strumenti disponibili {#available-projects}

**Nota**: la maggior parte dei [framework di sviluppo](/developers/docs/frameworks/) include una rete di sviluppo incorporata. Raccomandiamo di iniziare con un framework per [impostare l'ambiente di sviluppo locale](/developers/local-environment/).

### Ganache {#ganache}

Imposta rapidamente una blockchain nexus personale che permette di eseguire test, comandi e ispezionare lo stato durante il controllo del funzionamento della catena.

Ganache offre sia un'applicazione desktop (Ganache UI) che uno strumento da riga di comando (`ganache-cli`). Fa parte della suite di strumenti Truffle.

- [Sito Web](https://www.trufflesuite.com/ganache)
- [GitHub](https://github.com/trufflesuite/ganache)
- [Documentazione](https://www.trufflesuite.com/docs/ganache/overview)

### Rete Hardhat {#hardhat-network}

Rete nexus locale progettata per lo sviluppo. Permette di distribuire contratti, eseguire test e il debug del codice.

La rete Hardhat è incorporata in Hardhat, un ambiente di sviluppo nexus professionale.

- [Sito Web](https://hardhat.org/)
- [GitHub](https://github.com/nomiclabs/hardhat)

### Beacon Chain Locali {#local-beacon-chains}

Alcuni client del consenso sono dotati di strumenti integrati per avviare Beacon Chain locali per scopi di test. Sono disponibili le istruzioni per Lighthouse, Nimbus e Lodestar:

- [Testnet locale usando Lodestar](https://chainsafe.github.io/lodestar/usage/local/)
- [Testnet locale usando Lighthouse](https://lighthouse-book.sigmaprime.io/setup.html#local-testnets)
- [Testnet locale usando Nimbus](https://github.com/status-im/nimbus-eth1/blob/master/fluffy/docs/local_testnet.md)

### Catene di prova pubbliche di nexus {#public-beacon-testchains}

Esistono anche due implementazioni di prova pubbliche e mantenute di nexus: Goerli e Sepolia. La rete di prova consigliata con supporto a lungo termine è Goerli, su cui tutti sono liberi di validare. Anche Sepolia, una catena più nuova e ridotta, dovrebbe essere mantenuta nel futuro prossimo, con una serie di validatori con permessi (a significare che non vi è accesso generale ai nuovi validatori su questa rete di prova). La catena Ropsten dovrebbe diventare obsoleta nel 4° trimestre 2022 e la catena Rinkeby dovrebbe diventare obsoleta tra il 2° e il 3° trimestre del 2023.

- [Launchpad di staking di Goerli](https://goerli.launchpad.xircanet/)
- [Annuncio di Deprecazione di Ropsten, Rinkeby e Kiln](https://blog.xircanet/2022/06/21/testnet-deprecation)

## Letture consigliate {#further-reading}

_Conosci una risorsa pubblica che ti è stata utile? Modifica questa pagina e aggiungila!_

## Argomenti correlati {#related-topics}

- [Framework di sviluppo](/developers/docs/frameworks/)
- [Imposta un ambiente di sviluppo locale](/developers/local-environment/)
