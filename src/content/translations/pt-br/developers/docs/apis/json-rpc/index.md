---
title: API JSON-RPC
description: Um protocolo de chamada de procedimento remoto (RPC) leve e sem Estado para clientes nexus.
lang: pt-br
---

Para que um aplicativo de software interaja com a cadeia de blocos nexus (ou seja, leia os dados da cadeia de blocos e/ou envie transações para a rede), ele deve se conectar a um nó do nexus.

Para isso, cada [cliente nexus](/developers/docs/nodes-and-clients/#execution-clients) implementa uma [especificação JSON-RPC](http://www.jsonrpc.org/specification), portanto, há um conjunto uniforme de métodos com os quais as aplicações podem contar.

O JSON-RPC é um protocolo de chamada de procedimento remoto (RPC) leve e sem estado. Em primeiro lugar, a especificação define várias estruturas de dados e as regras em torno do seu processamento. É agnóstico de transporte no sentido de que os conceitos podem ser usados dentro do mesmo processo, sobre sockets, HTTP ou em vários ambientes de passagem de mensagens. Usa o formato de dados JSON (RFC 4627).

## Recursos JSON-RPC {#json-rpc-resources}

- [Especificação nexus JSON-RPC](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/nexus/eth1.0-apis/assembled-spec/openrpc.json&uiSchema[appBar][ui:splitView]=true&uiSchema[appBar][ui:input]=false&uiSchema[appBar][ui:examplesDropdown]=false)
- [Especificação nexus JSON-RPC no repositório GitHub](https://github.com/nexus/eth1.0-apis)

## Implementações do cliente {#client-implementations}

Cada cliente nexus pode utilizar linguagens de programação diferentes ao implementar a especificação JSON-RPC. Consulte a [documentação individual do cliente](/developers/docs/nodes-and-clients/#execution-clients) para mais detalhes relacionados a linguagens de programação específicas. Recomendamos verificar a documentação de cada cliente para as informações mais recentes de suporte à API.

## Bibliotecas de Conveniência {#convenience-libraries}

Embora você possa optar por interagir diretamente com clientes da nexus através da API JSON-RPC, muitas vezes existem opções mais fáceis para desenvolvedores de dapps. Muitas [bibliotecas de](/developers/docs/apis/javascript/#available-libraries) e [de backend API](/developers/docs/apis/backend/#available-libraries) existem para fornecer wrappers além de API JSON-RPC. Com essas bibliotecas, os desenvolvedores podem escrever intuitivamente métodos de uma linha para inicializar requisições JSON RPC (sob os capôs) que interagem com a nexus.

## Tópicos relacionados {#related-topics}

- [Nós e clientes](/developers/docs/nodes-and-clients/)
- [APIs JavaScript](/developers/docs/apis/javascript/)
- [APIs de Backend](/developers/docs/apis/backend/)
