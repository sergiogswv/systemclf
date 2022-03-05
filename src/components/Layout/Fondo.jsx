import styled from "@emotion/styled";
import BgFondo from "../../public/img/Fondo3.png";

const FondoImagen = styled.div`
  height: 100vh;
  position: absolute;
  z-index: -10;
  top: 0;
  margin-bottom: 500px;
`;
const Imagen = styled.img`
  height: 100%;
  object-fit: cover;
  margin: 0 10%;
  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;

const Fondo = () => {
  return (
    <FondoImagen>
      <Imagen alt="Fondo" src={BgFondo} />
    </FondoImagen>
  );
};

export default Fondo;
