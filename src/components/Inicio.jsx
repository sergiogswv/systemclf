import styled from "@emotion/styled";
import Layout from "../components/Layout/Layout";
import ImgClf from "../public/img/Calificaciones.jpg";
import { Link } from "react-router-dom";

const ContenedorDiv = styled.div`
  align-items: center;
  width: 85%;
  margin: 2rem auto;
  padding-bottom: 2rem;
  height: 100%;
  h1 {
    color: var(--secondary);
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 550px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      padding-bottom: 2rem;
      width: 90%;
      margin: 0 auto;
    }
  }
`;
const Card = styled.div`
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  width: 100%;
  p {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 70%;
  text-align: center;
  align-items: center;
  margin: 1rem 2rem;
`;
const BotonInput = styled.input`
  border-radius: 10px;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 10rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 65%;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--secondary);
  }
  @media (max-width: 768px) {
    margin: 0 1rem 2rem 1rem;
    width: 90%;
    font-size: 1.5rem;
  }
`;

const Inicio = () => {
  return (
    <Layout>
      <ContenedorDiv>
        <h1>System CLF</h1>
        <Card>
          <Image src={ImgClf} alt="Imagen" />
          <h1>Prueba System CLF</h1>
          <p>
            Crea una cuenta y prueba nuestro sistema para llevar un mejor
            control de tu profesorado, alumnado y administradores internos
          </p>
          <Link to={"/crear-cuenta"}>
            <BotonInput value="Crear cuenta" />
          </Link>
        </Card>
      </ContenedorDiv>
    </Layout>
  );
};

export default Inicio;
