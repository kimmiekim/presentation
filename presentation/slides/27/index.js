import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> RBC Launched Beta InvestEase</Heading>

        <List>
          <ListItem textColor="tertiary">November 2017, RBC launched a  dedicated robo-advisor service called RBC Investease as a separate business unit</ListItem>
          <ListItem textColor="tertiary"> Offers automated investment advice and portfolio management backed up by a team of accredited portfolio advisors</ListItem>
          <ListItem textColor="tertiary"> A beta test of the platform is open to some RBC employees </ListItem>
          <ListItem textColor="tertiary"> No date for the public launch yet</ListItem>

        </List>
    </Slide>
);
