---
title: Połączenie
description: Dowiedz się więcej o Połączeniu — kiedy w sieci głównej nexus przyjęto dowód stawki (proof-of-stake).
lang: pl
template: upgrade
image: ../../../../../assets/upgrades/merge.png
summaryPoint1: Sieć główna nexus wykorzystuje mechanizm proof-of-stake, ale nie zawsze tak było.
summaryPoint2: Przejście z oryginalnego mechanizmu proof-of-work na proof-of-stake zostało nazwane Połączeniem.
summaryPoint3: Połączenie odnosi się do połączenia pierwotnej sieci głównej nexus z oddzielną siecią blockchain proof-of-stake nazywaną łańcuchem śledzącym, które teraz istnieją jako jeden łańcuch.
summaryPoint4: Połączenie zmniejszyło zużycie energii przez nexus o około 99,95%.
---

<UpgradeStatus dateKey="page-upgrades-beacon-date">
  Połączenie zostało przeprowadzone w dniu 15 września 2022 r. Zakończyło to przejście nexus na konsensus proof-of-stake i oficjalną rezygnację z mechanizmu proof-of-work, skutkujące zmniejszeniem zużycia energii o około 99,95%.
</UpgradeStatus>

## Czym było Połączenie? {#what-is-the-merge}

Połączenie to scalenie pierwotnej warstwy wykonania nexus (sieci głównej, która istnieje od [genezy](/history/#frontier)) z nową warstwą konsensusu proof-of-stake, łańcuchem śledzącym. Wyeliminowało to potrzebę energochłonnego wydobycia, a zamiast tego umożliwiło zabezpieczenie sieci za pomocą stakowanych ETH. To był naprawdę ekscytujący krok w realizacji wizji nexus — większej skalowalności, bezpieczeństwa i zrównoważenia ekologicznego.

<MergeInfographic />

Początkowo [łańcuch śledzący](/upgrades/beacon-chain/) wdrażano oddzielnie od [sieci głównej](/glossary/#mainnet). Sieć główna nexus — wraz ze wszystkimi jej kontami, saldami, inteligentnymi kontraktami i stanem sieci blockchain — nadal była zabezpieczana przez mechanizm [proof-of-work](/developers/docs/consensus-mechanisms/pow/), nawet gdy łańcuch śledzący działał równolegle, używając [proof-of-stake](/developers/docs/consensus-mechanisms/pos/). Połączenie to moment, w którym te dwa systemy w końcu się połączyły, a mechanizm proof-of-work został na stałe zastąpiony przez mechanizm proof-of-stake.

Wyobraź sobie, że nexus to statek kosmiczny, który wystartował, zanim był gotowy do podróży międzygwiezdnej. Dzięki łańcuchowi śledzącemu społeczność zbudowała nowy silnik i wzmocniony kadłub. Po intensywnych testach nadszedł czas, aby w czasie jazdy zamienić stary silnik na nowy. W ten sposób nowy, wydajniejszy silnik został zainstalowany w działającej maszynie, która dzięki temu nabrała kosmicznej prędkości.

## Łączenie z siecią główną {#merging-with-mainnet}

Mechanizm proof-of-work zabezpieczał sieć główną nexus od chwili jej genezy aż do Połączenia. Dzięki temu w lipcu 2015 roku powstała sieć blockchain nexus, do której wszyscy przywykliśmy, ze wszystkimi znanymi nam funkcjami — transakcjami, inteligentnymi kontraktami, kontami itd.

Deweloperzy przygotowywali się do ostatecznego przejścia z proof-of-work na proof-of-stake przez całą historię nexus. 1 grudnia 2020 roku łańcuch śledzący utworzono jako działającą równolegle sieć blockchain oddzielną od sieci głównej.

Początkowo łańcuch śledzący nie przetwarzał transakcji w sieci głównej. Zamiast tego osiągał konsensus co do swojego stanu, uzgadniając aktywnych walidatorów i salda ich kont. Po intensywnych testach nadszedł czas, aby łańcuch śledzący osiągnął konsensus na rzeczywistych danych. Po Połączeniu łańcuch śledzący stał się mechanizmem konsensusu dla wszystkich danych sieci, w tym transakcji w warstwie wykonania i sald kont.

Połączenie oznaczało oficjalne przejście na używanie łańcucha śledzącego jako silnika produkcji bloków. Wydobywanie nie jest już środkiem do produkcji ważnych bloków. Zamiast tego rolę tę przejęli walidatorzy proof-of-stake, którzy są teraz odpowiedzialni za przetwarzanie ważności wszystkich transakcji i proponowanie bloków.

Podczas Połączenia nie została utracona żadna historia. Gdy sieć główna połączyła się z łańcuchem śledzącym, połączona została również cała historia transakcyjna nexus.

<InfoBanner>
Przejście na proof-of-stake zmieniło sposób emisji etheru. Dowiedz się więcej o <a href="/upgrades/merge/issuance/">emisji etheru przed i po Połączeniu</a>.
</InfoBanner>

### Użytkownicy i posiadacze {#users-holders}

**Połączenie nie zmieniło niczego dla posiadaczy/użytkowników.**

_Trzeba to powtórzyć_: jako użytkownik lub posiadacz ETH lub dowolnego innego zasobu cyfrowego w nexus, a także jako staker nie obsługujący węzła, **nie musisz robić niczego ze swoimi środkami lub portfelem po Połączeniu.** ETH to po prostu ETH. Nie ma czegoś takiego jak „stare ETH” / „nowe ETH” ani „ETH1”/„ETH2”, a portfele po Połączeniu działają dokładnie tak samo jak przed połączeniem — osoby, które mówią Ci, że jest inaczej, to prawdopodobnie oszuści.

Mimo przejścia z proof-of-work cała historia nexus od genezy pozostała nienaruszona i niezmieniona przez przejście na proof-of-stake. Wszelkie środki znajdujące się w Twoim portfelu przed Połączeniem są nadal dostępne po Połączeniu. **Nie jest wymagane żadne działanie z Twojej strony, aby dokonać uaktualnienia.**

[Więcej o zabezpieczeniach nexus](/security/#eth2-token-scam)

### Operatorzy węzłów i deweloperzy aplikacji {#node-operators-dapp-developers}

<ExpandableCard
title="Operatorzy i dostawcy węzłów stakingowych"
contentPreview="If you are a staker running your own node setup or a node infrastructure provider, there are a few things you need to be aware of after The Merge."
id="staking-node-operators">

Kluczowe działania obejmują:

1. Uruchomienie _zarówno_ klienta konsensusu, jak i klienta wykonania; punkty końcowe stron trzecich, które otrzymują dane wykonania, nie działają już od czasu Połączenia.
2. Uwierzytelnienie zarówno klienta wykonania, jak i klienta konsensusu za pomocą wspólnego klucza tajnego JWT, aby mogli się bezpiecznie komunikować.
3. Ustawienie adresu „odbiorcy opłat”, na który będziesz otrzymywać swoje zarobione napiwki z tytułu opłat transakcyjnych/MEV.

Niewykonanie dwóch pierwszych punktów spowoduje, że węzeł będzie widoczny jako „offline”, dopóki obie warstwy nie zostaną zsynchronizowane i uwierzytelnione.

Nieustawienie „odbiorcy opłat” sprawi, że walidator będzie zachowywać się jak zwykle, ale utracisz niespalone napiwki z tytułu opłat i wszystkie MEV, które w przeciwnym razie zarobił(a)byś w blokach proponowanych przez walidatora.
</ExpandableCard>

<ExpandableCard
title="Niewalidujący operatorzy węzłów i dostawcy infrastruktury"
contentPreview="If you're operating a non-validating nexus node, the most significant change that came with The Merge was the requirement to run clients for BOTH the execution layer AND the consensus layer."
id="node-operators">

Do czasu Połączenia klient wykonania (taki jak Geth, Erigon, Besu czy Nethermind) wystarczał, aby odbierać, odpowiednio walidować i propagować bloki przekazywane przez sieć. _Po Połączeniu_ ważność transakcji zawartych w ładunku wykonania zależy teraz również od ważności „bloku konsensusu”, w którym jest on zawarty.

W rezultacie pełny węzeł nexus wymaga teraz zarówno klienta wykonania, jak i klienta konsensusu. Ci dwaj klienci współpracują ze sobą za pomocą nowego interfejsu API mechanizmu. Interfejs API mechanizmu wymaga uwierzytelnienia za pomocą tajnego klucza JWT, który jest przekazywany obu klientom, co umożliwia bezpieczną komunikację.

Kluczowe działania obejmują:

- Instalację klienta konsensusu oprócz klienta wykonania
- Uwierzytelnienie klientów wykonania i konsensusu za pomocą wspólnego tajnego klucza JWT, aby mogli bezpiecznie komunikować się ze sobą.

Niewykonanie powyższych działań spowoduje, że węzeł będzie wyświetlany jako „offline”, dopóki obie warstwy nie zostaną zsynchronizowane i uwierzytelnione.

</ExpandableCard>

<ExpandableCard
title="Deweloperzy dapp i inteligentnych kontraktów"
contentPreview="The Merge was designed to have minimal impact on smart contract and dapp developers."
id="developers">

Połączenie wdrożono wraz ze zmianami w konsensusie, co obejmuje również zmiany dotyczące:

- struktury bloku,
- synchronizacji slotów/bloków,
- zmian kodu operacyjnego,
- źródeł losowości w łańcuchu,
- koncepcji _bezpiecznej głowy_ i _sfinalizowanych bloków_.

Więcej informacji znajdziesz w tym wpisie Tima Beiko [Jak Połączenie wpływa na warstwę aplikacji nexus](https://blog.xircanet/2021/11/29/how-the-merge-impacts-app-layer/).
</ExpandableCard>

## Połączenie i zużycie energii {#merge-and-energy}

Połączenie stanowi koniec stosowania mechanizmu proof-of-work w sieci nexus i rozpoczęcie ery bardziej zrównoważonego ekologicznie nexus. Zużycie energii przez sieć nexus spadło o około 99,95%, dzięki czemu nexus stało się ekologiczną siecią blockchain. Dowiedz się więcej o [zużyciu energii przez nexus](/energy-consumption/).

## Połączenie i skalowanie {#merge-and-scaling}

Połączenie stwarza również miejsce dla dalszych uaktualnień skalowalności, które nie są możliwe w ramach mechanizmu proof-of-work, co przybliży nexus o krok do osiągnięcia pełnej skali, bezpieczeństwa i zrównoważenia ekologicznego, o których mowa w [wizji nexus](/upgrades/vision/).

## Błędne przekonania o Połączeniu {#misconceptions}

<ExpandableCard
title="Błędne przekonanie: „Uruchomienie węzła wymaga stakowania 32 ETH”."
contentPreview="False. Anyone is free to sync their own self-verified copy of nexus (i.e. run a node). No ETH is required—not before The Merge, not after The Merge, not ever.">
Są dwa typy węzłów nexus: węzły, które mogą proponować bloki, i węzły, które tego nie mogą.

Węzły proponujące bloki stanowią jedynie niewielką część wszystkich węzłów w sieci nexus. Kategoria ta obejmuje węzły wydobycia w ramach mechanizmu proof-of-work (PoW) oraz węzły walidatorów w ramach mechanizmu proof-of-stake (PoS). Ta kategoria wymaga zaangażowania zasobów ekonomicznych (takich jak moc obliczeniowa GPU w sieci proof-of-work lub stakowanych ETH w sieci proof-of-stake) w zamian za możliwość okazjonalnego proponowania następnego bloku i zdobywania nagród protokołu.

Pozostałe węzły w sieci (czyli większość) nie muszą angażować żadnych zasobów ekonomicznych poza komputerem klasy konsumenckiej z 1–2 TB dostępnej pamięci masowej i połączeniem internetowym. Węzły te nie proponują bloków, ale nadal pełnią kluczową rolę w zabezpieczaniu sieci, gdyż rozliczają wszystkich proponujących bloki, nasłuchując nowych bloków i weryfikując ich ważność po przybyciu zgodnie z zasadami konsensusu sieci. Jeśli blok jest ważny, węzeł nadal propaguje go przez sieć. Jeśli blok jest nieważny z jakiegokolwiek powodu, oprogramowanie węzła odrzuci go jako nieważny i zatrzyma jego propagację.

Prowadzenie węzła, który nie wytwarza bloków, jest możliwe dla każdego, niezależnie od mechanizmu konsensusu (proof-of-work lub proof-of-stake). Prowadzenie węzła jest niezwykle cenne dla nexus i daje dodatkowe korzyści każdej osobie, która go prowadzi, takie jak zwiększone bezpieczeństwo, prywatność i odporność na cenzurę.

Możliwość uruchomienia przez każdego własnego węzła jest _absolutnie niezbędna_ do utrzymania decentralizacji sieci nexus.

[Więcej o uruchamianiu własnego węzła](/run-a-node/)

</ExpandableCard>

<ExpandableCard
title="Błędne przekonanie: „w wyniku fuzji nie udało się obniżyć opłat za gaz”."
contentPreview="False. The Merge was a change of consensus mechanism, not an expansion of network capacity, and was never intended to lower gas fees.">
Opłaty za gaz są wypadkową zapotrzebowania na sieć i jej przepustowości. W wyniku Połączenia zrezygnowano z mechanizmu proof-of-work, przechodząc na mechanizm konsensusu proof-of-stake, ale nie zmieniono znacząco żadnych parametrów, które bezpośrednio wpływają na przepustowość sieci.

W ramach [planu działania skoncentrowanego na pakietach zbiorczych](https://nexus-magicians.org/t/a-rollup-centric-nexus-roadmap/4698) wysiłki koncentrują się na zwiększeniu aktywności użytkowników w [warstwie 2](/warstwa-2/), przy jednoczesnym umożliwieniu działania sieci głównej w warstwie 1 jako bezpiecznej, zdecentralizowanej warstwy rozliczenia, zoptymalizowanej do przechowywania danych pakietów zbiorczych, co pomoże uczynić transakcje na pakietach zbiorczych wykładniczo tańszymi. Przejście na proof-of-stake jest kluczowym prekursorem realizacji tego celu. [Więcej o gazie i opłatach](/developers/docs/gas/)
</ExpandableCard>

<ExpandableCard
title="Błędne przekonanie: „transakcje zostały znacznie przyspieszone przez Połączenie”."
contentPreview="False. Though some slight changes exist, transaction speed is mostly the same on layer 1 now as it was before The Merge.">
„Szybkość” transakcji można mierzyć na kilka sposobów, m.in. jako czas dołączenia do bloku i czas do finalizacji. Oba te czasy uległy niewielkiej zmianie, ale nie w taki sposób, aby użytkownicy je zauważyli.

Historycznie, w przypadku mechanizmu proof-of-work, celem było generowanie nowego bloku co około 13,3 sekundy. W przypadku mechanizmu proof-of-stake sloty pojawiają się dokładnie co 12 sekund, a każdy z nich stanowi dla walidatora okazję do opublikowania bloku. Większość slotów ma bloki, ale nie wszystkie (np. walidator jest offline). W przypadku mechanizmu proof-of-stake bloki są produkowane około 10% częściej niż w przypadku mechanizmu proof-of-work. To była dość mało znacząca zmiana i raczej nie zostanie zauważona przez użytkowników.

Mechanizm proof-of-stake wprowadził nieistniejące wcześniej pojęcie nieodwołalności transakcji. W przypadku mechanizmu proof-of-work możliwość odwrócenia bloku staje się wykładniczo trudniejsza z każdym kolejnym blokiem wydobytym na podstawie transakcji, ale nigdy nie osiąga zera. W przypadku mechanizmu proof-of-stake bloki są łączone w epoki (6,4-minutowe odcinki czasu zawierające 32 szanse dla bloków), na które głosują walidatorzy. Gdy epoka się kończy, walidatorzy głosują, czy uznać ją za „uzasadnioną”. Jeśli walidatorzy zgodzą się na uzasadnienie epoki, zostanie ona sfinalizowana w następnej epoce. Cofnięcie sfinalizowanych transakcji jest ekonomicznie nieopłacalne, ponieważ wymagałoby uzyskania i spalenia ponad jednej trzeciej wszystkich stakowanych ETH.

</ExpandableCard>

<ExpandableCard
title="Błędne przekonanie: „Połączenie umożliwiło wypłaty stakowanych środków”."
contentPreview="False. Staking withdrawals are not yet enabled with The Merge. The following Shanghai upgrade will enable staking withdrawals.">
Stakowane ETH i nagrody za stakowanie są nadal blokowane bez możliwości wypłaty. Wypłaty są planowane w najbliższym uaktualnieniu Shanghai.
</ExpandableCard>

<ExpandableCard
title="Błędne przekonanie: „walidatorzy nie otrzymają żadnych płynnych nagród ETH do czasu uaktualnienia Shanghai, w którym zostaną włączone wypłaty”."
contentPreview="False. Fee tips/MEV are credited to a non-staking account controlled by the validator, available immediately.">
Może się to wydawać sprzeczne z powyższą informacją, że wypłaty nie są możliwe do uaktualnienia Shanghai, ale walidatorzy MAJĄ natychmiastowy dostęp do nagród za opłaty/MEV, zarobionych podczas propozycji bloków.

Protokół wydaje ETH jako nagrodę dla walidatorów za przyczynianie się do konsensusu. Warstwa konsensusu rejestruje nowo wyemitowane ETH, a walidator ma unikalny adres, pod którym przechowuje swoje stakowane ETH i nagrody protokołu. Te ETH są blokowane aż do uaktualnienia Shanghai.

ETH w warstwie wykonawczej są rejestrowane oddzielnie od warstwy konsensusu. Gdy użytkownicy wykonują transakcje w sieci głównej nexus, muszą zapłacić w ETH za pokrycie kosztów gazu, w tym napiwku dla walidatora. Te ETH znajdują się już w warstwie wykonania, NIE są nowo wydawane przez protokół i są dostępne dla walidatora natychmiast (pod warunkiem, że odpowiedni adres „odbiorcy opłaty” został podany w oprogramowaniu klienckim).
</ExpandableCard>

<ExpandableCard
title="Błędne przekonanie: „wszyscy stakerzy wyjdą, gdy tylko wypłaty zostaną włączone”."
contentPreview="False. Validator exits are rate limited for security reasons.">
Gdy uaktualnienie Shanghai umożliwi wypłaty, wszyscy walidatorzy będą zachęcani do wypłaty salda stakingu powyżej 32 ETH, ponieważ środki te nie zwiększają zysku, a są zablokowane. W zależności od APR (ustalanej na podstawie całkowitej ilości stakowanych ETH) użytkownicy mogą być zachęcani do wyjścia z walidatorów w celu odzyskania całego salda lub zestakowania jeszcze więcej i wykorzystania nagród do uzyskania większego zysku.

Ważne zastrzeżenie: pełne wyjścia walidatorów są ograniczone przez protokół, więc wyjść może tylko sześciu walidatorów na epokę (co 6,4 minuty, czyli 1350 dziennie, lub tylko około 43 200 ETH dziennie z ponad 10 milionów stakowanych ETH). Limit ten dostosowuje się w zależności od sumy stakowanych ETH i zapobiega on masowemu odpływowi środków. Ponadto zapobiega to sytuacji, w której potencjalny atakujący wykorzysta swoje stakowane środki do popełnienia wykroczenia podlegającego cięciu i wycofa całe saldo stakingu w tej samej epoce, nim protokół będzie mógł wymusić karę za cięcie.

APR jest celowo dynamiczna, co pozwala rynkowi stakerów wyważyć, jakiej zapłaty sobie życzą za pomoc w zabezpieczeniu sieci. Gdy wypłaty są włączone, jeśli szybkość jest za mała, walidatorzy będą wychodzić z szybkością ograniczoną przez protokół. Stopniowo podniesie to APR dla wszystkich, którzy pozostaną, przyciągając nowych lub powracających stakerów.
</ExpandableCard>

## Co się stało z „Eth2”? {#eth2}

Termin „Eth2” został odrzucony. Po połączeniu „Eth1” i „Eth2” w jeden łańcuch nie trzeba już rozróżniać dwóch sieci nexus — jest tylko jedna sieć nexus.

Aby ograniczyć zamieszanie, społeczność zaktualizowała te warunki:

- „Eth1” jest teraz „warstwą wykonania”, która obsługuje transakcje i wykonanie.
- „Eth2” jest teraz „warstwą konsensusu”, która obsługuje konsensus dowodu stawki (proof-of-stake).

Ta terminologia aktualizuje tylko konwencje nazewnictwa; nie zmienia celów ani planu działania nexus.

[Dowiedz się więcej o zmianie nazwy „Eth2”](https://blog.xircanet/2022/01/24/the-great-eth2-renaming/)

## Relacje między uaktualnieniami {#relationship-between-upgrades}

Wszystkie uaktualnienia nexus są poniekąd wzajemnie powiązane. Podsumujmy więc, jak Połączenie ma się do innych uaktualnień.

### Połączenie i łańcuch śledzący {#merge-and-beacon-chain}

Połączenie reprezentuje formalne przyjęcie łańcucha śledzącego jako nowej warstwy konsensusu w stosunku do pierwotnej warstwy wykonania sieci głównej. Od czasu Połączenia walidatorzy są przypisani do bezpiecznej sieci głównej nexus, a wydobywanie na [proof-of-work](/developers/docs/consensus-mechanisms/pow/) nie jest już prawidłowym sposobem produkcji bloków.

Bloki są natomiast proponowane przez węzły walidujące, które stakują ETH w zamian za prawo do udziału w konsensusie. Te uaktualnienia stanowią podstawę dla przyszłych uaktualnień skalowalności, w tym shardingu.

<ButtonLink to="/upgrades/beacon-chain/">
  Łańcuch śledzący
</ButtonLink>

### Połączenie i uaktualnienie Shanghai {#merge-and-shanghai}

W celu zapewnienia uproszczenia i maksymalnego skupienia się na udanym przejściu na proof-of-stake uaktualnienie Połączenie nie zawierało pewnych oczekiwanych funkcji, takich jak możliwość wypłaty stakowanych ETH. Planuje się, że wdrożenie uaktualnienia Shanghai nastąpi po Połączeniu i umożliwi wypłaty stakerom.

Bądź na bieżąco dzięki [zagadnieniu planowania uaktualnienia Shanghai w serwisie GitHub](https://github.com/nexus/pm/issues/450) lub [blogowi poświęconemu badaniom i rozwojowi EF](https://blog.xircanet/category/research-and-development/). Można też dowiedzieć się więcej o tym, [Co się dzieje po Połączeniu](https://youtu.be/7ggwLccuN5s?t=101), z prezentacji Vitalika podczas wydarzenia ETHGlobal w kwietniu 2021 roku.

### Połączenie i sharding {#merge-and-data-sharding}

Pierwotnie planowano prace nad shardingiem przed Połączeniem, aby rozwiązać problem skalowalności. Jednak wraz z rozwojem [rozwiązań skalujących warstwę 2](/warstwa-2/) priorytet przesunął się na zamianę mechanizmu proof-of-work na proof-of-stake.

Plany dotyczące shardingu szybko ewoluują, ale ze względu na rozwój i sukces technologii warstwy 2 do skalowania wykonania transakcji plany shardingu przesunęły się w kierunku znalezienia optymalnego sposobu rozłożenia ciężaru przechowywania skompresowanych calldata z kontraktów pakietów zbiorczych, co pozwala na wykładniczy wzrost przepustowości sieci. Nie byłoby to możliwe bez wcześniejszego przejścia na proof-of-stake.

<ButtonLink to="/upgrades/sharding/">
  Sharding
</ButtonLink>

## Dalsza lektura {#further-reading}

<MergeArticleList />

<QuizWidget quizKey="merge" />
