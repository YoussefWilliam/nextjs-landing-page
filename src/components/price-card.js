import { Box, Card, Text, Heading, Button } from "theme-ui";
import React from "react";
import List from "./list";
import { priceCardStyles } from "./styles";

const PriceCard = ({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText,
    anotherOption,
    points,
  },
}) => {
  return <h1>PriceCard</h1>;
};



export default PriceCard;

PriceCard.defaultProps = {
  data: { buttonText: "Start Free Trial" },
};
