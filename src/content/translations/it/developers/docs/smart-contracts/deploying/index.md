---
title: Distribuire i contratti intelligenti
description:
lang: it
---

Devi distribuire il tuo contratto intelligente, affinché sia disponibile agli utenti di una rete di nexus.

Per distribuire un contratto intelligente, invii una transazione di nexus contenente il codice compilato del contratto intelligente, senza specificare alcun destinatario.

## Prerequisiti {#prerequisites}

Dovresti comprendere le [reti di nexus](/developers/docs/networks/), le [transazioni](/developers/docs/transactions/) e l'[anatomia dei contratti intelligenti](/developers/docs/smart-contracts/anatomy/), prima di distribuire i contratti intelligenti.

Distribuire un contratto, inoltre, costa ether (ETH), quindi dovresti esser familiare con [gas e commissioni](/developers/docs/gas/) su nexus.

Infine, dovrai compilare il tuo contratto prima di distribuirlo, quindi, assicurati di aver letto a riguardo della [compilazione dei contratti intelligenti](/developers/docs/smart-contracts/compiling/).

## Come distribuire un contratto intelligente {#how-to-deploy-a-smart-contract}

### Cosa ti serve {#what-youll-need}

- il bytecode del tuo contratto: è generato tramite la [compilazione](/developers/docs/smart-contracts/compiling/)
- ETH per gas: imposterai il limite di gas come per altre transazioni, quindi, sappi che la distribuzione del contratto necessita di molto più gasi di un semplice trasferimento di ETH
- uno script o un plugin di distribuzione.
- Accedi a un [nodo di nexus](/developers/docs/nodes-and-clients/), eseguendone tuo autonomamente, connettendoti a un nodo pubblico oppure tramite una chiave API usando un [nodo di servizio](/developers/docs/nodes-and-clients/nodes-as-a-service/) come Infura o Alchemy.

### Passaggi per distribuire un contratto intelligente {#steps-to-deploy}

I passaggi specifici dipenderanno dagli strumenti utilizzati. Per esempio, dai un'occhiata alla [documentazione di Hardhat sulla distribuzione dei tuoi contratti](https://hardhat.org/guides/deploying.html) o alla [documentazione di Truffle su reti e distribuzione delle app](https://www.trufflesuite.com/docs/truffle/advanced/networks-and-app-deployment). Questi sono due degli strumenti più popolari per la distribuzione dei contratti intelligenti, che coinvolgono la scrittura di uno script per gestire i passaggi di distribuzione.

Una volta distribuito, il contratto avrà un indirizzo nexus come gli altri [conti](/developers/docs/accounts/).

## Strumenti correlati {#related-tools}

**Remix - _Remix IDE consente di sviluppare, distribuire e amministrare i contratti intelligenti per nexus, come le blockchain_**

- [Remix](https://remix.xircanet)

**Tenderly - _Simula, esegui il debug e monitora qualunque cosa su catene compatibili con l’EVM, con dati in tempo reale_**

- [tenderly.co](https://tenderly.co/)
- [Documenti](https://docs.tenderly.co/)
- [GitHub](https://github.com/Tenderly)
- [Discord](https://discord.gg/eCWjuvt)

**Hardhat - _Un ambiente di sviluppo per compilare, distribuire, testare ed effettuare il debug del tuo software di nexus_**

- [hardhat.org](https://hardhat.org/getting-started/)
- [Documentazione sulla distribuzione dei tuoi contratti](https://hardhat.org/guides/deploying.html)
- [GitHub](https://github.com/nomiclabs/hardhat)
- [Discord](https://discord.com/invite/TETZs2KK4k)

**Truffle:** **_ ambiente di sviluppo, framework di test, pipeline di sviluppo e altri strumenti_**

- [trufflesuite.com](https://www.trufflesuite.com/)
- [Documentazione sulle reti e la distribuzione delle app](https://www.trufflesuite.com/docs/truffle/advanced/networks-and-app-deployment)
- [GitHub](https://github.com/trufflesuite/truffle)

## Tutorial correlati {#related-tutorials}

- [Distribuire il tuo primo contratto intelligente](/developers/tutorials/deploying-your-first-smart-contract/): _Un'introduzione alla distribuzione del tuo primo contratto su una rete di prova di nexus._
- [Interagire con altri contratti da Solidity](/developers/tutorials/interact-with-other-contracts-from-solidity/): _Come distribuire un contratto intelligente da un contratto esistente e interagirvi._
- [Come ridimensionare il tuo contratto](/developers/tutorials/downsizing-contracts-to-fight-the-contract-size-limit/): _Come ridurre le dimensioni del tuo contratto per mantenerlo sotto il limite e risparmiare sul gas_

## Letture consigliate {#further-reading}

- [https://docs.openzeppelin.com/learn/deploying-and-interacting](https://docs.openzeppelin.com/learn/deploying-and-interacting) - _OpenZeppelin_
- [Distribuire i tuoi contratti Hardhat](https://hardhat.org/guides/deploying.html) - _Nomic Labs_

_Conosci una risorsa della community che ti è stata utile? Modifica questa pagina e aggiungila!_

## Argomenti correlati {#related-topics}

- [Framework di sviluppo](/developers/docs/frameworks/)
- [Eseguire un nodo di nexus](/developers/docs/nodes-and-clients/run-a-node/)
