import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";


export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Robo-advisors
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
        THE NEW WOLF OF WALLSTREET
    </Text>
    <Image height="400" src={require('../../../assets/roboadvisor-not.jpg')}></Image>
  </Slide>
);
