import {
  FooterStyle,
  FooterContainer,
  FooterNav,
  FooterCol,
  FooterLink,
  FooterCopy,
  FooterBgCol,
  FooterColText,
  FooterColWrapper,
  FooterSocial,
  SocialLink,
  FooterBtn,
  FooterCopyright,
  FooterTrademark,
} from './Footer.style.js';

import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const footerLinks = [
  {
    href: "#",
    name: "Contact",
  },
  {
    href: "#",
    name: "Support",
  },
  {
    href: "#",
    name: "About us",
  },
  {
    href: "#",
    name: "Blog",
  },
  {
    href: "#",
    name: "Careers",
  },
  {
    href: "#",
    name: "Specials",
  }
];

const secondColLinks = [
  {
    href: "#",
    name: "Shipping information",
  },
  {
    href: "#",
    name: "Financing",
  },
  {
    href: "#",
    name: "Warranty & returns",
  },
  {
    href: "#",
    name: "Privacy policy",
  },
  {
    href: "#",
    name: "Disclaimer",
  },
  {
    href: "#",
    name: "terms & conditions",
  },
]

export default function Footer() {
  return (
    <FooterStyle>
      <FooterContainer>
        <FooterNav>
          <FooterCol>
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol>
            {secondColLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterBgCol>
            <FooterColWrapper>
              <FooterColText>
                Subscribe for updates on products, OS features, and promotions.
              </FooterColText>
              <FooterBtn>
                Subscribe
              </FooterBtn>
              <FooterSocial>
                <SocialLink>
                  <FaFacebook />
                </SocialLink>
                <SocialLink>
                  <FaGithub />
                </SocialLink>
                <SocialLink>
                  <FaInstagram />
                </SocialLink>
                <SocialLink>
                  <FaTelegram />
                </SocialLink>
                <SocialLink>
                  <FaTwitter />
                </SocialLink>
              </FooterSocial>
            </FooterColWrapper>
          </FooterBgCol>
        </FooterNav>
        <FooterCopy>
          <FooterCopyright>
            Copyright © 2022 System76, Inc.
          </FooterCopyright>
          <FooterTrademark>
            Intel, the Intel Logo, Intel Core, Iris, and Xeon are trademarks of Intel Corporation or its subsidiaries in the U.S. and/or other countries.
          </FooterTrademark>
        </FooterCopy>
      </FooterContainer>
    </FooterStyle>
  );
}