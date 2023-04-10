import logo from "../../images/LogoBN.png";
import { Button, Nav, ImageLogo, InputSpace } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <div className="input-search-space">
          <InputSpace>
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Pesquise por um título" />
          </InputSpace>
        </div>
        <ImageLogo src={logo} alt="Logo Breaking News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
