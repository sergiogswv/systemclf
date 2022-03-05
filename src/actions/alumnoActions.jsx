import {
  DESCARGAR_ALUMNOS,
  OBTENER_ALUMNOS_SUCCESS,
  OBTENER_ALUMNOS_ERROR,
  AGREGAR_ALUMNO,
  AGREGAR_ALUMNO_SUCCESS,
  AGREGAR_ALUMNO_ERROR,
  OBTENER_ALUMNO_EDITAR,
  ALUMNO_EDITAR,
  ALUMNO_EDITAR_SUCCESS,
  ALUMNO_EDITAR_ERROR,
  ALUMNO_ELIMINAR,
  ALUMNO_ELIMINAR_SUCCESS,
  ALUMNO_ELIMINAR_ERROR,
  OBTENER_ALUMNOS_CALIFICAR,
} from "../types";

import clienteAxios from "../config/axios";

/* Action para obtener alumnos */
export function obtenerAlumnos(token) {
  return async (dispatch) => {
    dispatch(obtenerAlumnosAction());

    setTimeout(async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": token,
          },
        };
        const respuesta = await clienteAxios("/api/alumnos", config);
        dispatch(obtenerAlumnosExito(respuesta.data.alumnos));
      } catch (error) {
        let errorMsg = "Hubo un error al descargar los alumnos";
        dispatch(obtenerAlumnosError(errorMsg));
      }
    }, 2000);
  };
}
const obtenerAlumnosAction = () => ({
  type: DESCARGAR_ALUMNOS,
});
const obtenerAlumnosExito = (alumnos) => ({
  type: OBTENER_ALUMNOS_SUCCESS,
  payload: alumnos,
});
const obtenerAlumnosError = (errorMsg) => ({
  type: OBTENER_ALUMNOS_ERROR,
  payload: errorMsg,
});

/* Action para agregar alumnos */
export function agregarAlumnos(alumno, token) {
  return async (dispatch) => {
    dispatch(agregarAlumnosAction());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.post("/api/alumnos", alumno, config);
      dispatch(agregarAlumnosExito(alumno));
    } catch (error) {
      let errorMsg = "Hubo un error al descargar los alumnos";
      dispatch(agregarAlumnosError(errorMsg));
    }
  };
}
const agregarAlumnosAction = () => ({
  type: AGREGAR_ALUMNO,
});
const agregarAlumnosExito = (alumno) => ({
  type: AGREGAR_ALUMNO_SUCCESS,
  payload: alumno,
});
const agregarAlumnosError = (errorMsg) => ({
  type: AGREGAR_ALUMNO_ERROR,
  payload: errorMsg,
});

/* Action para obtener el alumno a editar */
export function elegirAlumnoEditar(alumno) {
  return (dispatch) => {
    dispatch(elegirAlumnoAction(alumno));
  };
}
const elegirAlumnoAction = (alumno) => ({
  type: OBTENER_ALUMNO_EDITAR,
  payload: alumno,
});
/* Action para editar alumno */
export function editarAlumno(alumno, token) {
  return async (dispatch) => {
    dispatch(editarAlumnoAction());
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      };
      await clienteAxios.put(`/api/alumnos/${alumno._id}`, alumno, config);
      dispatch(editarAlumnoExito(alumno));
    } catch (error) {
      let errorMsg = "Hubo un error al editar el alumno";
      dispatch(editarAlumnoError(errorMsg));
    }
  };
}
const editarAlumnoAction = () => ({
  type: ALUMNO_EDITAR,
});
const editarAlumnoExito = (alumno) => ({
  type: ALUMNO_EDITAR_SUCCESS,
  payload: alumno,
});
const editarAlumnoError = (errorMsg) => ({
  type: ALUMNO_EDITAR_ERROR,
  payload: errorMsg,
});

/* Actions para eliminar Alumno */
export function eliminarAlumno(alumno, token) {
  return async (dispatch) => {
    dispatch(eliminarAlumnoAction(alumno));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      };
      await clienteAxios.delete(`/api/alumnos/${alumno._id}`, config);
      dispatch(eliminarAlumnoExito(alumno));
    } catch (error) {
      let errorMsg = "Hubo un error al eliminar el alumno";
      dispatch(eliminarAlumnoError(errorMsg));
    }
  };
}
const eliminarAlumnoAction = (alumno) => ({
  type: ALUMNO_ELIMINAR,
  payload: alumno,
});
const eliminarAlumnoExito = (alumno) => ({
  type: ALUMNO_ELIMINAR_SUCCESS,
  payload: alumno,
});
const eliminarAlumnoError = (errorMsg) => ({
  type: ALUMNO_ELIMINAR_ERROR,
  payload: errorMsg,
});

/* Action para guardar el alumno a calificar */
export function calificarAlumno(alumno) {
  return (dispatch) => {
    dispatch(calificarAlumnoAction(alumno));
  };
}
const calificarAlumnoAction = (alumno) => ({
  type: OBTENER_ALUMNOS_CALIFICAR,
  payload: alumno,
});
