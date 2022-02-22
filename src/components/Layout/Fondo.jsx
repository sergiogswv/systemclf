import styled from "@emotion/styled";
import BgFondo from "../../public/img/Fondo.png";

const FondoImagen = styled.div`
  height: 100vh;
  position: absolute;
  z-index: -10;
`;
const Imagen = styled.img`
  object-fit: cover;
  width: 100%;
  @media (max-width: 768px) {
    height: 100vh;
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
