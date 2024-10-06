"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Container, Wrapper } from "@/app/components/Container";
import { StyledSiteTitle } from "@/app/components/Footer/StyledFooter";

export const StyledNavbarContainer = styled(Container)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  padding: 24px 36px;
  border-bottom: 1px solid rgb(var(--clr-dark));
  background-color: rgb(var(--clr-light));
`;

export const StyledNavbarWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`;

export const StyledNavTitle = styled(StyledSiteTitle)`
  font-size: 28px;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const StyledNavbar = styled(motion.ul)<{ isvisible: boolean }>`
  opacity: 1;
  list-style: none;
  display: flex;
  gap: 16px;
  transition: all 0.5 ease-in-out;

  @media (max-width: 768px) {
    opacity: ${(props) => (props.isvisible ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 82.5px;
    left: 0;
    right: 0;
    z-index: ${(props) => (props.isvisible ? "-1" : "2")};
    width: 100%;
    padding: 24px;
    display: block;
    background-color: rgb(var(--clr-light));
    border-bottom: 1px solid rgb(var(--clr-dark));
  }

  @media (max-width: 640px) {
    top: 81px;
  }
`;

export const StyledMenu = styled(motion.div)<{ istoggle: boolean }>`
  display: none;
  font-size: 24px;

  @media (max-width: 768px) {
    display: flex;
    padding: 4px;
    background-color: ${(props) =>
      props.istoggle ? "rgb(var(--clr-dark))" : "rgb(var(--clr-light))"};
    color: ${(props) =>
      props.istoggle ? "rgb(var(--clr-light))" : "rgb(var(--clr-dark))"};
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledNavbarItem = styled(motion.li)`
  padding: 8px;
`;
