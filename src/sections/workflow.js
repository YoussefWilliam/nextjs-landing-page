/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";
import { workflowStyles } from "./styles";
import { workflowData } from "./data";

const WorkFlow = () => {
  return (
    <section sx={workflowStyles.workflow}>
      <Container>
        <SectionHeader
          slogan="What is our workflow"
          title="Meet the features of our products"
          isWhite
        />
        <Grid sx={workflowStyles.grid}>
          {workflowData.map((data) => (
            <Box sx={workflowStyles.card} key={data.id}>
              <Box sx={workflowStyles.iconBox}>{`0${data.id}`} </Box>
              <Box sx={workflowStyles.wrapper}>
                <Heading sx={workflowStyles.wrapper.title}>
                  {data.title}
                </Heading>
                <Text sx={workflowStyles.wrapper.subTitle}>{data.text} </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WorkFlow;
