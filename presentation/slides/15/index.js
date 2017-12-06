import React from "react";
import { BlockQuote, Cite, Quote, Slide, Heading, Image } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Heading size={4} textColor="primary" caps>Fee's only 2%! not a biggie???</Heading>
        <Image src={require('../../../assets/kat.png')}></Image>
    </Slide>
);
