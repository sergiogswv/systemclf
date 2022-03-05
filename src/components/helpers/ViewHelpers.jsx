import styled from "@emotion/styled";

/* Contenedor para formularios */
const ContenedorDiv = styled.div`
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  width: 85%;
  margin: 2rem auto;
  padding-bottom: 2rem;
  height: 100%;
  overflow-y: auto;
  h1 {
    color: var(--secondary);
    padding-top: 2rem;
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 550px;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Contenedor = ({ children }) => {
  return <ContenedorDiv>{children}</ContenedorDiv>;
};

const TablaStl = styled.table`
  width: 95%;
  margin: 0 auto;

  th {
    border-bottom: 2px solid var(--primary);
    text-align: left;
  }
  td {
    height: 2.5rem;
    font-weight: 400;
    border-bottom: 2px solid var(--primary);
  }
  td button {
    border: none;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    display: block;
    overflow-y: scroll;
    height: 100vh;
  }
`;

export const Tabla = ({ children }) => {
  return <TablaStl>{children}</TablaStl>;
};

const BotonInput = styled.input`
  border-radius: 5px;
  margin-left: 0.75rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 1rem;
  height: 2rem;
`;

export const Boton = ({ value }) => {
  return <BotonInput value={value} type="submit" />;
};
