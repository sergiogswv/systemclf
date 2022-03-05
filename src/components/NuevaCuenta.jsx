import { useDispatch, useSelector } from "react-redux";
import { crearCuenta } from "../actions/nuevaCuentaActions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Layout/Error";
import styled from "@emotion/styled";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/helpers/Spinner";
import { verificarTokenAction } from "../actions/tokenActions";

const ContenedorLogin = styled.div`
  background-color: var(--primary);
  border-radius: 50px;
  width: 90%;
  //height: 30%;
  margin: 20% auto;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  text-align: center;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1220px) {
    width: calc(30% + 100px);
  }
`;

const Titulo = styled.h1`
  padding-top: 1rem;
  font-size: 2.5rem;
  font-family: "Roboto";
  font-weight: 400;
`;

const Formulario = styled.form`
  display: block;
  width: 100%;
`;

const Campo = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;
  text-align: left;
  padding-left: 1rem;
  margin-top: 1rem;
  label {
    margin-top: 0.5rem;
  }
  input {
    border-radius: 5px;
    height: 2rem;
    border-color: var(--gris);
    margin-left: 1rem;
  }
  @media (min-width: 768px) {
    padding-left: 2rem;
    input {
      margin-left: 0;
    }
  }
`;
const Crear = styled.a`
  text-decoration: none;
  color: var(--negro);
  cursor: pointer;
  margin-left: 5%;
  :hover {
    color: var(--secondary);
  }
`;

const Boton = styled.input`
  display: block;
  width: 75%;
  height: 2.25rem;
  margin: 1.5rem auto;
  background-color: var(--blanco);
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  :hover {
    background-color: var(--secondary);
    color: var(--blanco);
  }
`;

const NuevaCuenta = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cuentaNueva = useSelector((state) => state.nuevaCuenta.cuentaNueva);

  useEffect(() => {
    const obtenerToken = () => {
      let token = localStorage.getItem("token");
      dispatch(verificarTokenAction(token));
      /* Acceder a autenticado */
      if (token !== null) {
        /* Si token no esta vacio */
        navigate("/panel");
      }
    };
    obtenerToken();
  }, [cuentaNueva]);

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    cuenta: "",
  });
  const [errorLocal, setErrorLocal] = useState(false);

  /* Acceder al state de error */
  const error = useSelector((state) => state.nuevaCuenta.error);

  /* Extraer de usuario */
  const { email, password, cuenta } = usuario;

  /* setear en local state */
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();

    /* Validar los campos */
    if ([email, password, cuenta].includes("")) {
      setErrorLocal(true);
      return null;
    }
    setErrorLocal(false);

    /* Agregar */
    dispatch(crearCuenta(usuario));

    //console.log(error);
    if (error) {
      return null;
    }
  };

  return (
    <Layout>
      {cuentaNueva ? (
        <Spinner />
      ) : (
        <ContenedorLogin>
          {/* Login */}
          <Titulo>Nueva Cuenta</Titulo>
          {/* Formulario */}
          <Formulario onSubmit={iniciarSesion}>
            {/* Campo de email */}
            <Campo>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                onChange={onChange}
                value={email}
              />
            </Campo>
            {/* Campo de contraseña */}
            <Campo>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={onChange}
                value={password}
              />
            </Campo>
            <Campo>
              <label htmlFor="password">Número de cuenta:</label>
              <input
                type="text"
                placeholder="Número de cuenta"
                name="cuenta"
                id="cuenta"
                onChange={onChange}
                value={cuenta}
              />
            </Campo>

            {/* boton de Enviar */}
            {errorLocal && (
              <Error errorMsg={"Todos los campos son obligatorios"} />
            )}
            {error &&
              error.map((err) => <Error errorMsg={err.msg} key={err.param} />)}
            <Boton type="submit" value="Enviar" />
          </Formulario>
        </ContenedorLogin>
      )}
    </Layout>
  );
};

export default NuevaCuenta;
