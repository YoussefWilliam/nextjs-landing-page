/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import FeatureThumb from "assets/core-feature.png";
import shapePattern from "assets/shape-pattern2.png";
import { coreFeatureStyles } from "./styles";
import { coreFeatureData } from "./data";

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={coreFeatureStyles.containerBox}>
        <Box sx={coreFeatureStyles.contentBox}>
          <TextFeature
            subTitle={coreFeatureData.subTitle}
            title={coreFeatureData.title}
            description={coreFeatureData.description}
            btnName={coreFeatureData.btnName}
            btnURL={coreFeatureData.btnURL}
          />
        </Box>
        <Box sx={coreFeatureStyles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={coreFeatureStyles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
