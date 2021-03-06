import React from "react";
import { Heading, Slide, Text, List, ListItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> Wealthsimple</Heading>

        <List>
          <ListItem textColor="tertiary">Toronto-based startup with 20,000 clients with $750 million in assets</ListItem>
          <ListItem textColor="tertiary"> the first Canadian robo-advisor to move in to the US market(10 times the size of Canada’s)</ListItem>
          <ListItem textColor="tertiary">only 75 staff globally (still up aggressively from roughly 25 people at the beginning of last year)</ListItem>

        </List>
    </Slide>
);
