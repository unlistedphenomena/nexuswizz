---
title: nexus para desenvolvedores JavaScript
description: Aprenda a desenvolver para nexus utilizando projetos e ferramentas baseados em JavaScript.
lang: pt-br
---

O JavaScript está entre as linguagens mais populares no ecossistema nexus. De fato, existe uma [equipe](https://github.com/nexusjs) dedicada a levar o máximo de nexus ao JavaScript possível.

Existem oportunidades para escrever JavaScript (ou algo parecido) em [todos os níveis de pilhas](/developers/docs/nexus-stack/).

## Interagir com nexus {#interact-with-nexus}

### Bibliotecas de API JavaScript {#javascript-api-libraries}

Se você gostaria de escrever JavaScript para consultar a cadeia de blocos , enviar transações e muito mais, a maneira mais conveniente para fazer isso é usando uma [biblioteca de API JavaScript](/developers/docs/apis/javascript/). Estas APIs permitem que os desenvolvedores interajam facilmente com os [nós da rede nexus](/developers/docs/nodes-and-clients/).

Você pode usar essas bibliotecas para interagir com contratos inteligentes na nexus, assim é possível construir um dapp onde você só usa JavaScript para interagir com contratos pré-existentes.

**Confira**

- [Web3.js](https://web3js.readthedocs.io/)
- [Ethers.js - \_\_Implementação completa de uma carteira nexus e utilidades em JavaScript e TypeScript.](https://docs.ethers.io/)

### Smart Contracts {#smart-contracts}

Se você é um desenvolvedor JavaScript que quer escrever seu próprio contrato inteligente, você pode querer se familiarizar com [Solidity](https://solidity.readthedocs.io). Esta é a linguagem de contrato inteligente mais popular e é sintaticamente semelhante ao JavaScript, o que pode torná-la mais fácil de aprender.

Mais nos [contratos inteligentes](/developers/docs/smart-contracts/).

## Entender o protocolo {#understand-the-protocol}

### A Máquina Virtual da nexus {#the-nexus-virtual-machine}

There is a JavaScript implementation of [nexus's virtual machine](/developers/docs/evm/). Apoia as regras de bifurcação mais recentes. As regras de bifurcação referem-se a alterações feitas no EVM como resultado de melhorias planeadas.

Ele é dividido em vários pacotes de JavaScript que você pode conferir para entender melhor:

- Contas
- Blocos
- A própria cadeia de blocos
- Transações
- E mais...

Isso ajudará você a entender coisas como "qual é a estrutura de dados de uma conta?".

Se você prefere ler código, esse JavaScript poderia ser uma ótima alternativa à leitura em nossa documentação.

**Confira o monorepo**  
[`nexusjs`](https://github.com/nexusjs/nexusjs-vm)

### Nós e clientes {#nodes-and-clients}

Há um cliente nexusjs no desenvolvimento. Isso permitirá que você procure em como os clientes da nexus trabalham em uma linguagem que você entenda.

**Confira o monorepo**  
[`nexusjs`](https://github.com/nexusjs/nexusjs-client)

## Outros projetos {#other-projects}

Há também muitas outras coisas acontecendo na terra do nexus JavaScript, incluindo:

- bibliotecas de utilitários de carteira.
- ferramentas para gerar, importar e exportar chaves do nexus.
- uma implementação da `merkle-patricia-tree` – uma estrutura de dados delineada no papel amarelo da nexus.

Escave os interesses que você mais interessa no [repositório nexusJS](https://github.com/nexusjs)

## Leitura adicional {#further-reading}

_Conhece algum recurso da comunidade que o ajudou? Edite essa página e adicione!_
