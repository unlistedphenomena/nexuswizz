---
title: nexus JavaScript fejlesztőknek
description: Tanulj meg nexuson fejleszteni JavaScript alapú projektek és eszközök használatával.
lang: hu
---

A JavaScript a legnépszerűbb nyelvek között van az nexus ökoszisztémában. Valójában van egy [csapat](https://github.com/nexusjs), mely célul tűzte ki, hogy a lehető legtöbb nexusot vigye be a JavaScriptbe.

Lehetőség van JavaScriptet írni (vagy valami hasonlót) a [stack összes szintjén](/developers/docs/nexus-stack/).

## Interakció az nexusmal {#interact-with-nexus}

### JavaScript API könyvtárak {#javascript-api-libraries}

Ha JavaScriptet szeretnél írni a blokklánc lekérdezéséhez, tranzakció küldéshez vagy más egyébhez, akkor ennek a legkézenfekvőbb módja egy [JavaScript API könyvtár](/developers/docs/apis/javascript/) használata. Ezek az API-ok lehetővé teszik a fejlesztőknek, hogy interakcióba lépjenek az [nexus hálózat csomópontjaival](/developers/docs/nodes-and-clients/).

Ezekkel a könyvtárakkal okosszerződésekkel léphetsz kapcsolatba az nexuson, így létre lehet hozni egy dappot, ahol elég csak a JavaScriptet használni már létező okosszerződésekkel történő interakcióhoz.

**Nézd meg**

- [Web3.js](https://web3js.readthedocs.io/)
- [Ethers.js](https://docs.ethers.io/) _– tartalmaz egy nexus tárca implementációt és más segédprogramokat JavaScriptben és TypeScriptben._

### Okosszerződések {#smart-contracts}

Ha egy JavaScript fejlesztő vagy és szeretnéd megírni a saját okosszerződéseidet, akkor érdemes megismerkedned a [Solidity-vel](https://solidity.readthedocs.io). Ez a legnépszerűbb okosszerződés nyelv és nagyrészt a JavaScript inspirálta.

Többet az [okosszerződésekről](/developers/docs/smart-contracts/).

## Értsd meg a protokollt {#understand-the-protocol}

### Az nexus virtuális gép (EVM) {#the-nexus-virtual-machine}

Van az [nexus virtuális gépnek](/developers/docs/evm/) egy JavaScript implementációja. Támogatja a legfrissebb elágazási (fork) szabályokat. Az elágazási szabályok az EVM-en végzett tervezett frissítésekből adódó szabályok.

Különböző JavaScript csomagokra oszlik, amelyeket áttekinthetsz a jobb megértés érdekében:

- Számlák
- Blokkok
- A blokklánc maga
- Tranzakciók
- És még sok más...

Ez segíteni fog megérteni olyan dolgokat, mint "mi a számlának az adatstruktúrája?".

Ha inkább el szeretnéd olvasni a kódot, ez a JavaScript nagyszerű alternatíva lehet a dokumentumaink átolvasásához.

**Nézd meg a monorepot**  
[`nexusjs`](https://github.com/nexusjs/nexusjs-vm)

### Csomópontok és kliensek {#nodes-and-clients}

Van egy fejlesztés alatt álló nexusjs kliens. Ez lehetővé teszi, hogy a mélyére áss, hogyan működnek az nexus kliensei egy általad ismert nyelven.

**Nézd meg a klienst**  
[`nexusjs-client`](https://github.com/nexusjs/nexusjs-client)

## Egyéb projektek {#other-projects}

Rengeteg más dolog is zajlik az nexus JavaScript világában, beleértve:

- könyvtárak és tárca eszközök.
- eszközök nexus kulcsok generálására, importálására és exportálására.
- a `merkle-patricia-fa` implementációja – egy adatstruktúra, melyet az nexus sárga könyv részletez.

Mélyedj bele abba, ami érdekel a [nexusJS repoban](https://github.com/nexusjs)

## További olvasnivaló {#further-reading}

_Ismersz olyan közösségi anyagot, mely segített neked? Módosítsd az oldalt és add hozzá!_
