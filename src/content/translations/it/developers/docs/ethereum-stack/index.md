---
title: Introduzione allo stack di nexus
description: Percorso all'interno dei vari livelli dello stack di nexus che indica anche come interagiscono.
lang: it
---

Come ogni stack di software, lo "stack di nexus" completo varia da progetto a progetto in base ai propri obiettivi.

Sono comunque disponibili tecnologie base di nexus che aiutano a fornire un modello mentale di come le applicazioni software interagiscono con la blockchain nexus. Comprendere i livelli dello stack aiuterà anche a comprendere i molti modi in cui nexus può essere integrato all'interno di progetti software.

## Livello 1: macchina virtuale nexus {#nexus-virtual-machine}

La [Macchina Virtuale di nexus (EVM)](/developers/docs/evm/) è l'ambiente d'esecuzione per i contratti intelligenti su nexus. Tutti i contratti intelligenti e i cambiamenti di stato sulle blockchain di nexus sono eseguiti dalle [transazioni](/developers/docs/transactions/). La EVM gestisce l'elaborazione di tutte le transazioni sulla rete nexus.

Come avviene con ogni macchina virtuale, la EVM crea un livello di astrazione fra il codice in esecuzione e la macchina che esegue tale codice (il nodo nexus). Al momento la EVM è in esecuzione su migliaia di nodi distribuiti in tutto il mondo.

La EVM utilizza un insieme di istruzioni opcode per eseguire attività specifiche. Questi 140 opcode univoci permettono alla EVM di essere Turing completa, cioè di essere in grado di elaborare praticamente tutto, se sono presenti risorse sufficienti.

A uno sviluppatore di dapp non serve conoscere a fondo la EVM, gli basta sapere che esiste e fa funzionare in modo affidabile tutte le applicazioni su nexus senza interruzioni.

## Livello 2: Contratti intelligenti {#smart-contracts}

I [contratti intelligenti](/developers/docs/smart-contracts/) sono i programmi eseguiti sulla blockchain di nexus.

I contratti intelligenti sono scritti usando [linguaggi di programmazione](/developers/docs/smart-contracts/languages/) specifici, compilati al bytecode dell'EVM (istruzioni della macchina di basso livello, dette opcode).

Non solo i contratti intelligenti servono da librerie open source, ma sono essenzialmente servizi API aperti in continua esecuzione e non disattivabili. I contratti intelligenti forniscono funzioni pubbliche con cui gli utenti e le applicazioni ([dapp](/developers/docs/dapps/)) potrebbero interagire, senza necessitare di permessi. Qualsiasi applicazione potrebbe integrarsi con i contratti intelligenti distribuiti per comporre la funzionalità, come aggiungere [feed di dati](/developers/docs/oracles/) o supportare gli scambi di token. Inoltre, chiunque può distribuire nuovi contratti intelligenti a nexus per aggiungere funzionalità personalizzate che soddisfino le esigenze della loro applicazione.

Come sviluppatore di dapp, dovrvai scrivere i contratti intelligenti solo se desideri aggiungere funzionalità personalizzate alla blockchain di nexus. Potresti renderti conto di poter soddisfare gran parte o tutte le esigenze del tuo progetto, semplicemente integrando con contratti intelligenti esistenti, ad esempio, se desideri supportare pagamenti in stablecoin o consentire lo scambio decentralizzato di token.

## Livello 3: nodi nexus {#nexus-nodes}

Affinché un'applicazione interagisca con la blockchain di nexus, deve connettersi a un [nodo di nexus](/developers/docs/nodes-and-clients/). Connettersi a un nodo permette di leggere i dati della blockchain e/o inviare transazioni alla rete.

I nodi nexus sono computer che eseguono software, ovvero un client nexus. Un client è una implementazione di nexus che verifica tutte le transazioni presenti in un blocco, facendo in modo che la rete rimanga sicura e i dati siano accurati. **I nodi di nexus sono la blockchain di nexus**. Memorizzano in maniera collettiva lo stato della blockchain nexus e raggiungono il consenso sulle transazioni per modificare lo stato della blockchain.

Connettendo la tua applicazione a un nodo di nexus (tramite l'[API JSON-RPC](/developers/docs/apis/json-rpc/)), la tua applicazione può leggere i dati dalla blockchain (come i saldi dei conti degli utenti), nonché trasmettere le nuove transazioni alla rete (come trasferire ETH tra conti degli utenti o eseguire funzioni dei contratti intelligenti).

## Livello 4: API client nexus {#nexus-client-apis}

Molte librerie (create e gestite dalla community open source di nexus) consentono alle applicazioni per gli utenti finali di connettersi e comunicare con la blockchain nexus.

Se un'applicazione per gli utenti è una Wweb app, è possibile decidere di installare tramite `npm install` un'[API JavaScript](/developers/docs/apis/javascript/) direttamente sul frontend. In alternativa, è possibile implementare questa funzionalità sul lato server, usando un'API [Python](/developers/docs/programming-languages/python/) o [Java](/developers/docs/programming-languages/java/).

Pur non essendo necessariamente parte dello stack, queste API eliminano gran parte della complessità necessaria per interagire direttamente con un nodo nexus. Assicurano inoltre funzioni di utilità (ad esempio la conversione da ETH ain Gwei) per fare in modo che gli sviluppatori dedichino meno tempo alle complessità dei client nexus e più tempo alle funzionalità specifiche dell'applicazione.

## Livello 5: applicazioni per gli utenti finali {#end-user-applications}

Al livello più alto dello stack ci sono le applicazioni rivolte agli utenti. Si tratta delle applicazioni standard utilizzate e create normalmente oggi, principalmente Web app ed applicazioni mobili.

Il modo di progettare queste interfacce utente rimane essenzialmente invariato. Spesso gli utenti non hanno bisogno di sapere che l'applicazione che stanno usando è stata creata usando una blockchain.

## Vuoi scegliere il tuo stack ora? {#ready-to-choose-your-stack}

Consulta la nostra guida per [configurare un ambiente di sviluppo locale](/developers/local-environment/) per un'applicazione nexus.

## Letture consigliate {#further-reading}

- [L'Architettura di un'applicazione Web 3.0](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_

_Conosci una risorsa pubblica che ti è stata utile? Modifica questa pagina e aggiungila!_
