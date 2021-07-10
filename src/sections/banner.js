/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import {} from "./data";
import { bannerStyles } from "./styles";
import BannerImg from "assets/banner-thumb.png";
export default function Banner() {
  return (
    <section id="home" sx={bannerStyles.banner}>
      <Container sx={bannerStyles.banner.container}>
        <Box sx={bannerStyles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Head towards something great
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check our new website to start having same experience If you need
            this for yourself, this is the place to go!
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>
        <Box sx={bannerStyles.banner.imageBox}>
          <Image src={BannerImg} />
        </Box>
      </Container>
    </section>
  );
}
