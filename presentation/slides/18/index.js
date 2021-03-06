import React from "react";
import { Heading, Slide, Text, List, ListItem, Code} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>Cons : </Heading>
        <List ordered start={1} type="1">
          <ListItem textColor="tertiary">Choice of investments may be limited depending on the Robo-Advisor</ListItem>
          <ListItem textColor="red" S="bold">NOT A ROBOT</ListItem>
          <ListItem textColor="tertiary">may not offer real advice (legally financial advisors provide advices on securities, but Robos only provide portfolio management)</ListItem>

        </List>
    </Slide>
);
