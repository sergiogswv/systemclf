import { useState } from "react";
import styled from "@emotion/styled";

import {
  elegirAlumnoEditar,
  eliminarAlumno,
  calificarAlumno,
} from "../actions/alumnoActions";
import { useSelector, useDispatch } from "react-redux";
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

const Alumno = ({ alumno }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  /* Funcion que edita el alumno */
  const editarAlumnoFn = (alumno) => {
    dispatch(elegirAlumnoEditar(alumno));
    navigate(`/escuela/alumnos/editar/${alumno._id}`);
  };
  /* Funcion que elimina el alumno */
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

  /* Funcion para guardar alumno y agregar calificacion */
  const calificarAlumnoFn = (alumno) => {
    dispatch(calificarAlumno(alumno));
    navigate(`/escuela/alumnos/calificaciones/${alumno._id}`);
  };
  return (
    <>
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
            <BotonInput
              value="Calificaciones"
              type="submit"
              onClick={() => calificarAlumnoFn(alumno)}
            />
          </Acciones>
        </td>
      </tr>
    </>
  );
};

export default Alumno;
