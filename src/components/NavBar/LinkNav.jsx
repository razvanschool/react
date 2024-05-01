import { Link } from "./Navbar.style";

function LinkNav({ title, subtitle, href, functieDeApelat }) {
  return (
    <Link onClick={() => functieDeApelat(title)} href={href}>
      {title ? title : "Link"} {subtitle}
    </Link>
  );
}

export default LinkNav;
