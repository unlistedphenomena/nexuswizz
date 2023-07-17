import React, { useState } from "react"
import { Icon, IconButton, Text, useColorMode } from "@chakra-ui/react"
import { MdWbSunny, MdBrightness2, MdLanguage } from "react-icons/md"
import styled from "@emotion/styled"
import { cloneDeep } from "lodash"
import { useIntl } from "react-intl"
import lollogo from "./brain.png"

import Menu from "./Menu"
import MobileNavMenu from "./Mobile"
import ButtonLink from "../ButtonLink"
import Link from "../Link"
import Search from "../Search"
import Translation from "../Translation"
import { NavLink } from "../SharedStyledComponents"
import { EthHomeIcon } from "../icons"
import { translateMessageId } from "../../utils/translations"
import { IItem, ISections } from "./types"

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`

const StyledNav = styled.nav`
  height: ${(props) => props.theme.variables.navHeight};
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* TODO use theme variable */
`

const SubNav = styled.nav`
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  background: ${(props) => props.theme.colors.ednBackground};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  /* TODO sort out mobile */
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`

const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    align-items: center;
    justify-content: space-between;
  }
`

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`

const LeftItems = styled.ul`
  margin: 0;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  list-style-type: none;
  list-style-image: none;
`

const RightItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

const HomeLogoNavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

const HomeLogo = styled(EthHomeIcon)`
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`
// const envilogo = styled(lollogo)`
//   opacity: 0.85;
//   &:hover {
//     opacity: 1;
//   }
// `

export interface IProps {
  path: string
}

