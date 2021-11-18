import React from "react";
import { PageHeader, PageTitle } from "./styles";

const Header = ({ siteTitle }) => {
  return (
    <PageHeader>
      <PageTitle>{siteTitle}</PageTitle>
    </PageHeader>
  );
};

export default Header;
