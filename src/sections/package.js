/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import PriceCard from "components/price-card";
import ButtonGroup from "components/button-group";
import SectionHeader from "components/section-header";
import { packages } from "./data";
import { packageStyles } from "./styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const Package = () => {
  const { monthly, annual } = packages;
  const [packageState, setPackageState] = useState({
    active: "monthly",
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "annual") {
      setPackageState({ active: "annual", pricingPlan: annual });
    } else {
      setPackageState({ active: "monthly", pricingPlan: monthly });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="pricing" sx={{ variant: "section.pricing" }}>
      <Container>
        <SectionHeader
          slogan="Pricing Plans"
          title="Choose your pricing plan"
        />
        <Flex sx={packageStyles.buttonGroup}>
          <Box sx={packageStyles.buttonGroupInner}>
            <button
              className={packageState.active === "monthly" && "active"}
              type="button"
              aria-label="Montly"
              onClick={() => handlePricingPlan("monthly")}
            >
              Monthly Plan
            </button>
            <button
              className={packageState.active === "annual" && "active"}
              type="button"
              aria-label="annual"
              onClick={() => handlePricingPlan("annual")}
            >
              Annual Plan
            </button>
          </Box>
        </Flex>
        <Box sx={packageStyles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {packageState.pricingPlan.map((packageData) => (
              <Box sx={packageStyles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
};

export default Package;
