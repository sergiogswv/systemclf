import styled from "@emotion/styled";

/* Contenedor para formularios */
const ContenedorDiv = styled.div`
  background-color: #fff;
  height: 40rem;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  h1 {
    color: var(--secondary);
    padding-top: 2rem;
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const Contenedor = ({ children }) => {
  return <ContenedorDiv>{children}</ContenedorDiv>;
};

/* Inputs para Formularios */
/* Estilos de Campos */
const Campoinput = styled.input`
  border-radius: 10px;
  height: 2rem;
`;

export const Campo = () => {
  return <Campoinput></Campoinput>;
};
/* Estilos de Boton */
const BotonInput = styled.input`
  border-radius: 10px;
  height: 3rem;
  margin-top: 1rem;
  width: 10rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 65%;
`;

export const Boton = ({ value }) => {
  return <BotonInput value={value} type="submit" />;
};

const LabelText = styled.label`
  height: 2rem;
  margin-top: auto;
`;

export const Label = ({ children }) => {
  return <LabelText>{children}</LabelText>;
};

export const Formulario = ({ children }) => {
  return <FormularioStyle>{children}</FormularioStyle>;
};
const CampoFormStyle = styled.div`
  display: grid;
  grid-template-columns: 25% 60%;
  text-align: left;
  padding-top: 1.5rem;
  margin-left: 10%;
`;
export const CampoForm = ({ children }) => {
  return <CampoFormStyle>{children}</CampoFormStyle>;
};
