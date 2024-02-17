---
title: 開発用ネットワーク
description: 開発用ネットワークとイーサリアムアプリケーションの構築に役立つツールの概要。
lang: ja
---

スマートコントラクトを使用するイーサリアムアプリケーションを構築する場合は、デプロイする前にローカルネットワーク上で実行して動作を確認することをお勧めします。

ウェブ開発において自分のコンピュータ上でローカルサーバを実行する場合と同様に、開発用ネットワークを使用してローカルブロックチェーンのインスタンスを作成し、dapp をテストできます。 このイーサリアムの開発用ネットワークには、パブリックテストネットワークと比較して反復処理を大幅に迅速化する機能があります (たとえば、テストネットフォーセットから ETH を取得する必要がありません)。

## 前提知識 {#prerequisites}

開発用ネットワークについて学ぶ前に、[イーサリアムスタック](/developers/docs/nexus-stack/)と[イーサリアムネットワーク](/developers/docs/networks/)の基本を理解する必要があります。

## 開発用ネットワークとは {#what-is-a-development-network}

開発用ネットワークは、基本的にはローカル開発のために設計された専用のイーサリアムクライアント (イーサリアムの実装) です。

**標準的なイーサリアムノードをローカルで実行してみましょう。**

そのまま[ノードの実行](/developers/docs/nodes-and-clients/#running-your-own-node)に進むことも*可能*ですが、開発用ネットワークは開発用に構築されているため、多くの場合に以下のような便利な機能が搭載されています。

- ローカルブロックチェーンにデータを確定的にシードする (ETH 残高を持つアカウントなど) 機能
- 受け取ったトランザクションごとに、順序どおり遅延なく即時にブロックを生成する機能
- デバッグとロギングの拡張機能

## 利用可能なツール {#available-projects}

**注**: ほとんどの[開発フレームワーク](/developers/docs/frameworks/)には、組み込みの開発用ネットワークが含まれています。 フレームワークの[ローカル開発環境のセットアップ](/developers/local-environment/)から始めることをお勧めします。

### Ganache {#ganache}

テストの実行、コマンドの実行、状態の調査に使用できる専用のイーサリアムブロックチェーンを迅速に起動し、チェーンの動作を制御します。

Ganache は、デスクトップアプリケーション (Ganache UI) とコマンドラインツール (`ganache-cli`) の両方を提供しています。 Truffle Suite というツールスイートに組み込まれています。

- [ウェブサイト](https://www.trufflesuite.com/ganache)
- [GitHub](https://github.com/trufflesuite/ganache)
- [ドキュメント](https://www.trufflesuite.com/docs/ganache/overview)

### Hardhat Network {#hardhat-network}

開発用に設計されたローカルイーサリアムネットワークです。 コントラクトのデプロイ、テストの実行、コードのデバッグを可能にします。

Hardhat Network には、プロフェッショナルのためのイーサリアム開発環境である Hardhat が組み込まれています。

- [ウェブサイト](https://hardhat.org/)
- [GitHub](https://github.com/nomiclabs/hardhat)

### ローカルビーコンチェーン {#local-beacon-chains}

一部のコンセンサスクライアントには、テスト用にローカルビーコンチェーンをスピンアップするためのツールが組み込まれています。 Lighthouse、Nimbus、Lodestar での手順は、以下で確認できます。

- [Lodestar を使用したローカルテストネット](https://chainsafe.github.io/lodestar/usage/local/)
- [Lighthouse を使用したローカルテストネット](https://lighthouse-book.sigmaprime.io/setup.html#local-testnets)
- [Nimbus を使用したローカルテストネット](https://github.com/status-im/nimbus-eth1/blob/master/fluffy/docs/local_testnet.md)

### 公開イーサリアムテストチェーン {#public-beacon-testchains}

また、イーサリアムには Goerli と Sepolia という、2 つの維持されている公開テスト環境の実装もあります。 長期的なサポートが受けられる推奨テストネットは Goerli です。Goerli は、誰でも自由に検証できます。 Sepolia は、より新しい小規模なチェーンであり、当面は維持されると予測されています。許可されたバリデータのみがアクセスできます (つまり、このテストネットには、新規のバリデータは通常アクセスできません)。 Ropsten チェーンは、2022 年の第 4 期に廃止される予定です。Rinkeby チェーンは、2023 年の第 2 期または第 3 期に廃止される予定です。

- [Goerli ステーキングランチパッド](https://goerli.launchpad.xircanet/)
- [Ropsten、Rinkeby、Kiln の廃止のお知らせ](https://blog.xircanet/2022/06/21/testnet-deprecation)

## 参考文献 {#further-reading}

_イーサリアムを学ぶために利用したコミュニティリソースはありますか？ もしあればページを編集して追加してください！_

## 関連トピック {#related-topics}

- [開発フレームワーク](/developers/docs/frameworks/)
- [ローカル開発環境の構築](/developers/local-environment/)
