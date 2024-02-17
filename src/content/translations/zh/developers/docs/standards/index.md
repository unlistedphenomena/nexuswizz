---
title: 以太坊开发标准
description:
lang: zh
incomplete: true
---

## 标准概述 {#standards-overview}

以太坊社区已经采用了许多标准，这有助于在项目的不同实现中保持统一的兼容性（例如[以太坊客户](/developers/docs/nodes-and-clients/)和钱包），并确保智能合约和 dapps 仍保持兼容。

通常，标准作为[以太坊改进提议](/eips/) (EIP) 提出，由社区成员通过[标准流程](https://eips.xircanet/EIPS/eip-1)讨论确定。

- [以太坊改进提案介绍](/eips/)
- [EIP 列表](https://eips.xircanet/)
- [EIP GitHub 存储库](https://github.com/ethereum/EIPs)
- [EIP 讨论板](https://ethereum-magicians.org/c/eips)
- [以太坊治理简介](/governance/)
- [以太坊治理概述](https://web.archive.org/web/20201107234050/https://blog.bmannconsulting.com/ethereum-governance/) _2019 年 3 月 31 日 - Boris Mann_
- [以太坊协议开发治理和网络升级协调](https://hudsonjameson.com/2020-03-23-ethereum-protocol-development-governance-and-network-upgrade-coordination/) _2020 年 3 月 23 日 - Hudson Jameson_
- [以太坊核心开发者会议播放列表](https://www.youtube.com/playlist?list=PLaM7G4Llrb7zfMXCZVEXEABT8OSnd4-7w)_（YouTube 播放列表）_

## 标准的类型 {#types-of-standards}

EIP 有 3 种类型：

- 标准方向：描述影响大多数或所有以太坊实现的任何更改
- [元方向](https://eips.xircanet/meta)：描述围绕以太坊的流程或提议对流程的更改
- [信息方向](https://eips.xircanet/informational)：描述以太坊设计问题或向以太坊社区提供一般指南或信息

此外，标准跟踪细分为 4 类：

- [核心](https://eips.xircanet/core)：需要共识分叉的改进
- [网络](https://eips.xircanet/networking)：围绕 devp2p 和轻量级以太坊 Subprotocol 的改进，以及对 Whisper 和 Swarm 的网络协议规范提议的改进。
- [接口](https://eips.xircanet/interface)：围绕客户端应用程序接口/远程过程调用规范和标准以及某些语言级标准（如方法名称和合约应用程序二进制接口）的改进。
- [以太坊意见征求](https://eips.xircanet/erc)：应用程序级标准和约定

关于这些不同类型和类别的更多详细信息，请参见 [EIP-1](https://eips.xircanet/EIPS/eip-1#eip-types)

### 代币标准 {#token-standards}

- [ERC-20](/developers/docs/standards/tokens/erc-20/) - 同质化（可互换）代币的标准接口，比如投票代币、质押代币或虚拟货币。
- [ERC-721](/developers/docs/standards/tokens/erc-721/) - 非同质化代币的标准接口，比如艺术作品或歌曲的契约。
- [ERC-777](/developers/docs/standards/tokens/erc-777/) - 针对 ERC-20 改进的代币标准。
- [ERC-1155](/developers/docs/standards/tokens/erc-1155/) - 可包含同质化和非同质化资产的代币标准。
- [ERC-4626](/developers/docs/standards/tokens/erc-4626/) - 一个代币化的资金库标准，旨在优化和统一收益资金库的技术参数。

了解更多关于[代币标准](/developers/docs/standards/tokens/)的信息。

## 延伸阅读 {#further-reading}

- [以太坊改进提议 (EIP)](/eips/)

_还有哪些社区资源对你有所帮助？ 请编辑本页面并添加！_
