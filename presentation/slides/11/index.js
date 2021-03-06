import React from "react";
import { Heading, Slide, Image} from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={6} textColor="secondary">Website/ App that provides automated, algorithm-driven financial planning services based on your preference s</Heading>
      <Image height="500" src={require('../../../assets/roboadvisor.png')}></Image>
    </Slide>
);
