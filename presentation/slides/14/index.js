import React from "react";
import { Heading, Slide, Text, List, ListItem, Code} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>Pros : </Heading>
        <List ordered start={1} type="1">
          <ListItem textColor="tertiary">24/7 accessibility and automation of robo advisors  </ListItem>
          <ListItem textColor="tertiary">Low fees & lower management fees.
            <Code className="example" textColor="tertiary">
              Eg) $50,000 investment, human investment advisor who charges a 2% fee, will be $1,000 annually. If your portfolio includes mutual funds? Then ++2%!!
             </Code>
            <Code className="example" textColor="tertiary">
              Robo will primarily invest in inexpensive ETFs and only charge 0.50%
             </Code>
          </ListItem>

        </List>
    </Slide>
);
