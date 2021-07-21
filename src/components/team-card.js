/** @jsx jsx */
import { jsx } from "theme-ui";
import { Text, Heading, Image, Box, Link } from "theme-ui";
import { teamCardStyles } from "./styles";

const TeamCard = ({ src, altText, title, designation, social }) => {
  return (
    <Box sx={teamCardStyles.card}>
      <Image src={src} alt={altText} sx={teamCardStyles.memberThumb} />
      <Box sx={teamCardStyles.infoWrapper}>
        <Heading className="info__name" sx={teamCardStyles.infoWrapper}>
          {title}
        </Heading>
        <Text className="info__designation" sx={teamCardStyles.designation}>
          {designation}
        </Text>
      </Box>
      <Box sx={teamCardStyles.socialShare} className="social__share">
        {social.map((item) => (
          <Link key={item.id} href={item.path} className={item.name}>{item.icon}</Link>
        ))}
      </Box>
    </Box>
  );
};

export default TeamCard;
