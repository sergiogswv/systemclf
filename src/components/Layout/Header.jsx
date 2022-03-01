import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../public/img/Logo.png";
import SignIn from "../../public/img/sign-in.png";
import {
  mostrarMenuAction,
  ocultarMenuAction,
} from "../../actions/menuActions";

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

const Header = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.mostrar);

  const verMenu = () => {
    if (menu) {
      dispatch(ocultarMenuAction());
    } else {
      dispatch(mostrarMenuAction());
    }
  };

  return (
    <header>
      <Navegacion>
        <div>
          <LogoImg src={Logo} alt="Logo" onClick={() => verMenu()} />
        </div>
        <div>
          <Imagen src={SignIn} alt="Logo" />
        </div>
      </Navegacion>
    </header>
  );
};

export default Header;
