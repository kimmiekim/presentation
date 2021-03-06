import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>What do Robo-Advisors offer? </Heading>
        <List ordered start={1} type="1">
          <ListItem textColor="tertiary">Much better investing options than mutual funds </ListItem>
          <ListItem textColor="tertiary">“Light Advice” that vary from company to company </ListItem>
          <ListItem textColor="tertiary">The most easy-to-use way to invest money</ListItem>
          <ListItem textColor="tertiary">Straight forward contribution methods </ListItem>
          <ListItem textColor="tertiary">Visually appealing websites</ListItem>
        </List>
    </Slide>
);
