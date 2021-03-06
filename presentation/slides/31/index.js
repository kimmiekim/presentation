import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="red" caps> Robo-Advisors ain't going anywhere</Heading>
        <Heading size={6} textColor="secondary" caps> So what can we do?</Heading>

        <List>
          <ListItem textColor="tertiary">Sign up (the clients of the robo-advisor firms have an average age of 43) </ListItem>
          <ListItem textColor="tertiary"> Develop for better digital experience</ListItem>
          <ListItem textColor="tertiary"> Being a one stop shop for all things finance - bundle of digital-banking products (like Amazon)</ListItem>


        </List>
    </Slide>
);
