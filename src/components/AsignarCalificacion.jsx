import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { descargarMateriasFilterAction } from "../actions/materiasActions";

import Error from "./Layout/Error";
import Spinner, { SpinnerPequeño } from "./helpers/Spinner";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";
import styled from "@emotion/styled";

import {
  agregarCalificacion,
  obtenerCalificaciones,
} from "../actions/califActions";
import { useNavigate } from "react-router-dom";

const BotonInput = styled.input`
  border-radius: 5px;
  margin-left: 0.75rem;
  margin-bottom: 0.75rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 1rem;
  height: 2rem;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--secondary);
  }
`;
const BotonInputEliminar = styled.input`
  border-radius: 5px;
  margin-left: 0.75rem;
  margin-top: 0.75rem;
  background-color: var(--rojo);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 1rem;
  height: 2rem;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--rojo);
  }
`;
const Acciones = styled.div`
  display: block;
  width: 100%;
`;
const Nombre = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: var(--primary);
  span {
    color: var(--secondary);
    font-weight: 700;
  }
`;
const FormularioStyle = styled.form`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  font-size: 1rem;
  text-align: left;
  margin: 0 auto;
  padding-top: 1rem;
  height: 1%.5;

  div:last-child {
    margin: auto auto;
    input {
      background-color: var(--secondary);
      border: none;
      border-radius: 5px;
      color: var(--blanco);
      text-transform: uppercase;
      height: 2rem;
      margin-left: 1rem;
      transition: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
    input:hover {
      color: var(--secondary);
      background-color: var(--blanco);
    }
  }
`;
const LabelText = styled.label`
  height: 2rem;
  margin-top: auto;
`;
const Campoinput = styled.input`
  border-radius: 5px;
  height: 1rem;
  width: 20%;
  color: var(--negro) !important;
`;
const ContenedorAsignar = styled.div`
  display: block;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-align: center;
  color: var(--secondary);
  font-size: 1.5rem;
`;
const Campo = styled.div`
  display: block;
  input {
    background-color: var(--blanco) !important;
    border: 1px solid var(--negro) !important;
    border-radius: 5px !important;
    width: 80%;
    height: 1rem !important;
    margin: 0 !important;
  }
`;
const Agregar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AsignarCalificacion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const alumno = useSelector((state) => state.alumnos.alumnoCalificar);

  /* Obtener la calificaciones */
  useEffect(() => {
    const { _id } = alumno;
    dispatch(obtenerCalificaciones(_id, token));
  }, []);

  const materiasDisponibles = useSelector((state) => state.materias.materias);
  const descargandoMateria = useSelector((state) => state.materias.cargando);
  const cargando = useSelector((state) => state.calificaciones.cargando);
  const descargandoCalif = useSelector(
    (state) => state.calificaciones.descargando
  );
  const agregado = useSelector((state) => state.calificaciones.agregado);
  const msg = useSelector((state) => state.calificaciones.msg);
  const [seleccion, setSeleccion] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [materia, setMateria] = useState({});
  const [calificacion, setCalificacion] = useState({});
  const [error, setError] = useState(false);

  const grados = [
    { id: 1, nombre: 1 },
    { id: 2, nombre: 2 },
    { id: 3, nombre: 3 },
    { id: 4, nombre: 4 },
    { id: 5, nombre: 5 },
    { id: 6, nombre: 6 },
    { id: 7, nombre: 7 },
    { id: 8, nombre: 8 },
  ];
  const calificaciones = useSelector(
    (state) => state.calificaciones.calificaciones
  );

  /* consultar y descargar la lista de materias */
  useEffect(() => {
    dispatch(descargarMateriasFilterAction(token, seleccion));
  }, [seleccion]);

  useEffect(() => {
    setCalificacion({
      ...calificacion,
      alumnoId: alumno._id,
      alumnoCuenta: alumno.cuenta,
      grado: seleccion,
      materia: materia,
      calificacion: cantidad,
    });
  }, [seleccion, materia, cantidad]);

  /* ocultar error */
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      calificacion.seleccion === 0 ||
      calificacion.materia === "" ||
      cantidad === 0
    ) {
      setError(true);
      return null;
    }

    setError(false);
    dispatch(agregarCalificacion(calificacion, token));

    if (agregado) {
      setSeleccion("");
      setMateria("");
      setCalificacion("");
    }
  };

  return (
    <>
      {!token && navigate("/")}
      <Layout>
        <Contenedor>
          {descargandoCalif ? (
            <Spinner />
          ) : (
            <>
              <Nombre>
                Asignar calificaciones a:{" "}
                <span>
                  {alumno.nombre + " " + alumno.paterno + " " + alumno.materno}
                </span>
              </Nombre>

              {/* Formulario */}
              <ContenedorAsignar>
                <FormularioStyle onSubmit={handleSubmit}>
                  <div>
                    <LabelText>Grado:</LabelText>
                    <select
                      onChange={(e) => setSeleccion(e.target.value)}
                      name="grado"
                    >
                      <option value="">---Selecciona un grado---</option>
                      {grados.map((grado) => (
                        <option key={grado.id}>{grado.nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <LabelText>Materia:</LabelText>
                    <select onChange={(e) => setMateria(e.target.value)}>
                      <option value="">---Selecciona la materia---</option>
                      {materiasDisponibles &&
                        materiasDisponibles.map((materia) => (
                          <option value={materia._id} key={materia._id}>
                            {materia.nombre}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <LabelText>Calificación:</LabelText>
                    <Campo>
                      <Campoinput
                        min={1}
                        max={10}
                        onChange={(e) => setCantidad(e.target.value)}
                        type="number"
                      />
                    </Campo>
                  </div>
                  <Agregar>
                    <input value="Agregar" type="submit" />
                    <div>
                      {cargando && <SpinnerPequeño />}
                      {descargandoMateria && <SpinnerPequeño />}
                    </div>
                  </Agregar>
                </FormularioStyle>
                {/* Error */}
                {error && (
                  <Error errorMsg={"Todos los campos son obligatorios"} />
                )}
                {msg && <Error errorMsg={msg} />}
              </ContenedorAsignar>
              {/* Tabla de calificaciones */}
              <Tabla>
                <thead>
                  <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Grado</th>
                    <th scope="col">Creditos</th>
                    <th scope="col">Opción</th>
                    <th scope="col">Clave</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Iteracion por cada admin */}
                  {calificaciones.map((calificacion) => (
                    <tr key={calificacion._id}>
                      <td scope="col">{calificacion.MateriaData[0].nombre}</td>
                      <td scope="col">{calificacion.grado}</td>
                      <td scope="col">
                        {calificacion.MateriaData[0].creditos}
                      </td>
                      <td scope="col">{calificacion.MateriaData[0].opcion}</td>
                      <td scope="col">{calificacion.MateriaData[0].clave}</td>
                      <td scope="col">
                        {/* Acciones */}
                        <Acciones>
                          <BotonInput
                            value="Editar"
                            type="submit"
                            //onClick={() => editarMateriaFn(materia)}
                          />
                          <BotonInputEliminar
                            value="Eliminar"
                            type="submit"
                            //onClick={() => eliminarMateriaFn(materia)}
                          />
                        </Acciones>
                      </td>
                      {/* Botons de acciones */}
                    </tr>
                  ))}
                </tbody>
              </Tabla>
            </>
          )}
        </Contenedor>
      </Layout>
    </>
  );
};

export default AsignarCalificacion;
