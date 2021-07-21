/** @jsx jsx */
import { jsx, NavLink, Link as A } from "theme-ui";

export function Link({ path, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children}
    </A>
  );
}
export default NavLink;
