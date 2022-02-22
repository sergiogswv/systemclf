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

const FormularioAlumno = () => {
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  /* State local de materias */
  const semstres = [
    { id: 1, nombre: "Semestre #1", idSemestre: 10 },
    { id: 2, nombre: "Semestre #2", idSemestre: 20 },
    { id: 4, nombre: "Semestre #4", idSemestre: 40 },
    { id: 5, nombre: "Semestre #5", idSemestre: 50 },
  ];
  /* State local para profesor */
  const [alumno, setAlumno] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    correo: "",
    semestre: "",
    cuenta: "",
  });

  /* Estate de Error */
  const [error, setError] = useState(false);

  /* Destructuring profesor */
  const { nombre, paterno, materno, correo, semestre, cuenta } = alumno;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };
  /* Agrega el profesor en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, correo, semestre, cuenta].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */

    /* Redireccionar */
    navigate("/escuela/alumnos");
  };

  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Alumnos</h1>

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
          {/* Grados */}
          <CampoForm>
            <Label>Semestre:</Label>
            <select onChange={(e) => handleChange(e)} name="semestre">
              <option value="">-- Seleccione Semestre --</option>
              {/* Iteracion de cada Semestre */}
              {semstres.map((semestre) => (
                <option key={semestre.id}>{semestre.nombre}</option>
              ))}
            </select>
          </CampoForm>

          {/* # de cuenta */}
          <CampoForm>
            <Label># de Cuenta:</Label>
            <Campoinput
              type="text"
              id="cuenta"
              name="cuenta"
              onChange={(e) => handleChange(e)}
              placeholder="Número de Cuenta"
            />
          </CampoForm>
          {/* Error */}
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

export default FormularioAlumno;
