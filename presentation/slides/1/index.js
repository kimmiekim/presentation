import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";


export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Robo-advisers
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        THE NEW WOLF OF WALLSTREET
    </Text>
    <Image src={require('../../../assets/roboadvisor-not.jpg')}></Image>
  </Slide>
);
