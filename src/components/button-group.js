/** @jsx jsx */
import { jsx, Box, Container, Flex } from "theme-ui";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {buttonGroupStyles} from "./styles"
const ButtonGroup = ({ next, previous }) => {
  return <Flex sx={{width: '100%'}}>
    <Container>
      <Box sx={buttonGroupStyles.buttonGroup} className="button__group">
        <button onClick={previous} aria-label={"Previous"}>
          <IoIosArrowRoundBack />
        </button>
        <button onClick={next} aria-label={"Next"}>
          <IoIosArrowRoundForward />
        </button>
      </Box>
    </Container>
  </Flex>
};

export default ButtonGroup;
