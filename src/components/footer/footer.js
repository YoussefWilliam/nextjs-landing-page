/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import FooterLogo from "assets/logo.svg";
import { footerData } from "./footer.data";
import { footerStyles } from "./footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer sx={footerStyles.footer}>
      <Container>
        <Box sx={footerStyles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} alt="logo" />
          </Link>
          <Box sx={footerStyles.footer.menus}>
            <nav>
              {footerData.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={footerStyles.footer.link}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Box>
          <Text sx={footerStyles.footer.copyright}>
            Copyright by {currentYear} - Youssef William
          </Text>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
