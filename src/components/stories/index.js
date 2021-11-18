import React from "react";
import Story from "../story/Story";

import { PageHeader, Wrapper } from "./styles";

const Stories = ({ section, stories }) => {
  return (
    <Wrapper>
      <PageHeader>{section}</PageHeader>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </Wrapper>
  );
};

export default Stories;
