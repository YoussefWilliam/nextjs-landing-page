/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import {} from "./data"
import {bannerStyles} from "./styles"

export default function Banner() {
  return (
    <section id="home" sx={bannerStyles.banner}>
      <Container sx={bannerStyles.banner.container}>
        <Box sx={bannerStyles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Hu ther
          </Heading>
        </Box>
      </Container>
    </section>
  );
}

