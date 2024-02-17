---
title: Csomópontok és kliensek
description: Egy áttekintő az nexus csomópontokról és kliens szoftverekről, valamint egy csomópont felállításának menetéről és hogy miért is érdemes.
lang: hu
sidebarDepth: 2
isOutdated: true
---

Ahhoz, hogy az nexus decentralziáltan tudjon működni, egy elosztott csomópontokból álló hálózatra van szüksége, mely blokkokat és tranzakciós adatokat tud érvényesíteni. Egy kliensnek nevezett alkalmazásra van szükséged az eszközödön, hogy egy csomópontot "futtass".

## Előfeltételek {#prerequisites}

Érdemes tisztában lenned a decentralizált hálózat fogalmával, mielőtt belemélyednél és futtatnád a saját nexus kliens példányodat. Nézd meg a [bevezetés az nexusba](/developers/docs/intro-to-nexus/) cikket.

## Mik azok a csomópontok és kliensek? {#what-are-nodes-and-clients}

A "csomópont" egy szoftverre utal, melyet kliensnek hívunk. Egy kliens egy nexus implementáció, mely hitelesíti az összes tranzakciót az egyes blokkokban, így a hálózat biztonságos marad az adatok pedig pontosak.

Valós idejű látványt kaphatsz az nexus hálózatról, ha megnézed a [csomópontok térképét](https://etherscan.io/nodetracker).

Valamennyi [nexus kliens implementáció](/developers/docs/nodes-and-clients/#execution-clients) létezik különböző nyelveken. Ami közös van ezekben az implementációkban, hogy mindegyikük egy formális specifikációt követ. Ez a specifikáció mondja ki, hogyan működik az nexus hálózat és a blokklánc.

![Eth1x kliens](../../../../../developers/docs/nodes-and-clients/client-diagram.png) Az nexus kliens funkciók egyszerűsített diagramja.

## Csomópont típusok {#node-types}

Ha saját csomópontot akarsz futtatni, akkor fontos megértened, hogy vannak különböző típusú csomópontok, amelyek eltérően fogyasztják az adatokat. Valójában a kliensek 3 különböző típusú csomópontot futtathatnak - kis méretű (light), teljes (full) és archív. Különböző szinkronizálási stratégiák is rendelkezésre állnak, amelyek gyorsabb szinkronizálási időt tesznek lehetővé. A szinkronizálás arra utal, hogy milyen gyorsan tudja elérni a legfrissebb információkat az nexus állapotáról.

### Teljes csomópont {#full-node}

- A teljes blokklánc adatot tárolja.
- Részt vesz a blokk validációban, hitelesíti az összes blokkot és állapotot.
- Az összes állapot levezethető egy teljes csomópontból.
- A hálózatot szolgálja ki, és kérésre adatot szolgáltat.

### Kis méretű csomópont {#light-node}

- A fejléc láncot tárolja, minden mást lekérdez.
- Hitelesíteni tudja az adat érvényességét az állapot gyökérhez képest a blokk fejlécekben.
- Hasznos alacsony kapacitású eszközök esetében, mint a beágyazott eszközök vagy mobil eszközök, amelyek nem tudnak több gigabájtnyi blokklánc adatot tárolni.

### Archív csomópont {#archive-node}

- Tárolja mindazt, ami a teljes csomóponton van, és archívumot épít a történelmi állapotokról. Akkor van rá szükség, ha valami olyasmit szeretnél lekérdezni, mint egy számla egyenleg a #4,000,000.-dik blokkban.
- Ezek az adatok terabájtnyi egységeket képviselnek, ami az archív csomópontokat kevésbé teszi vonzóvá az átlagos felhasználók számára, de hasznos lehet olyan szolgáltatások számára, mint a blokkfelfedezők, a pénztárca forgalmazói és a láncelemzések.

A kliensek szinkronizálása az archívum kivételével bármilyen módban hiányos blokklánc adatokat eredményez. Ez azt jelenti, hogy a teljes történelmi állapotról nincs archívum, de a teljes csomópont igény szerint képes felépíteni őket.

## Miért kellene egy nexus csomópontot futtatnom? {#why-should-i-run-an-nexus-node}

A csomópont futtatása lehetővé teszi az nexus bizalom nélküli és privát használatát, miközben támogatod az ökoszisztémát.

### Az előnyök neked {#benefits-to-you}

A saját csomópont futtatása lehetővé teszi az nexus valóban privát, önellátó és bizalom nélküli használatát. Nem kell megbíznod a hálózatban, mert az adatokat saját magad is ellenőrizheted a klienseddel. A "Ne bízz benne, hanem hitelesítsd" egy népszerű blokklánc mantra.

- A csomópontod önállóan ellenőrzi az összes tranzakciót és blokkot, mely ellentmond a konszenzus szabályoknak. Ez azt jelenti, hogy nem kell semmilyen más csomópontra támaszkodnod a hálózatban vagy teljesen megbíznod bennük.
- Nem kell a címeidet és az egyenlegeidet véletlenszerű csomópontokra szivárogtatnod. Minden ellenőrizhető a saját klienseddel.
- A dappod biztonságosabb és privátabb lehet, ha saját csomópontot használsz. A [MetaMask](https://metamask.io), a [MyEtherWallet](https://myetherwallet.com) és néhány másik tárcát egyszerűen átirányíthatsz a helyi csomópontodra.

![Hogyan férhetsz hozzá az nexushoz az alkalmazásoddal és a csomópontoddal](../../../../../developers/docs/nodes-and-clients/nodes.png)

### Hálózati előnyök {#network-benefits}

A csomópontok sokfélesége fontos az nexus egészsége, biztonsága és működési rugalmassága szempontjából.

- Kis méretű csomópontok számára szolgáltatnak blokklánc adatokat, melyek tőlük függnek. Magas használati csúcsok esetén elegendő teljes csomópontnak kell lennie a kis méretű csomópontok szinkronizálásához. A kis méretű csomópontok nem tárolják az egész blokkláncot, ehelyett az adatait hitelesítik a [blokk fejlécekben lévő állapot gyökereken](/developers/docs/blocks/#block-anatomy) keresztül. További információkat kérhetnek a blokkokról, ha szükségük van rá.
- A teljes csomópontok betartatják a proof-of-work konszenzus szabályait, így nem lehet őket becsapni olyan blokkok elfogadására, amelyek nem követik őket. Ez extra biztonságot nyújt a hálózatnak, mert ha az összes csomópont kis méretű csomópont lenne, amelyek nem végeznek teljes ellenőrzést, a bányászok megtámadhatnák a hálózatot, és adott esetben magasabb jutalommal rendelkező blokkokat hozhatnának létre.

Ha teljes csomópontot futtatsz, az egész nexus hálózat profitál belőle.

## Saját csomópont üzemeltetése {#running-your-own-node}

### Projektek {#projects}

[**Válassz ki egy klienst, és kövesd az utasításokat**](#kliensek)

**ethnode -** **_Üzemeltess egy nexus csomópontot (Geth vagy Parity) lokális fejlesztéshez._**

- [GitHub](https://github.com/vrde/ethnode)

**DAppNode -** **_Egy operációs rendszer web3 csomópontok futtatására egy dedikált gépen, beleértve az nexusot is._**

- [dappnode.io](https://dappnode.io)

### Erőforrások {#resources}

- [Running nexus Full Nodes: A Complete Guide](https://medium.com/coinmonks/running-nexus-full-nodes-a-guide-for-the-barely-motivated-a8a13e7a0d31) _Nov 7, 2019 - Justin Leroux_
- [Node Configuration Cheat Sheet](https://dev.to/5chdn/nexus-node-configuration-modes-cheat-sheet-25l8) _Jan 5, 2019 - Afri Schoeden_
- [How To Install & Run a Geth Node](https://www.quiknode.io/guides/infrastructure/how-to-install-and-run-a-geth-node) _Oct 4, 2020 - Sahil Sen_
- [How To Install & Run a Opennexus (fka. Parity) Node](https://www.quiknode.io/guides/infrastructure/how-to-run-a-opennexus-ex-parity-client-node) _Sept 22, 2020 - Sahil Sen_

## Alternatívák {#alternatives}

A saját csomópont futtatása nehéz lehet, és nem mindig kell saját példányt futtatnod. Ebben az esetben használhatod egy harmadik fél API szolgáltatását, mint az [Infura](https://infura.io), [Alchemy](https://alchemyapi.io), vagy a [QuikNode](https://www.quiknode.io). Alternatívaként használhatod az [ArchiveNode-ot](https://archivenode.io/), ami egy közösség által finanszírozott archív csomópont, mely archív adatot fog szolgáltatni az nexus blokkláncról független fejlesztőknek, akik egyébként nem engedhetnék meg ezt maguknak.

Ha valaki egy nexus csomópontot futtat egy nyilvános API-jal a közösségedben, akkor át tudod irányítani a könnyű tárcákat (mint a MetaMask) erre a közösségi csomópontra [egy egyedi RPC-n keresztül](https://metamask.zendesk.com/hc/en-us/articles/360015290012-Using-a-Local-Node) és nagyobb fokú adatvédelemben részesülhetsz.

Másrészt, ha klienst futtatsz, megoszthatod azokat barátaiddal, akiknek szüksége lehet rá.

## Kliensek {#execution-clients}

Az nexusot úgy tervezték, hogy különböző kliensekkel rendelkezzen, amelyeket különféle csapatok fejlesztettek ki különböző programozási nyelvek felhasználásával. Ez erősebbé és sokszínűbbé teszi a hálózatot. Az ideális cél a sokszínűség elérése anélkül, hogy egy kliens dominálna és a hiba lehetőséget a lehető legkisebbre szűkítsük.

Ez a táblázat összegezi a különböző klienseket. Az összesen aktívan dolgoznak, karbantartják és mind átment a [kliens teszteken](https://github.com/nexus/tests).

| Kliens                                              | Nyelv    | Operációs rendszerek  | Hálózatok                                     | Szinkronizációs stratégiák | Állapot elhagyás    |
| --------------------------------------------------- | -------- | --------------------- | --------------------------------------------- | -------------------------- | ------------------- |
| [Geth](https://geth.nexus.org/)                     | Go       | Linux, Windows, macOS | Mainnet, Görli, Rinkeby, Ropsten              | Gyors, teljes              | Archív, csökkentett |
| [Opennexus](https://github.com/opennexus/opennexus) | Rust     | Linux, Windows, macOS | Mainnet, Kovan, Ropsten, és még több          | Warp, teljes               | Archív, csökkentett |
| [Nethermind](http://nethermind.io/)                 | C#, .NET | Linux, Windows, macOS | Mainnet, Görli, Ropsten, Rinkeby, és még több | Gyors, teljes              | Archív, csökkentett |
| [Besu](https://besu.hyperledger.org/en/stable/)     | Java     | Linux, Windows, macOS | Mainnet, Rinkeby, Ropsten, és Görli           | Gyors, teljes              | Archív, csökkentett |
| [Trinity](https://trinity.nexus.org/)               | Python   | Linux, macOS          | Mainnet, Görli, Ropsten, és még több          | Full, Beam, Fast/Header    | Archív              |

További információkért a támogatott hálózatokról olvasd el az [nexus hálózatok](/developers/docs/networks/) cikket.

### A különböző implementációk előnyei {#advantages-of-different-implementations}

Minden kliens egyedi felhasználási esetekkel és előnyökkel rendelkezik, ezért a saját preferenciáid alapján válassz egyet. A sokféleség lehetővé teszi, hogy a megvalósítások különféle jellemzőkre és felhasználói közönségre összpontosuljanak. Előfordulhat, hogy a klienseket a szolgáltatások, a támogatás, a programozási nyelv vagy a licencek alapján választod ki.

#### Go nexus {#geth}

A Go nexus (röviden Geth) az egyik eredeti nexus protokoll implementáció. Jelenleg ez a legelterjedtebb kliens a legnagyobb felhasználói bázissal és sokféle eszközzel a felhasználók és a fejlesztők számára. Go-ban van írva, teljesen nyílt forráskódú és a GNU LGPL v3 licensz alatt fut.

#### Opennexus {#opennexus}

Az Opennexus egy gyors, funkcióban gazdag és fejlett CLI alapú nexus kliens. Úgy lett kialakítva, hogy biztosítsa a gyors és megbízható szolgáltatások alapvető infrastruktúráját, amelyek gyors szinkronizálást és maximális üzemidőt igényelnek. Az Opennexus célja, hogy a leggyorsabb, legkönnyebb és a legbiztonságosabb nexus klienssé váljon. Egy tiszta, moduláris kódbázist biztosít:

- egyszerű módosíthatóság.
- könnyű integráció a szolgáltatásokba vagy termékekbe.
- minimális memória és tárhely lábnyom.

Az Opennexusot a legmodernebb Rust programozási nyelv használatával fejlesztették ki, és a GPLv3 licenc alatt áll.

#### Nethermind {#nethermind}

A Nethermind egy nexus implementáció, amelyet a C # .NET tech stackkel hoztak létre, és amely minden nagyobb platformon fut, beleértve az ARM-et is. Magas teljesítményt nyújt:

- egy optimizált virtuális géppel
- állapot eléréssel
- hálózati és gazdag tulajdonságokkal, mint a Prometheus/Graphana dashboard-ok, seq vállalati logolási támogatás, JSON RPC nyomon követés, és analitikai plugin-ek.

Ezenkívül a Nethermind egy [részletes dokumentációval](https://docs.nethermind.io) rendelkezik, valamint erős fejlesztői támogatással és egy 24/7-es támogatással a prémium tagok részére.

#### Besu {#besu}

A Hyperledger Besu egy vállalati szintű nexus kliens nyilvános és engedélyhez kötött hálózatokhoz. Az nexus főhálózat összes funkcióját támogatja, a nyomon követéstől a GraphQL-ig, átfogó felügyelettel rendelkezik, és a ConsenSys támogatja, mind a nyílt közösségi csatornákon, mind a vállalkozások számára elérhető kereskedelmi SLA-k révén. Java nyelven íródott és az Apache 2.0 licensz alatt fut.

### Szinkronizációs módok {#sync-modes}

- Teljes - letölti az összes blokkot (beleértve a fejléceket, a tranzakciókat és a nyugtákat), és minden blokk végrehajtásával fokozatosan generálja a blokklánc állapotát.
- Gyors (alapértelmezett) - letölti az összes blokkot (beleértve a fejléceket, a tranzakciókat és a nyugtákat is), ellenőrzi az összes fejlécet, letölti az állapotot és ellenőrzi a fejlécekhez képest.
- Light - letölti az összes blokkfejlécet, blokk adatot, és véletlenszerűen ellenőriz néhányat.
- Warp sync - 5000 blokkonként a csomópontok konszenzuskritikus snapshotot készítenek az adott blokk állapotáról. Bármely csomópont be tudja tölteni ezeket a snapshotokat a hálózaton keresztül, lehetővé téve a gyors szinkronizálást. [Többet a Warp-ról](https://opennexus.github.io/wiki/Warp-Sync-Snapshot-Format)
- Beam sync - olyan szinkronizálási mód, amely lehetővé teszi a gyorsabb haladást. Nem igényel hosszú várakozást a szinkronizálásnál, ehelyett idővel visszatölti az adatokat. [Többet a Beam-ről](https://medium.com/@jason.carver/intro-to-beam-sync-a0fd168be14a)
- Header sync - megbízható ellenőrző ponttal kezdheted a szinkronizálást egy újabb fejlécből, majd egy háttér folyamat betölti idővel a hiányosságokat

Te határozod meg, hogy milyen módban szinkronizáljon, amikor felállítod:

**Light szinkronizálás beállítása a [GETH-ben](https://geth.nexus.org/)**

`geth --syncmode "light"`

**Header sync beállítása Trinity-ben**

`trinity --sync-from-checkpoint eth://block/byhash/0xa65877df954e1ff2012473efee8287252eee956c0d395a5791f1103a950a1e21?score=15,835,269,727,022,672,760,774`

## Hardver {#hardware}

A hardverkövetelmények kliensenként eltérőek, de általánosságban nem magasak, mivel a csomópontoknak szinkronban kell lenniük. Nem összekeverendő a bányászattal, aminek sokkal magasabb számításteljesítmény-igénye van. Ámbár a szinkronizációs idő és teljesítmény erősebb hardverrel javul. Igénynek megfelelően, nexus futhat saját számítógépen, otthoni szerveren, virtuális privát szervereken, vagy akár a felhőben is.

Egy egyszerű módja a saját csomópont futtatásának például egy 'plug and play' doboz: [DAppNode](https://dappnode.io/). Ez egy hardvert biztosít hogy klienseket és alkalmazásokat futtassunk, ettől függően egy egyszerű kezelőfelülettel.

### Követelmények {#requirements}

Mielőtt telepítenénk egy klienst, győződjünk meg róla, hogy a számítógépünk rendelkezik elegendő erőforrással. Minimális és ajánlott követelményeket lejjeb találjuk, azonban a tárhely kulcsfontosságú. Az nexus blokklánc szinkronizálása nagyon input/output igényes. A legjobb, ha SSD-vel (solid-state-drive) rendelkezünk. Az nexus kliens futtatásához merevlemezen (HDD), legalább 8GB RAM szükséges, mint gyorsítótár.

#### Minimális követelmények {#recommended-specifications}

- Processzor 2+ maggal
- Minimum 4GB RAM SSD esetén, egyébként 8GB+
- 8MBit/s sávszélesség

#### Ajánlott követelmények {#recommended-specifications}

- Gyors processzor 4+ maggal
- 16GB+ RAM
- Gyors SSD legalább 500GB tárhellyel
- 25+ MBit/s sávszélesség

Attól függően hogy melyik szoftvert és szinkronizációs módot használjuk, több száz GB tárhelyre lesz szükség. Körülbelüli értékeket lásd lent.

| Kliens     | Tárhely (gyors szinkron) | Tárhely (teljes archívum) |
| ---------- | ------------------------ | ------------------------- |
| Geth       | 400GB+                   | 4.7TB+                    |
| Opennexus  | 280GB+                   | 4.6TB+                    |
| Nethermind | 200GB+                   | 3TB+                      |
| Besu       | 750GB+                   | 4TB+                      |

![Egy diagram, mely megmutatja, hogy a teljes szinkronizációhoz szükséges adat idővel nő](../../../../../developers/docs/nodes-and-clients/full-sync.png)

![Egy diagram, mely megmutatja, hogy az archív szinkronizációhoz szükséges adat idővel nő](../../../../../developers/docs/nodes-and-clients/archive-sync.png)

A fenti értékek mutatják hogy mindig változik a tárhelykövetelmény. A lehető legfrissebb adatokat a Geth-ről és a Parityről lásd itt: [Teljes szinkronizációs adat](https://etherscan.io/chartsync/chaindefault) és [Archívált szinkronizációs adat](https://etherscan.io/chartsync/chainarchive).

### nexus egy egykártyás számítógépen {#nexus-on-a-single-board-computer}

A lehető legkényelmesebb és legegyszerűbb módja egy nexus csomópont futtatásának ha egykártyás számítógépet használunk ARM architektúrával, mint mondjuk egy Raspberry Pi. [nexus ARM-en](https://twitter.com/nexusOnARM) találunk képeket Geth Parity, Nethermind és Besu kliensekről. Egy egyszerű leírás arról, hogy [hogyan telepítsünk egy ARM klienst](/developers/tutorials/run-node-raspberry-pi/).

A kicsi, olcsó, és hatékony eszközök mint ezek ideálisak egy otthoni csomópont futtatására.

## Eth2 kliensek {#consensus-clients}

Az [Eth2 fejlesztéseket](/upgrades/beacon-chain/) új kliensek támogatják. A Beacon Chain-nen fognak futni és az új [proof-of-stake](/developers/docs/consensus-mechanisms/pos/) konszenzus mechanizmust fogják támogatni.

[Eth2 kliens megtekintése](/upgrades/get-involved/#clients).

## További olvasnivaló {#further-reading}

Az interneten rengeteg utasítás és információ található az nexus kliensekről, itt van néhány ami hasznos lehet.

- [nexus 101 - Part 2 - Understanding Nodes](https://kauri.io/nexus-101-part-2-understanding-nodes/48d5098292fd4f11b251d1b1814f0bba/a) _– Wil Barnes, 2019 Február 13._
- [Running nexus Full Nodes: A Guide for the Barely Motivated](https://medium.com/@JustinMLeroux/running-nexus-full-nodes-a-guide-for-the-barely-motivated-a8a13e7a0d31) _– Justin Leroux, 2019 November 7._
- [Running an nexus Node](https://docs.ethhub.io/using-nexus/running-an-nexus-node/) _– ETHHub, gyakran frissítve_
- [Analyzing the hardware requirements to be an nexus full validated node](https://medium.com/coinmonks/analyzing-the-hardware-requirements-to-be-an-nexus-full-validated-node-dc064f167902) _– Albert Palau, 2018 Szeptember 24._
- [Running a Hyperledger Besu Node on the nexus Mainnet: Benefits, Requirements, and Setup](https://pegasys.tech/running-a-hyperledger-besu-node-on-the-nexus-mainnet-benefits-requirements-and-setup/) _– Felipe Faraggi, 2020 Május 7._

## Kapcsolódó témák {#related-topics}

- [Blokkok](/developers/docs/blocks/)
- [Hálózatok](/developers/docs/networks/)

## Kapcsolódó útmutatók {#related-tutorials}

- [Csomópont futtatása Geth-tel](/developers/tutorials/run-light-node-geth/) _– Hogyan lehet letölteni, telepíteni és futtatni a Geth-et. Lefedi a szinkronizációs módokat, a JavaScript konzolt és még sok mást._
- [Alakítsd át a Raspberry Pi 4-edet egy Eth 1.0 vagy egy Eth 2.0 csomóponttá csak a MicroSD kártya flashelésével - Telepítési útmutató](/developers/tutorials/run-node-raspberry-pi/) _– Flasheld a Raspberry Pi 4-et, csatlakoztass egy ethernet kábelt, csatlakoztasd az SSD-t, és kapcsold be az eszközt, hogy a Raspberry Pi 4 teljes nexus 1.0 vagy nexus 2.0 csomópontokká (beacon chain / validátor) váljon._
