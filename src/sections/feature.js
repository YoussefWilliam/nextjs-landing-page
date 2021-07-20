/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

import { featureStyles } from "./styles";
import { featureData } from "./data";

const Feature = () => {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Quality Features" title="Amazing features" />
        <Grid sx={featureStyles.grid}>
          {featureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              src={feature.imgSrc}
              alt={feature.altText}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
export default Feature;
