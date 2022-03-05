import {
  DESCARGAR_PROFS,
  OBTENER_PROFS_SUCCESS,
  OBTENER_PROFS_ERROR,
  AGREGAR_PROF,
  AGREGAR_PROF_SUCCESS,
  AGREGAR_PROF_ERROR,
  OBTENER_PROF_EDITAR,
  PROF_EDITAR,
  PROF_EDITAR_SUCCESS,
  PROF_EDITAR_ERROR,
  PROF_ELIMINAR,
  PROF_ELIMINAR_SUCCESS,
  PROF_ELIMINAR_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

/* Actions para los profesores */
export const descargarProfAction = (token) => {
  return async (dispatch) => {
    dispatch(obtenerProf());
    setTimeout(async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": token,
          },
        };
        const respuesta = await clienteAxios("/api/profesores", config);
        dispatch(obtenerProfExito(respuesta.data.profesores));
      } catch (error) {
        //console.log(error.response);
        const msg = "Hubo un error, no se puede obtener la información";
        dispatch(obtenerProfError(msg));
        //console.log(error);
      }
    }, 2000);
  };
};
const obtenerProf = () => ({
  type: DESCARGAR_PROFS,
  payload: true,
});
const obtenerProfExito = (profs) => ({
  type: OBTENER_PROFS_SUCCESS,
  payload: profs,
});
const obtenerProfError = (msg) => ({
  type: OBTENER_PROFS_ERROR,
  payload: msg,
});

/* Action para agregar profesor */
export function crearProfesor(profesor, token) {
  return async (dispatch) => {
    dispatch(crearProfesorAction());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.post("/api/profesores", profesor, config);
      dispatch(crearProfesorExito(profesor));
    } catch (error) {
      let errorMsg = "Hubo un error al crear el profesor";
      dispatch(crearProfesorError(errorMsg));
    }
  };
}
const crearProfesorAction = () => ({
  type: AGREGAR_PROF,
});
const crearProfesorExito = (profesor) => ({
  type: AGREGAR_PROF_SUCCESS,
  payload: profesor,
});
const crearProfesorError = (errorMsg) => ({
  type: AGREGAR_PROF_ERROR,
  payload: errorMsg,
});

/* Actions para obtener el prof a editar */
export function obtenerProfEditar(profesor) {
  return (dispatch) => {
    dispatch(obtenerProfAction(profesor));
  };
}
const obtenerProfAction = (profesor) => ({
  type: OBTENER_PROF_EDITAR,
  payload: profesor,
});

/* Actions para editar el prof */
export function editarProf(profesor, token) {
  return async (dispatch) => {
    dispatch(editarProfAction(profesor));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.put(
        `/api/profesores/${profesor._id}`,
        profesor,
        config
      );
      dispatch(editarProfExito(profesor));
    } catch (error) {
      let errorMsg = "Hubo error al editar el profesor";
      dispatch(editarProfError(errorMsg));
    }
  };
}
const editarProfAction = () => ({
  type: PROF_EDITAR,
});
const editarProfExito = () => ({
  type: PROF_EDITAR_SUCCESS,
  payload: profesor,
});
const editarProfError = (errorMsg) => ({
  type: PROF_EDITAR_ERROR,
  payload: errorMsg,
});

/* Action para eliminar el prof */
export function eliminarProf(profesor, token) {
  return async (dispatch) => {
    dispatch(eliminarProfAction(profesor));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.delete(`/api/profesores/${profesor._id}`, config);
      dispatch(eliminarProfExito(profesor._id));
    } catch (error) {
      let errorMsg = "Hubo error al editar el profesor";
      dispatch(eliminarProfError(errorMsg));
    }
  };
}
const eliminarProfAction = (profesor) => ({
  type: PROF_ELIMINAR,
  payload: profesor,
});
const eliminarProfExito = (profesor) => ({
  type: PROF_ELIMINAR_SUCCESS,
  payload: profesor,
});
const eliminarProfError = (errorMsg) => ({
  type: PROF_ELIMINAR_ERROR,
  payload: errorMsg,
});
