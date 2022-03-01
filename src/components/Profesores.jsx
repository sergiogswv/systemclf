/* React */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* css / helpers / imagenes */
import styled from "@emotion/styled";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";
import Spinner from "../components/helpers/Spinner";
import Layout from "./Layout/Layout";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import {
  descargarProfAction,
  obtenerProfEditar,
  eliminarProf,
} from "../actions/profActions";

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
`;
const Acciones = styled.div`
  display: block;
  width: 100%;
`;

const Profesores = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.profs.msg);
  const cargando = useSelector((state) => state.profs.cargando);
  const profesors = useSelector((state) => state.profs.profesors);

  /* consultar y descargar la lista de admins */
  useEffect(() => {
    dispatch(descargarProfAction(token));
  }, []);

  /* Funcion que edita el prof */
  const editarProfFn = (profesor) => {
    dispatch(obtenerProfEditar(profesor));
    navigate(`/escuela/profesores/editar/${profesor._id}`);
  };
  /* Funcion que elimina el prof */
  const eliminarProfFn = (profesor) => {
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
        dispatch(eliminarProf(profesor, token));
      }
    });
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Profesores</h1>
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
                <th scope="col">Número de cuenta</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada profesor */}
              {profesors.map((profesor) => (
                <tr key={profesor._id}>
                  <td scope="col">{profesor.nombre}</td>
                  <td scope="col">{profesor.paterno}</td>
                  <td scope="col">{profesor.materno}</td>
                  <td scope="col">{profesor.cuenta}</td>
                  {/* Botons de acciones */}
                  <td scope="col">
                    <div>
                      <Acciones>
                        <BotonInput
                          value="Editar"
                          type="submit"
                          onClick={() => editarProfFn(profesor)}
                        />
                        <BotonInputEliminar
                          value="Eliminar"
                          type="submit"
                          onClick={() => eliminarProfFn(profesor)}
                        />
                      </Acciones>
                      <BotonInput value="Asignar Materia" type="submit" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Tabla>
        )}
      </Contenedor>
    </Layout>
  );
};

export default Profesores;
