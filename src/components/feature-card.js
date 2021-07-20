/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { featureCardStyles } from "./styles";

const FeatureCard = ({ src, altText = "default alt text", title, text }) => {
  return (
    <Box sx={featureCardStyles.card}>
      <Image sx={featureCardStyles.img} alt={altText} src={src} />
      <Box sx={featureCardStyles.wrapper}>
        <Heading sx={featureCardStyles.wrapper.title}>{title}</Heading>
        <Heading sx={featureCardStyles.wrapper.subTitle}>{text}</Heading>
      </Box>
    </Box>
  );
};

export default FeatureCard;