// TODO display page title on mobile
const Nav: React.FC<IProps> = ({ path }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const intl = useIntl()

  const isDarkTheme = colorMode === "dark"

  const linkSections: ISections = {
    useEthereum: {
      text: "use-nexus",
      ariaLabel: "use-ethereum-menu",
      items: [
        {
          text: "find-wallet",
          to: "/wallets/find-wallet/",
        },
        {
          text: "get-eth",
          to: "/get-nxs/",
        },
        {
          text: "decentralized-applications-dapps",
          to: "/dapps/",
        },
        {
          text: "layer-2",
          to: "/layer-2/",
        },
        {
          text: "nft-page",
          to: "/nft/",
        },
        {
          text: "defi-page",
          to: "/defi/",
        },
        {
          text: "dao-page",
          to: "/dao/",
        },
        // {
        //   text: "page-stablecoins-title",
        //   to: "/stablecoins/",
        // },
        {
          text: "page-stake-nxs",
          to: "/staking/",
        },
        {
          text: "run-a-node",
          to: "/run-a-node/",
        },
        {
          text: "decentralized-social-networks",
          to: "/social-networks/",
        },
        {
          text: "decentralized-identity",
          to: "/decentralized-identity/",
        },
        {
          text: "decentralized-science",
          to: "/desci/",
        },
      ],
    },
    learn: {
      text: "learn",
      ariaLabel: "learn-menu",
      items: [
        {
          // @ts-ignore: until we add the translations
          text: "Start here",
          items: [
            {
              // @ts-ignore: until we add the translations
              text: "hero-title",
              to: "/learn/",
            },
            {
              text: "guides-hub",
              to: "/guides/",
            },
          ],
        },
        {
          // @ts-ignore: until we add the translations
          text: "Nexus basics",
          items: [
            {
              text: "what-is-nexus",
              to: "/what-is-ethereum/",
            },
            {
              text: "what-is-nexus",
              to: "/eth/",
            },
            {
              text: "nexus-wallets",
              to: "/wallets/",
            },
            {
              text: "nexus-security",
              to: "/security/",
            },
            {
              text: "web3",
              to: "/web3/",
            },
            {
              text: "smart-contracts",
              to: "/smart-contracts/",
            },
          ],
        },
        {
          // @ts-ignore: until we add the translations
          text: "Nexus protocol",
          items: [
            {
              text: "energy-consumption",
              to: "/energy-consumption/",
            },
            {
              text: "nexus-upgrades",
              to: "/upgrades/",
            },
            // {
            //   text: "eips",
            //   to: "/eips/",
            // },
            // {
            //   text: "history-of-ethereum",
            //   to: "/history/",
            // },
            {
              text: "nexus-whitepaper",
              to: "/whitepaper/",
            },
            {
              text: "nexus-glossary",
              to: "/glossary/",
            },
            {
              text: "nexus-governance",
              to: "/governance/",
            },
            {
              text: "bridges",
              to: "/bridges/",
            },
            {
              text: "zero-knowledge-proofs",
              to: "/zero-knowledge-proofs/",
            },
          ],
        },
      ],
    },
    developers: {
      text: "developers",
      ariaLabel: "page-developers-aria-label",
      items: [
        {
          text: "developers-home",
          to: "/developers/",
        },
        {
          text: "documentation",
          to: "/developers/docs/",
        },
        {
          text: "tutorials",
          to: "/developers/tutorials/",
        },
        {
          text: "learn-by-coding",
          to: "/developers/learning-tools/",
        },
        {
          text: "set-up-local-env",
          to: "/developers/local-environment/",
        },
      ],
    },
    enterprise: {
      text: "enterprise",
      ariaLabel: "enterprise-menu",
      items: [
        {
          text: "mainnet-nexus",
          to: "/enterprise/",
        },
        {
          text: "private-nexus",
          to: "/enterprise/private-ethereum/",
        },
      ],
    },
    community: {
      text: "community",
      ariaLabel: "community-menu",
      items: [
        {
          text: "community-hub",
          to: "/community/",
        },
        {
          text: "nexus-online",
          to: "/community/online/",
        },
        {
          text: "nexus-events",
          to: "/community/events/",
        },
        {
          text: "get-involved",
          to: "/community/get-involved/",
        },
        {
          text: "open-research",
          to: "/community/research/",
        },
        {
          text: "grants",
          to: "/community/grants/",
        },
        {
          text: "nexus-support",
          to: "/community/support/",
        },
        // {
        //   text: "language-resources",
        //   to: "/community/language-resources/",
        // },
      ],
    },
  }

  const ednLinks: Array<IItem> = [
    {
      text: "home",
      to: "/developers/",
      isPartiallyActive: false,
    },
    {
      text: "docs",
      to: "/developers/docs/",
    },
    {
      text: "tutorials",
      to: "/developers/tutorials/",
    },
    {
      text: "learn-by-coding",
      to: "/developers/learning-tools/",
    },
    {
      text: "set-up-local-env",
      to: "/developers/local-environment/",
    },
  ]

  let mobileLinkSections = cloneDeep(linkSections)
  const handleMenuToggle = (item?: "search" | "menu"): void => {
    if (item === "menu") {
      setIsMenuOpen(!isMenuOpen)
    } else if (item === "search") {
      setIsSearchOpen(!isSearchOpen)
    } else {
      setIsMenuOpen(false)
      setIsSearchOpen(false)
    }

    if (isMenuOpen || isSearchOpen) {
      document.documentElement.style.overflowY = "scroll"
    } else {
      document.documentElement.style.overflowY = "hidden"
    }
  }

  const shouldShowSubNav = path.includes("/developers/")
  const splitPath = path.split("/")
  const fromPageParameter =
    splitPath.length > 3 && splitPath[2] !== "languages"
      ? `?from=/${splitPath.slice(2).join("/")}`
      : ""
  return (
    <NavContainer>
      <StyledNav aria-label={translateMessageId("nav-primary", intl)}>
        <NavContent>
          <HomeLogoNavLink to="/" aria-label={translateMessageId("home", intl)}>
            {/* <HomeLogo /> */}
            <img
              src={lollogo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </HomeLogoNavLink>
          {/* Desktop */}
          <InnerContent>
            <LeftItems>
              <Menu path={path} sections={linkSections} />
            </LeftItems>
            <RightItems>
              {/* <Search useKeyboardShortcut /> */}
              {/* A button */}
              <ButtonLink to="/defi/">
                <Translation id="page-index-what-is-ethereum-button" />
              </ButtonLink>
              <IconButton
                aria-label={
                  isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
                }
                icon={
                  <Icon
                    as={isDarkTheme ? MdWbSunny : MdBrightness2}
                    fontSize="1xl"
                  />
                }
                variant="icon"
                _hover={{ color: "primary" }}
                onClick={toggleColorMode}
              />
              {/* <ButtonLink to={`/languages/${fromPageParameter}`} variant="icon">
                <Icon as={MdLanguage} fontSize="2xl" />
                <Text as="span" pl={2}>
                  <Translation id="languages" />
                </Text>
              </ButtonLink> */}
            </RightItems>
          </InnerContent>
          {/* Mobile */}
          <MobileNavMenu
            isMenuOpen={isMenuOpen}
            isSearchOpen={false}
            isDarkTheme={isDarkTheme}
            toggleMenu={handleMenuToggle}
            toggleTheme={toggleColorMode}
            linkSections={mobileLinkSections}
            fromPageParameter={fromPageParameter}
          />
        </NavContent>
      </StyledNav>
      {shouldShowSubNav && (
        <SubNav aria-label={translateMessageId("nav-developers", intl)}>
          {ednLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              isPartiallyActive={link.isPartiallyActive}
            >
              <Translation id={link.text} />
            </NavLink>
          ))}
        </SubNav>
      )}
    </NavContainer>
  )
}

export default Nav
