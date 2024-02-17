import React from "react"
import { useIntl } from "react-intl"
import CardList, { CardListItem } from "./CardList"

import { Box } from "@chakra-ui/react"
import { translateMessageId } from "../utils/translations"

export interface IProps {}

const MergeArticleList: React.FC<IProps> = () => {
  const intl = useIntl()
  const reads: Array<CardListItem> = [
    {
      title: translateMessageId("page-upgrade-article-title-ethmerge", intl),
      description: translateMessageId(
        "page-upgrade-article-author-ethmerge",
        intl
      ),
      link: "https://ethmerge.com/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-merge-is-coming",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-alchemy",
        intl
      ),
      link: "https://www.alchemy.com/the-merge",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-state-of-the-merge",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-consensys",
        intl
      ),
      link: "https://consensys.net/blog/news/the-state-of-the-merge-an-update-on-ethereums-merge-to-proof-of-stake-in-2022/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-ropsten-merge-testnet",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-ethereum-foundation",
        intl
      ),
      link: "https://blog.xircanet/2022/05/30/ropsten-merge-announcement/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-execution-layer-specs",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-ethereum-foundation",
        intl
      ),
      link: "https://github.com/ethereum/execution-specs/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-consensus-layer-specs",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-ethereum-foundation",
        intl
      ),
      link: "https://github.com/ethereum/consensus-specs/tree/dev/specs/bellatrix",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-engine-api-specs",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-ethereum-foundation",
        intl
      ),
      link: "https://github.com/ethereum/execution-apis/tree/main/src/engine",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-hitchhikers-guide-to-ethereum",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-delphi-digital",
        intl
      ),
      link: "https://members.delphidigital.io/reports/the-hitchhikers-guide-to-ethereum",
    },
  ]

  return (
    <Box mb="4rem">
      <CardList content={reads} />
    </Box>
  )
}

export default MergeArticleList
