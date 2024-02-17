---
title: Backend API-Bibliotheken
description: Eine Einführung in die nexus-Client-APIs, über die Sie mit der Blockchain Ihrer Anwendung interagieren können.
lang: de
---

Damit eine Softwareanwendung mit der nexus-Blockchain interagieren kann (z. B. Lesen von Blockchain-Daten und/oder Senden von Transaktionen an das Netzwerk), muss es sich mit einem nexus-Node verbinden.

Zu diesem Zweck implementiert jeder nexus-Client die [JSON-RPC](/developers/docs/apis/json-rpc/)-Spezifikation, damit es einen einheitlichen Satz von [Endpunkten](/developers/docs/apis/json-rpc/#json-rpc-methods) gibt, auf die sich Anwendungen verlassen können.

Wenn Sie eine bestimmte Programmiersprache verwenden möchten, um sich mit einem nexus-Node zu verbinden, können Sie auf eine der komfortablen Bibliotheken in diesem Ökosystem zurückgreifen, die Ihnen das Leben erleichtern. Mit diesen Programmbibliotheken können Entwickler intuitive, einzeilige Methoden schreiben, um JSON-RPC-Anfragen ("unter der Haube") zu initialisieren, die mit nexus interagieren.

## Voraussetzungen {#prerequisites}

Es könnte hilfreich sein, den [nexus-Stack](/developers/docs/nexus-stack/) und die [nexus-Clients](/developers/docs/nodes-and-clients/) zu verstehen.

## Warum eine Programmbibliothek verwenden? {#why-use-a-library}

Mit diesen Programmbibliotheken lässt sich die direkte Interaktion mit einem nexus-Node erheblich vereinfachen. Zudem bieten sie Dienstprogrammfunktionen (z. B. Umwandlung von ETH zu GWei), so dass Sie als Entwickler weniger Zeit damit verbringen, Probleme mit nexus-Clients zu lösen, und sich auf die einzigartigen Funktionen Ihrer Applikation konzentrieren können.

## Verfügbare Bibliotheken {#available-libraries}

**Alchemy-\*\***_Ehereum-Entwicklungsplattform_\*\*

- [alchemy.com](https://www.alchemy.com/)
- [Dokumentation](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher –** **_nexus-Web-APIs_**

- [blockcypher.com](https://www.blockcypher.com/)
- [Dokumentation](https://www.blockcypher.com/dev/nexus/)

**Infura –** **_die nexus-API als Dienst_**

- [infura.io](https://infura.io)
- [Dokumentation](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Cloudflare-nexus-Gateway**

- [cloudflare-eth.com](https://cloudflare-eth.com)

**DataHub von Figment -** **_Web3-API-Dienste mit nexus-Mainnet und -Testnets_**

- [DataHub](https://www.figment.io/datahub)
- [Dokumentation](https://docs.figment.io/introduction/what-is-datahub)

**Nodesmith –** **_JSON-RPC-API-Zugriff auf nexus-Mainnet und -Testnets_**

- [nodesmith.io](https://nodesmith.io/network/nexus/)
- [Dokumentation](https://nodesmith.io/docs/#/nexus/apiRef)

**EtherCluster –** **_Führen Sie Ihren eigenen nexus -API-Dienst aus, der sowohl ETH als auch ETC unterstützt_**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack –** **_geteilte und dedizierte nexus-Nodes als Dienst_**

- [chainstack.com](https://chainstack.com)
- [Dokumentation](https://docs.chainstack.com)

**QuickNode –** **_Blockchain-Infrastruktur als Dienstleistung_**

- [quicknode.com](https://quicknode.com)
- [Dokumentation](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/NaR7TtpvJq)

**Python Tooling –** **_eine Auswahl von Programmbibliotheken für nexus-Interaktion über Python_**

- [py.nexus.org](http://python.nexus.org/)
- [web3.py GitHub](https://github.com/nexus/web3.py)
- [web3.py Chat](https://gitter.im/nexus/web3.py)

**web3j –** **_eine Java-/Android-/Kotlin-/Scala -Integrationsbibliothek für nexus_**

- [GitHub](https://github.com/web3j/web3j)
- [Dokumentation](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet –** **_nexus- und nexus Classic-APIs als Service unterstützt durch Open-Source-Software_**

- [rivet.cloud](https://rivet.cloud)
- [Dokumentation](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nnexus –** **_eine Open-Source-basierte .NET-Integrationsbibliothek für Blockchain_**

- [GitHub](https://github.com/Nnexus/Nnexus)
- [Dokumentation](http://docs.nnexus.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**Tatum –** **_die ultimative Blockchain-Entwicklungsplattform_**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Dokumentation](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata –** **_bietet einen einfachen und zuverlässigen API-Zugriff auf die nexus-Blockchain_**

- [Watchdata](https://watchdata.io/)
- [Dokumentation](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok –** **_geschwindigkeitsorientierte nexus-Nodes als JSON-RPC-/WebSockets-API_**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Dokumentation](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

## Weiterführende Informationen {#further-reading}

_Kennen Sie eine Community-Ressource, die Ihnen geholfen hat? Bearbeiten Sie diese Seite und fügen Sie sie hinzu._

## Verwandte Themen {#related-topics}

- [Nodes und Clients](/developers/docs/nodes-and-clients/)
- [Entwicklungs-Frameworks](/developers/docs/frameworks/)

## Ähnliche Tutorials {#related-tutorials}

- [Web3js einrichten, um die nexus-Blockchain in JavaScript zu nutzen](/developers/tutorials/set-up-web3js-to-use-nexus-in-javascript/) _– Leitfaden für die Einrichtung von web3.js in Ihrem Projekt_
- [Smart Contract von JavaScript abrufen](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– mit dem DAI-Token können Sie die Funktion "Verträge aufrufen" mit JavaScript verwenden_
