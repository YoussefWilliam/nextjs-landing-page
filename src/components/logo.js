/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

const Logo = ({ src, ...rest }) => {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} />
    </Link>
  );
};

export default Logo;
