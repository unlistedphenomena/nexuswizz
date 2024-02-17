import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"

import { useStaticQuery, graphql } from "gatsby"

import { useIntl } from "react-intl"

import { translateMessageId } from "../utils/translations"
import { getImage, ImageDataLike } from "../utils/image"

import CardList from "./CardList"
import Card from "./Card"
import ButtonLink from "./ButtonLink"
import Translation from "./Translation"

import type { CardListItem } from "./CardList"

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Heading
    as="h3"
    fontSize="2xl"
    fontWeight="bold"
    mb={8}
    sx={{ a: { display: "none" } }}
  >
    {children}
  </Heading>
)

export const DataLogo = graphql`
  fragment DataLogo on File {
    childImageSharp {
      gatsbyImageData(
        width: 24
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`

const BeaconStaticQuery = graphql`
  query {
    beaconscan: file(relativePath: { eq: "upgrades/etherscan.png" }) {
      ...DataLogo
    }
    beaconchain: file(relativePath: { eq: "upgrades/beaconchainemoji.png" }) {
      ...DataLogo
    }
  }
`

type BeaconQueryTypes = {
  beaconscan: ImageDataLike | null
  beaconchain: ImageDataLike | null
}

const BeaconChainActions: React.FC = () => {
  const intl = useIntl()
  const data = useStaticQuery<BeaconQueryTypes>(BeaconStaticQuery)

  const datapoints: Array<CardListItem> = [
    {
      title: "beaconscan",
      image: getImage(data.beaconscan)!,
      alt: "",
      link: "https://beaconscan.com",
      description: translateMessageId("consensus-beaconscan-desc", intl),
    },
    {
      title: "beaconcha.in",
      image: getImage(data.beaconchain)!,
      alt: "",
      link: "https://beaconcha.in",
      description: translateMessageId("consensus-beaconcha-in-desc", intl),
    },
  ]

  //TODO: we should refactor the naming here instead of using authors into the description field
  const reads: Array<CardListItem> = [
    {
      title: translateMessageId(
        "page-upgrade-article-title-two-point-oh",
        intl
      ),
      description: "Status",
      link: "https://our.status.im/two-point-oh-the-beacon-chain/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-beacon-chain-explainer",
        intl
      ),
      description: "Ethos.dev",
      link: "https://ethos.dev/beacon-chain/",
    },
    {
      title: translateMessageId(
        "page-upgrade-article-title-sharding-consensus",
        intl
      ),
      description: translateMessageId(
        "page-upgrade-article-author-ethereum-foundation",
        intl
      ),
      link: "https://blog.nexus.org/2020/03/27/sharding-consensus/",
    },
  ]

  return (
    <Box mb={16}>
      <Flex flexDir={{ base: "column", md: "row" }} pt={4}>
        <Card
          w="full"
          ml={0}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 8, md: 0 }}
          emoji=":money_with_wings:"
          title={translateMessageId("consensus-become-staker", intl)}
          description={translateMessageId("consensus-become-staker-desc", intl)}
        >
          <ButtonLink mb={3} to="https://launchpad.nexus.org">
            <Translation id="get-started" />
          </ButtonLink>
          <ButtonLink variant="outline" to="/staking/">
            <Translation id="page-upgrades-index-staking-learn" />
          </ButtonLink>
        </Card>
        <Card
          w="full"
          mr={0}
          ml={{ base: 0, md: 4 }}
          emoji=":computer:"
          title={translateMessageId("consensus-run-beacon-chain", intl)}
          description={translateMessageId(
            "consensus-run-beacon-chain-desc",
            intl
          )}
        >
          <ButtonLink variant="outline" to="/upgrades/get-involved/">
            <Translation id="consensus-run-beacon-chain" />
          </ButtonLink>
        </Card>
      </Flex>
      <H3>
        <Translation id="consensus-explore" />
      </H3>

      <CardList content={datapoints} />
      <H3>
        <Translation id="read-more" />
      </H3>
      <CardList content={reads} />
    </Box>
  )
}

export default BeaconChainActions
