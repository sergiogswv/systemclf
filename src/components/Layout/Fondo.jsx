import styled from "@emotion/styled";
import BgFondo from "../../public/img/Fondo3.png";
import BgFondoM from "../../public/img/Fondo4.png";

const FondoImagen = styled.div`
  height: 100vh;
  position: absolute;
  z-index: -10;
  top: 0;
  margin-bottom: 500px;
`;
const Imagen = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Fondo = () => {
  return (
    <FondoImagen>
      <Imagen alt="Fondo" src={BgFondoM} />
    </FondoImagen>
  );
};

export default Fondo;
