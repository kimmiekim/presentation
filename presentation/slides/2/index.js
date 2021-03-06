import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={1} textColor="secondary" caps>agenda</Heading>
        <List ordered start={1} type="1">
          <ListItem textColor="tertiary">What is not Robo-Advisor?</ListItem>
          <ListItem textColor="tertiary">What is Robo-Advisor? </ListItem>
          <ListItem textColor="tertiary">Pros and Cons</ListItem>
          <ListItem textColor="tertiary">Robo-Advisor in Global Scale</ListItem>
          <ListItem textColor="tertiary">Robo-Advisor in Canada</ListItem>
          <ListItem textColor="tertiary">Robo-Advisor in RBC</ListItem>
          <ListItem textColor="tertiary">Future of Robo-Advisor</ListItem>
          <ListItem textColor="tertiary">What We Can Do</ListItem>
        </List>
    </Slide>
);
