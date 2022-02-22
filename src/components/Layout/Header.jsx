import styled from "@emotion/styled";
import Logo from "../img/Logo.png";
import SignIn from "../img/sign-in.png";

const Navegacion = styled.nav`
  display: grid;
  grid-template-columns: 70% 20%;
  border-bottom: 2px solid #000;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Imagen = styled.img`
  width: 2rem;
  margin: 1rem 2rem;
`;
const LogoImg = styled.img`
  width: 10rem;
  cursor: pointer;
`;

const Header = ({ menu, setMenu }) => {
  return (
    <header>
      <Navegacion>
        <div>
          <LogoImg src={Logo} alt="Logo" onClick={() => setMenu(!menu)} />
        </div>
        <div>
          <Imagen src={SignIn} alt="Logo" />
        </div>
      </Navegacion>
    </header>
  );
};

export default Header;
