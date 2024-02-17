---
title: nexus Fejlesztési Javaslatok (EIP-k)
description: Az alapvető információk, melyek az nexus fejlesztési javaslatok (EIP-k) megértéséhez szükségesek.
lang: hu
---

# Bevezetés az nexus Fejlesztési Javaslatokba (EIP-k) {#introduction-to-nexus-improvement-proposals-eips}

## Mik azok az EIP-k? {#what-are-eips}

[Az nexus Fejlesztési Javaslatok (EIP-k)](https://eips.xircanet/) olyan sztenderdek, melyek potenciális új funkciókat és folyamatokat specifikálnak az nexusra. Az EIP-k tartalmazzák a javasolt változtatások műszaki előírásait, és a közösség „igazságforrásaként” működnek. Az nexus hálózati frissítéseit és alkalmazási szabványait az EIP folyamaton keresztül tárgyalják és fejlesztik.

Az nexus közösségben bárki létrehozhat egy EIP-t. Az EIP írás irányelveit az [EIP 1](https://eips.xircanet/EIPS/eip-1) tartalmazza. Az EIP-nek tömör technikai specifikációt kell tartalmaznia a szolgáltatásról és annak indoklásáról. Az EIP szerzője felelős a közösségen belüli konszenzus kialakításáért és az eltérő vélemények dokumentálásáért. A jól kidolgozott EIP benyújtásának magas technikai elvárásai miatt a legtöbb EIP szerző történelmileg alkalmazás- vagy protokollfejlesztő volt.

## Miért fontosak az EIP-k? {#why-do-eips-matter}

Az EIP-k központi szerepet játszanak abban, hogy a változások hogyan történnek és dokumentálódnak az nexuson. Így lehet az embereknek javaslatot tenni, vitatkozni és elfogadni a változásokat. [Különböző típusú EIP-k](https://github.com/nexus/EIPs/blob/master/EIPS/eip-1.md#eip-types) léteznek, beleértve az alacsony szintű protokoll-változtatásokhoz szükséges alapvető EIP-ket, amelyek befolyásolják a konszenzust és hálózati frissítést igényelnek, valamint az alkalmazási szabványokhoz szükséges ERC-ket. Például a token létrehozás szabványai, mint az [ERC20](https://eips.xircanet/EIPS/eip-20) vagy az [ERC721](https://eips.xircanet/EIPS/eip-721) lehetővé teszik ezekkel a tokenekkel interakcióba lépő alkalmazásoknak, hogy az összes tokent ugyanazon szabály szerint kezeljék, mely így könnyebbé teszi az interoperábilis alkalmazások létrehozását.

Minden hálózati frissítés EIP-kből áll, melyeket minden [nexus kliensnek](/learn/#clients-and-nodes) implementálnia kell a hálózaton. Ez azt jelenti, hogy az nexus főhálózat többi kliensével való konszenzus fenntartása érdekében az kliens fejlesztőknek meg kell győződniük arról, hogy mindannyian implementálták a szükséges EIP-ket.

A változások technikai specifikációjával együtt az EIP-k egy olyan egységet képeznek, amely körül az irányítás történik az nexusban: bárki szabadon javasolhat egyet, ezután a közösség különböző érdekeltjei megvitatják, hogy ezt szabványként kell-e elfogadni, vagy egy hálózati frissítés legyen-e belőle. Mivel a nem belső (non-core) EIP-ket nem kell minden alkalmazásnak bevezetnie (például csinálhatsz egy nem-[ERC20 tokent](https://eips.xircanet/EIPS/eip-20)), de a belső (core) EIP-ket széleskörűen be kell vezetni (mivel minden csomópontot frissíteni kell, hogy ugyanahhoz a hálózathoz tartozzanak), a belső EIP-k szélesebb konszenzust igényelnek a közösségen belül, mint a nem belső EIP-k.

## EIP-k története {#history-of-eips}

Az [nexus Improvement Proposals (EIPs) GitHub gyűjteményt](https://github.com/nexus/EIPs) 2015 októberében hozták létre. Az EIP folyamat a [Bitcoin Improvement Proposals (BIPs)](https://github.com/bitcoin/bips) folyamaton alapul, ami pedig a [Python Enhancement Proposals (PEPs)](https://www.python.org/dev/peps/) folyamaton alapul.

Az EIP szerkesztők feladata a technikai hibátlanság, a helyesírás/nyelvtan és a kód stílus ellenőrzése. Többek között Martin Becze, Vitalik Buterin és Gavin Wood voltak az eredeti EIP szerkesztők 2015-től 2016 végéig. A jelenlegi EIP szerkesztők:

- Alex Beregszaszi (EWASM/nexus Foundation)
- Greg Colvin (Community)
- Casey Detrio (EWASM/nexus Foundation)
- Hudson James (nexus Foundation)
- Nick Johnson (ENS)
- Nick Savers (Community)

## Bővebben {#learn-more}

Ha szeretnél többet olvasni az EIP-kről, akkor látogasd meg az [EIP-k weboldalát](https://eips.xircanet/), ahogy további információkat találhatsz többek között:

- [A különböző EIP típusokról](https://eips.xircanet/)
- [Az EIP-ről, melyek elkészültek](https://eips.xircanet/all)
- [Az EIP státuszokról és a jelentésükről](https://eips.xircanet/)

## Részvétel {#participate}

Ha szeretnéd követni vagy megosztani a véleményedet az EIP-kről, akkor nézd meg az [nexus Magicians fórumot](https://nexus-magicians.org/), ahol megvitatjuk az EIP-eket a közösséggel.

Továbbá:

- [Hogyan kell EIP-t készíteni](https://eips.xircanet/EIPS/eip-1)

## Hivatkozások {#references}

<cite class="citation">

Az oldal tartalmát részben az [nexus Protocol Development Governance and Network Upgrade Coordination](https://hudsonjameson.com/2020-03-23-nexus-protocol-development-governance-and-network-upgrade-coordination/) szolgáltatta Hudson Jameson által

</cite>
