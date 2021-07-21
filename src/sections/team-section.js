/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";
import Member5 from "assets/team/member-5.png";
import Member6 from "assets/team/member-6.png";

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
