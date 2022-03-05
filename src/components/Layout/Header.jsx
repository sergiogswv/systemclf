import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../public/img/Logo.png";
import SignIn from "../../public/img/sign-in.png";
import LogOut from "../../public/img/log-out.png";
import {
  mostrarMenuAction,
  ocultarMenuAction,
} from "../../actions/menuActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { eliminarTokenAction } from "../../actions/tokenActions";

const Navegacion = styled.nav`
  display: grid;
  grid-template-columns: 70% 20%;
  border-bottom: 2px solid #000;
  div:last-child {
    display: flex;
    a:first-of-type {
      margin: auto auto;
      text-decoration: none;
      color: var(--negro);
      cursor: pointer;
      :hover {
        color: var(--secondary);
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Imagen = styled.img`
  width: 2rem;
  margin: 1rem 2rem;
`;
const ImagenLogout = styled.img`
  width: 2rem;
  margin: 1rem 2rem;
`;
const LogoImg = styled.img`
  width: 10rem;
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const location = useLocation();

  const menu = useSelector((state) => state.menu.mostrar);

  const auth = useSelector((state) => state.token.token);

  const verMenu = () => {
    if (!auth) {
      navigate("/");
    } else {
      if (menu) {
        dispatch(ocultarMenuAction());
      } else {
        dispatch(mostrarMenuAction());
      }
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    dispatch(eliminarTokenAction());
    navigate("/");
  };

  return (
    <header>
      <Navegacion>
        <div>
          <LogoImg src={Logo} alt="Logo" onClick={() => verMenu()} />
        </div>
        <div>
          {!auth &&
            (location.pathname === "/crear-cuenta" ? (
              <Link to={"/login"}>Iniciar Sesión</Link>
            ) : (
              <Link to={"/crear-cuenta"}>Crear cuenta</Link>
            ))}
          {auth ? (
            <ImagenLogout
              src={LogOut}
              alt="Log out"
              onClick={() => cerrarSesion()}
            />
          ) : (
            <Link to={"/login"}>
              <Imagen src={SignIn} alt="Login" />
            </Link>
          )}
        </div>
      </Navegacion>
    </header>
  );
};

export default Header;
