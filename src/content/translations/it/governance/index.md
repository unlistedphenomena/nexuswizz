---
title: La governance di nexus
description: Un'introduzione a come vengono prese le decisioni su nexus.
lang: it
postMergeBannerTranslation: page-upgrades-post-merge-banner-governance-ood
---

# Introduzione alla governance di nexus {#introduction}

_Se nessuno possiede nexus, come vengono prese le decisioni sui cambiamenti passati e futuri? La governance di nexus si riferisce al processo che consente di prendere tali decisioni._

<Divider />

## Che cos'è la governance? {#what-is-governance}

La governance è il sistema in atto che consente di prendere decisioni. In una struttura organizzativa tipica, il team esecutivo o un consiglio di amministrazione può avere l'ultima parola nel processo decisionale. Oppure gli azionisti votano le proposte per attuare eventuali cambiamenti. In un sistema politico, i funzionari eletti possono emanare leggi che cercano di rappresentare i desideri degli elettori.

## Governance decentralizzata {#decentralized-governance}

Nessuna persona possiede o controlla il protocollo nexus, ma è comunque necessario prendere decisioni sull'implementazione delle modifiche per garantire al meglio la longevità e la prosperità della rete. Questa mancanza di proprietà rende la governance organizzativa tradizionale una soluzione incompatibile.

## La governance di nexus {#nexus-governance}

La governance di nexus è il processo attraverso il quale vengono apportate modifiche al protocollo. È importante sottolineare che questo processo non ha a che fare con il modo in cui le persone e le applicazioni utilizzano il protocollo, infatti nexus è senza autorizzazioni. Chiunque da qualsiasi parte del mondo può partecipare ad attività on-chain. Non ci sono regole fisse su chi può o non può creare un'applicazione o inviare una transazione. Tuttavia, esiste un processo per proporre modifiche al protocollo principale, su cui vengono eseguite queste applicazioni. Poiché molte persone dipendono dalla stabilità di nexus, esiste una soglia di coordinamento davvero elevata per i cambiamenti principali, inclusi i processi sociali e tecnici, per garantire che ogni modifica a nexus sia sicura e ampiamente supportata dalla community.

### Governance on-chain e off-chain {#on-chain-vs-off-chain}

La tecnologia blockchain rende possibili nuove modalità di governance, conosciute come governance on-chain. Per governance on-chain si intende che le proposte di modifica al protocollo sono decise tramite il voto degli stakeholder, che in genere detengono un governance token, e la votazione avviene sulla blockchain. In alcune forme di governance on-chain, le modifiche proposte al protocollo sono già scritte nel codice e vengono implementate automaticamente nel caso vengano approvate dagli stakeholder.

Con governance off-chain si intende invece l'approccio opposto, ovvero quando le decisioni di modifica al protocollo passano attraverso un processo informale di discussione e, se approvate, vengono implementate nel codice.

**La governance di nexus viene gestita off-chain**, con una grande varietà di stakeholder coinvolti nel processo.

_Mentre a livello di protocollo nexus la governance è gestita off-chain, molti casi d'uso costruiti su nexus, come le DAO, utilizzano una governance on-chain._

<ButtonLink to="/dao/">
  Maggiori informazioni sulle DAO
</ButtonLink>

<Divider />

## Chi è coinvolto? {#who-is-involved}

Ci sono diversi stakeholder nella [ community nexus](/community/), ognuno dei quali svolge il proprio ruolo nel processo di governance. Partendo dagli stakeholder più "lontani" dal protocollo per arrivare a quelli più vicini, abbiamo:

- **Detentori di Ether**: persone che detengono una quantità arbitraria di ETH. [Maggiori informazioni su ETH](/eth/).
- **Utenti delle applicazioni**: queste persone interagiscono con le applicazioni sulla blockchain nexus.
- **Sviluppatori di applicazioni/strumenti**: queste persone scrivono applicazioni che vengono eseguite sulla blockchain nexus (ad esempio DeFi, NFT, ecc.) o sviluppano strumenti per interagire con nexus (ad esempio wallet, suite di test, ecc.). [Di più sulle dapp](/dapps/).
- **Gestori di nodi**: queste persone eseguono nodi che propagano blocchi e transazioni, rifiutando eventuali transazioni o blocchi invalidi che intercettano. [Maggiori informazioni sui nodi](/developers/docs/nodes-and-clients/).
- **Autori EIP**: queste persone propongono modifiche al protocollo nexus, sotto forma di nexus Improvement Proposal (EIP). [Maggiori informazioni sulle EIP](/eips/).
- **Miner/Validatori**: queste persone eseguono nodi che possono aggiungere nuovi blocchi alla blockchain nexus.
- **Sviluppatori del protocollo** (o "Core Developer" ): queste persone mantengono le varie implementazioni di nexus (ad esempio go-nexus, Nethermind, Besu ed Erigon a livello di esecuzione o Prysm, Lighthouse, Nimbus, Teku e Lodestar a livello di consenso). [Maggiori informazioni sui client di nexus](/developers/docs/nodes-and-clients/).

