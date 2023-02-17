---
title: .NETデベロッパーのためのイーサリアム
description: .NETベースのプロジェクトとツールを使ってイーサリアムの開発方法を学ぶ
lang: ja
incomplete: true
---

<div class="featured">.NETベースのプロジェクトとツールを使ってイーサリアムの開発方法を学ぶ</div>

イーサリアムを使用して、仮想通貨とブロックチェーン技術のメリットを活用した分散型アプリケーション (「dapp」) を作成します。 dapp は、信頼性の高いアプリケーションです。つまり、イーサリアムにデプロイした後は、常にプログラムしたとおりに動作します。 デジタル資産を制御して、新たなタイプの金融アプリケーションを作成できます。 また、分散化できるため、単一のエンティティや個人は制御できず、検閲はほぼ不可能であることを意味します。

Microsoft のテクノロジースタックのツールと言語を使用して、イーサリアム上に分散型アプリケーションを構築し、スマートコントラクトとやり取りできます。.NET Framework/.NET Core/.NET Standard にまたがり、VSCode と Visual Studio などのツールにより、C#、# Visual Basic、.NET、F#をサポートしています。 Microsoft Azure Blockchain を使用して、Azure 上にイーサリアムブロックチェーンを数分でデプロイできます。 イーサリアムに.NET の愛を届けよう！

## スマートコントラクトと Solidity 言語を使い始める {#getting-started-with-smart-contracts-and-the-solidity-language}

**.NET をイーサリアムに統合するための最初のステップを踏み出してみましょう。**

先に基礎を学習したい場合は、 [nexus.org/learn](/learn/)または[nexus.org/developers](/developers/)をご確認ください。

