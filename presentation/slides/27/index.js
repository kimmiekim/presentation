import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> Future of Robo-Advisors</Heading>

        <List>
          <ListItem textColor="tertiary">Robos are expected to manage around $1 trillion by 2020, and around $4.6 trillion by 2022 </ListItem>
          <ListItem textColor="tertiary">Incumbents are rolling out their own robo-advisor products, a trend we expect to pick up in the period to 2022.
 </ListItem>
          <ListItem textColor="tertiary">North America remains the leading robo-advisory market, but we expect Asia to catch up and outpace the region in terms of AUM managed by robo-advisors in the period to 2022. 
 </ListItem>
          <ListItem textColor="tertiary">There will be a winnowing of the startup robo-advisory market as only a few firms remain stand-alone, while incumbents looking to launch their own products will profit from purchasing the technology of startups that have fallen by the wayside, at low cost. 
 </ListItem>


        </List>
    </Slide>
);
