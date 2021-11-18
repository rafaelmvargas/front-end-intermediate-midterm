import React from "react";

import { StyledUList, StyledNav } from "./styles";
import { StyledLogo } from "../navitem/styles";
import NavItem from "../navitem";

const Nav = ({ navItems, setSection, section }) => {
  return (
    <StyledNav>
      <StyledUList>
        <StyledLogo>
          <a href="#top">
            <img src="img/logo.svg" alt="logo" />
          </a>
        </StyledLogo>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            setSection={setSection}
            section={section}
          />
        ))}
      </StyledUList>
    </StyledNav>
  );
};

export default Nav;
