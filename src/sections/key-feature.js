/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import { keyFeatureStyles } from "./styles";
import { keyFeatureData } from "./data";

const KeyFeature = () => {
  return (
    <section id="feature" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan="What's the function"
          title="Meet the feature of our product"
        />
        <Grid sx={keyFeatureStyles.grid}>
          {keyFeatureData.map((item, i) => {
            return (
              <FeatureCardColumn
                key={`${i} + ${item.id}`}
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default KeyFeature;
