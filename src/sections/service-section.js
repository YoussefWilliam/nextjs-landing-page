import React, { useState } from "react";
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from "theme-ui";
import { keyframes } from "@emotion/core";
import TextFeature from "components/text-feature";
import { IoIosPlay } from "react-icons/io";

import ServiceThumb from "assets/service-thumb.png";
import shapePattern from "assets/shape-pattern1.png";
import { serviceSectionStyles } from "./styles";
import { serviceSectionData } from "./data";

const ServiceSection = () => {
  return (
    <section sx={{ variant: "section.services" }}>
      <Container sx={serviceSectionStyles.containerBox}>
        <Box sx={serviceSectionStyles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Button sx={serviceSectionStyles.videoBtn} aria-label="Play video">
            <span>
              <IoIosPlay />
            </span>
          </Button>
          <Box sx={serviceSectionStyles.shapeBox}>
            <Image src={shapePattern} />
          </Box>
        </Box>
        <Box sx={serviceSectionStyles.contentBox}>
          <TextFeature
            subTitle={serviceSectionData.subTitle}
            title={serviceSectionData.title}
            description={serviceSectionData.description}
          />
          <Grid sx={serviceSectionStyles.grid}>
            {serviceSectionData.features.map((feature) => {
              return (
                <Box sx={serviceSectionStyles.card} key={feature.id}>
                  <Image
                    src={feature.imgSrc}
                    alt={feature.altText}
                    sx={serviceSectionStyles.icon}
                  />
                  <Box sx={serviceSectionStyles.wrapper}>
                    <Heading sx={serviceSectionStyles.wrapper.title}>
                      {feature.title}
                    </Heading>
                    <Text sx={serviceSectionStyles.wrapper.subTitle}>
                      {feature.text}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};
export default ServiceSection;
