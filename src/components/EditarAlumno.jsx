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
import { useDispatch, useSelector } from "react-redux";
import { editarAlumno } from "../actions/alumnoActions";
import { useEffect } from "react";

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
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 65%;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--secondary);
  }
  @media (max-width: 768px) {
    margin-left: 40%;
  }
`;

const EditarAlumno = () => {
  const dispatch = useDispatch();
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.alumnos.msg);

  /* Alumno a editar */
  const alumnoEditar = useSelector((state) => state.alumnos.alumnoEditar);

  /* State local de materias */
  const grados = [
    { id: 1, nombre: "1" },
    { id: 2, nombre: "2" },
    { id: 4, nombre: "4" },
    { id: 5, nombre: "5" },
    { id: 6, nombre: "6" },
    { id: 7, nombre: "7" },
    { id: 8, nombre: "8" },
    { id: 9, nombre: "9" },
  ];
  /* State local para profesor */
  const [alumno, setAlumno] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    grado: "",
    cuenta: "",
  });

  useEffect(() => {
    setAlumno(alumnoEditar);
  }, []);

  /* Estate de Error */
  const [error, setError] = useState(false);

  /* Destructuring profesor */
  const { nombre, paterno, materno, grado, cuenta } = alumno;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, grado, cuenta].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el alumno */
    dispatch(editarAlumno(alumno, token));
    /* Alerta de sweetalert */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue editado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
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
              value={nombre}
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
              value={paterno}
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
              value={materno}
            />
          </CampoForm>

          {/* Grados */}
          <CampoForm>
            <Label>Grado:</Label>
            <select
              onChange={(e) => handleChange(e)}
              name="grado"
              value={grado}
            >
              <option value="">-- Seleccione Semestre --</option>
              {/* Iteracion de cada Semestre */}
              {grados.map((grado) => (
                <option key={grado.id}>{grado.nombre}</option>
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
              value={cuenta}
            />
          </CampoForm>
          {/* Error */}
          {error && <Error errorMsg={"Todos los campos son obligatorios"} />}
          {errorMsg && <Error errorMsg={errorMsg} />}
          {/* Boton de agregar */}

          <BotonInput type="Submit" value="Guardar cambios" />
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default EditarAlumno;
