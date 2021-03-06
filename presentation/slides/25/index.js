import React from "react";
import { Heading, Slide, Text, Image, TableHeader, Table, TableBody, TableRow, TableHeaderItem, TableItem} from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps> Top Robo-Advisors in Canada</Heading>
        <Image src={require('../../../assets/topRoboAdvisersInCanada.png')}></Image>
        {/* <Table textColor="tertiary">
          <TableHeader>
            <TableRow>
              <TableHeaderItem>Top Canadian Robo-Advisors</TableHeaderItem>
              <TableHeaderItem>Highlighted Features</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem>BMO SmartFolio</TableItem>
              <TableItem>Competitive industry features & services</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>NestWealth</TableItem>
              <TableItem>Personalized, expert approach</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Portfolio IQ</TableItem>
              <TableItem>Dynamic EFT-based portfolios</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>ShareOwner</TableItem>
              <TableItem>Transparent, flexible pricing</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>WealthBar</TableItem>
              <TableItem>Energetic marketing & appeal towards millennial investors</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Wealthsimple</TableItem>
              <TableItem>Energetic marketing & appeal towards millennial investors</TableItem>
            </TableRow>
          </TableBody>
        </Table> */}
    </Slide>
);
