/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import MobileDrawer from "./mobile-drawer";
import { headerStyles } from "./styles";
import { linksData } from "./header.data";

const Header = ({ className }) => {
  return (
    <header sx={headerStyles.header} className={className} id="header">
      <Container sx={headerStyles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={headerStyles.nav}>
          {linksData.map((menuItem, i) => {
            return (
              <Link
                activeClass="active"
                to={menuItem.path}
                spy={true}
                key={i}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {menuItem.label}
              </Link>
            );
          })}
        </Flex>
        <Button
          className="donate__btn"
          variant="secondary"
          aria-label="Get started"
        >
          Get Started
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
};

export default Header;
