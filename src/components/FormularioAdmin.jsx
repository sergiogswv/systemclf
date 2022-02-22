import Layout from "./Layout/Layout";
import {
  Contenedor,
  Boton,
  Label,
  CampoForm,
} from "./helpers/FormularioHelpers";
import styled from "@emotion/styled";

/* Estilos de formulario */
const Formulario = styled.form`
  display: block;
  width: 100%;
`;
const Campo = styled.input`
  border-radius: 10px;
  height: 2rem;
`;

const FormularioAdmin = () => {
  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Administradores</h1>
        {/* Formulario de admin */}
        <Formulario>
          <CampoForm>
            <Label>Nombre:</Label>
            <Campo placeholder="Nombre" />
          </CampoForm>
          <CampoForm>
            <Label>Apellido paterno:</Label>
            <Campo placeholder="Apellido Paterno" />
          </CampoForm>
          <CampoForm>
            <Label>Apellido paterno:</Label>
            <Campo placeholder="Apellido Materno" />
          </CampoForm>
          <CampoForm>
            <Label>Correo:</Label>
            <Campo placeholder="Email" />
          </CampoForm>
          <CampoForm>
            <Label>Privilegios:</Label>
            {/* Seleccion de Privilegios */}
            <select>
              <option>-- Seleccione Privilegios --</option>
              <option value={"R"}>Lectura</option>
              <option value={"RW"}>Lectura y Escritura</option>
            </select>
          </CampoForm>

          <Boton value="Agregar" />
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default FormularioAdmin;
