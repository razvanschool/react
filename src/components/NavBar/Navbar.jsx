import { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import LinkNav from "./LinkNav";
import {
  Logo,
  NavbarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "./Navbar.style";
import { List, X } from "react-bootstrap-icons";
import { ContorContext } from "../../store/context";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Movies", href: "movies" },
  { title: "Add", href: "add" },
  { title: "Edit/Delete", href: "edit-delete" },
  { title: "Recomand", href: "recomand" },
];

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlu-> ", titlu);
  };

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const { stateGlobalContor } = useContext(ContorContext);

  const { contorValue } = stateGlobalContor; // const  contorValue  = stateGlobalContor.contorValue;

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
        {!displayDropdown ? <List size={40} /> : <X size={40} />}
      </ButtonDropdown>
      {displayDropdown && (
        <Dropdown
          onFocus={() => handleDisplayDropdown()}
          functieDeApelatinDropdown={handleClick}
        />
      )}
      <>CONTOR: {contorValue}</>
    </NavbarContainer>
  );
}

export default NavBar;
