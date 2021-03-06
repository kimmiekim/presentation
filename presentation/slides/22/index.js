import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> Overall Market View</Heading>
        <List>
          <ListItem textColor="tertiary">Globally, wealth managers were responsible for $74 trillion in assets under management (AUM) in 2014. </ListItem>
          <ListItem textColor="tertiary">BI Intelligence forecasts that robo-advisors will manage around 10% of total global assets under management (AUM) by 2020, which equates to around $8 trillion. </ListItem>

        </List>
    </Slide>
);
