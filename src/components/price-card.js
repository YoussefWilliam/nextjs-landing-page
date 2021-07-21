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
  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={priceCardStyles.pricingBox}
    >
      {header && <Text sx={priceCardStyles.header}> {header}</Text>}
      <Box>
        <Box className="package__header" sx={priceCardStyles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={priceCardStyles.listItem} />
        <Text className="package__price" sx={priceCardStyles.price}>
          {priceWithUnit}
          <span>/Montly</span>
        </Text>
        <Box sx={priceCardStyles.buttonGroup}>
          <Button variant="primary">{buttonText}</Button>
          {anotherOption && (
            <Button
              variant="textButton"
              className="free__trail"
              sx={{ color: "black" }}
            >
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default PriceCard;

PriceCard.defaultProps = {
  data: { buttonText: "Start Free Trial" },
};
