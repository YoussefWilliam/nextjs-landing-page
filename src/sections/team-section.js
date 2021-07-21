/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { teamSectionData } from "./data";
import { teamSectionStyles } from "./styles";

const TeamSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader slogan="Our Team" title="World class individuals" />
        <Grid sx={teamSectionStyles.grid}>
          {teamSectionData.map((item) => (
            <TeamCard
              src={item.imgSrc}
              title={item.title}
              key={item.id}
              altText={item.altText}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
export default TeamSection;
