import LinkNav from "./LinkNav";
import { routes } from "./Navbar";
import { DropdownContainer, LinkContainer } from "./Navbar.style";

function Dropdown({ functieDeApelatinDropdown }) {
  return (
    <DropdownContainer>
      <LinkContainer>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
            functieDeApelat={functieDeApelatinDropdown}
          />
        ))}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
