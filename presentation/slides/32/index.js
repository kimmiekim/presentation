import React from "react";
import { Heading, Slide, Text, List, ListItem, Image} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> New digital experience initiative - Temi</Heading>
        <Heading size={6} textColor="tertiary" caps> From Digital Channels Team</Heading>

        <Image height="500" src={require('../../../assets/temi-gif.gif')}></Image>
{/*
  <List>
  <ListItem textColor="tertiary"> </ListItem>
  <ListItem textColor="tertiary"> </ListItem>
  <ListItem textColor="tertiary"> </ListItem>
  </List>
  */}
    </Slide>
);
