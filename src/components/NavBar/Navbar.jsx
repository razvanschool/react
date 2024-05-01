import { useState } from "react";
import Dropdown from "./Dropdown";
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "./Navbar.style";

export const routes = [
  { title: "Home", href: "Home" },
  { title: "Movies", href: "Movies" },
  { title: "Add", href: "Add" },
  { title: "Edit", href: "Edit" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <NavbarContainer>
      <Logo src="https://logowik.com/content/uploads/images/cat8600.jpg"></Logo>
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
            functieDeApelat={handleClick}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        Click me!
      </ButtonDropdown>
      {displayDropdown && <Dropdown functieDeApelatinDropdown={handleClick} />}
    </NavbarContainer>
  );
}

export default NavBar;
