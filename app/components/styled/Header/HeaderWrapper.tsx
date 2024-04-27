"use client";

import styled from "styled-components";
import Container from "../Container";

const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 48px;
  border-bottom: 1px solid rgb(var(--clr-dark));

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export default HeaderWrapper;
