import React from "react";
import { Slide, Heading, Code, Markdown } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
    <Heading size={3}  textColor="tertiary">Key Takeaway:</Heading>
    <Markdown textColor="secondary">
      {`
  #### Markdown text, inline
  ##### Sub-heading
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~
  * ~~Robo-Advisor is a robot~~

           `}
    </Markdown>
    {/* <Code textColor="secondary"><S>Robo-Advisor is NOT a robot * 1,000,000</S></Code> */}
  </Slide>
);
