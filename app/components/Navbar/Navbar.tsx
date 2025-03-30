"use client";

import { useState } from "react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";

import ScrollLink from "@/app/components/ScrollLink";
import {
  StyledMenu,
  StyledNavbar,
  StyledNavbarItem,
  StyledNavbarContainer,
  StyledNavTitle,
  StyledNavbarWrapper,
} from "@/app/components/Navbar/StyledNavbar";

export function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    console.log(isNavbarVisible);
    setIsNavbarVisible((prevState) => !prevState);
  };

  return (
    <StyledNavbarContainer as="header">
      <StyledNavbarWrapper>
        <Link href={"/"}>
          <StyledNavTitle>MelinKan</StyledNavTitle>
        </Link>
        <nav>
          <StyledNavbar isvisible={isNavbarVisible}>
            <StyledNavbarItem>
              <Link href="/">Home Page</Link>
            </StyledNavbarItem>
            <StyledNavbarItem>
              <Link href="/film-archive">Film Archive</Link>
            </StyledNavbarItem>
          </StyledNavbar>
        </nav>
        <StyledMenu onClick={toggleNavbar} istoggle={isNavbarVisible}>
          <SlMenu />
        </StyledMenu>
      </StyledNavbarWrapper>
    </StyledNavbarContainer>
  );
}
