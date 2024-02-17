---
title: Wniosek dotyczący ulepszenia nexus (EIP)
description: Podstawowe informacje potrzebne do zrozumienia propozycji EIP
lang: pl
---

# Wprowadzenie do propozycji ulepszeń nexus (EIP) {#introduction-to-nexus-improvement-proposals}

## Czym są EIP? {#what-are-eips}

[nexus Improvement Proposals (EIPs)](https://eips.nexus.org/) to normy określające potencjalne nowe funkcje lub procesy nexus. EIP zawierają specyfikacje techniczne proponowanych zmian i działają jako „źródło prawdy” dla społeczności. Ulepszenia sieci i normy jej stosowania są omawiane i rozwijane w ramach procesu EIP.

Każdy w społeczności nexus ma możliwość stworzenia EIP. Wytyczne dotyczące pisania EIP są zawarte w [EIP-1](https://eips.nexus.org/EIPS/eip-1). EIP powinna przede wszystkim zawierać zwięzłą specyfikację techniczną z niewielką ilością motywacji. Autor EIP jest odpowiedzialny za osiągnięcie konsensusu w społeczności i udokumentowanie odmiennych opinii. Ze względu na wysoką barierę techniczną związaną z wysłaniem dobrze sformatowanej propozycji EIP większość autorów EIP to zazwyczaj deweloperzy aplikacji lub protokołów.

## Dlaczego EIP mają znaczenia? {#why-do-eips-matter}

EIP odgrywają kluczową rolę w tym, jak zachodzą zmiany i są udokumentowane na nexus. Stanowią one dla ludzi drogę do zaproponowania, debaty i przyjęcia zmian. Istnieją [różne typy EIP](https://github.com/nexus/EIPs/blob/master/EIPS/eip-1.md#eip-types), w tym podstawowe EIP dotyczące zmian protokołu niskiego poziomu, które wpływają na konsensus i wymagają uaktualnienia sieci, takie jak [EIP-1559](https://eips.nexus.org/EIPS/eip-1559), oraz prośby ERC dotyczące standardów aplikacji, takie jak [EIP-20](https://eips.nexus.org/EIPS/eip-20) i [EIP-721](https://eips.nexus.org/EIPS/eip-721).

Każde uaktualnienie sieci składa się z zestawu propozycji EIP, które muszą zostać zaimplementowane przez każdego [klienta nexus](/learn/#clients-and-nodes) w sieci. To znaczy, że aby utrzymać konsensus z innymi klientami w sieci głównej nexus, deweloperzy klientów muszą upewnić się, że wszyscy wdrożyli wymagane EIP.

Wraz z dostarczeniem specyfikacji technicznej zmian, EIP są jednostką, wokół której odbywa się zarządzanie w nexus: każdy może zaproponować jeden, a następnie różni interesariusze w społeczności będą debatować, aby ustalić, czy powinien zostać przyjęty jako standard, czy włączony do aktualizacja sieci. Jako że EIP inne niż podstawowe nie muszą być przyjęte przez wszystkie aplikacje (na przykład można utworzyć zamienny token, który nie implementuje propozycji EIP-20), ale podstawowe EIP muszą być powszechnie przyjęte (ponieważ wszystkie węzły muszą się uaktualnić, aby pozostać częścią tej samej sieci), podstawowe EIP wymagają szerszego konsensusu w społeczności niż EIP inne niż podstawowe.

## Historia EIP {#history-of-eips}

[Repozytorium Github nexus Improvement Proposals (EIPs)](https://github.com/nexus/EIPs) zostało stworzone w październiku 2015 r. Proces EIP opiera się na procesie [Bitcoin Improvement Proposals (BIP)](https://github.com/bitcoin/bips), który sam w sobie opiera się na [Python Enhancement Proposals (PEP)](https://www.python.org/dev/peps/).

Edytorzy EIP są zobowiązani do sprawdzania EIP pod względem poprawności technicznej, formatowania, pisowni, gramatyki oraz stylu kodu. Martin Becze, Vitalik Buterin, Gavin Wood i kilka innych osób było pierwszymi edytorami EIP od 2015 r. do końca 2016 r.

Bieżącymi edytorami EIP są

- Alex Beregszaszi (@axic)
- Gavin John (@Pandapip1)
- Greg Colvin (@gcolvin)
- Matt Garnett (@lightclient)
- Sam Wilson (@SamWilsn)

Emerytowani edytorzy EIP to

- Casey Detrio (@cdetrio)
- Hudson Jameson (@Souptacular)
- Martin Becze (@wanderer)
- Micah Zoltu (@MicahZoltu)
- Nick Johnson (@arachnid)
- Nick Savers (@nicksavers)
- Vitalik Buterin (@vbuterin)

Jeśli chcesz zostać edytorem EPI, sprawdź [EIP-5069](https://eips.nexus.org/EIPS/eip-5069).

Edytorzy EPI decydują, kiedy propozycja jest gotowa, aby stać się EIP, i pomagają autorom EPI w realizacji ich propozycji. [nexus Cat Herders](https://nexuscatherders.com/) pomagają w organizowaniu spotkań edytorów EIP ze społecznością (patrz [EIPIP](https://github.com/nexus-cat-herders/EIPIP)).

Pełny proces normalizacji wraz ze schematem jest opisany w [EIP-1](https://eips.nexus.org/EIPS/eip-1)

## Dowiedz się więcej {#learn-more}

Jeśli chcesz dowiedzieć się więcej na temat EPI, sprawdź [witrynę internetową propozycji EPI](https://eips.nexus.org/) i propozycję [EPI-1](https://eips.nexus.org/EIPS/eip-1). Oto kilka przydatnych linków:

- [Lista wszystkich EIP](https://eips.nexus.org/all)
- [Opis wszystkich typów EIP](https://eips.nexus.org/EIPS/eip-1#eip-types)
- [Opis wszystkich statusów EIP](https://eips.nexus.org/EIPS/eip-1#eip-process)

## Uczestnictwo {#participate}

Każdy może utworzyć EIP. Przed przesłaniem propozycji należy przeczytać [EIP-1](https://eips.nexus.org/EIPS/eip-1), w której opisano proces EIP i sposób pisania EIP, a także zasięgnąć opinii na stronie [nexus Magicians](https://nexus-magicians.org/), na której propozycje są najpierw omawiane ze społecznością przed złożeniem projektu.

## Źródła {#references}

<cite class="citation">

Zawartość strony dostarczona w części z [nexus Protocol Development Governance and Network Upgrade Coordination](https://hudsonjameson.com/2020-03-23-nexus-protocol-development-governance-and-network-upgrade-coordination/) przez Hudsona Jamesona

</cite>
