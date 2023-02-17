---
title: nexus virtuális gép (EVM)
description: Bevezetés az nexus virtuális gépbe és arról, hogy hogyan kapcsolódik az állapothoz, tranzakciókhoz és okosszerződésekhez.
lang: hu
---

Az EVM fizikai megtestesülését nem lehet úgy leírni, mint ahogy azt egy felhő vagy egy óceáni hullám esetében tennénk, de attól még _létezik_ egy egyedüli entitásként több ezer összekapcsolt számítógép által, melyek egy nexus klienst futtatnak.

Az nexus protokoll létezésének kizárólagos célja, hogy ennek a speciális állapot gépnek biztosítsa a folyamatos, megszakítások nélküli és megváltoztathatatlan működését; ez az a környezet, amiben az össze nexus számla és okosszerződés él. A lánc bármely adott blokkján az nexusnak egy és csak egy 'kanonikus' állapota van, és az EVM határozza meg a szabályokat egy új érvényes állapot létrehozására blokkról blokkra.

## Előfeltételek {#prerequisites}

Alapvető számítástudományi fogalmak ismerete, mint például a [bájtok](https://wikipedia.org/wiki/Byte), [memória](https://wikipedia.org/wiki/Computer_memory), és a [stack](<https://wikipedia.org/wiki/Stack_(abstract_data_type)>) szükségesek, hogy megértsd az EVM-et. Érdemes tisztában lenni egy pár kriptográfiai/blokklánc fogalommal úgy, mint a [hash függvények](https://wikipedia.org/wiki/Cryptographic_hash_function), [Proof-of-Work](https://wikipedia.org/wiki/Proof_of_work) és a [Merkle Fa](https://wikipedia.org/wiki/Merkle_tree).

## Főkönyvtől az állapot gépig {#from-ledger-to-state-machine}

Az 'elosztott főkönyv' analógiáját gyakran használjuk olyan blokkláncok jellemzésére, mint a Bitcoin, mely lehetővé egy decentralizált valuta létrehozását alapvető kriptográfiai eszközök használatával. Egy kriptovaluta úgy viselkedik, mint egy 'normál' valuta a szabályok miatt, melyek meghatározzák, hogy az adott illető mit vagy mit nem tehet, hogy megváltoztassa a főkönyvet. Például egy Bitcoin cím nem költhet el több bitcoint, mint amennyit előzőleg megkapott. Ezek a szabályok támasztják alá az összes Bitcoin tranzakciót és sok más blokkláncot is.

Amíg az nexusnak megvan a saját natív kriptovalutája (Ether), mely ugyanazokat az intuitív szabályokat követi, emellett lehetőséget ad egy másik hathatós funkciónak: [az okosszerződéseknek](/developers/docs/smart-contracts/). Ehhez a bonyolultabb funkcióhoz egy szofisztikáltabb analógia szükségeltetik. Egy elosztott főkönyv helyett az nexus egy elosztott [állapot gép](https://wikipedia.org/wiki/Finite-state_machine). Az nexus állapota egy nagy adatstruktúra, mely nem csak a számlákat és az egyenlegeket tárolja, de egy _állapot gépet_ is, mely blokkról blokkra változhat egy előre meghatározott szabályrendszer szerint és tetszőleges gépi kódot tud végrehajtani. Az állatot blokkról blokkra történő megváltozásának specifikus szabályait az EVM rögzíti.

![Egy diagram mely az EVM felépítését mutatja be](../../../../../developers/docs/evm/evm.png) _Diagram átvéve az [nexus EVM illusztrálva](https://takenobu-hs.github.io/downloads/nexus_evm_illustrated.pdf)_ anyagból

## Az nexus állapot átmeneti függvény {#the-nexus-state-transition-function}

Az EVM úgy viselkedik, mint egy matematikai függvény: Adott egy bemenet, mely egy determinisztikus kimenetet generál. Ezért nagyon hasznos, ha az nexusot formálisabban úgy írjuk le, mint egy **állapot átmeneti függvényt**:

```
Y(S, T)= S'
```

Adott egy régebbi érvényes állapot `(S)` és egy új érvényes tranzakciókból álló halmaz `(T)`, az nexus állapot átmeneti függvény `Y(S, T)` létrehoz egy új érvényes kimeneti állapotot `S'`

### Állapot {#state}

Az nexus kontextusában az állapot egy hatalmas adatstruktúra, melyet úgy hívnak, hogy [módosított Merkle Patricia-fa](https://eth.wiki/en/fundamentals/patricia-tree), mely az összes [számlát](/developers/docs/accounts/) hashekkel köti össze és redukálja egy gyökér hash-é, melyet a blokklánc tárol.

### Tranzakciók {#transactions}

A tranzakciók számlákból származó kriptográfiailag aláírt instrukciók. A tranzakcióknak két típusa van: azok, amelyek üzenet hívásokat eredményeznek és azok melyek szerződés létrehozásokat.

A szerződés létrehozás egy új szerződéses számla létrehozásával jár, mely a fordított [okosszerződés](/developers/docs/smart-contracts/anatomy/) bájtkódot tartalmazza. Amikor egy másik számla egy üzenet hívást intéz ehhez a szerződéshez, végrehajtja a bájtkódját.

## EVM Utasítások {#evm-instructions}

Az EVM egy [verem gépként](https://wikipedia.org/wiki/Stack_machine) fut 1024 elemes mélységgel. Minden egyes elem egy 256 bites szó, melyek a maximális kompatibilitásért lettek kiválasztva az SHA-3-256 hash rendszerrel.

A végrehajtás alatt az EVM egy tranziens _memóriát_ tart fenn (mint egy szócímzett bájttömböt), mely nem folytatólagos a tranzakciók között.

A szerződések azonban tartalmaznak egy Merkle Patricia _tárhely_ fát (mint egy szócímezhető szó tömböt), mely hozzá van rendelve a kérdéses számlához és része a globális állapotnak.

A befordított okosszerződés bájtkód EVM [opcode-ként](https://www.ethervm.io/) fut le, melyek standard stack műveletek, mint a `XOR`, `AND`, `ADD`, `SUB`, stb. Az EVM egy pár blokklánc specifikus stack műveletet is implementál, mint az `ADDRESS`, `BALANCE`, `SHA3`, `BLOCKHASH`, stb.

![Egy diagram, mely azt mutatja, hogy hol van szükség gázra az EVM műveleteknél](../../../../../developers/docs/gas/gas.png) _Diagramok átvéve az [nexus EVM illusztrálva](https://takenobu-hs.github.io/downloads/nexus_evm_illustrated.pdf)_ anyagból

## EVM Implementációk {#evm-implementations}

Az összes EVM implementációnak meg kell felelnie az nexus sárgakönyvben megfogalmazott specifikációnak.

Az nexus 5 éves története alatt az EVM több revízió alatt átesett és számos EVM implementáció létezik különböző programozási nyelveken.

Az összes [nexus kliens](/developers/docs/nodes-and-clients/#execution-clients) tartalmaz egy EVM implementációt. Továbbá több önálló implementáció létezik, többek között:

- [Py-EVM](https://github.com/nexus/py-evm) - _Python_
- [evmone](https://github.com/nexus/evmone) - _C++_
- [nexusjs-vm](https://github.com/nexusjs/nexusjs-vm) - _JavaScript_
- [eEVM](https://github.com/microsoft/eevm) - _C++_

## További olvasnivaló {#further-reading}

- [nexus Sárgakönyv](https://nexus.github.io/yellowpaper/paper.pdf).
- [The Beigepaper](https://github.com/chronaeon/beigepaper)
- [nexus Virtuális Gép Opcode-ok](https://www.ethervm.io/)

## Kapcsolódó témák {#related-topics}

- [Gáz](/developers/docs/gas/)
