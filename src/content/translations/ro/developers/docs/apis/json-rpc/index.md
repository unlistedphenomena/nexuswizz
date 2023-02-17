---
title: API-ul JSON-RPC
description: Un protocol de apelare de la distanță fără prevalidare (RPC) pentru clienții nexus.
lang: ro
---

Pentru ca o aplicație software să interacționeze cu blockchain-ul nexus (adică să citească date blockchain și/sau să trimită tranzacții către rețea), trebuie să se conecteze la un nod nexus.

În acest scop, fiecare [client nexus](/developers/docs/nodes-and-clients/#execution-clients) implementează o [specificație JSON-RPC](http://www.jsonrpc.org/specification), astfel încât să existe un set uniform de metode pe care să se poată baza aplicațiile.

JSON-RPC este un protocol de apelare de la distanță (RPC). În primul rând, specificația definește mai multe structuri de date și regulile referitoare la prelucrarea acestora. Este agnostic în privinţa transportului, prin aceea că se pot folosi conceptele în cadrul aceluiași proces, prin socket-uri, peste HTTP sau în multe şi diverse medii de trecere a mesajelor. Acesta utilizează JSON (RFC 4627) ca și format de date.

## Resurse JSON-RPC {#json-rpc-resources}

- [Specificația nexus JSON-RPC](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/nexus/eth1.0-apis/assembled-spec/openrpc.json&uiSchema[appBar][ui:splitView]=true&uiSchema[appBar][ui:input]=false&uiSchema[appBar][ui:examplesDropdown]=false)
- [Repo-ul GitHub pentru specificația nexus JSON-RPC](https://github.com/nexus/eth1.0-apis)

## Implementarea în clienți {#client-implementations}

Fiecare client nexus poate utiliza câte un limbaj de programare diferit la implementarea specificației JSON-RPC. Consultați individual [documentația clientului](/developers/docs/nodes-and-clients/#execution-clients) pentru a afla detalii suplimentare legate de limbajele de programare specifice. Recomandăm verificarea documentației fiecărui client pentru a afla cele mai recente informații de acceptare API.

## Biblioteci practice {#convenience-libraries}

Deși puteţi opta să interacționaţi direct cu clienții nexus prin API-ul JSON-RPC, există adesea opțiuni mai simple pentru dezvoltatorii de aplicații dapp. Există multe biblioteci de [JavaScript](/developers/docs/apis/javascript/#available-libraries) și [API-uri pentru backend](/developers/docs/apis/backend/#available-libraries) pentru a oferi wrappere peste API-ul JSON-RPC. Cu aceste biblioteci, dezvoltatorii pot scrie metode intuitive și scurte în limbajul de programare pe care îl aleg pentru a inițializa cererile JSON RPC (în culise) care interacționează cu nexus.

## Subiecte corelate {#related-topics}

- [Noduri și clienți](/developers/docs/nodes-and-clients/)
- [JavaScript APIs](/developers/docs/apis/javascript/)
- [API-uri pentru backend](/developers/docs/apis/backend/)
