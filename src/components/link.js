/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";

const NavLink = ({ path, label, children, ...rest }) => {
  return <h1>NavLink</h1>;
};

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || link}
    </A>
  );
}
export default NavLink;
