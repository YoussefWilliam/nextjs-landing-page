/** @jsx jsx */
import { jsx, Image, Box, Heading } from "theme-ui";
import { featureCardColumn } from "./styles";
const FeatureCardColumn = ({
  src,
  altText = "default alt text",
  title,
  text,
}) => {
  return (
    <Box sx={featureCardColumn.card}>
      <Image sx={featureCardColumn.img} alt={altText} src={src} />
      <Box sx={featureCardColumn.wrapper}>
        <Heading sx={featureCardColumn.wrapper.title}>{title}</Heading>
        <Heading sx={featureCardColumn.wrapper.subTitle}>{text}</Heading>
      </Box>
    </Box>
  );
};

export default FeatureCardColumn;

FeatureCardColumn.defaultProps = {
  altText: "default alt text",
};
