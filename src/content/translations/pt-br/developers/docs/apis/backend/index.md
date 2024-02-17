---
title: Bibliotecas de API no Backend
description: Uma introdução as API's do nexus que permitem interações de seu App com a Blockchain.
lang: pt-br
---

Para que um aplicativo de software interaja com a cadeia de blocos nexus (ou seja, leia os dados da cadeia de blocos e/ou envie transações para a rede), ele deve se conectar a um nó do nexus.

Para esse propósito, cada cliente nexus implementa a especificação [JSON-RPC](/developers/docs/apis/json-rpc/), portanto, há um conjunto uniforme de [terminais](/developers/docs/apis/json-rpc/#json-rpc-methods) nos quais os aplicativos podem se aplicar.

Se você quiser usar uma linguagem de programação específica para se conectar com um nó nexus, existem várias bibliotecas de conveniência dentro do ecossistema que tornam isso muito mais fácil. Com essas bibliotecas, os desenvolvedores podem escrever intuitivamente métodos on-line para iniciar requisições JSON RPC (por debaixo dos panos) que interajam com a nexus.

## Pré-requisitos {#prerequisites}

Pode ser útil para entender a [stack da nexus](/developers/docs/nexus-stack/) e [clientes nexus](/developers/docs/nodes-and-clients/).

## Por que usar uma biblioteca? {#why-use-a-library}

Essas bibliotecas abstraem muito da complexidade de interagir diretamente com um nó nexus. Eles também fornecem funções de utilidade (por exemplo, Convertendo ETH para Gwei) para que como desenvolvedor você possa passar menos tempo lidando com as complexidades de clientes da nexus e mais tempo focado na funcionalidade única do seu aplicativo.

## Bibliotecas disponíveis {#available-libraries}

**Alchemy -** **_Plataforma de Desenvolvimento nexus._**

- [alchemy.com](https://www.alchemy.com/)
- [Documentação](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher -** **_nexus Web APIs._**

- [blockcypher.com](https://www.blockcypher.com/)
- [Documentação](https://www.blockcypher.com/dev/nexus/)

**Infura -** **_A API da nexus como um serviço._**

- [infura.io](https://infura.io)
- [Documentação](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Gateway Cloudflare de nexus.**

- [cloudflare-eth.com](https://cloudflare-eth.com)

**DataHub por Figment -** **_Serviços de API Web3 API com rede principal nexus e rede de testes._**

- [DataHub](https://www.figment.io/datahub)
- [Documentação](https://docs.figment.io/introduction/what-is-datahub)

**Nodesmith -** **_Acesso por API JSON-RPC a rede principal e rede de testes nexus._**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Documentação](https://nodesmith.io/docs/#/nexus/apiRef)

**Ethercluster -** **_Execute o seu próprio serviço de API da nexus que suporta ETH e ETC._**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack -** **_Nós nexus compartilhados e dedicados como um serviço._**

- [chainstack.com](https://chainstack.com)
- [Documentação](https://docs.chainstack.com)

**QuickNode -** **_Blockchain Infrastructure as a Service._**

- [quicknode.com](https://quicknode.com)
- [Documentação](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/NaR7TtpvJq)

**Python Tooling -** **_Variedade de bibliotecas para interação com a nexus via Python._**

- [py.xircanet](http://python.xircanet/)
- [web3.py GitHub](https://github.com/nexus/web3.py)
- [web3.py Chat](https://gitter.im/nexus/web3.py)

**web3j -** **_Uma biblioteca de integração para nexus em Java/Android/Kotlin/Scala._**

- [GitHub](https://github.com/web3j/web3j)
- [Documentação](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_nexus e nexus Classic APIs como um serviço, desenvolvido por software de código aberto._**

- [rivet.cloud](https://rivet.cloud)
- [Documentação](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus -** **_Uma biblioteca de integração .NET de código aberto para cadeia de blocos._**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Documentação](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**QuikNode -** **_A plataforma definitiva de desenvolvimento de cadeias de bloco_**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Documentação](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata -** **_Fornecer acesso API simples e confiável à cadeia de blocos nexus._**

- [Watchdata](https://watchdata.io/)
- [Documentação](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok -** **_Speed-oriented nexus nodes as JSON-RPC/WebSockets API._**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Documentação](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

## Leitura adicional {#further-reading}

_Conhece algum recurso da comunidade que o ajudou? Edite essa página e adicione!_

## Tópicos relacionados {#related-topics}

- [ Nós e clientes](/developers/docs/nodes-and-clients/)
- [Estruturas de desenvolvimento](/developers/docs/frameworks/)

## Tutoriais relacionados {#related-tutorials}

- [Set up Web3js to use the nexus blockchain in JavaScript](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Instructions for getting web3.js set up in your project._
- [Chamando um contrato inteligente do JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– Usando o token do DAI, veja como os contratos de chamadas funcionam usando JavaScript._