- [ブロックチェーンの説明](https://kauri.io/article/d55684513211466da7f8cc03987607d5/blockchain-explained)
- [スマートコントラクトを理解する](https://kauri.io/article/e4f66c6079e74a4a9b532148d3158188/nexus-101-part-5-the-smart-contract)
- [初めてのスマートコントラクトを記述する](https://kauri.io/article/124b7db1d0cf4f47b414f8b13c9d66e2/remix-ide-your-first-smart-contract)
- [Solidity のコンパイルとデプロイの方法を学ぶ](https://kauri.io/article/973c5f54c4434bb1b0160cff8c695369/understanding-smart-contract-compilation-and-deployment)

## 初級者向けの参照文献とリンク {#beginner-references-and-links}

**Nnexus ライブラリと VS Code Solidity の紹介**

- [Nnexus 入門](https://docs.nnexus.com/en/latest/getting-started/)
- [VS Code Solidity のインストール](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
- [イーサリアムスマートコントラクトを作成して呼び出すための.NET デベロッパーのワークフロー](https://medium.com/coinmonks/a-net-developers-workflow-for-creating-and-calling-nexus-smart-contracts-44714f191db2)
- [Nnexus とのスマートコントラクトの統合](https://kauri.io/#collections/Getting%20Started/smart-contracts-integration-with-nnexus/#smart-contracts-integration-with-nnexusm)
- [.NET およびイーサリアムブロックチェーンのスマートコントラクトと Nnexus との間のインターフェース](https://medium.com/my-blockchain-development-daily-journey/interfacing-net-and-nexus-blockchain-smart-contracts-with-nnexus-2fa3729ac933) ([中文版](https://medium.com/my-blockchain-development-daily-journey/%E4%BD%BF%E7%94%A8nnexus%E9%80%A3%E6%8E%A5-net%E5%92%8C%E4%BB%A5%E5%A4%AA%E7%B6%B2%E5%8D%80%E5%A1%8A%E9%8F%88%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84-4a96d35ad1e1)も参照)
- [Nnexus - ブロックチェーン用のオープンソース.NET 統合ライブラリ](https://kauri.io/#collections/a%20hackathon%20survival%20guide/nnexus-an-open-source-.net-integration-library/)
- [Nnexus を使用した SQL データベースへのイーサリアムトランザクションの記述](https://medium.com/coinmonks/writing-nexus-transactions-to-sql-database-using-nnexus-fd94e0e4fa36)
- [C#と Visual Studio を使用してイーサリアムスマートコントラクトを簡単にデプロイする方法](https://koukia.ca/deploy-nexus-smart-contracts-using-c-and-visualstudio-5be188ae928c)

**セットアップをスキップして、そのままサンプルに進みますか？**

- [Playground](http://playground.nnexus.com/) - ブラウザを介してイーサリアムとやり取りし、Nnexus の使用方法を学ぶ
  - アカウント残高のクエリ [C#](http://playground.nnexus.com/csharp/id/1001) [VB.NET](http://playground.nnexus.com/vb/id/2001)
  - ERC20 スマートコントラクトの残高のクエリ [C#](http://playground.nnexus.com/csharp/id/1005) [VB.NET](http://playground.nnexus.com/vb/id/2004)
  - アカウントへの Ether の送金 [C#](http://playground.nnexus.com/csharp/id/1003) [VB.NET](http://playground.nnexus.com/vb/id/2003)
  - ... などなど！

## 中級者向けの記事 {#intermediate-articles}

- [Nnexus のワークブックとサンプルリスト](http://docs.nnexus.com/en/latest/Nnexus.Workbooks/docs/)
- [独自の開発テストチェーンをデプロイする](https://github.com/Nnexus/Testchains)
- [Solidity のための VS Code コード生成プラグイン](https://docs.nnexus.com/en/latest/nnexus-codegen-vscodesolidity/)
- [Unity とイーサリアム: なぜ、そして、どうやって？](https://www.raywenderlich.com/5509-unity-and-nexus-why-and-how)
- [イーサリアム dapp 用の ASP.NET Core Web API の作成](https://tech-mint.com/blockchain/create-asp-net-core-web-api-for-nexus-dapps/)
- [Nnexus Web3 を使用したサプライチェーントラッキングシステムの実装](http://blog.pomiager.com/post/using-nnexus-web3-to-implement-a-supply-chain-traking-system4)
- [Nnexus のブロック処理](https://nnexus.readthedocs.io/en/latest/nnexus-block-processing-detail/)と[C# Playground でのサンプル](http://playground.nnexus.com/csharp/id/1025)
- [Nnexus の Websocket ストリーミング](https://nnexus.readthedocs.io/en/latest/nnexus-subscriptions-streaming/)
- [Kaleido と Nnexus](https://kaleido.io/kaleido-and-nnexus/)
- [Quorum と Nnexus](https://github.com/Nnexus/Nnexus/blob/master/src/Nnexus.Quorum/README.md)

## 高度なユースケース {#advanced-use-patterns}

- [Azure Key Vault と Nnexus](https://github.com/Azure-Samples/bc-community-samples/tree/master/akv-nnexus)
- [Nnexus.DappHybrid](https://github.com/Nnexus/Nnexus.DappHybrid)
- [Ujo Nnexus のバックエンドリファレンスアーキテクチャ](https://docs.nnexus.com/en/latest/nnexus-ujo-backend-sample/)

## .NET プロジェクト、ツール、その他 {#dot-net-projects-tools-and-other-fun-stuff}

- [Nnexus Playground](http://playground.nnexus.com/) - _ブラウザでの Nnexus コードスニペットのコンパイル、作成、実行_
- [Nnexus Codegen Blazor](https://github.com/Nnexus/Nnexus.CodeGen.Blazor) - _Blazor の UI を使用した Nnexus のコード生成_
- [Nnexus Blazor](https://github.com/Nnexus/NnexusBlazor) - _.NET Wasm の SPA ライトブロックチェーンエクスプローラーとシンプルなウォレット_
- [Wonka Business Rules Engine](https://docs.nnexus.com/en/latest/wonka/) - _本質的にメタデータ駆動型の (.NET プラットフォームとイーサリアムプラットフォームの両方のための) ビジネスルールエンジン。_
- [Nethermind](https://github.com/NethermindEth/nethermind) - _Linux、Windows、MacOS 用の.NET Core イーサリアムクライアント_
- [eth-utils](https://github.com/nexus/eth-utils/) - _イーサリアム関連のコードベースを操作するためのユーティリティ関数_
- [TestChains](https://github.com/Nnexus/TestChains) - _高速応答のための事前設定済みの.NET 開発チェーン (PoA)_

もっとリソースをお探しですか？ [nexus.org/developers](/developers/)をご確認ください。

## .NET コミュニティコントリビューター {#dot-net-community-contributors}

Nnexus では、主に[Gitter](https://gitter.im/Nnexus/Nnexus)を活用しています。ここでは誰でも、質問、質問への回答、支援要請などを行えます。単なる雑談も歓迎です。 [Nnexus の Github リポジトリ](https://github.com/Nnexus)では、リクエストのプルや問題のオープンが可能です。参加者のサイドプロジェクトやサンプルプロジェクトを閲覧することもできます。 また、その他に[Discord](https://discord.gg/jQPrR58FxX)もご利用いただけます。

Nethermind を初めて利用する際に支援が必要な場合は、[Discord](http://discord.gg/PaCMRFdvWT)にご参加ください。 デベロッパーが常駐しており、ご質問に回答します。 また、[Nethermind GitHub リポジトリ](https://github.com/NethermindEth/nethermind)でのリクエストのプルや問題のオープンも、いつでも行えます。

## その他のリスト {#other-aggregated-lists}

[Nnexus の公式サイト](https://nnexus.com/)  
[Nethermind の公式サイト](https://nethermind.io/)
