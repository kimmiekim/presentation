import React from "react";
import { Heading, Slide, Text, List, ListItem, Code, Image} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={6} textColor="secondary" caps>disproportionate market growth:</Heading>
        <Image src={require('../../../assets/robo-global.png')}></Image>
        <Code>still a long way from matching the US' triple digits</Code>
    </Slide>
);
