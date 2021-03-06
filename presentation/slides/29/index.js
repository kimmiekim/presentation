import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> Future of Robo-Advisors</Heading>

        <List>
          <ListItem textColor="tertiary">Number of Robo-Advisors is Exploding</ListItem>
          <ListItem textColor="tertiary">The hybrid model of robo-advisors which includes digital investing and human advisors is exploding as well</ListItem>
            <ListItem textColor="tertiary">Expected to manage around $8 trillion by 2020</ListItem>
          <ListItem textColor="tertiary">Incumbents are rolling out their own robo-advisor products, a trend we expect to pick up in the period to 2022.</ListItem>
          <ListItem textColor="tertiary">North America remains the leading robo-advisory market, Asia expected to catch up and outpace the region in terms of AUM managed by robo-advisors in the period to 2022. </ListItem>
            {/*
              <ListItem textColor="tertiary">Incumbents looking to launch their own products will profit from purchasing the technology of startups that have fallen by the wayside, at low cost. </ListItem>
              */}


        </List>
    </Slide>
);
