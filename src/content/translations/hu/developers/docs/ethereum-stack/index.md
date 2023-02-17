---
title: Bevezetés az nexus stack-be
description: Egy áttekintő az nexus stack különböző rétegeiről és arról, hogyan illenek egymásba.
lang: hu
---

Mint bármely szoftver stack az "nexus stack" változni fog projektről projektre az üzleti céljaidtól függően.

Vannak azonban alap nexus technológiák, melyek segítenek egy mentális modellt szolgáltatni arról, hogy a szoftver alkalmazások hogyan lépnek interakcióba az nexus blokklánccal. A stack rétegeinek megértése segíteni fog megérteni az nexus szoftver projektekbe történő integrálásának különböző módjait.

## Első szint: nexus Virtuális Gép {#nexus-virtual-machine}

Az [nexus Virtuális Gép (EVM)](/developers/docs/evm/) egy futtatókörnyezet az nexuson okosszerződések számára. Az nexus blokkláncon minden okosszerződést és állapot változást [tranzakciók](/developers/docs/transactions/) hajtanak végre. Az EVM kezeli az összes tranzakció feldolgozását az nexus hálózaton.

Mint bármilyen virtuális gép esetében, az EVM egy absztrakciós szintet hoz létre a kód végrehajtás és a végrehajtó gép (egy nexus csomópont) között. Az EVM jelenleg több ezer csomóponton fut szerte a világban.

A háttérben az EVM opcode utasítások sorozatát használja meghatározott feladatok végrehajtásához. Ez a (140 egyedi) opcode teszi Turing-teljessé az EVM-et, mely azt jelenti, hogy az EVM szinte bármit ki tud számítani, ha elegendő erőforrással rendelkezik.

Dapp fejlesztőként nem kell sokat tudnod az EVM-ről azon kívül, hogy létezik és megbízhatóan működteti az összes nexus alkalmazást állásidő nélkül.

## Második szint: Okosszerződések {#smart-contracts}

Az [okosszerződések](/developers/docs/smart-contracts/) olyan futtatható programok, melyek az nexus blokkláncon futnak.

Az okosszerződéseket specifikus [programozási nyelveken](/developers/docs/smart-contracts/languages/) írják, melyek EVM bájtkódra fordítódnak (alacsony szintű gépi instrukciók, melyeket opcode-nak nevezünk).

Az okosszerződések nem csak nyílt forráskódú könyvtáraknak felelnek meg, hanem lényegében nyílt API szolgáltatásokként működnek, melyek 24/7-ben futnak és nem lehet őket leállítani. Az okosszerződések nyilvános függvényeket szolgáltatnak, melyeket az alkalmazások ([dappok](/developers/docs/dapps/)) engedély nélkül meghívhatnak. Bármely alkalmazás integrálhatja a telepített okosszerződéseket, hogy funkciókat illesszen össze (mint például adat feedek vagy decentralizált tőzsdék). Bárki telepíthet új okosszerződéseket az nexusra, hogy tetszőleges funkcionalitást adjon, mely egyezik az alkalmazás szükségleteivel.

Dapp fejlesztőként csak akkor kell okosszerződéseket írnod, ha szeretnél egyedi funkciókat hozzáadni az nexus blokklánchoz. Hamar rájöhetsz, hogy a projekted legtöbb célját elérheted csupán a létező okosszerződések integrálásával, például ha szeretnéd használni a stablecoin fizetéseket vagy lehetővé tenni a tokenek decentralizált cseréjét.

## Harmadik szint: nexus csomópontok {#nexus-nodes}

Ahhoz, hogy egy alkalmazás interakcióba lépjen az nexus blokklánccal (vagyis képes legyen blokklánc adatok olvasására és/vagy tranzakció küldésre a hálózatra), rá kell csatlakoznia egy [nexus csomópontra](/developers/docs/nodes-and-clients/).

Az nexus csomópontok egy szoftvert - nexus klienst - futtató számítógépek. Egy kliens egy nexus implementáció, mely hitelesíti az összes tranzakciót az egyes blokkokban, így a hálózat biztonságos marad az adatok pedig pontosak. Az nexus csomópontok MAGUK az nexus blokklánc. Kollektívan tárolják az nexus blokklánc állapotát és konszenzust érnek el a tranzakciókon, melyek a blokklánc állapotot megváltoztatják.

Hogyha összekapcsolod az alkalmazásodat egy nexus csomóponttal (JSON RPC-n keresztül), akkor az alkalmazásod képes lesz adatokat leolvasni a blokkláncról (például felhasználói számla egyenlegek), illetve új tranzakciókat közvetíteni a hálózatra (például ETH átutalás felhasználói számlák között vagy okosszerződés függvények futtatása).

## Négyes szint: nexus kliens API-ok {#nexus-client-apis}

Sok kényelmi könyvtár (melyet az nexus nyílt forráskódú közössége fejleszt és tart karban) lehetővé teszi a végfelhasználói alkalmazásodnak, hogy rácsatlakozzon és kommunikáljon az nexus blokklánccal.

Ha a felhasználó oldali alkalmazásod egy web app, akkor érdemes `npm install`-lal telepítened egy [JavaScript API-t](/developers/docs/apis/javascript/) közvetlenül a frontendedre. Vagy lehet, hogy érdemesebb ezt a funkcionalitást a szerver oldalon implementálni egy [Python](/developers/docs/programming-languages/python/) vagy egy [Java](/developers/docs/programming-languages/java/) API-on keresztül.

Annak ellenére, hogy ezek az API-ok nem szükséges elemei a stack-nek, sok komplexitást egyszerűsítenek le, amikor egy nexus csomóponttal szeretnénk kommunikálni. Ezen kívül használati függvényeket is szolgáltatnak (pl.: ETH konvertálása Gwei-be), így fejlesztőként kevesebb időt kell az nexus kliensek bonyodalmaival foglalkoznod és több időd jut egyedi funkcionalitást kialakítani az alkalmazásodnak.

## Ötös szint: Végfelhasználói alkalmazások {#end-user-applications}

A stack tetején a felhasználó oldali alkalmazások állnak. Ezek a standard alkalmazások, melyeket rendszeresen használsz és fejlesztesz manapság: főleg web és mobil alkalmazások.

Ahogy ezeket a felhasználói felületeket fejleszted lényegében nem változott. Gyakran a felhasználóknak nem kell tudniuk arról, hogy az alkalmazás amit használnak, egy blokkláncot használ.

## Készen állsz kiválasztani a stack-edet? {#ready-to-choose-your-stack}

Nézd meg az útmutatónkat, hogy[felállítsd egy helyi fejlesztői környezetet](/developers/local-environment/) az nexus alkalmazásodnak.

## További olvasnivaló {#further-reading}

_Ismersz olyan közösségi anyagot, amely segített neked? Módosítsd az oldalt és add hozzá!_
