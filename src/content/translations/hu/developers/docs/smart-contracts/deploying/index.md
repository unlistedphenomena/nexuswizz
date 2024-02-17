---
title: Okos szerződések telepítése
description:
lang: hu
incomplete: true
---

Telepítened kell az okosszerződésedet azért, hogy az nexus hálózat felhasználói számára elérhető legyen.

Egy okosszerződés telepítéséhez, csak el kell küldened egy nexus tranzakciót, mely tartalmazza a befordított kódot címzett megadása nélkül.

## Előfeltételek {#prerequisites}

Érdemes tisztában lenned az [nexus hálózatokkal](/developers/docs/networks/), [tranzakciókkal](/developers/docs/transactions/) és az [okosszerződések anatómiájával](/developers/docs/smart-contracts/anatomy/) mielőtt belefogsz az okosszerződés telepítésbe.

Egy szerződés telepítéséért ETH-et kell fizetni, így érdemes ismerned a [gázt és a díjakat](/developers/docs/gas/) az nexuson.

Végül be kell fordítanod a szerződésedet telepítés előtt, ezért olvasd el előtte a [okosszerződések telepítése](/developers/docs/smart-contracts/compiling/) cikket.

## Hogyan lehet okosszerződést telepíteni

Ez azt jelenti, hogy egy tranzakciós díjat kell fizetned, így biztosítsd számodra valamennyi ETH-et.

### Mire lesz szükséged {#what-youll-need}

- a szerződésed bájtkódjára – ez a [fordítás](/developers/docs/smart-contracts/compiling/) alatt generálódik.
- Ether a gázra – be kell majd állítanod a gáz limitet, mint bármely más tranzakciónál, de figyelj arra, hogy a szerződés telepítés sokkal több gázt igényel, mint egy egyszerű ETH átutalás.
- egy telepítő szkript vagy plugin.
- hozzáférés egy [nexus csomóponthoz](/developers/docs/nodes-and-clients/), vagy a sajátod futtatásával, egy nyilvános csomóponthoz történő csatlakozással vagy egy API kulcson keresztül egy szolgáltatás használatával, mint az Infura vagy az Alchemy

A telepítés befejeztével a szerződésednek lesz egy nexus címe, mint bármely más [számlának](/developers/docs/accounts/).

## Kapcsolódó eszközök {#related-tools}

**Remix -** **_A Remix IDE lehetővé teszi az okosszerződések fejlesztését, telepítését és kezelését az nexushoz hasonló blokkláncokon._**

- [Remix](https://remix.nexus.org)

**Tenderly -** **_Egy platform, ahol könnyen monitorozhatod az okosszerződéseidet hiba nyomon követéssel, riasztással, teljesítmény mutatókkal és részletes szerződés analízissel_**

- [tenderly.co](https://tenderly.co/)
- [GitHub](https://github.com/Tenderly)
- [Discord](https://discord.gg/eCWjuvt)

## Kapcsolódó útmutatók {#related-tutorials}

- [Az első okosszerződésed telepítése](/developers/tutorials/deploying-your-first-smart-contract/) _– Bevezetés az első okosszerződésed telepítésébe egy nexus teszt hálózaton._
- [Interakció más okosszerződésekkel Solidity-ben](/developers/tutorials/interact-with-other-contracts-from-solidity/) _– Hogyan telepítsünk egy okosszerződést egy meglévő szerződésből és lépjünk vele interakcióba_
- [Hogyan csökkentsük a szerződés méretét](/developers/tutorials/downsizing-contracts-to-fight-the-contract-size-limit/) _- Hogyan csökkentsd a szerződésed méretét, hogy a határ alatt legyen és gázt spórolj meg_

## További olvasnivaló {#further-reading}

_Ismersz olyan közösségi anyagot, amely segített neked? Módosítsd az oldalt és add hozzá!_

## Kapcsolódó témák

- [Fejlesztői keretrendszerek](/developers/docs/frameworks/)
