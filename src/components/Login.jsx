import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const ContenedorLogin = styled.div`
  background-color: var(--primary);
  border-radius: 50px;
  width: 90%;
  height: 17.5rem;
  margin: 20% auto;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
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
  grid-template-columns: 20% 70%;
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
`;

const Login = () => {
  return (
    <Layout>
      <ContenedorLogin>
        {/* Login */}
        <Titulo>Iniciar Sesión</Titulo>
        {/* Formulario */}
        <Formulario>
          {/* Campo de Correo */}
          <Campo>
            <label htmlFor="correo">Correo:</label>
            <input type="text" placeholder="Email" name="correo" id="correo" />
          </Campo>
          {/* Campo de contraseña */}
          <Campo>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </Campo>
          {/* boton de Enviar */}
          <Link to={"/panel"}>
            <Boton type="submit" value="Enviar" />
          </Link>
        </Formulario>
      </ContenedorLogin>
    </Layout>
  );
};

export default Login;
