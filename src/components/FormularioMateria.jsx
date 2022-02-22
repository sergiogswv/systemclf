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

const FormularioMateria = () => {
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  /* State local de materias */
  const semestres = [
    { id: 1, nombre: "Semestre #1", idSemestre: 10 },
    { id: 2, nombre: "Semestre #2", idSemestre: 20 },
    { id: 4, nombre: "Semestre #4", idSemestre: 40 },
    { id: 5, nombre: "Semestre #5", idSemestre: 50 },
  ];
  const profesores = [
    {
      nombre: "Sergio",
      paterno: "Guadarrama",
      materno: "Santillán",
      id: 1,
      categoria: "1000",
      estatus: false,
    },
    {
      nombre: "Emily",
      paterno: "Guadarrama",
      materno: "Payan",
      id: 2,
      categoria: "1000",
      estatus: true,
    },
    {
      nombre: "Angelica",
      paterno: "Hernandez",
      materno: "Muñiz",
      id: 3,
      categoria: "1000",
      estatus: true,
    },
    {
      nombre: "Brandon",
      paterno: "Alcantara",
      materno: "Ruiz",
      id: 4,
      categoria: "1000",
      estatus: false,
    },
  ];

  /* State local para profesor */
  const [materia, setMateria] = useState({
    nombre: "",
    semestre: "",
    creditos: "",
    opcion: "",
    profesor: "",
    clave: "",
  });

  /* Estate de Error */
  const [error, setError] = useState(false);

  /* Destructuring profesor */
  const { nombre, semestre, creditos, opcion, profesor, clave } = materia;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setMateria({
      ...materia,
      [e.target.name]: e.target.value,
    });
  };
  /* Agrega el profesor en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, semestre, creditos, opcion, profesor, clave].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */
    console.log("agregando");

    /* Redireccionar */
    navigate("/escuela/materias");
  };

  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Materias</h1>

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
          {/* Grados */}
          <CampoForm>
            <Label>Semestre:</Label>
            <select onChange={(e) => handleChange(e)} name="semestre">
              <option value="">-- Seleccione Semestre --</option>
              {/* Iteracion de cada Semestre */}
              {semestres.map((semestre) => (
                <option key={semestre.id}>{semestre.nombre}</option>
              ))}
            </select>
          </CampoForm>
          <CampoForm>
            <Label>Creditos:</Label>
            <Campoinput
              type="text"
              id="creditos"
              name="creditos"
              onChange={(e) => handleChange(e)}
              placeholder="#Creditos"
            />
          </CampoForm>
          <CampoForm>
            <Label>Opción:</Label>
            <select onChange={(e) => handleChange(e)} name="opcion">
              <option value="">-- Seleccione Opción --</option>
              <option value="obligatoria">Obligatoria</option>
              <option value="opcional">Opcional</option>
            </select>
          </CampoForm>
          {/* Grados */}
          <CampoForm>
            <Label>Profesor:</Label>
            <select onChange={(e) => handleChange(e)} name="profesor">
              <option value="">-- Seleccione Profesor --</option>
              {/* Iteracion de cada Semestre */}
              {profesores.map((profesor) => (
                <option key={profesor.id}>
                  {profesor.nombre} {profesor.paterno} {profesor.materno}
                </option>
              ))}
            </select>
          </CampoForm>

          {/* # de cuenta */}
          <CampoForm>
            <Label>Clave de Materia:</Label>
            <Campoinput
              type="text"
              id="clave"
              name="clave"
              onChange={(e) => handleChange(e)}
              placeholder="Clave de materia"
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

export default FormularioMateria;
