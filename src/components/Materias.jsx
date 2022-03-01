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
  descargarMateriasAction,
  eliminarMateria,
  elegirMateriaEditar,
} from "../actions/materiasActions";

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

const Materias = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.materias.msg);
  const cargando = useSelector((state) => state.materias.cargando);
  const materias = useSelector((state) => state.materias.materias);

  /* consultar y descargar la lista de admins */
  useEffect(() => {
    dispatch(descargarMateriasAction(token));
  }, []);

  /* Funcion que edita el prof */
  const editarMateriaFn = (materia) => {
    dispatch(elegirMateriaEditar(materia));
    navigate(`/escuela/materias/editar/${materia._id}`);
  };
  /* Funcion que elimina el prof */
  const eliminarMateriaFn = (materia) => {
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
        dispatch(eliminarMateria(materia, token));
      }
    });
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Materias</h1>
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
                <th scope="col">Grado</th>
                <th scope="col">Creditos</th>
                <th scope="col">Opción</th>
                <th scope="col">Clave</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada admin */}
              {materias.map((materia) => (
                <tr key={materia._id}>
                  <td scope="col">{materia.nombre}</td>
                  <td scope="col">{materia.grado}</td>
                  <td scope="col">{materia.creditos}</td>
                  <td scope="col">{materia.opcion}</td>
                  <td scope="col">{materia.clave}</td>
                  <td scope="col">
                    {/* Acciones */}
                    <Acciones>
                      <BotonInput
                        value="Editar"
                        type="submit"
                        onClick={() => editarMateriaFn(materia)}
                      />
                      <BotonInputEliminar
                        value="Eliminar"
                        type="submit"
                        onClick={() => eliminarMateriaFn(materia)}
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

export default Materias;
