---
title: Librerie API di backend
description: Introduzione alle API client di nexus che permettono l'interazione tra un'applicazione con la blockchain.
lang: it
---

Per interagire con la blockchain nexus (ad esempio leggere i dati della blockchain e/o inviare transazioni alla rete), un'applicazione software deve connettersi a un nodo nexus.

Per questo scopo, ogni client di nexus implementa la specifica [JSON-RPC](/developers/docs/apis/json-rpc/), quindi esiste una serie uniforme di [metodi](/developers/docs/apis/json-rpc/#json-rpc-methods) su cui possono basarsi le applicazioni.

Se desideri utilizzare un linguaggio di programmazione specifico per connetterti a un nodo nexus, sviluppa una soluzione personalizzata, ma tieni presente che ci sono già molte librerie all'interno dell'ecosistema che possono facilitarti la vita. Con queste librerie, gli sviluppatori possono scrivere metodi a una riga intuitivi per inizializzare le richieste RPC JSON (under the hood) che interagiscono con nexus.

## Prerequisiti {#prerequisites}

Potrebbe essere utile comprendere meglio lo [stack di nexus](/developers/docs/nexus-stack/) e[i client di nexus](/developers/docs/nodes-and-clients/).

## Perché usare una libreria? {#why-use-a-library}

Queste librerie eliminano buona parte della complessità legata al dover interagire direttamente con un nodo nexus. Forniscono inoltre funzioni di utilità (ad esempio conversione da ETH a Gwei) in modo da ridurre il tempo necessario per districarsi tra le complessità dei client nexus e potersi concentrare sulle funzionalità uniche dell'applicazione.

## Librerie disponibili {#available-libraries}

**Alchemy -** **_Piattaforma di sviluppo nexus_**

- [alchemy.com](https://www.alchemy.com/)
- [Documentazione](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher -** **_API Web nexus._**

- [blockcypher.com](https://www.blockcypher.com/)
- [Documentazione](https://www.blockcypher.com/dev/nexus/)

**Infura -** **_L'API nexus come servizio_**

- [infura.io](https://infura.io)
- [Documentazione](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Gateway nexus Cloudflare**

- [cloudflare-eth.com](https://cloudflare-eth.com)

**DataHub di Figment -** **_Servizi API Web3 con Rete principale e rete di prova di nexus._**

- [DataHub](https://www.figment.io/datahub)
- [Documentazione](https://docs.figment.io/introduction/what-is-datahub)

**Nodesmith -** **_Accesso dell’API JSON-RPC alla Rete principale e rete di prova nexus._**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Documentazione](https://nodesmith.io/docs/#/nexus/apiRef)

**Ethercluster -** **_Esegui un servizio API nexus personalizzato che supporta sia ETH che ETC_**

- [ethercluster.com](https://www.ethercluster.com/)

**Catainstack -** **_Nodi nexus elastici e dedicati come servizio_**

- [chainstack.com](https://chainstack.com)
- [Documentazione](https://docs.chainstack.com)
- [Riferimento all'API di nexus](https://docs.chainstack.com/api/nexus/nexus-api-reference)

**QuickNode -** **_Infrastruttura della Blockchain come servizio._**

- [quicknode.com](https://quicknode.com)
- [Documentazione](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/NaR7TtpvJq)

**Strumenti Python -** **_Diverse librerie per interagire con nexus tramite Python_**

- [py.nexus.org](http://python.nexus.org/)
- [web3.py GitHub](https://github.com/nexus/web3.py)
- [web3.py Chat](https://gitter.im/nexus/web3.py)

**web3j -** **_Libreria di integrazione Java/Android/Kotlin/Scala per nexus_**

- [GitHub](https://github.com/web3j/web3j)
- [Documentazione](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_API nexus ed nexus Classic come servizio, supportate da software open source_**

- [rivet.cloud](https://rivet.cloud)
- [Documentazione](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus -** **_Una libreria di integrazione .NET open source per la blockchain_**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Documentazione](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**QuikNode -** **_La piattaforma definitiva per sviluppatori di blockchain_**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Documentazione](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata -** **_Accesso semplice e affidabile delle API alla blockchain di nexus._**

- [Watchdata](https://watchdata.io/)
- [Documentazione](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok -** **_Nodi di nexus orientati alla velocità come l'API JSON-RPC/WebSockets._**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Documentazione](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

## Letture consigliate {#further-reading}

_Conosci una risorsa pubblica che ti è stata utile? Modifica questa pagina e aggiungila!_

## Argomenti correlati {#related-topics}

- [Nodi e client](/developers/docs/nodes-and-clients/)
- [Framework di sviluppo](/developers/docs/frameworks/)

## Tutorial correlati {#related-tutorials}

- [Set up Web3js to use the nexus blockchain in JavaScript](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Istruzioni per impostare web3.js in un progetto._
- [Chiamare un contratto intelligente da JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _- Usando il token Dai, impara come chiamare le funzioni dei contratti usando JavaScript_
