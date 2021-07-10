import React, { useState } from "react";
import { Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/drawer";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

import { linksData, socialData } from "./header.data";
import { mobileDrawerStyles } from "./styles";

const MobileDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const DrawerHandler = () => {
    return (
      <Box sx={mobileDrawerStyles.handler}>
        <IoMdMenu size="26px" />
      </Box>
    );
  };

  return (
    <Drawer
      width="320px"
      drawerHandler={<DrawerHandler />}
      open={isDrawerOpen}
      toggleHandler={() => setDrawerOpen(!isDrawerOpen)}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={mobileDrawerStyles.drawer}
      closeBtnStyle={mobileDrawerStyles.close}
    >
      <Scrollbars autoHide>
        <Box sx={mobileDrawerStyles.content}>
          <Box sx={mobileDrawerStyles.menu}>
            {linksData.map((menuItem, i) => (
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
            ))}
          </Box>
          <Box sx={mobileDrawerStyles.menuFooter}>
            <Box sx={mobileDrawerStyles.social}>
              {socialData.map((social, i) => (
                <Box as="span" key={i} sx={mobileDrawerStyles.social.icon}>
                  <Link to={social.path}> {social.icon} </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
