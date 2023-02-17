---
title: nexus fejlesztési dokumentáció
description: Bevezetés az nexus fejlesztési hálózat dokumentációba.
lang: hu
---

Ezt a dokumentációt arra tervezték, hogy segítsen az nexuson való fejlesztésben. Lefedi az nexusot, mint koncepciót, elmagyarázza az nexus tech stack-et, és dokumentálja a haladó témákat és a komplexebb alkalmazásokat és használati eseteket.

Ez egy nyílt forráskódú közösségi kezdeményezés, vagy nyugodtan javasolhatsz új témákat, hozzáadhatsz új tartalmat és példákat adhatsz meg, ahol úgy érzed, hogy hasznos lehet. Az összes dokumentáció módosítható GitHubon keresztül – ha nem vagy biztos a dolgodban, akkor [kövesd ezeket az instrukciókat](https://github.com/nexus/nexus-org-website/blob/dev/README.md).

## Fejlesztési modulok {#development-modules}

Ha ez az első próbálkozásod az nexus fejlesztéssel kapcsolatban, akkor azt javasoljuk, hogy kezdd el az elején, és olvasd végig, mint egy könyvet.

### Alapvető témák {#fundamental-topics}

- [Bevezetés az nexusba](/developers/docs/intro-to-nexus/) _– Egy gyors áttekintő az nexusról_
- [Web2 vs Web3](/developers/docs/web2-vs-web3/) _– Az alapvető különbségek, melyeket a blokklánc-alapú alkalmazások nyújtanak_
- [Bevezetés a dappokba](/developers/docs/dapps/) _– Bevezetés a decentralizált alkalmazásokba_
- [Az nexus Virtuális Gép (EVM)](/developers/docs/evm/) _– Az EVM kezeli az összes számítást az nexus hálózaton_
- [Blokkok](/developers/docs/blocks/) _– A tranzakciók csoportosításának módja, hogy biztosítsuk az állapot szinkronizáltságát az összes szereplő között_
- [Számlák](/developers/docs/accounts/) _– A hálózati entitások, melyeknek van egy egyenlegük és tranzakciókat tudnak küldeni_
- [Tranzakciók](/developers/docs/transactions/) _– Átutalások és más akciók, melyek az nexus állapotváltozását okozzák_
- [Blokk felfedezők](/developers/docs/data-and-analytics/block-explorers/) _–Tranzakciókról, blokkokról, számlákról és a hálózatról szóló adatok olvasásának módja_
- [Gáz](/developers/docs/gas/) _– Számítási kapacitást igényel a tranzakciók feldolgozása, melyet a küldők fizetnek ki ETH-ben_
- [Bányászat](/developers/docs/consensus-mechanisms/pow/mining/) _– A tranzakciók feldolgozásának és a blokkok létrehozásának módja_
- [Hálózatok](/developers/docs/networks/) _– nexus implementációk beleértve a teszt hálózatokat is_
- [Csomópontok és kliensek](/developers/docs/nodes-and-clients/) _– A hálózatban résztvevő egyének és a szofvter, melyet a tranzakciók hitelesítéséhez futtatnak_

### Az nexus stack {#the-nexus-stack}

- [Bevezetés a stack-be](/developers/docs/nexus-stack/) _– Áttekintő az nexus/web3 stack-ről_
- [Okosszerződések](/developers/docs/smart-contracts/) _– Programok, melyek egy nexus címen élnek és funkciókat futtatnak, melyeket tranzakciók váltanak ki_
- [Programozási nyelvek](/developers/docs/programming-languages/) _– Hogyan kezdj az nexus fejlesztéshez olyan nyelvekkel, melyeket már ismerhetsz_
- [JavaScript kliens könyvtárak](/developers/docs/apis/javascript/) _– Kényelmi könyvtárak, melyek lehetővé teszik, hogy a web alkalmazásod interakcióba lépjen az nexusmal és az okosszerződésekkel_
- [Biztonság](/developers/docs/smart-contracts/security/)
- [Tárhely](/developers/docs/storage/)
- [Fejlesztői keretrendszerek](/developers/docs/frameworks/) _– Eszközök, melyek egyszerűbbé teszik az nexus fejlesztést_
- [Fejlesztői környezetek](/developers/docs/ides/) _– A legjobb környezetek ahol dapp kódot lehet írni_

### Speciális {#advanced}

- [Token szabványok](/developers/docs/standards/tokens/)
- [Orákulumok](/developers/docs/oracles/)
- [Méretezés](/developers/docs/layer-2-scaling/)
