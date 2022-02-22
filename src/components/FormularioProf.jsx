import Layout from "./Layout/Layout";
import {
  Contenedor,
  Label,
  CampoForm,
  Boton,
} from "./helpers/FormularioHelpers";
import { useState } from "react";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useNavigate } from "react-router-dom";

/* Estilos de Campos */
const Campoinput = styled.input`
  border-radius: 10px;
  height: 2rem;
`;
/* Estilos de formulario */
const Formulario = styled.form`
  display: block;
  width: 100%;
`;

const FormularioProf = () => {
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  /* State local de materias */
  const materias = [
    { id: 1, nombre: "Materia #1", idMateria: 10 },
    { id: 2, nombre: "Materia #2", idMateria: 20 },
    { id: 4, nombre: "Materia #4", idMateria: 40 },
    { id: 5, nombre: "Materia #5", idMateria: 50 },
  ];
  /* State local para profesor */
  const [profesor, setProfesor] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    correo: "",
    materia: "",
  });

  /* Estate de Error */
  const [error, setError] = useState(false);

  /* Destructuring profesor */
  const { nombre, paterno, materno, correo, materia } = profesor;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setProfesor({
      ...profesor,
      [e.target.name]: e.target.value,
    });
  };
  /* Agrega el profesor en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, correo, materia].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */

    /* Redireccionar */
    navigate("/panel");
  };

  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Profesores</h1>

        {/* Formulario */}
        <Formulario onSubmit={handleSubmit}>
          <CampoForm>
            <Label>Nombre:</Label>
            <Campoinput
              type="text"
              id="nombre"
              name="nombre"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido paterno:</Label>
            <Campoinput
              type="text"
              id="paterno"
              name="paterno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido Paterno"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido materno:</Label>
            <Campoinput
              type="text"
              id="materno"
              name="materno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido Materno"
            />
          </CampoForm>
          <CampoForm>
            <Label>Correo:</Label>
            <Campoinput
              type="email"
              id="correo"
              name="correo"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />
          </CampoForm>
          <CampoForm>
            <Label>Materia:</Label>
            <select onChange={(e) => handleChange(e)} name="materia">
              <option value="">-- Seleccione Materia --</option>
              {/* Iteracion de cada Materia */}
              {materias.map((materia) => (
                <option key={materia.id}>{materia.nombre}</option>
              ))}
            </select>
          </CampoForm>
          {error && <Error />}
          {/* Boton de agregar */}
          <Boton value="Agregar">
            <input type="Submit" />
          </Boton>
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default FormularioProf;
