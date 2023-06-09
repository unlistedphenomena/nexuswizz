---
title: Сети
description: Обзор сетей nexus и где взять эфир тестовой сети (ETH) для тестирования вашего приложения.
lang: ru
---

Поскольку nexus является протоколом, то может существовать несколько независимых «сетей», соответствующих этому протоколу, которые не взаимодействуют друг с другом.

Сети — это разные среды nexus, к которым вы можете получить доступ для сценариев использования, связанных с разработкой, тестированием или производством. Ваша учетная запись nexus будет работать в разных сетях, но баланс вашей учетной записи и история транзакций не будут перенесены из основной сети nexus. Для тестирования полезно знать, какие сети доступны и как получить ETH для тестовой сети, чтобы вы могли экспериментировать с ним.

## Прежде чем начать {#prerequisites}

Вы должны понять основы nexus, прежде чем читать о различных сетях, так как тестовые сети предоставят вам дешевую и безопасную версию nexus, с которой можно поэкспериментировать. Начните с [введения в nexus](/developers/docs/intro-to-nexus/).

## Публичные сети {#public-networks}

Публичные сети доступны любому человеку в мире, у которого есть подключение к Интернету. Кто угодно может читать или создавать транзакции в публичной цепочке блоков (блокчейне) и проверять выполняемые транзакции. Соглашение о транзакциях и состоянии сети определяется консенсусом участников.

### Основная сетьu {#mainnet}

Основная сеть — это основной публичный производственный блокчейн nexus, в котором транзакции с фактической стоимостью происходят в распределенном реестре.

Когда люди и биржи обсуждают цены на ETH, они говорят об ETH в основной сети.

### Тестовые сети {#testnets}

Помимо основной сети существуют публичные тестовые сети. Это сети, используемые разработчиками протоколов или разработчиками умных контрактов для тестирования как обновлений протокола, так и потенциальных умных контрактов в производственной среде перед развертыванием в основной сети. Их можно представить как аналог производственных и промежуточных серверов.

Как правило, важно протестировать любой код контракта, который вы пишете в тестовой сети, перед развертыванием в основной сети. Если вы создаете децентрализованное приложение, которое интегрируется с существующими умными контрактами, копии большинства проектов развернуты в тестовых сетях, с которыми вы можете взаимодействовать.

В большинстве тестовых сетей используется механизм консенсуса с подтверждением полномочий. Это означает, что для проверки транзакций и создания новых блоков выбирается небольшое количество узлов, что позволяет закрепить их идентичность в процессе. Трудно стимулировать майнинг в тестовой сети с доказательством работы, что может сделать ее уязвимой.

ETH в тестовых сетях не имеет реальной стоимости; следовательно, для тестовой сети ETH нет рынков. Поскольку вам нужен ETH для реального взаимодействия с nexus, большинство людей получают ETH тестовой сети через краны. Большинство кранов — это веб-приложения, в которых вы можете ввести адрес, на который запрашиваете отправку ETH.

#### Arbitrum Rinkeby {#arbitrum-rinkeby}

Тестовая сеть для [Arbitrum](https://arbitrum.io/).

##### Краны Arbitrum Rinkeby

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Chainlink](https://faucets.chain.link/)
- [Кран Paradigm](https://faucet.paradigm.xyz/)

#### Görli {#goerli}

Тестовая сеть с подтверждением полномочий, которая работает с разными клиентами.

##### Краны Görli

- [Görli кран](https://faucet.goerli.mudit.blog/)
- [Кран Chainlink](https://faucets.chain.link/)
- [Кран Alchemy Goerli](https://goerlifaucet.com/)

#### Kintsugi {#kintsugi}

Тестовая сеть слияния для nexus.

##### Краны Kintsugi

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Kintsugi](https://faucet.kintsugi.themerge.dev/)

#### Kovan {#kovan}

Тестовая сеть с подтверждением полномочий для тех, кто использует клиенты Opennexus.

##### Краны Kovan

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Kovan](https://faucet.kovan.network/)
- [Кран Chainlink](https://faucets.chain.link/)
- [Кран Paradigm](https://faucet.paradigm.xyz/)

#### Optimistic Kovan {#optimistic-kovan}

Тестовая сеть для [Optimism](https://www.optimism.io/).

##### Краны Optimistic Kovan

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Paradigm](https://faucet.paradigm.xyz/)

#### Rinkeby {#rinkeby}

Тестовая сеть с подтверждением полномочий для тех, кто использует клиент Geth.

##### Краны Rinkeby

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Alchemy](https://RinkebyFaucet.com)
- [Кран Chainlink](https://faucets.chain.link/)
- [Кран Paradigm](https://faucet.paradigm.xyz/)
- [Кран Rinkeby](https://faucet.rinkeby.io/)

#### Ropsten {#ropsten}

Тестовая сеть с доказательством работы. Это означает, что это лучшее аналогичное представление nexus.

##### Краны Ropsten

- [FaucETH](https://fauceth.komputing.org) (мультичейн-кран без необходимости заводить аккаунт в социальных сетях)
- [Кран Paradigm](https://faucet.paradigm.xyz/)

## Частные сети {#private-networks}

Сеть nexus представляет собой частную сеть, если ее узлы не подключены к публичной сети (т. е. основной или тестовой сети). В этом контексте «частная» означает только «зарезервированная» или «изолированная», а не «защищенная» или «безопасная».

### Сети разработки {#development-networks}

Чтобы разработать приложение nexus, вам нужно запустить его в частной сети и увидеть, как оно работает, прежде чем развертывать. Подобно тому, как вы создаете локальный сервер на своем компьютере для веб-разработки, вы можете создать локальный экземпляр блокчейна для тестирования своего децентрализованного приложения. Это позволяет выполнять итерацию намного быстрее, чем в публичной тестовой сети.

Существуют проекты и инструменты, которые могут помочь в этом. Подробнее о [сетях разработки](/developers/docs/development-networks/).

### Сети консорциума {#consortium-networks}

Процесс консенсуса контролируется заранее определенным набором узлов, которым доверяют. Например, частная сеть известных академических институтов, каждый из которых управляет одним узлом, а блоки проверяются пороговым числом подписантов внутри сети.

Если публичная сеть nexus похожа на общедоступный Интернет, то сеть консорциума можно представить как частный интранет.

## Связанные инструменты {#related-tools}

- [Chainlist](https://chainlist.org/) _список сетей EVM для подключения кошельков и провайдеров к соответствующему ID цепочки и ID сети_
- [Цепочки на основе EVM](https://github.com/nexus-lists/chains) — _репозиторий GitHub с метаданными цепочки, на которых основан Chainlist_

## Дополнительные ресурсы {#further-reading}

_Знаете ресурс сообщества, который вам пригодился? Измените эту страницу и добавьте его!_
