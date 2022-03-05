import Layout from "./Layout/Layout";
import {
  Contenedor,
  Label,
  CampoForm,
  Boton,
} from "./helpers/FormularioHelpers";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useNavigate } from "react-router-dom";
import { editarMateriaAction } from "../actions/materiasActions";
import { useDispatch, useSelector } from "react-redux";

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

const EditarMateria = () => {
  const token = useSelector((state) => state.token.token);

  const dispatch = useDispatch();
  /* Usar hook de useNavigate */
  const navigate = useNavigate();

  /* State local de materias */
  const grados = [
    { id: 1, nombre: "1" },
    { id: 2, nombre: "2" },
    { id: 3, nombre: "3" },
    { id: 4, nombre: "4" },
    { id: 5, nombre: "5" },
    { id: 6, nombre: "6" },
    { id: 7, nombre: "7" },
    { id: 8, nombre: "8" },
    { id: 9, nombre: "9" },
  ];

  /* State local para profesor */
  const [materia, setMateria] = useState({
    nombre: "",
    grado: "",
    creditos: "",
    opcion: "",
    clave: "",
  });

  /* Extraer el prof a editar */
  const materiaEditar = useSelector((state) => state.materias.materiaEditar);

  useEffect(() => {
    /* Setear con el profe a editar en el state */
    setMateria(materiaEditar);
  }, [materiaEditar]);

  /* Estate de Error */
  const [error, setError] = useState(false);
  const errorMsg = useSelector((state) => state.materias.msg);

  /* Destructuring materia */
  const { nombre, grado, creditos, opcion, clave } = materia;
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
    if ([nombre, grado, creditos, opcion, clave].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */
    dispatch(editarMateriaAction(materia, token));

    /* Redireccionar */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue editado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
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
              value={nombre}
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
              <option value="">-- Seleccione Grado --</option>
              {/* Iteracion de cada Grado */}
              {grados.map((grado) => (
                <option key={grado.id}>{grado.nombre}</option>
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
              value={creditos}
            />
          </CampoForm>
          <CampoForm>
            <Label>Opción:</Label>
            <select
              onChange={(e) => handleChange(e)}
              name="opcion"
              value={opcion}
            >
              <option value="">-- Seleccione Opción --</option>
              <option value="Obligatoria">Obligatoria</option>
              <option value="Opcional">Opcional</option>
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
              value={clave}
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

export default EditarMateria;
