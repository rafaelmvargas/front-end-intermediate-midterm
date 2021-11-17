import React from "react";
import NavItem from "./NavItem";

const Nav = ({ navItems, setSection, section }) => {
  return (
    <nav>
      <ul>
        <li className="logo">
          <a href="#top">
            <img src="img/logo.svg" alt="logo" />
          </a>
        </li>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            setSection={setSection}
            section={section}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
