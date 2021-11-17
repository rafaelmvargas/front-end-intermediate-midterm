import React from "react";
import Story from "../story/Story";

import { Wrapper } from "./styles";

const Stories = ({ section, stories }) => {
  return (
    <Wrapper className="site-wrap">
      <h2 className="section-head">{section}</h2>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </Wrapper>
  );
};

export default Stories;