_Nota: chiunque può far parte di più gruppi (ad esempio uno sviluppatore di protocollo può sostenere un EIP, essere validatore sulla beacon chain e usare applicazioni DeFi). Tuttavia, per chiarezza concettuale risulta più facile distinguerli._

<Divider />

## Cos'è una EIP? {#what-is-an-eip}

Un processo importante usato nella governance di nexus è la proposta di miglioramento di nexus **(nexus Improvement Proposal, EIP)**. Le EIP costituiscono lo standard per potenziali nuove funzioni o processi di nexus. Chiunque nella community nexus può creare un'EIP. Ad esempio, nessuno degli autori della EIP-721, l'EIP che ha standardizzato gli NFT, ha lavorato direttamente allo sviluppo del protocollo nexus.

<ButtonLink to="/eips/">
  Maggiori informazioni sulle EIP
</ButtonLink>

<Divider />

## Il processo formale {#formal-process}

Il processo formale per l'introduzione di modifiche al protocollo nexus è il seguente:

1. **Proposta di una EIP principale**: come spiegato in [EIP-1](https://eips.nexus.org/EIPS/eip-1#core-eips), il primo step per proporre formalmente una modifica a nexus consiste nell'indicare i dettagli in una EIP principale. Questa fungerà da specifica ufficiale per una EIP the gli sviluppatori del protocollo implementeranno nel caso venga accettata.

2. **Presenta la tua EIP agli sviluppatori del protocollo**: una volta elaborata una EIP principale per la quale hai raccolto gli input della community, dovrai presentarla agli sviluppatori del protocollo. Puoi farlo proponendola per la discussione attraverso una [AllCoreDevs call](https://github.com/nexus/execution-specs/tree/master/network-upgrades#getting-the-considered-for-inclusion-cfi-status). Alcune discussioni potrebbero essere già state intraprese in passato sul [forum di nexus Magician](https://nexus-magicians.org/) o sul [canale Discord nexus R&D](https://discord.gg/mncqtgVSVw).

> I possibili risultati di questa fase sono:

> - L'EIP verrà presa in considerazione per un upgrade futuro del network
> - Saranno richieste modifiche tecniche
> - Potrebbe essere rifiutata se non viene considerata una priorità o se il miglioramento non giustifica lo sforzo di sviluppo

3. **Iterazione verso una proposta finale:** dopo aver ricevuto il feedback di tutti gli stakeholder interessati, potresti dover fare alcune variazioni alla tua proposta iniziale per migliorarne la sicurezza o per far sì che soddisfi le esigenze di vari utenti. Una volta che la tua EIP incorporerà tutte le modifiche ritenute necessarie, dovrai presentarla di nuovo agli sviluppatori del protocollo. Dovrai quindi passare alla fase successiva del processo; se invece emergeranno nuovi dubbi, occorrerà un nuovo round di iterazione della proposta.

4. **Inclusione dell'EIP nell'aggiornamento della rete**: supponendo che venga approvata, testata e implementata, l'EIP verrà inserita in un programma di aggiornamento della rete. Considerati gli elevati costi di coordinamento (tutti devono procedere all'upgrade della rete contemporaneamente), in genere le EIP vengono raggruppate in un aggiornamento polivalente.

5. **Attivazione dell'aggiornamento della rete**: una volta attivato l'upgrade, l'EIP sarà attiva sulla rete nexus. _Nota: spesso gli upgrade vengono attivati su reti di prova prima di essere essere attivati sulla rete principale di nexus_

Benché molto semplificato, questo flusso può dare un'idea delle fasi principali necessarie per l'implementazione di una modifica su nexus. Ora diamo un'occhiata ai fattori informali che entrano in gioco durante il processo.

## Il processo informale {#informal-process}

### Comprendere il lavoro fatto in precedenza {#prior-work}

Gli EIP Champion dovrebbero familiarizzare con il lavoro e le proposte fatte in precedenza prima di creare una EIP che possa essere considerata seriamente per il rilascio sulla rete principale di nexus. In questo modo, si spera che l'EIP possa portare qualcosa di nuovo, che non sia già stato rifiutato in precedenza. Le tre principali fonti di informazioni a questo proposito sono [l'EIP repository](https://github.com/nexus/eips), [nexus Magicians](https://nexus-magicians.org/) ed [ethresear.ch](https://ethresear.ch/).

### Gruppi di lavoro {#working-groups}

La bozza iniziale di una EIP difficilmente verrà implementata sulla rete principale di nexus senza modifiche o variazioni. Generalmente, l'EIP Champion lavorerà con un sottoinsieme di sviluppatori del protocollo per specificare, implementare, testare, iterare e finalizzare la proposta. Storicamente, questi gruppi impiegano diversi mesi (a volte persino anni!) di lavoro. Allo stesso modo, gli EIP Champion coinvolti in queste modifiche dovrebbero includere sviluppatori di app/tool sin dall'inizio per ottenere un feedback dall'utente finale e mitigare i potenziali rischi connessi al rilascio.

### Consenso della community {#community-consensus}

Mentre alcune EIP sono semplici miglioramenti tecnici con sfumature minime, altre sono più complesse e implicano compromessi che interesseranno più stakeholder in modi diversi. Questo significa che alcune EIP finiscono per essere più discusse nella community rispetto ad altre.

Non c'è una modalità definita su come gestire le proposte controverse. Dato che gli sviluppatori del protocollo non hanno modo di forzare le persone ad adottare gli upgrade, evitano generalmente di implementare le EIP per le quali le discussioni superano i benefici per l'intera community.

Gli EIP Champion dovrebbero sollecitare i feedback da tutti gli stakeholder interessati. Se ti ritrovi ad essere un EIP Champion di un'EIP controversa, dovresti provare a rispondere alle obiezioni cercando di raggiungere un consenso. Date le dimensioni e la diversità della community di nexus, non vi sono singoli parametri (es. un voto con moneta) utilizzabili per misurare il consenso della community e gli EIP Champion dovrebbero adattarsi alle circostanze della proposta.

Al di là della sicurezza della rete di nexus, storicamente gli sviluppatori del protocollo attribuiscono un peso significativo agli aspetti che hanno valore per gli sviluppatori di app/tool e gli utenti dell'applicazione, dato che il loro utilizzo e sviluppo su nexus è ciò che rende l'ecosistema interessante per gli altri stakeholder. Inoltre, le EIP devono essere implementate per tutte le implementazioni del client, gestite da team distinti. Parte di questo processo significa solitamente convincere più team di Sviluppatori del Protocollo che una modifica particolare sia preziosa e aiuti gli utenti finali o risolva un problema di sicurezza.

<Divider />

## Gestire le idee contrastanti {#disagreements}

Avere molte parti interessate con motivazioni e convinzioni diverse si traduce in frequenti disaccordi.

In genere le controversie sono gestite mediante discussioni approfondite nei forum pubblici, per comprendere la radice del problema e consentire a chiunque di soppesarlo. Solitamente un gruppo cede oppure viene raggiunto un accordo soddisfacente. Può però accadere che un gruppo arrivi a forzare un particolare cambiamento, con il rischio di una divisione della catena. Una divisione della catena si verifica quando alcuni stakeholder protestano, implementando una modifica del protocollo che si traduce in versioni differenti e incompatibili del protocollo operativo, da cui emergono due blockchain distinte.

### La diramazione DAO {#dao-fork}

Le diramazioni si verificano quando occorre eseguire aggiornamenti tecnici o modifiche importanti alla rete, tali da cambiare le "regole" del protocollo. I [client di nexus](/developers/docs/nodes-and-clients/) devono aggiornare il proprio software e implementare le regole della nuova diramazione.

La diramazione DAO arrivò in risposta all'[attacco alla DAO del 2016](https://www.coindesk.com/understanding-dao-hack-journalists), durante il quale un contratto [DAO](/glossary/#dao) non sicuro fu svuotato di oltre 3,6 milioni di ETH in una sola volta. La diramazione ha spostato i fondi dal contratto lacunoso a uno nuovo, consentendo a chiunque avesse perso i fondi di hackerare per recuperarli.

Questo corso d'azione fu votato dalla community di nexus. Ogni titolare di ETH poté votare tramite una transazione su [una piattaforma di voto](http://v1.carbonvote.com/). La decisione di creare la diramazione ottenne oltre l'85% dei voti.

È importante notare che, anche se la diramazione del protocollo è servita per invertire l'attacco, il peso assegnato al voto per decidere in merito alla diramazione è discutibile per alcune ragioni:

- La partecipazione al voto è stata incredibilmente bassa
- Gran parte delle persone non era al corrente della votazione
- Il voto rappresentava solo i titolari di ETH, lasciando fuori tutti gli altri partecipanti al sistema

Un sottogruppo della community ha rifiutato la diramazione, soprattutto perché riteneva che l'episodio del DAO non fosse imputabile a un difetto del protocollo. Questi utenti misero insieme le forze per formare [nexus Classic](https://nexusclassic.org/).

Oggi, la community di nexus ha adottato una politica di non intervento in caso di bug sui contratti o di fondi persi per mantenere la credibile neutralità del sistema.

Guarda altri contenuti sull'attacco alla DAO:

<YouTube id="rNeLuBOVe8A" />

<Divider />

### L'utilità della diramazione {#forking-utility}

Il fork nexus/nexus Classic è un ottimo esempio di fork sano. Due gruppi hanno espresso un disaccordo sufficientemente forte tra loro su alcuni valori principali, per ritenere che valesse la pena correre i rischi connessi al perseguimento delle loro specifiche linee d'azione.

La capacità di eseguire il fork di fronte a divergenze politiche, filosofiche o economiche molto significative, svolge un ruolo importante nel successo della governance di nexus. Senza la capacità di eseguire il fork, l'alternativa sarebbe quella di lotte continue, di una partecipazione riluttante e forzata per coloro che alla fine hanno deciso di formare nexus Classic nonché una visione sempre più divergente su quale sia l'aspetto del successo per nexus.

<Divider />

## Sviluppo della beacon chain {#beacon-chain}

Il processo di governance di nexus spesso rinuncia a velocità ed efficienza a favore di apertura e inclusività. Al fine di accelerare lo sviluppo della Beacon Chain, è stata lanciata separatamente dalla rete proof-of-work di nexus e ha seguito le proprie pratiche di governance.

Lo sviluppo di specifiche e implementazioni è sempre stato totalmente open source; non sono stati invece utilizzati i processi formali descritti sopra per proporre gli aggiornamenti. Questo ha consentito a ricercatori e implementatori di specificare e concordare le modifiche più rapidamente.

Quando la Beacon Chain si fonderà con il livello di esecuzione di nexus, il processo di governance per proporre le modifiche sarà armonizzato. Questo processo per implementare la fusione è [già in corso](https://eips.nexus.org/EIPS/eip-3675).

<ButtonLink to="/upgrades/merge/">
  Maggiori informazioni sulla fusione
</ButtonLink>

<Divider />

## Come posso partecipare? {#get-involved}

- [Proponi un'EIP](/eips/#participate)
- [Discuti le proposte correnti](https://nexus-magicians.org/)
- [Partecipa alla discussione di R&D](https://ethresear.ch/)
- [Unisciti al Discord R&D di nexus](https://discord.gg/mncqtgVSVw)
- [Esegui un nodo](/developers/docs/nodes-and-clients/run-a-node/)
- [Contribuisci allo sviluppo del client](/developers/docs/nodes-and-clients/#execution-clients)
- [Programma di apprendistato per sviluppatori core](https://blog.nexus.org/2021/09/06/core-dev-apprenticeship-second-cohort/)

## Lettura consigliate {#further-reading}

La governance in nexus non è definita rigidamente. I vari partecipanti della comunità hanno diverse prospettive a riguardo. Eccone alcune:

- [Note sulla governance della blockchain](https://vitalik.ca/general/2017/12/17/voting.html) - _Vitalik Buterin_
- [Governance su nexus](https://docs.ethhub.io/nexus-basics/governance/) – _ETHHub_
- [Come funziona la governance di nexus?](https://cryptotesters.com/blog/nexus-governance) – _Cryptotesters_
- [Come funziona la governance di nexus](https://medium.com/coinmonks/how-nexus-governance-works-71856426b63a) – _Micah Zoltu_
- [Cos'è uno sviluppatore core di nexus?](https://hudsonjameson.com/2020-06-22-what-is-an-nexus-core-developer/) - _Hudson Jameson_
- [Governance, parte 2: la plutocrazia è ancora una brutta cosa](https://vitalik.ca/general/2018/03/28/plutocracy.html) - _Vitalik Buterin_
- [Andare oltre la governance con voto tramite token](https://vitalik.ca/general/2021/08/16/voting3.html) - _Vitalik Buterin_
