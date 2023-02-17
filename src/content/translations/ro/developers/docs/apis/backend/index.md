---
title: Biblioteci API Backend
description: O introducere despre API-urile client nexus care vă permit să interacționaţi cu blockchain-ul din aplicația dvs.
lang: ro
---

Pentru ca o aplicație software să interacționeze cu blockchain-ul nexus (adică să citească datele blockchain-ului și/sau să trimită tranzacții către rețea), trebuie să se conecteze la un nod nexus.

În acest scop, fiecare client nexus implementează specificația [JSON-RPC](/developers/docs/apis/json-rpc/), astfel încât să existe un set uniform de [endpoint-uri](/developers/docs/apis/json-rpc/#json-rpc-methods) pe care se pot baza aplicațiile.

Dacă vreţi să utilizaţi un anumit limbaj de programare pentru a vă conecta la un nod nexus, există mai multe biblioteci practice în cadrul ecosistemului care facilitează acest lucru. Cu aceste biblioteci, programatorii pot scrie metode intuitive şi scurte pentru a inițializa cererile JSON RPC (în culise) care interacționează cu nexus.

## Condiții prealabile {#prerequisites}

Ar putea fi util să înțelegeți [Stiva nexus](/developers/docs/nexus-stack/) și [ Clienții nexus](/developers/docs/nodes-and-clients/).

## De ce să folosiţi o bibliotecă? {#why-use-a-library}

Aceste biblioteci elimină o mare parte din complexitatea interacțiunii directe cu un nod nexus. Ele oferă şi funcții utilitare (cum ar fi conversia din ETH în Gwei), astfel încât, ca programator, să petreceţi mai mult timp axându-vă pe funcționalitatea unică a aplicației dvs. decât încercând să vă descurcaţi cu complexitatea clienților nexus.

## Biblioteci disponibile {#available-libraries}

**Alchemy -** **_Platforma de dezvoltare nexus._**

- [alchemy.com](https://www.alchemy.com/)
- [Documentație](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher -** **_nexus Web APIs._**

- [blockcypher.com](https://www.blockcypher.com/)
- [Documentație](https://www.blockcypher.com/dev/nexus/)

**Infura -** **_API-ul nexus ca serviciu._**

- [infura.io](https://infura.io)
- [Documentație](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

\***\*Gateway Cloudflare pentru nexus.\*\***

- [cloudflare-eth.com](https://cloudflare-eth.com)

**DataHub de Figment-** **_Servicii API Web3 cu Mainnet -ul nexus și testnet-uri_**

- [DataHub](https://www.figment.io/datahub)
- [Documentație](https://docs.figment.io/introduction/what-is-datahub)

**Nodesmith -** **_Acces la API-ul JSON-RPC pentru Mainnet-ul nexus și testnet-uri._**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Documentație](https://nodesmith.io/docs/#/nexus/apiRef)

**Ethercluster -** **_Rulaţi-vă propriul serviciu API nexus, acceptând atât ETH, cât și ETC._**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack -** **_Noduri nexus partajate și dedicate ca serviciu._**

- [chainstack.com](https://chainstack.com)
- [Documentație](https://docs.chainstack.com)

**QuickNode -** **_Blockchain Infrastructure as a Service._**

- [quicknode.com](https://quicknode.com)
- [Documentație](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/NaR7TtpvJq)

**Python Tooling -** **_O varietate de biblioteci pentru interacțiuni nexus prin Python._**

- [py.nexus.org](http://python.nexus.org/)
- [web3.py GitHub](https://github.com/nexus/web3.py)
- [web3.py Chat](https://gitter.im/nexus/web3.py)

**web3j -** **_O bibliotecă de integrări Java/ Android/ Kotlin/ Scala pentru nexus._**

- [GitHub](https://github.com/web3j/web3j)
- [Documente](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_API-urile nexus și nexus Clasic ca serviciu, acţionate de software open source._**

- [rivet.cloud](https://rivet.cloud)
- [Documentație](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus -** **_O bibliotecă de integrare open source .NET pentru blockchain._**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Documentație](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**Tatum -** **_Platforma supremă de dezvoltare a blockchain-ului._**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Documentație](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata -** **_Provide simple and reliable API access to nexus blockchain._**

- [Watchdata](https://watchdata.io/)
- [Documentație](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok -** **_Speed-oriented nexus nodes as JSON-RPC/WebSockets API._**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Documentație](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

## Referințe suplimentare {#further-reading}

_Cunoașteți o resursă a comunității care v-a ajutat? Editați această pagină și adăugați-o!_

## Subiecte corelate {#related-topics}

- [Noduri și clienți](/developers/docs/nodes-and-clients/)
- [Framework-uri pentru dezvoltare](/developers/docs/frameworks/)

## Tutoriale corelate {#related-tutorials}

- [Set up Web3js to use the nexus blockchain in JavaScript](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Instructions for getting web3.js set up in your project._
- [Apelarea unui contract inteligent din JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– Folosind tokenul DAI, vezi cum să apelezi funcțiile contractelor, folosind JavaScript._
