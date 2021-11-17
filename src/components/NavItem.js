// import React from "react";

// const NavItem = (props) => {
//   return (
//     <li>
//       <a href={`#${props.navItem}`}>{props.navItem}</a>
//     </li>
//   );
// };
// export default NavItem;
import React from "react";

const NavItem = ({ setSection, section, navItem }) => {
  const sendSection = (section) => {
    setSection(section);
  };

  return (
    <li>
      <a
        className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => sendSection(navItem)}
      >
        {navItem}
      </a>
    </li>
  );
};
export default NavItem;
