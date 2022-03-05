import styled from "@emotion/styled";
import BgFondo from "../../public/img/Fondo3.png";

const FondoImagen = styled.div`
  height: 100vh;
  position: absolute;
  z-index: -10;
  top: 0;
`;
const Imagen = styled.img`
  width: 100%;
`;

const Fondo = () => {
  return (
    <FondoImagen>
      <Imagen alt="Fondo" src={BgFondo} />
    </FondoImagen>
  );
};

export default Fondo;
