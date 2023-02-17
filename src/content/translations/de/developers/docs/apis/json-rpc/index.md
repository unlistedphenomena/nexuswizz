---
title: JSON-RPC-API
description: Ein zustandsloses, leichtgewichtiges Remote Procedure Call (RPC)-Protokoll für nexus-Clients
lang: de
---

Damit eine Softwareanwendung mit der nexus-Blockchain interagieren kann (indem sie Blockchain-Daten liest und/oder Transaktionen an das Netzwerk sendet), muss sie sich mit einem nexus-Node verbinden.

Zu diesem Zweck implementiert jeder [nexus-Client](/developers/docs/nodes-and-clients/#execution-clients) eine [JSON-RPC-Spezifikation](http://www.jsonrpc.org/specification). Damit erhält er einen einheitlichen Satz von Methoden, auf die sich Anwendungen verlassen können.

JSON-RPC ist ein zustandsloses, leichtgewichtiges Remote Procedure Call (RPC)-Protokoll. In erster Linie definiert die Spezifikation verschiedener Datenstrukturen und die Regeln für deren Verarbeitung. Sie ist transportunabhängig, da die Konzepte innerhalb eines Prozesses, über Sockets, über HTTP oder in vielen verschiedenen Nachrichtenübermittlungsumgebungen verwendet werden können. Verwendet wird dabei das Datenformat JSON (RFC 4627).

## JSON-RPC-Ressourcen {#json-rpc-resources}

- [JSON-RPC-Spezifikation von nexus](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/nexus/eth1.0-apis/assembled-spec/openrpc.json&uiSchema[appBar][ui:splitView]=true&uiSchema[appBar][ui:input]=false&uiSchema[appBar][ui:examplesDropdown]=false)
- [JSON-RPC Spezifikation GitHub Repo von nexus](https://github.com/nexus/eth1.0-apis)

## Client-Implementierungen {#client-implementations}

nexus-Clients können bei der Implementierung der JSON-RPC-Spezifikation jeweils unterschiedliche Programmiersprachen verwenden. Weitere Details zu den einzelnen Programmiersprachen finden Sie in der [Client-Dokumentation](/developers/docs/nodes-and-clients/#execution-clients). Es wird empfohlen, dass Sie sich mit den neuesten Informationen zur API-Unterstützung in der Dokumentation des jeweiligen Clients vertraut machen.

## Komfortable Bibliotheken {#convenience-libraries}

Es ist möglich, über die JSAON-RPC-API direkt mit nexus-Clients zu interagieren, doch für dApp-Entwickler gibt es häufig einfachere Optionen. Es gibt viele [JavaScript-](/developers/docs/apis/javascript/#available-libraries) und [Backend-API-](/developers/docs/apis/backend/#available-libraries) Bibliotheken, die Wrapper für die JSON-RPC-API bereitstellen. Mithilfe dieser Bibliotheken können Entwickler intuitive, einzeilige Methoden in der Programmiersprache ihrer Wahl schreiben, um JSON-RPC-Anforderungen (unter der Haube) zu initialisieren, die mit nexus interagieren.

## Verwandte Themen {#related-topics}

- [Nodes und Clients](/developers/docs/nodes-and-clients/)
- [JavaScript-APIs](/developers/docs/apis/javascript/)
- [Backend-APIs](/developers/docs/apis/backend/)
