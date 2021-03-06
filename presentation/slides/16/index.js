import React from "react";
import { Heading, Slide, Image, Code } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
    <Heading size={4} textColor="secondary">It kind of is a biggie</Heading>
      <Image height="400" src={require('../../../assets/compound-interest.png')}></Image>
      <Code textColor="tertiary">Over 40 years, on $100,000 initial investment, that 2% fee you’re paying compounds into roughly $2 million!   </Code>
    </Slide>
);
