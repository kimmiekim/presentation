import React from "react";
import { Heading, Slide, Text, List, ListItem, Code} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>Cons  from Business Perspectve: </Heading>
        <Heading size={6} textColor="secondary" caps>Profitability problem  </Heading>

        <List>
          <ListItem textColor="tertiary">D2C (direct to customer) business model - High cost of  customer acquisition </ListItem>

          <ListItem textColor="tertiary">According to Business Insider, avg  customer acquisition  = USD 389, avg account size = USD 27,000 </ListItem>
        </List>
    </Slide>
);
