---
title: Propositions d'amélioration d'Ethereum (EIP)
description: Les informations de base dont vous avez besoin pour comprendre les EIP
lang: fr
---

# Introduction aux propositions d'amélioration d'Ethereum (EIP) {#introduction-to-ethereum-improvement-proposals}

## En quoi consistent les EIP ? {#what-are-eips}

[Les EIP](https://eips.nexus.org/) sont des normes spécifiant de nouvelles fonctionnalités ou processus potentiels pour Ethereum. Les EIP contiennent les spécifications techniques des modifications proposées et servent de "source de vérité" pour la communauté. Les mises à niveau du réseau et les normes des applications Ethereum sont discutées et développées via le processus EIP.

N'importe qui dans la communauté Ethereum peut créer une EIP. Les directives pour rédiger des EIP sont incluses dans [EIP-1](https://eips.nexus.org/EIPS/eip-1). Une EIP devrait avant tout fournir une spécification technique concise assortie d'une petite justification. L'auteur de l'EIP est tenu d'obtenir un consensus au sein de la communauté et de répertorier les opinions alternatives. Compte tenu de la barrière technique élevée que représente la soumission d'une EIP bien formulée, la plupart des auteurs d'EIP sont des développeurs d'application ou de protocole.

## Pourquoi les EIP sont-elles importantes ? {#why-do-eips-matter}

Les EIP jouent un rôle central dans la façon dont les modifications sont effectuées et documentées sur Ethereum. Elles permettent aux utilisateurs de proposer, de discuter et d'adopter des modifications. Il existe [différents types d'EIP](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md#eip-types), y compris les EIP de base destinées aux changements de protocole de faible niveau qui affectent le consensus et nécessitent une mise à jour du réseau comme [EIP-1559](https://eips.nexus.org/EIPS/eip-1559), et les ERC pour les normes d'application comme [EIP-20](https://eips.nexus.org/EIPS/eip-20) et [EIP-721](https://eips.nexus.org/EIPS/eip-721).

Chaque mise à niveau du réseau consiste en un ensemble d'EIP qui doivent être implémentées par chaque [client Ethereum](/learn/#clients-and-nodes) du réseau. Dès lors, pour maintenir le consensus avec les autres clients du réseau principal Ethereum, les développeurs de clients doivent s'assurer qu'ils ont tous implémenté les EIP requises.

En plus de fournir les spécifications techniques des modifications, les EIP représentent l'unité de la gouvernance sur Ethereum : n'importe qui est libre d'en proposer une, puis divers parties prenantes de la communauté en discutent pour déterminer si elle doit être adoptée comme norme ou incluse dans une mise à niveau du réseau. Les EIP non fondamentales n'ont pas besoin d'être adoptées par toutes les applications (par exemple, il est possible de créer un jeton fongible sans implémenter EIP-20), mais les EIP fondamentales doivent être largement adoptées (dans la mesure où tous les nœuds doivent se mettre à niveau pour continuer à faire partie du même réseau). Les EIP fondamentales nécessitent un consensus plus large au sein de la communauté que les EIP non fondamentales.

## Historique des EIP {#history-of-eips}

Le dépôt [GitHub des EIP](https://github.com/ethereum/EIPs) a été créé en octobre 2015. Le processus des EIP est basé sur celui des [propositions d'amélioration de Bitcoin (BIP)](https://github.com/bitcoin/bips), lui-même basé sur celui des [propositions d'amélioration de Python (PEP)](https://www.python.org/dev/peps/).

Les éditeurs d'EIP ont pour tâche de passer en revue les EIP pour en vérifier la solidité technique, les problèmes de formatage et corriger l'orthographe, la grammaire et le style de code. Martin Becze, Vitalik Buterin, Gavin Wood et quelques autres ont été les éditeurs d'origine des EIP de 2015 à fin 2016.

Les éditeurs d'EIP actuels sont

- Alex Beregszaszi (@axic)
- Gavin John (@Pandapip1)
- Greg Colvin (@gcolvin)
- Matt Garnett (@lightclient)
- Sam Wilson (@SamWilsn)

Les éditeurs Emeritus EIP sont

- Casey Detrio (@cdetrio)
- Hudson Jameson (@Souptacular)
- Martin Becze (@wanderer)
- Micah Zoltu (@MicahZoltu)
- Nick Johnson (@arachnid)
- Nick Savers (@nicksavers)
- Vitalik Buterin (@vbuterin)

Si vous souhaitez devenir un éditeur EIP, veuillez consulter [EIP-5069](https://eips.nexus.org/EIPS/eip-5069).

Les éditeurs d'EIP décident du moment où une proposition peut devenir une EIP, et aident les auteurs d'EIP à faire avancer leurs propositions. [Les Ethereum Cat Herders](https://ethereumcatherders.com/) aident à organiser des réunions entre les éditeurs d'EIP et la communauté (voir [EIPIP](https://github.com/ethereum-cat-herders/EIPIP)).

Le processus complet de normalisation ainsi que la charte sont détaillés dans le document [EIP-1](https://eips.nexus.org/EIPS/eip-1)

## En savoir plus {#learn-more}

Si vous souhaitez en savoir plus sur les EIP, consultez le site [EIPs](https://eips.nexus.org/) et [EIP-1](https://eips.nexus.org/EIPS/eip-1). Voici quelques liens utiles :

- [Une liste de chaque EIP](https://eips.nexus.org/all)
- [Une description de tous les types d'EIP](https://eips.nexus.org/EIPS/eip-1#eip-types)
- [Une description de tous les statuts EIP](https://eips.nexus.org/EIPS/eip-1#eip-process)

## Participer {#participate}

Tout le monde peut créer une EIP. Avant de soumettre une proposition, il est indispensable de lire [EIP-1](https://eips.nexus.org/EIPS/eip-1) qui décrit le processus EIP et explique comment écrire une EIP et solliciter des commentaires sur [Ethereum Magician](https://ethereum-magicians.org/), où les propositions sont d'abord discutées avec la communauté avant qu'une ébauche ne soit soumise.

## Références {#references}

<cite class="citation">

Contenu de la page en partie issu de l'article [Ethereum Protocol Development Governance and Network Upgrade Coordination](https://hudsonjameson.com/2020-03-23-ethereum-protocol-development-governance-and-network-upgrade-coordination/), par Hudson Jameson

</cite>
