/* Css/helpers/layout */
import styled from "@emotion/styled";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";
import Spinner from "../components/helpers/Spinner";
import Error from "./Layout/Error";

/* Redux/react */
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerAlumnos,
  elegirAlumnoEditar,
  eliminarAlumno,
} from "../actions/alumnoActions";
import { useEffect } from "react";
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
`;
const Acciones = styled.div`
  display: block;
  width: 100%;
`;

const Alumnos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.alumnos.msg);
  const cargando = useSelector((state) => state.alumnos.cargando);

  useEffect(() => {
    dispatch(obtenerAlumnos(token));
  }, []);

  const alumnos = useSelector((state) => state.alumnos.alumnos);

  const editarAlumnoFn = (alumno) => {
    dispatch(elegirAlumnoEditar(alumno));
    navigate(`/escuela/alumnos/editar/${alumno._id}`);
  };
  const eliminarAlumnoFn = (alumno) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este registro?",
      text: "¡No se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Eliminado!", "El registro a sido eliminado.", "success");
        dispatch(eliminarAlumno(alumno, token));
      }
    });
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Alumnos</h1>
        {token === null ? (
          navigate("/")
        ) : cargando ? (
          <Spinner />
        ) : errorMsg ? (
          <Error errorMsg={errorMsg} />
        ) : (
          <Tabla>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Paterno</th>
                <th scope="col">Materno</th>
                <th scope="col">Grado</th>
                <th scope="col">Cuenta</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada admin */}
              {alumnos.map((alumno) => (
                <tr key={alumno._id}>
                  <td scope="col">{alumno.nombre}</td>
                  <td scope="col">{alumno.paterno}</td>
                  <td scope="col">{alumno.materno}</td>
                  <td scope="col">{alumno.grado}</td>
                  <td scope="col">{alumno.cuenta}</td>
                  <td scope="col">
                    {/* Status */}
                    <Acciones>
                      <BotonInput
                        value="Editar"
                        type="submit"
                        onClick={() => editarAlumnoFn(alumno)}
                      />
                      <BotonInputEliminar
                        value="Eliminar"
                        type="submit"
                        onClick={() => eliminarAlumnoFn(alumno)}
                      />
                    </Acciones>
                  </td>
                  {/* Botons de acciones */}
                </tr>
              ))}
            </tbody>
          </Tabla>
        )}
      </Contenedor>
    </Layout>
  );
};

export default Alumnos;
