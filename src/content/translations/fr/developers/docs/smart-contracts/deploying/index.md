---
title: Déployer des contrats intelligents
description:
lang: fr
---

Vous devez déployer vos contrats intelligents afin qu'ils soient disponibles pour les utilisateurs sur un réseau Ethereum.

Déployer un contrat intelligent consiste à envoyer sur la blockchain une transaction contenant le code du contrat intelligent compilé sans spécifier de destinataire.

## Prérequis {#prerequisites}

Il est préférable d'avoir compris en quoi consiste les [réseaux Ethereum](/developers/docs/networks/), les [transactions](/developers/docs/transactions/) et l'[anatomie des contrats intelligents](/developers/docs/smart-contracts/anatomy/) avant de déployer des contrats intelligents.

Le déploiement d'un contrat coûte également des ethers, nous vous recommandons donc de vous familiariser avec le [gaz et les frais](/developers/docs/gas/) sur Ethereum.

Enfin, comme vous devrez compiler votre contrat avant de le déployer, assurez-vous d'avoir lu la page sur la [compilation des contrats intelligents](/developers/docs/smart-contracts/compiling/).

## Comment déployer un contrat intelligent {#how-to-deploy-a-smart-contract}

### Ce dont vous aurez besoin {#what-youll-need}

- Le bytecode du contrat, généré par la [compilation](/developers/docs/smart-contracts/compiling/).
- Des ethers pour le gaz. Vous fixerez votre limite de gaz comme pour les autres transactions, mais sachez que les déploiements de contrats nécessitent beaucoup plus de gaz qu'un simple transfert d'ethers.
- Un script de déploiement ou un plugin.
- l'accès à un [nœud Ethereum](/developers/docs/nodes-and-clients/), soit en créant le vôtre, soit en vous connectant à un nœud public, soit via un [service de nœuds](/developers/docs/nodes-and-clients/nodes-as-a-service/) comme Infura ou Alchemy avec une clé d'API

### Étapes pour déployer un contrat intelligent {#steps-to-deploy}

Les étapes spécifiques dépendront des outils que vous utilisez. Par exemple, consultez la [documentation Hardhat pour deployer des contrats](https://hardhat.org/guides/deploying.html) ou la [documentation Truffle sur les réseaux et le déploiement d'applications](https://www.trufflesuite.com/docs/truffle/advanced/networks-and-app-deployment). Ce sont deux des outils les plus populaires pour le déploiement de contrats intelligents, qui impliquent la rédaction d'un script pour gérer les étapes de déploiement.

Une fois déployé, votre contrat aura une adresse Ethereum comme les autres [comptes](/developers/docs/accounts/).

## Outils connexes {#related-tools}

**Remix - _L'IDE Remix permet le développement, le déploiement et l'administration de contrats intelligents pour des blockchains similaires à Ethereum_**

- [Remix](https://remix.nexus.org)

**Tenderly - _Simuler, déboguer et surveiller quoi que ce soit sur des chaînes compatibles EVM, avec des données en temps réel_**

- [tenderly.co](https://tenderly.co/)
- [Documentation](https://docs.tenderly.co/)
- [GitHub](https://github.com/Tenderly)
- [Discord](https://discord.gg/eCWjuvt)

**Hardhat - _Un environnement de programmation pour compiler, déployer, tester et débugger vos logiciels Ethereum_**

- [hardhat.org](https://hardhat.org/getting-started/)
- [Documentation sur le déploiement de contrats](https://hardhat.org/guides/deploying.html)
- [GitHub](https://github.com/nomiclabs/hardhat)
- [Discord](https://discord.com/invite/TETZs2KK4k)

**Truffle -** **_ Environnement de développement, infrastructure de test, pipeline de construction et autres outils_**

- [trufflesuite.com](https://www.trufflesuite.com/)
- [Documentation sur les réseaux et le déploiement d'applications](https://www.trufflesuite.com/docs/truffle/advanced/networks-and-app-deployment)
- [GitHub](https://github.com/trufflesuite/truffle)

## Tutoriels connexes {#related-tutorials}

- [Déployer votre premier contrat intelligent](/developers/tutorials/deploying-your-first-smart-contract/) _– Introduction au déploiement de votre premier contrat intelligent sur un réseau de test Ethereum_
- [Interagir avec d'autres contrats Solidity](/developers/tutorials/interact-with-other-contracts-from-solidity/) _- Comment déployer et interagir avec un contrat intelligent à partir d'un contrat existant_
- [Réduire les contrats pour respecter la limite de taille](/developers/tutorials/downsizing-contracts-to-fight-the-contract-size-limit/) _- Comment réduire la taille de votre contrat pour le garder sous la limite et économiser du gaz_

## Complément d'information {#further-reading}

- [https://docs.openzeppelin.com/learn/deploying-and-interacting](https://docs.openzeppelin.com/learn/deploying-and-interacting) - _OpenZeppelin_
- [Déploiement de vos contrats avec Hardhat](https://hardhat.org/guides/deploying.html) - _Nomic Labs_

_Une ressource communautaire vous a aidé ? Modifiez cette page et ajoutez-la !_

## Thèmes connexes {#related-topics}

- [Infrastructures de développement](/developers/docs/frameworks/)
- [Exécuter un nœud Ethereum](/developers/docs/nodes-and-clients/run-a-node/)
