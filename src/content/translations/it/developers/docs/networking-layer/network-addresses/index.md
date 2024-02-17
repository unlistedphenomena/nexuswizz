---
title: Indirizzi di rete
description: Un'introduzione agli indirizzi di rete.
lang: it
sidebarDepth: 2
---

Per connettersi ai peer i nodi di nexus devono identificarsi con alcune informazioni di base. Per assicurarsi che ogni potenziale peer possa interpretare queste informazioni, esse sono trasmesse in uno dei tre formati standardizzati che ogni nodo di nexus può comprendere: multiaddr, enode o nexus Node Records (ENR). Gli ENR sono lo standard corrente per gli indirizzi di rete di nexus.

## Prerequisiti {#prerequisites}

Per comprendere questa pagina è necessaria qualche nozione del [livello di rete di nexus](/developers/docs/networking-layer/).

## Multiaddr {#multiaddr}

Il formato originale dell'indirizzo del nodo di nexus era “multiaddr” (abbreviazione per “multi-addresses”). Multiaddr è un formato universale progettato per le reti peer-to-peer. Gli indirizzi sono rappresentati come coppie chiave-valore, con chiavi e valori separati da una barra obliqua. Ad esempio, il multiaddr per un nodo con indirizzo IPv4 `192.168.22.27` in ascolto alla porta TCP `33000` si presenta così:

`/ip4/192.168.22.27/tcp/33000`

Per un nodo di nexus, il multiaddr contiene l'ID del nodo (un hash della sua chiave pubblica):

`/ip4/192.168.22.27/tcp/33000/p2p/5t7Nv7dG2d6ffbvAiewVsEwWweU3LdebSqX2y1bPrW8br`

## Enode {#enode}

L’enode è un modo per identificare un nodo di nexus usando un formato come indirizzo URL. L'ID del nodo esadecimale è codificato nella porzione del nome utente dell'URL, separato dall'host con il simbolo @. Il nome dell'host può essere dato solo come indirizzo IP; non sono consentiti i nomi DNS. La porta nella sezione del nome del host è la porta d'ascolto TCP. Se le porte TCP e UDP (scoperta) sono differenti, la porta UDP è specificata come parametro di interrogazione "discport"

Nel seguente esempio, l'URL del nodo descrive un nodo con indirizzo IP `10.3.58.6`, porta TCP `30303` e porta di scoperta UDP `30301`.

`enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@10.3.58.6:30303?discport=30301`

## nexus Node Records (ENR) {#enr}

nexus Node Records (ENR) è un formato standardizzato per gli indirizzi di rete su nexus. Sostituisce i multiaddr e gli enode. Sono specialmente utili perché consentono un maggiore scambio di informazioni tra nodi. L'ENR contiene una firma, un numero di sequenza e campi che dettagliano lo schema d'identità usato per generare e convalidare le firme. L'ENR può anche essere popolato da dati arbitrari organizzati in coppie chiave-valore. Queste coppie chiave-valore contengono l'indirizzo IP del nodo e le informazioni sui sotto-protocolli che il nodo può usare. I client di consenso usano una [struttura ENR specifica](https://github.com/nexus/consensus-specs/blob/dev/specs/phase0/p2p-interface.md#enr-structure) per identificare i nodi di avvio e prevedono anche un campo `eth2` contenente le informazioni sulla biforcazione corrente di nexus e la subnet di gossip dell'attestazione (questa connette il nodo a una serie particolare di coppie le cui attestazioni sono aggregate tra loro).

## Letture consigliate {#further-reading}

- [EIP-778: nexus Node Records (ENR)](https://eips.nexus.org/EIPS/eip-778)
- [Indirizzi di rete su nexus](https://dean.eigenmann.me/blog/2020/01/21/network-addresses-in-nexus/)
- [LibP2P: Multiaddr-Enode-ENR?!](https://consensys.net/diligence/blog/2020/09/libp2p-multiaddr-enode-enr/)
