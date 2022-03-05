import styled from "@emotion/styled";
import Asignar from "./Asignar";

import { obtenerProfEditar, eliminarProf } from "../actions/profActions";
import { useDispatch, useSelector } from "react-redux";

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

const Profesor = ({ profesor }) => {
  const dispatch = useDispatch;

  const token = useSelector((state) => state.token.token);
  /* const [activarAsignar, setActivarAsignar] = useState(false); */

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
    <>
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
            {/* <BotonInput
              value={`${
                activarAsignar ? "Cancelar Asignar" : "Asignar materia"
              }`}
              type="submit"
              onClick={() => setActivarAsignar(!activarAsignar)}
            /> */}
          </div>
        </td>
      </tr>
      {activarAsignar && (
        <tr>
          <td colSpan={5}>
            <Asignar
              profesorId={profesor._id}
              setActivarAsignar={setActivarAsignar}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default Profesor;
