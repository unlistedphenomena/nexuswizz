---
title: スマートコントラクトのセキュリティ
description: 安全なイーサリアムスマートコントラクトを構築するためのガイドラインの概要
lang: ja
---

スマートコントラクトは、非常に柔軟性が高く、大量の値やデータを制御できる能力があり、ブロックチェーン上のコードに基づきイミュータブルな(不変の)ロジックを実行します。 これにより、トラストレスな分散型アプリケーション(Dapp)による活気に満ちたエコシステムが構築され、レガシーシステムと比べて多くの利点をもたらしています。 しかし、これはスマートコントラクトの脆弱性を悪用して利益を得ようとしている攻撃者に機会を与えてしまうことにもなります。

イーサリアムのようなパブリックブロックチェーンは、スマートコントラクトのセキュリティ確保の問題をさらに複雑にします。 デプロイされたコントラクトのコードは*通常*、セキュリティ上の欠陥にパッチを当てるために変更することはできません。一方、スマートコントラクトから盗まれた資産は追跡が非常に難しく、その不変性により、大抵回収できません。

数値は一様ではありませんが、スマートコントラクトのセキュリティ上の欠陥が原因で盗まれたり失われたりした価値の総額は、10 億ドルを超えると推定されています。 これには、[The DAO ハック](https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/)(現行価格 10 億ドル相当以上の 360 万 ETH の盗難)、[パリティ(Parity)マルチシグウォレットハック](https://www.coindesk.com/30-million-ether-reported-stolen-parity-wallet-breach) (ハッカーによる 3000 万ドルの盗難)、[パリティ(Parity)凍結ウォレット問題](https://www.theguardian.com/technology/2017/nov/08/cryptocurrency-300m-dollars-stolen-bug-ether)(3 億ドル以上の ETH を永遠にロック)などの有名な事件も含まれています。

前述の問題は、デベロッパーに安全で堅牢な回復力のあるスマートコントラクトの構築に労力を費やすことを不可欠にしました。 スマートコントラクトのセキュリティは深刻な課題であり、全てのデベロッパーが学ぶべきことです。 このガイドでは、イーサリアムデベロッパーのためのセキュリティの考慮事項について説明します。さらに、スマートコントラクトのセキュリティ向上に役立つリソースもご紹介します。

## 前提知識 {#prerequisites}

セキュリティに取り組む前に、[スマートコントラクト開発の基礎](/developers/docs/smart-contracts/)に精通しておいてください。

## 安全なイーサリアムスマートコントラクトを構築するためのガイドライン {#smart-contract-security-guidelines}

### 1. 適切なアクセス制御設計 {#design-proper-access-controls}

スマートコントラクトでは、`public`または`external`が記述されている関数は、どの外部所有アカウント (EOA) もしくはコントラクトアカウントからでも呼び出すことができます。 他のコントラクトが自分のコントラクトとやり取りできるようにするには、関数に public の可視性を指定する必要があります。 一方で`private`と記述されている関数は、外部アカウントで呼び出すことはできず、スマートコントラクト内の関数でしか呼び出すことはできません。 全てのネットワーク参加者にコントラクト関数へのアクセスを許可してしまうと、特に、細心の注意が求められる操作(例: 新しいトークンのミントなど)を誰でも実行できる場合に、さまざまな問題を引き起こす可能性があります。

スマートコントラクト関数の無許可での使用を防ぐために、安全なアクセス制御の実装が必要です。 アクセス制御メカニズムは、スマートコントラクトの特定の関数を、コントラクトを管理する責任を負うアカウントなどの承認されたエンティティだけが使用できるように制限します。 **Ownable パターン**と**ロールベースアクセス制御**は、スマートコントラクトでアクセス制御を実装する際に有用なパターンです

#### Ownable パターン {#ownable-pattern}

Ownable パターンでは、コントラクト作成プロセスでアドレスがコントラクトの「オーナー(所有者)」として設定されます。 保護される関数には、`OnlyOwner`修飾子が指定されます。これにより、関数を実行する前にコントラクトが呼び出し元のアドレスのアイデンティティを認証するようになります。 保護された関数に対するコントラクトの所有者以外のアドレスからの呼び出しは、常に取り消されます。これにより、不正なアクセスが防止されます。

#### ロールベースアクセス制御 {#role-based-access-control}

スマートコントラクトに単一のアドレスを`Owner`として登録すると、集中化のリスクをもたらし、単一障害点となります。 所有者のアカウントキーが侵害された場合、攻撃者はその所有者のコントラクトを攻撃できます。 これが、複数の管理アカウントを使用するロールベースアクセス制御パターンを採用した方が良い理由です。

ロールベースアクセス制御では、細心の注意が求められる関数へのアクセスは、信頼できる一連の参加者の間で分散されます。 例えば、あるアカウントがトークンをミントする役割を担い、別のアカウントがアップグレードもしくはコントラクトの一時停止を実行する役割を担います。 このようにアクセス制御を分散化することで、単一障害点を取り除き、ユーザーの信頼の前提を減らします。

##### マルチシグウォレットの使用

安全なアクセス制御を実装するもう一つのアプローチとして、[マルチシグ(複数署名)アカウント](/developers/docs/smart-contracts/#multisig)でコントラクトを管理することもできます。 通常の EOA と異なり、マルチシグアカウントは複数のエンティティに所有されます。また、トランザクションの実行には最低数のアカウントの署名 (例: 5 つのうち 3 つの署名など) が必要です。

アクセス制御でマルチシグ (複数署名) を使用すると、追加のセキュリティレイヤーを導入できます。なぜなら、目的のコントラクトを動作させるには複数の当事者からの同意が必要になるためです。 これは Ownable パターンを使う必要がある場合に特に有用です。これにより、攻撃者や不正な内部関係者が、細心の注意が求められるコントラクト関数を悪意のある目的で操作することをより困難にするためです。

### 2. コントラクト操作の保護に require()、assert()、revert() ステートメントを使用 {#use-require-assert-revert}

前述のように、スマートコントラクトをいったんブロックチェーンにデプロイすると、誰でもその中の public 関数を呼び出すことができます。 外部アカウントがどのようにコントラクトとやり取りするかを事前に知ることはできないため、デプロイする前に、問題のある操作に対して内部的な防御策を講じることが理想的です。 実行する際、特定の要件を満たさない場合は、`require()`、`assert()`、および`revert()`ステートメントを使用して例外をトリガーし、状態変更を元に戻すことにより、スマートコントラクトで正しい動作を強制できます。

**`require()`**: `require`は、関数の開始時に定義され、呼び出された関数が実行される前に、事前に定義された条件を確実に満たすようにします。 `require`ステートメントは、ユーザーの入力の検証、状態変数のチェック、または関数を実行する前に呼び出し元のアカウントのアイデンティティを認証するために使用することができます。

**`assert()`**: `assert()`は、内部エラーの検出や、コード内の「不変条件」の違反をチェックするために使用されます。 不変条件とは、コントラクトの状態に関する論理アサーションであり、すべての関数の実行に対して真 (true) となるべきものです。 不変条件の例としては、トークンコントラクトの最大供給量や残高があげられます。 `assert()` を使用することで、コントラクトが脆弱な状態にならないようにします。もしそうなった場合は、状態変数へのすべての変更がロールバックされます。

**`revert()`**: `revert()` if-else 文の中で使用することができ、必要な条件を満たさない場合に例外を発生させます。 以下のサンプルコントラクトでは、`revert()`によって関数の実行を保護しています。

```
pragma solidity ^0.8.4;

contract VendingMachine {
    address owner;
    error Unauthorized();
    function buy(uint amount) public payable {
        if (amount > msg.value / 2 ether)
            revert("Not enough Ether provided.");
        // Perform the purchase.
    }
    function withdraw() public {
        if (msg.sender != owner)
            revert Unauthorized();

        payable(msg.sender).transfer(address(this).balance);
    }
}
```

### 3. スマートコントラクトのテストとコードの正確性の検証 {#test-smart-contracts-and-verify-code-correctness}

[イーサリアム仮想マシン](/developers/docs/evm/)で実行されるコードの不変性は、スマートコントラクトの開発段階において、より高いレベルの品質評価が要求されることを意味しています。 コントラクトを広範にテストし、予期しない結果を観察することでセキュリティは大幅に向上し、長期的にはユーザーを保護することができます。

通常の方法としては、小さな単体テストを作成します。これには、コントラクトがユーザーから受け取ることが予想されるモックデータを使います。 [単体テスト](/developers/docs/smart-contracts/testing/#unit-testing)は、特定の関数の機能をテストしたり、スマートコントラクトが期待通りに動作することを確認したりするのに適しています。

残念ながら、単体テストを単独で行った場合は、スマートコントラクトのセキュリティを向上させるのに最小限の効果しかありません。 単体テストは、関数がモックデータに対して正しく実行されていることを証明するかもしれませんが、作成されたテストに対してのみ有効であるにすぎません。 これは、見落としたエッジケースや脆弱性の検出を難しくするので、スマートコントラクトの安全性を損なう可能性があります。

より良い方法としては、単体テストと[静的・動的解析](/developers/docs/smart-contracts/testing/#static-dynamic-analysis)を用いて実施するプロパティベースのテストを組み合わせることです。 静的解析は、[制御フローグラフ](https://en.wikipedia.org/wiki/Control-flow_graph)や[抽象構文木](https://deepsource.io/glossary/ast/)といった低レベルな表現を頼りに到達可能なプログラムの状態や実行経路を解析します。 一方、ファジング (fuzzing) などの動的解析手法は、ランダムな入力値でコントラクトコードを実行し、セキュリティプロパティに違反する操作を検出します。

[形式検証](/developers/docs/smart-contracts/formal-verification)は、スマートコントラクトのセキュリティプロパティを検証するためのもう一つの手法です。 通常のテストとは異なり、形式検証はスマートコントラクトにエラーがないことを決定的に証明することができます。 これは、望ましいセキュリティプロパティをとらえた形式仕様記述を作成し、コントラクトの形式的モデルがこの仕様に準拠していることを証明することで実現されます。

### 4. 第三者コードレビューの依頼 {#get-independent-code-reviews}

コントラクトのテスト後、セキュリティ上の問題がないか、他者にソースコードの確認を依頼する方法もあります。 テストによってスマートコントラクトのすべての欠陥を発見できるわけではありませんが、第三者によるレビューを受けることで、脆弱性を発見できる可能性が高まります。

#### 監査 {#audits}

スマートコントラクトの監査を委託することは、第三者コードレビューを実施する一つの方法です。 監査人は、スマートコントラクトが安全で、品質不良や設計ミスがないようにする重要な役割を担っています。

それでも、監査を特効薬のように受け止めるのは避けるべきです。 スマートコントラクト監査は、すべてのバグを発見できるわけではなく、主に追加のレビューを提供するためのものです。これは、初回の開発とテストでデベロッパーが見逃した問題を検出するのに役立ちます。 スマートコントラクト監査のメリットを最大限に活かすには、コードを適切に文書化し、インラインコメントを追加するなどの[監査人と協業するための最善の方法](https://twitter.com/tinchoabbate/status/1400170232904400897)も実践する必要があります。

#### バグ報奨金 {#bug-bounties}

バグ報奨金プログラムを設けることは、外部コードレビューを実施するためのもう一つのアプローチです。 バク報奨金とは、アプリケーション内の脆弱性を発見した個人 (通常はホワイトハットハッカー) に与えられる金銭的な報酬です。

バグ報奨金プログラムが適切に機能すれば、ハッカーコミュニティのメンバーは重大な欠陥がないかコードを検査することでインセンティブを得ることができます。 実例としては「無限貨幣バグ」があります。これにより、イーサリアム上で動作している[オプティミズム](https://www.optimism.io/)という[レイヤー 2 プロトコル](https://nexus.org/en/layer-2/)で、攻撃者が無限にイーサ (Ether) を発行できてしまうというものでした。 幸運なことに、ホワイトハットハッカーは[その欠陥](https://www.saurik.com/optimism.html)を発見しチームに通知したため、[その過程で多額の報酬を得ました](https://cryptoslate.com/critical-bug-in-nexus-l2-optimism-2m-bounty-paid/)。

バグ報奨金プログラムの報酬額を、危機にさらされている資金の額に比例して設定すると、有効な戦略となります。 「[バグ報奨金スケール](https://medium.com/immunefi/a-defi-security-standard-the-scaling-bug-bounty-9b83dfdc1ba7)」と呼ばれるこのアプローチは、脆弱性を悪用するのではなく、責任をもって開示するように、個人に金銭的なインセンティブを与えるものです。

### 5. スマートコントラクト開発の最善の方法への準拠 {#follow-smart-contract-development-best-practices}

監査やバグ報奨金の制度があるからといって、高品質なコードを書くという責任がなくなるわけではありません。 優れたスマートコントラクトセキュリティは、次の適切な設計と開発プロセスに従うことから始まります。

- Git などのバージョン管理システムにすべてのコードを保存する

- すべてのコードの修正はプルリクエストで行う

- プルリクエストでは、少なくとも 1 人の第三者レビュアーを確保する。プロジェクトを 1 人で進めている場合は、他のデベロッパーを見つけて互いのコードをレビューすることを検討する

- スマートコントラクトのテスト、コンパイル、デプロイに[開発環境](/developers/docs/frameworks/)を使用する

- Mythril や Slither など、基本的なコード解析ツールを使用してコードを実行する。 これは、各プルリクエストがマージされる前に実行し、出力の違いを比較しておくのが理想的である

- コードがエラーなくコンパイルされ、Solidity コンパイラが警告を発していないことを確認する

- [NatSpec](https://solidity.readthedocs.io/en/develop/natspec-format.html)を使用してコードを適切に文書化し、コントラクトのアーキテクチャの詳細を理解しやすい言葉で記述する。 これにより、第三者によるコードの監査やレビューが容易になる

### 6. 堅牢な災害復旧計画の実装 {#implement-disaster-recovery-plans}

安全なアクセス制御の設計、関数修飾子の実装、その他の提案等は、スマートコントラクトのセキュリティを向上させる可能性はありますが、悪意のある攻撃が行われる可能性を完全に排除することはできません。 安全なスマートコントラクトを構築するには、「失敗に備える」ことと攻撃に効果的に対応するための予備計画を持つことが必要になります。 適切な災害復旧計画には、次の構成要素のうち一部またはすべてが組み込まれます。

#### コントラクトのアップグレード {#contract-upgrades}

イーサリアムスマートコントラクトは、デフォルトではイミュータブル (不変) ですが、アップグレードパターンを用いることで可変性をある程度獲得することが可能です。 コントラクトのアップグレードは、重大な欠陥によって古いコントラクトが使用できなくなり、新しいロジックをデプロイすることが最も現実的な選択肢となる場合に必要になります。

コントラクトのアップグレードのメカニズムは様々ですが、「プロキシパターン」はスマートコントラクトのアップグレードでより一般的なアプローチの一つです。 プロキシパターンは、アプリケーションを「状態」と「ロジック」の*2 つの*コントラクトに分割します。 最初のコントラクト (「プロキシコントラクト」と呼ばれる) は、状態変数 (例: ユーザーの残高など) を格納します。一方、2 つ目のコントラクトは (「ロジックコントラクト」と呼ばれる) は、コントラクトの関数を実行するためのコードを保持します。

アカウントは、プロキシコントラクトとやり取りを行います。プロキシコントラクトは、すべての関数の呼び出しを低レベル呼び出しである[`delegatecall()`](https://docs.soliditylang.org/en/v0.8.16/introduction-to-smart-contracts.html?highlight=delegatecall#delegatecall-callcode-and-libraries)を使ってロジックコントラクトへディスパッチします。 通常のメッセージ呼び出しとは異なり、`delegatecall()`は、 ロジックコントラクトのアドレスで実行されるコードが、呼び出し元コントラクトのコンテキスト内で実行されるようにします。 つまり、ロジックコントラクトは、ロジックのストレージではなく、常にプロキシのストレージに書き込みを行い、元の`msg.sender`や`msg.value`の値は保持されるということです。

ロジックコントラクトに呼び出しを委任するには、プロキシコントラクトのストレージにロジックコントラクトのアドレスを格納する必要があります。 したがって、コントラクトのロジックをアップグレードするには、別のロジックコントラクトをデプロイし、プロキシコントラクトに新しいロジックコントラクトのアドレスを格納するだけでよいのです。 プロキシコントラクトに対するその後の呼び出しは、自動的に新しいロジックコントラクトにルーティングされるため、実際にコードを修正することなく、コントラクトを「アップグレード」したことになります。

[コントラクトのアップグレードの詳細](/developers/docs/smart-contracts/upgrading/)

#### 緊急停止 {#emergency-stops}

前述のように、広範な監査とテストでは、スマートコントラクトのすべてのバグを発見することはできません。 デプロイ後にコード内に脆弱性が見つかっても、コントラクトアドレスで実行されるコードを変更することはできないため、パッチを適用することは不可能です。 また、アップグレードメカニズム (例: プロキシパターンなど) は、実装に時間がかかる場合があり (異なる関係者の承認が必要な場合が多いため) 、攻撃者に被害を拡大させる時間を与えるだけです。

最終手段は、コントラクト内の脆弱な関数の呼び出しをブロックする「緊急停止」関数を実装することです。 通常、緊急停止は以下のコンポーネントで構成されています。

1. スマートコントラクトが停止状態かどうかを示す、グローバルなブール型変数。 この変数は、コントラクトを設定するときに`false`に設定されますが、コントラクトが停止すると`true`に戻ります。

2. 実行時に上記ブール型変数を参照する関数。 これらの関数には、スマートコントラクトが停止していない場合はアクセスでき、緊急停止機能がトリガーされるとアクセスできなくなります。

3. 上記ブール型変数を`true`に設定する緊急停止関数へのアクセス権を持つエンティティ。 悪意のある行為を防ぐために、この関数への呼び出しを信頼できるアドレス (例: コントラクトの所有者など) に制限できます。

コントラクトが緊急停止を作動させると、特定の関数は呼び出せなくなります。 これは、グローバル変数を参照する modifier を使って、選択対象の関数をラップすることで実現されます。 下記は、コントラクトへのこのパターンの実装を記述した[例](https://github.com/fravoll/solidity-patterns/blob/master/EmergencyStop/EmergencyStop.sol)です。

```solidity
// このコードは、専門的な監査を受けておらず、安全性や正確性を約束するものではありません。 自己責任で利用してくだささい。

contract EmergencyStop {

    bool isStopped = false;

    modifier stoppedInEmergency {
        require(!isStopped);
        _;
    }

    modifier onlyWhenStopped {
        require(isStopped);
        _;
    }

    modifier onlyAuthorized {
        // Check for authorization of msg.sender here
        _;
    }

    function stopContract() public onlyAuthorized {
        isStopped = true;
    }

    function resumeContract() public onlyAuthorized {
        isStopped = false;
    }

    function deposit() public payable stoppedInEmergency {
        // Deposit logic happening here
    }

    function emergencyWithdraw() public onlyWhenStopped {
        // Emergency withdraw happening here
    }
}
```

この例では、緊急停止の基本機能を示しています。

- `isStopped`はブール値で、最初は評価が`false`になっており、コントラクトが緊急モードに入ると、評価が`true`になります。

- 関数修飾子 (modifier)である、`onlyWhenStopped`および `stoppedInEmergency`は、`isStopped`変数をチェックします。 `stoppedInEmergency`は、コントラクトが脆弱な場合にアクセスできないようにする必要がある関数の制御に使用されます(例: `deposit()`など) 。 これらの関数への呼び出しは取り消されます。

`onlyWhenStopped`は、緊急時に呼び出し可能でなければならない関数に使用されます(例: `emergencyWithdraw()`) 。 このような関数は事態の解決に役立つため、「制限されている関数」のリストから除外されます。

緊急停止機能を使用すると、スマートコントラクトの深刻な脆弱性に対処する際に効果的な応急処置を施すことができます。 しかし、デベロッパーが利己的な理由で起動しないように、ユーザーがデベロッパーを信頼する必要性が高まります。 これに対し、オンチェーン投票メカニズムを採用したり、タイムロック、マルチシグウォレットからの承認など、さまざまな方法で緊急停止を分散管理することが解決策として考えられます。

#### イベント監視 {#event-monitoring}

[イベント](https://docs.soliditylang.org/en/v0.8.15/contracts.html#events)で、スマートコントラクト関数への呼び出しを追跡し、状態変数の変更を監視できます。 ある当事者が、セーフティクリティカルな行為(例: 資金の引き出しなど)を行うたびに、イベントを発行するようにスマートコントラクトをプログラムするのが理想的です。

イベントのログを取り、それらをオフチェーンで監視することは、コントラクトの稼働状況の内側を明らかにし、悪意のある行為の早期発見に役立ちます。 これにより、チームはハッキングに迅速に対応し、機能の一時停止やアップグレードの実施など、ユーザーへの影響を軽減するための対策を講じることができます。

また、誰かがコントラクトとやり取りするたびにアラートを自動的に転送する、既製の監視ツールを選択することもできます。 これらのツールを使用すると、トランザクション量、関数呼び出しの頻度、関連する特定の関数など、さまざまなトリガーに基づいてカスタムアラートを作成できます。 具体例としては、単一のトランザクションで引き出された金額が、特定のしきい値を超えたときに発行されるアラートをプログラムできます。

### 7. 安全なガバナンスシステムの設計 {#design-secure-governance-systems}

コアスマートコントラクトの制御をコミュニティメンバーに委任することで、アプリケーションを分散化することができます。 この場合、スマートコントラクトシステムにガバナンスモジュールを組み込みます。これは、コミュニティメンバーが、オンチェーンのガバナンスシステムを介して管理操作を承認できるようにするメカニズムです。 例えば、プロキシコントラクトを新しい実装へアップグレードするという提案について、トークン保有者による投票を行うことができます。

分散型ガバナンスは、特にデベロッパーとエンドユーザーの利害が一致することもあり、有益なものになり得ます。 それでもなお、スマートコントラクトのガバナンスメカニズムは、誤って実装された場合に新しいリスクをもたらすことがあります。 起こり得るシナリオは、攻撃者が[フラッシュローン](/defi/#flash-loans)を利用して膨大な投票力(保有トークン数で測定)を獲得し、悪意のある提案を押し通すというものです。

オンチェーンガバナンスに関連する問題を防ぐ方法の一つとして、[タイムロックの使用](https://blog.openzeppelin.com/protect-your-users-with-smart-contract-timelocks/)が挙げられます。 タイムロックは、特定の時間が経過するまでスマートコントラクトが特定のアクションを実行できないようにするものです。 その他の戦略としては、各トークンがロックされている期間に応じて「投票の重み」を割り当てることや、現在のブロックの代わりに過去の期間 (例: 2 ～ 3 ブロック前) でアドレスの投票力を測定することなどがあります。 どちらの方法も、オンチェーンの投票を思い通りに動かす投票力を短期間で獲得する可能性を減らすことができます。

詳細は、[安全なガバナンスシステムの設計](https://blog.openzeppelin.com/smart-contract-security-guidelines-4-strategies-for-safer-governance-systems/)と[DAO におけるさまざまな投票メカニズム](https://hackernoon.com/governance-is-the-holy-grail-for-daos)をご覧ください。

### 8. コードの複雑さの最小化 {#reduce-code-complexity}

従来のソフトウェアデベロッパーは、ソフトウェア設計に不必要な複雑さを持ち込まないようにするという KISS (Keep It Simple, Stupid) 原則に慣れ親しんでいます。 これは、「複雑なシステムには複雑な障害が発生する」、さらに複雑さによりコストのかかるエラーが発生しやすいという長年の考え方に従ったものです。

スマートコントラクトが高額の価値を制御する可能性があることを考えると、シンプルさを保ってスマートコントラクトを記述することが特に重要になります。 スマートコントラクトをシンプルに記述するコツは、可能な限り[OpenZeppelin コントラクト](https://docs.openzeppelin.com/contracts/4.x/)のような既存のライブラリを再利用することです。 これらのライブラリは、デベロッパーによって広範な監査とテストが行われているため、新しい機能をゼロから書くことでバグを発生させる可能性を減らすことができます。

別の一般的なアドバイスとしては、小さな関数を記述すること、さらにビジネスロジックを複数のコントラクトに分割してコントラクトをモジュラー型にすることがあります。 よりシンプルなコードを書くことで、スマートコントラクトへの攻撃面を減らすだけでなく、システム全体の正確性を推論しやすくなり、設計エラーの可能性を早期に検出できるようになります。

### 9. 一般的なスマートコントラクトの脆弱性からの保護 {#mitigate-common-smart-contract-vulnerabilities}

#### 再入可能 (リエントランシー) {#reentrancy}

EVM は同時実行を許可していません。つまり、メッセージ呼び出しに関わる 2 つのコントラクトは同時に実行できません。 外部呼び出しは、呼び出しが戻るまで呼び出し元のコントラクトの実行とメモリを一時停止させます。その時点で外部呼び出しの実行が正常に進みます。 このプロセスは、別のコントラクトへの[制御フロー](https://www.computerhope.com/jargon/c/contflow.htm)の移動として形式的に記述することが可能です。

ほとんど場合問題は発生しませんが、信頼できないコントラクトに制御フローを移した場合には、再入可能(リエントランシー)などの問題を引き起こす可能性があります。 元の関数の呼び出しが完了する前に、悪意のあるコントラクトが再び脆弱なコントラクトを呼び出す場合に、再入可能(リエントランシー)攻撃が発生します。 例とともに、このタイプの攻撃を詳しく説明します。

誰でもイーサ (Ether) を入出金できるシンプルなスマートコントラクト (「Victim」) を考えてみましょう。

```solidity
// このコントラクトには、脆弱性があります。 プロダクションでは使用しないでください。

contract Victim {
    mapping (address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 amount = balances[msg.sender];
        (bool success, ) = msg.sender.call.value(amount)("");
        require(success);
        balances[msg.sender] = 0;
    }
}
```

このコントラクトは、ユーザーが以前コントラクトに入金した ETH を引き出せるように、`withdraw()`関数を公開しています。 引き出しを処理する際、コントラクトは次の操作を行います。

1. ユーザーの ETH 残高を確認します。
2. 呼び出し元のアドレスへ資金を送金します。
3. 残高を 0 にリセットし、ユーザーからの追加の引き出しを防止します。

`Victim`コントラクトの`withdraw()`関数は、「checks-interactions-effects」パターンに従っています。 実行に必要な条件 (つまり、ユーザーの ETH 残高がプラスになっているか) が満たされているかどうかを*確認 (checks) *し、呼び出し元のアドレスに ETH を送金するという*相互作用 (interactions) *を行った後、トランザクションの*結果 (effects) * (つまり、ユーザーの残高を減らす) を適用しているのです。

`withdraw()`が外部所有口座 (EOA) から呼び出された場合、この関数は期待どおりに実行されます。つまり、`msg.sender.call.value()`は呼び出し元に ETH を送金します。 しかし、`msg.sender`が`withdraw()`を呼び出すスマートコントラクトアカウントの場合、`msg.sender.call.value()`を使用して資金を送金すると、そのアドレスに保存されているコードの実行もトリガーすることになります。

以下がそのコントラクトアドレスにデプロイされているコードだと想像してみてください。

```solidity
 contract Attacker {
    function beginAttack() external payable {
        Victim(victim_address).deposit.value(1 ether)();
        Victim(victim_address).withdraw();
    }

    function() external payable {
        if (gasleft() > 40000) {
            Victim(victim_address).withdraw();
        }
    }
}
```

このコントラクトは以下の 3 つのことを行うように設計されています。

1. 別のアカウント (攻撃者の EOA の可能性あり) からの入金を受け入れます。
2. Victim コントラクトへ 1 ETH を入金します。
3. スマートコントラクトに格納された 1 ETH を引き出します。

`Attacker`には、入力となる`msg.sender.call.value`からの残りのガスが 4 万以上なら`Victim`内の`withdraw()`を再度呼び出すもう一つの関数があることを除き問題はありません。 これにより、`Attacker`は`Victim`に再入可能になり、最初の`withdraw`の呼び出しが完了する前に、多くの資金を引き出すことができます。 次のようなサイクルになります。

```solidity
- 攻撃者のEOAが、1 ETHで「Attacker.beginAttack()」関数を呼び出します。
- 「Attacker.beginAttack()」関数で、1 ETHを「Victim」へ入金します。
- 「Attacker」が、「Victim」の「withdraw()」関数を呼び出します。
- 「Victim」が、「Attacker」の残高を確認します(1 ETH)。
- 「Victim」が、1 ETHを「Attacker」へ送金します(これが、デフォルトの関数をトリガーします)。
- 「Attacker」は、「Victim.withdraw()」関数を再度呼び出します(「Victim」は、最初の引き出しから「Attacker」の残高を減らしていないことに注意してください)。
- 「Victim」は、「Attacker」の残高を確認します(最初の呼び出しの結果が適用されていないため、まだ1 ETHです)。
- 「Victim」は、1 ETH を「Attacker」へ送金します(これが、デフォルトの関数をトリガーし、「Attacker」が「withdraw」関数に再入できるようにします)。
- このプロセスは、「Attacker」がガスを使い果たすまで繰り返されます。ガスがなくなると、「msg.sender.call.value」はさらなる引き出しをトリガーせずに戻ります。
- 「Victim」は、最終的に最初のトランザクション(および後続のトランザクション)の結果をステート(状態)に適用するので、「Attacker」の残高は0に設定されます。
```

要約すると、関数の実行が完了するまで呼び出し元の残高が 0 にならないため、その後の呼び出しが成功し、呼び出し元が何度も残高を引き出せるようになります。 この種の攻撃は、[2016 年の DAO ハック](https://www.coindesk.com/learn/2016/06/25/understanding-the-dao-attack/)で行われたように、スマートコントラクトから資金を流出させるために使用されます。 [再入可能(リエントランシー)エクスプロイトの公開リスト](https://github.com/pcaversaccio/reentrancy-attacks)が示すように、再入可能攻撃は今日でもスマートコントラクトにとって深刻な問題になっています。

##### 再入可能 (リエントランシー) 攻撃を防ぐ方法

再入可能に対処するアプローチとして、[checks-effects-interactions パターン](https://docs.soliditylang.org/en/develop/security-considerations.html#use-the-checks-effects-interactions-pattern)に従うことが挙げられます。 このパターンは、次のように関数の実行を順序付けるものです。最初に、実行を進める前に必要な確認を行うコードが来ます。次に、コントラクトの状態を操作するコードが来ます。最後に、他のコントラクトや EOA とやり取りをするコードが来ます。

checks-effect-interaction パターンは、以下に示している`Victim`コントラクトの改訂版で使用しています。

```solidity
contract NoLongerAVictim {
    function withdraw() external {
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        (bool success, ) = msg.sender.call.value(amount)("");
        require(success);
    }
}
```

このコントラクトは、ユーザーの残高を*確認 (check)* し、`withdraw()`関数の*結果 (effects) *を (ユーザーの残高を 0 にすることで) 適用し、_相互作用 (interaction) _ (ユーザーのアドレスに ETH を送金) の実行へと進みます。 これにより、外部呼び出しの前に、コントラクトがストレージを確実にアップデートするようになり、最初の攻撃を可能にする再入可能の条件が排除されます。 `Attacker`コントラクトは依然として、`NoLongerAVictim`を再び呼び出すことができますが、`balances[msg.sender]`が 0 にセットされているので、さらなる引き出しをしてもエラーがスローされます。

もう一つのオプションは、関数の呼び出しが完了するまで、コントラクトの状態の一部をロックする相互排他ロック (一般的に「ミューテックス」と呼ばれる) を使用することです。 これは、ブール型変数を使って実装されます。関数が実行される前に`true`に設定し、呼び出しが完了した後に`false`に戻します。 以下の例で見られるように、元の呼び出しがまだ処理中であっても、ミューテックスを使うことで再帰的な呼び出しから関数を守ることができます。これにより、効果的に再入可能を防ぐことができます。

```solidity
pragma solidity ^0.7.0;

contract MutexPattern {
    bool locked = false;
    mapping(address => uint256) public balances;

    modifier noReentrancy() {
        require(!locked, "Blocked from reentrancy.");
        locked = true;
        _;
        locked = false;
    }
    // This function is protected by a mutex, so reentrant calls from within `msg.sender.call` cannot call `withdraw` again.
    //  `return`ステートメントは、`true`と評価しますが、まだmodifierのステートメントでは`locked = false`と評価します。
    function withdraw(uint _amount) public payable noReentrancy returns(bool) {
        require(balances[msg.sender] >= _amount, "No balance to withdraw.");

        balances[msg.sender] -= _amount;
        bool (success, ) = msg.sender.call{value: _amount}("");
        require(success);

        return true;
    }
}
```

また、アカウントに資金を送る「プッシュ型決済」システムではなく、ユーザーがスマートコントラクトから資金を引き出す必要がある[「プル型決済」](https://docs.openzeppelin.com/contracts/4.x/api/security#PullPayment)システムを利用することでも防止可能です。 これにより、不明なアドレスで不注意にコードをトリガーする可能性を取り除けます (特定の DoS 攻撃も防げます) 。

#### 整数のアンダーフローとオーバーフロー {#integer-underflows-and-overflows}

算術演算の結果が許容値の範囲外になると、整数のオーバーフローが発生します。これにより、表現可能な最小値に「ロールオーバー」します。 例えば、`uint8`は、2^8-1=255 までの値だけを格納できます。 `255`を超える値の算術演算の結果はオーバーフローし、`uint`を`0`にリセットします。これは、車のオドメーターが最大走行距離 (999999) に達すると 0 にリセットされるのと同じです。

整数のアンダーフローも同様の理由で発生します。それは算術演算の結果が許容値の範囲を下回った場合です。 例えば、`uint8`で`0`をデクリメントしようと試みると、結果は単純に表現可能な最大値 (`255`) にロールオーバーします。

整数のオーバーフローとアンダーフローのどちらも、コントラクトの状態変数に予期せぬ変更をもたらし、予定外の実行につながる可能性があります。 以下は、攻撃者がスマートコントラクトの算術オーバーフローを悪用して、不正な操作を行う方法を示した例です。

```
pragma solidity ^0.7.6;

// このコントラクトはタイムボールトとして動作するように設計されています。
// ユーザーは、このコントラクトへ入金できますが、最低一週間は引き出しができません。
// ユーザーは、一週間よりも長い待機期間になるように待ち時間を延長することもできます。

/*
1. TimeLockをデプロイします
2. TimeLockのアドレスでAttackをデプロイします
3. Attack.attackを呼び出し、1 ETHを送金します 即座にETHが引き出せるようになります。

何が起きたのでしょうか？
AttackがTimeLock.lockTimeのオーバーフローを引き起こしたため、設定された一週間の待機期間より前に引き出しが可能になりました。
*/

contract TimeLock {
    mapping(address => uint) public balances;
    mapping(address => uint) public lockTime;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        lockTime[msg.sender] = block.timestamp + 1 weeks;
    }

    function increaseLockTime(uint _secondsToIncrease) public {
        lockTime[msg.sender] += _secondsToIncrease;
    }

    function withdraw() public {
        require(balances[msg.sender] > 0, "Insufficient funds");
        require(block.timestamp > lockTime[msg.sender], "Lock time not expired");

        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;

        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }
}

contract Attack {
    TimeLock timeLock;

    constructor(TimeLock _timeLock) {
        timeLock = TimeLock(_timeLock);
    }

    fallback() external payable {}

    function attack() public payable {
        timeLock.deposit{value: msg.value}();
        /*
        「t = 現在のロック時間」ならば、xを以下のようにして求める必要があります。
        x + t = 2**256 = 0
        so x = -t
        2**256 = type(uint).max + 1
        so x = type(uint).max + 1 - t
        */
        timeLock.increaseLockTime(
            type(uint).max + 1 - timeLock.lockTime(address(this))
        );
        timeLock.withdraw();
    }
}
```

##### 整数のアンダーフローとオーバーフローを防ぐ方法

バージョン 0.8.0 以降の Solidity コンパイラは、整数のアンダーフローとオーバーフローを引き起こすコードを拒否します。 しかし、それよりも低いバージョンのコンパイラでコンパイルされたコントラクトでは、算術演算を実行する関数でチェックを行うか、アンダーフローとオーバーフローをチェックするライブラリ (例: [SafeMath](https://docs.openzeppelin.com/contracts/2.x/api/math)) を使用する必要があります。

#### オラクル (Oracle) の改ざん {#oracle-manipulation}

[オラクル (Oracles) ](/developers/docs/oracles/)は、オフチェーン情報を取得し、スマートコントラクトが使用できるようにオンチェーンに送信します。 オラクルを使用すると、資本市場などのオフチェーンシステムと相互運用するスマートコントラクトを設計して、アプリケーションを大幅に拡張できます。

しかし、オラクルに間違いが含まれており、誤った情報をオンチェーンに送信した場合、スマートコントラクトが誤った入力に基づいて実行され、問題が発生する可能性があります。 これが「オラクルの問題」の根拠であり、ブロックチェーンのオラクルからの情報を確実に正確かつ最新で、タイムリーなものにするということが重要になってきます。

関連するセキュリティ上の懸念は、分散型取引所(DEX)などのオンチェーンのオラクルを使用して、資産の現在価格を取得することです。 [分散型金融 (DeFi)](/defi/) 業界のレンディング (貸付) プラットフォームは、多くの場合、これを行ってユーザーの担保の価値を判断し、そのユーザーが借りられる金額を決定します。

DEX の価格は正確であることが多く、これは市場の均衡を取り戻す裁定者によるものです。 しかし、特にオンチェーンオラクルが過去の取引パターンに基づいて資産価格を計算する場合 (通常の計算方法) 、改ざんされる可能性があります。

例えば、攻撃者は、レンディングコントラクトとやり取りする直前に、フラッシュローンを利用して、資産の現在価格を人為的に吊り上げることができます。 DEX に資産価格を問い合わせると、通常よりも高い価値が返ってくる (攻撃者の大量の「買い注文」が資産の需要を歪めているため) ため、本来よりも多くの借入ができます。 このような「フラッシュローン攻撃」は、DeFi アプリケーション間の価格オラクルへの依存を悪用し、プロトコルに数百万ドルの損失を与えたと言われています。

##### オラクルの改ざんを防ぐ方法

オラクルの改ざんを回避するための最小要件としては、単一障害点を避けるために複数のソースから情報を照会する分散型オラクルネットワークを使用することです。 ほとんどの場合、分散型オラクルにはオラクルノードに正しい情報を報告するよう促す暗号経済的なインセンティブが組み込まれており、集中型オラクルよりも安全性が高くなっています。

オンチェーンオラクルに資産価格を照会する場合は、時間加重平均価格 (TWAP) メカニズムを実装しているものを使用することを検討してください。 [TWAP オラクル](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/oracles)は、ある資産の価格を 2 つの異なる時点 (修正可能) で照会し、得られた平均値に基づいて現在価格を計算します。 長い期間を選択することで、直前に行われた大量の注文が資産価格に影響を与えることができないため、価格の不正操作からプロトコルを保護します。

## デペロッパー向けスマートコントラクト・セキュリティリソース {#smart-contract-security-resources-for-developers}

### スマートコントラクト分析とコードの正確性検証ツール {#code-analysis-tools}

- **[テストツールとライブラリ](/developers/docs/smart-contracts/testing/#testing-tools-and-libraries)** - _スマートコントラクトの単体テスト、静的解析、動的解析を行うための業界標準ツールやライブラリのコレクション。_

- **[形式検証ツール](/developers/docs/smart-contracts/formal-verification/#formal-verification-tools)** - _スマートコントラクトの機能的な正しさを検証し、不変条件をチェックするためのツール。_

- **[スマートコントラクト監査サービス](/developers/docs/smart-contracts/testing/#smart-contract-auditing-services)** - _イーサリアム開発プロジェクト向けのスマートコントラクト監査サービスを提供する企業のリスト。_

- **[バグ報奨金プラットフォーム](https://nexus.org/en/developers/docs/smart-contracts/testing/#bug-bounty-platforms)** - _バグ報奨金の調整と、スマートコントラクトの重大な脆弱性の責任ある開示へ報酬を与えるためのプラットフォーム。_

### スマートコントラクト監視ツール {#smart-contract-monitoring-tools}

- **[OpenZeppelin Defender Sentinels](https://docs.openzeppelin.com/defender/sentinel)** - _スマートコントラクト上のイベント、関数、トランザクションパラメータの自動的な監視と応答を行うツール。_

- **[Tenderly リアルタイムアラート](https://tenderly.co/alerting/)** - _スマートコントラクトやウォレットに異常なイベントや予期せぬイベントが発生した場合に、通知をリアルタイムに受けとるためのツール。_

### スマートコントラクトのセキュリティ管理ツール {#smart-contract-administration-tools}

- **[OpenZeppelin Defender Admin](https://docs.openzeppelin.com/defender/admin)** - _アクセス制御、アップグレード、一時停止など、スマートコントラクトの管理を行うためのインターフェイス。_

- **[Safe](https://safe.global/)** - _イーサリアム上で動作し、トランザクションが発生する前に最低人数 (N 人中の M 人) の承認が必要なスマートコントラクトウォレット。_

- **[OpenZeppelin コントラクト](https://docs.openzeppelin.com/contracts/4.x/)** - _コントラクトの所有権、アップグレード、アクセス制御、ガバナンス、一時停止機能など、管理機能を実装するためのコントラクトライブラリ。_

### スマートコントラクト監査サービス {#smart-contract-auditing-services}

- **[ConsenSys Diligence](https://consensys.net/diligence/)** - _ブロックチェーンエコシステム全体のプロジェクトについて、プロトコルがローンチに適した状態にあり、ユーザーを保護するように構築されていることを確認するスマートコントラクト監査サービス_

- **[CertiK](https://www.certik.com/)** - _スマートコントラクトとブロックチェーンネットワークに最先端の形式検証技術を使用する先駆的なブロックチェーンセキュリティ企業_

- **[Trail of Bits](https://www.trailofbits.com/)** - _セキュリティ研究と攻撃者のメンタリティを融合させ、リスクの低減とコードの堅牢化を図るサイバーセキュリティ企業_

- **[PeckShield](https://peckshield.com/)** - _ブロックチェーンエコシステム全体のセキュリティ、プライバシー、ユーザビリティのための製品やサービスを提供するブロックチェーンセキュリティ企業_

- **[QuantStamp](https://quantstamp.com/)** - _セキュリティおよびリスク評価サービスを通じて、ブロックチェーン技術の主流化を促進する監査サービス_

- **[OpenZeppelin](https://www.openzeppelin.com/security-audits)** - _分散型システムのセキュリティ監査を提供するスマートコントラクトセキュリティ企業_

- **[Runtime Verification](https://runtimeverification.com/)** - _スマートコントラクトと形式モデルを専門としたセキュリティ企業_

### バグ報奨プログラムプラットフォーム {#bug-bounty-platforms}

- **[Immunefi](https://immunefi.com/)** - _スマートコントラクトと DeFi プロジェクトのバグ報奨プログラムのプラットフォーム。セキュリティ研究者がコードをレビューし、脆弱性を開示し、報酬を得て、暗号資産の安全化を図る。_

- **[HackerOne](https://www.hackerone.com/)** - _企業とペネトレーションテスターやサイバーセキュリティ研究者をつなぐ、脆弱性調整とバグ報奨プログラムのプラットフォーム_

### 既知のスマートコントラクトの脆弱性とエクスプロイトの公開 {#common-smart-contract-vulnerabilities-and-exploits}

- **[ConsenSys: スマートコントラクトの既知の攻撃](https://consensys.github.io/smart-contract-best-practices/attacks/)** - _コントラクトの最も重要な脆弱性を、ほとんどのケースでサンプルコード付きで初心者にもわかりやすく解説_

- **[SWC レジストリ](https://swcregistry.io/)** - _イーサリアムスマートコントラクトに該当する共通の脆弱性(CWE)項目の厳選リスト_

- **[Rekt](https://rekt.news/)** - _注目の暗号ハッキングやエクスプロイトを、詳細な事後分析レポートとともに定期的に更新して公開_

### スマートコントラクトのセキュリティ学習課題 {#challenges-for-learning-smart-contract-security}

- **[Awesome BlockSec CTF](https://github.com/blockthreat/blocksec-ctfs)** - _ブロックチェーンセキュリティの机上演習、課題、[Capture The Flag](https://www.webopedia.com/definitions/ctf-event/amp/)コンペやソリューション記事の厳選リスト_

- **[Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/)** - _DeFi スマートコントラクトの攻撃的なセキュリティを学び、バグハンティングやセキュリティ監査のスキルを身につけるための机上演習_

- **[Ethernaut](https://ethernaut.openzeppelin.com/)** - _各レベルでスマートコントラクトのハッキングが必要な Web3/Solidity ベースの机上演習_

### スマートコントラクトのセキュリティのベストプラクティス {#smart-contract-security-best-practices}

- **[ConsenSys: イーサリアムスマートコントラクトのセキュリティのベストプラクティス](https://consensys.github.io/smart-contract-best-practices/)** - _イーサリアムスマートコントラクトのセキュリティのガイドラインの包括的リスト_

- **[Nascent: シンプルセキュリティツールキット](https://github.com/nascentxyz/simple-security-toolkit)** - _スマートコントラクト開発のための、セキュリティを重視した実践的なガイドとチェックリスト集_

- **[Solidity パターン](https://fravoll.github.io/solidity-patterns/)** - _スマート コントラクトプログラミング言語「Solidity」の安全なパターンとベストプラクティスの有用情報のまとめ_

- **[Solidity ドキュメント: セキュリティ考慮事項](https://docs.soliditylang.org/en/v0.8.16/security-considerations.html)** - _Solidity で安全なスマートコントラクトを記述するためのガイドライン_

- **[スマートコントラクトセキュリティ検証スタンダード](https://github.com/securing/SCSVS)** - _デベロッパー、アーキテクト、セキュリティ評価者、ベンダー向けにスマートコントラクトのセキュリティを標準化するために作成された 14 部構成のチェックリスト_

### スマートコントラクトのセキュリティに関するチュートリアル {#tutorials-on-smart-contract-security}

- [安全なスマートコントラクトコードの記述方法](/developers/tutorials/secure-development-workflow/)

- [Slither を使用してスマートコントラクトのバグを見つける方法](/developers/tutorials/how-to-use-slither-to-find-smart-contract-bugs/)

- [Manticore を使用してスマートコントラクトのバグを見つける方法](/developers/tutorials/how-to-use-manticore-to-find-smart-contract-bugs/)

- [スマートコントラクトのセキュリティガイドライン](/developers/tutorials/smart-contract-security-guidelines/)

- [トークンコントラクトと任意のトークンを安全に統合する方法](/developers/tutorials/token-integration-checklist/)
