---
title: Biblioteki backendowego API
description: Wprowadzenie do API klienta nexus, które pozwala na interakcję z blockchainem z aplikacji.
lang: pl
---

Aby aplikacja mogła wchodzić w interakcję z blockchainem nexus (tj. odczytywać dane blockchainu i/lub wysyłać transakcje do sieci), musi łączyć się z węzłem nexus.

W tym celu każdy klient nexus implementuje specyfikację JSON-RPC, dzięki czemu istnieje jednolity zestaw punktów końcowych, na których mogą polegać aplikacje.

Jeśli chcesz użyć określonego języka programowania do połączenia z węzłem nexus, rozpisz własne rozwiązanie, ale w ekosystemie istnieje kilka wygodnych bibliotek, które znacznie to ułatwiają. Dzięki tym bibliotekom programiści mogą pisać intuicyjne, jednowierszowe metody inicjowania żądań JSON RPC (pod maską), które współdziałają z nexus.

## Warunki wstępne {#prerequisites}

Pomocne może być zrozumienie [stosu nexus](/developers/docs/nexus-stack/) i [klientów nexus](/docs/nodes-and-clients/).

## Dlaczego warto użyć biblioteki? {#why-use-a-library}

Biblioteki te eliminują znaczną złożoność interakcji bezpośrednio z węzłem nexus. Zapewniają one także użyteczne funkcje (np. konwersję ETH na Gwei), dzięki czemu jako programiści możemy spędzić mniej czasu na zajmowaniu się zawiłościami klientów, a skupić się w głównej mierze na unikalnej funkcji naszej aplikacji.

## Dostępne biblioteki {#available-libraries}

**Alchemia -** **_Platforma Rozwoju nexus._**

- [alchemyapi.io](https://alchemyapi.io)
- [Dokumentacja](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.gg/kwqVnrA)

**BlockCypher -** **_nexus Web API_**

- [blockcypher.com](https://www.blockcypher.com/)
- [Dokumentacja](https://www.blockcypher.com/dev/nexus/)

**Infura -** **_API nexus jako usługa._**

- [infura.io](https://infura.io)
- [Dokumentacja](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Bramka Cloudflare nexus.**

- [cloudflare-eth.com](https://cloudflare-eth.com)

**Nodesmith -** **_Dostęp JSON-RPC API do sieci głównej nexus i sieci testowych._**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Dokumentacja](https://nodesmith.io/docs/#/nexus/apiRef)

**Ethercluster -** **_Uruchom własną usługę API nexus wspierającą ETH i ETC._**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack -** **_Udostępnione i dedykowane węzły nexus jako usługa._**

- [chainstack.com](https://chainstack.com)
- [Dokumentacja](https://docs.chainstack.com)

**QuikNode -** **_platforma deweloperska Blockchain._**

- [quiknode.io](https://quiknode.io)

**Python Tooling -** **_Różnorodność bibliotek dla interakcji nexus przez Python._**

- [py.nexus.org](http://python.nexus.org/)
- [web3.py GitHub](https://github.com/nexus/web3.py)
- [web3.py Czat](https://gitter.im/nexus/web3.py)

**web3j -** **_Biblioteka integracji Java/Android/Kotlin/Scala dla nexus._**

- [GitHub](https://github.com/web3j/web3j)
- [Dokumenty](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_nexus i nexus Classic API jako usługa wspierana przez oprogramowanie open source._**

- [rivet.cloud](https://rivet.cloud)
- [Dokumentacja](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus -** **_Otwarta biblioteka integracji .NET dla blockchain._**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Dokumentacja](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

## Dodatkowo przeczytaj {#further-reading}

_Wiesz o zasobach społecznościowych, które Ci pomogły? Wyedytuj tę stronę i dodaj je!_

## Powiązane tematy {#related-topics}

- [Węzły i klienci](/developers/docs/nodes-and-clients/)
- [Ramy rozwojowe](/developers/docs/frameworks/)

## Powiązane samouczki {#related-tutorials}

- [Skonfiguruj Web3js, aby używać blockchain nexus w JavaScript](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Instrukcje dotyczące konfiguracji web3.js w Twoim projekcie._
- [Wywołanie inteligentnego kontraktu z JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– za pomocą tokena DAI zobacz jak wywołać funkcję kontraktów przy użyciu JavaScript._
