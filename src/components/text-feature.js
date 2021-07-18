/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from "theme-ui";
import { textFeatureStyles } from "./styles";

const TextFeature = ({
  subTitle,
  title,
  description,
  btnName,
  btnURL = "#",
}) => {
  return (
    <Box sx={textFeatureStyles.card}>
      <Box sx={textFeatureStyles.wrapper}>
        <Text as="p" sx={textFeatureStyles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={textFeatureStyles.wrapper.title}>
          {title}
        </Heading>
      </Box>
      {description && (
        <Text as="p" sx={textFeatureStyles.description} className="description">
          {description}
        </Text>
      )}
      {btnName && (
        <Link href={btnURL} variant="default">
          <Button variant="primary">{btnName}</Button>
        </Link>
      )}
    </Box>
  );
};

export default TextFeature;
