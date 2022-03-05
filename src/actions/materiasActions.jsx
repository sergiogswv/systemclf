import {
  DESCARGAR_MATERIAS,
  OBTENER_MATERIAS_SUCCESS,
  OBTENER_MATERIAS_ERROR,
  AGREGAR_MATERIA,
  AGREGAR_MATERIA_SUCCESS,
  AGREGAR_MATERIA_ERROR,
  OBTENER_MATERIA_EDITAR,
  MATERIA_EDITAR,
  MATERIA_EDITAR_SUCCESS,
  MATERIA_EDITAR_ERROR,
  MATERIA_ELIMINAR,
  MATERIA_ELIMINAR_SUCCESS,
  MATERIA_ELIMINAR_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

export function descargarMateriasAction(token) {
  return async (dispatch) => {
    dispatch(descargarMaterias());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    setTimeout(async () => {
      try {
        const respuesta = await clienteAxios("/api/materias", config);
        dispatch(obtenerMateriasExito(respuesta.data.materias));
      } catch (error) {
        let errorMsg = "Hubo un error al descargar las materias";
        dispatch(obtenerMateriasError(errorMsg));
      }
    }, 2000);
  };
}
const descargarMaterias = () => ({
  type: DESCARGAR_MATERIAS,
});
const obtenerMateriasExito = (materias) => ({
  type: OBTENER_MATERIAS_SUCCESS,
  payload: materias,
});
const obtenerMateriasError = (errorMsg) => ({
  type: OBTENER_MATERIAS_ERROR,
  payload: errorMsg,
});

/* Action para crear materia */
export function crearMateriaAction(materia, token) {
  return async (dispatch) => {
    dispatch(crearMateria());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.post("/api/materias", materia, config);
      dispatch(crearMateriaExito(materia));
    } catch (error) {
      let errorMsg = "Hubo un error al agregar la materia";
      dispatch(crearMateriaError(errorMsg));
    }
  };
}
const crearMateria = () => ({
  type: AGREGAR_MATERIA,
});
const crearMateriaExito = (materia) => ({
  type: AGREGAR_MATERIA_SUCCESS,
  payload: materia,
});
const crearMateriaError = (errorMsg) => ({
  type: AGREGAR_MATERIA_ERROR,
  payload: errorMsg,
});

/* Action para elegir materia a editar */
export function elegirMateriaEditar(materia) {
  return (dispatch) => {
    dispatch(elegirMateria(materia));
  };
}
const elegirMateria = (materia) => ({
  type: OBTENER_MATERIA_EDITAR,
  payload: materia,
});

/* Action para editar la materia */
export function editarMateriaAction(materia, token) {
  return async (dispatch) => {
    dispatch(editarMateria());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.put(`/api/materias/${materia._id}`, materia, config);
      dispatch(editarMateriaExito(materia));
    } catch (error) {
      let errorMsg = "Hubo un error al editar la materia";
      dispatch(editarMateriaError(errorMsg));
    }
  };
}
const editarMateria = () => ({
  type: MATERIA_EDITAR,
});
const editarMateriaExito = (materia) => ({
  type: MATERIA_EDITAR_SUCCESS,
  payload: materia,
});

const editarMateriaError = (errorMsg) => ({
  type: MATERIA_EDITAR_ERROR,
  payload: errorMsg,
});

/* Action para eliminar materia */
export function eliminarMateria(materia, token) {
  return async (dispatch) => {
    dispatch(eliminarMateriaAction(materia));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.delete(`/api/materias/${materia._id}`, config);
      dispatch(eliminarMateriaExito(materia));
    } catch (error) {
      let errorMsg = "Hubo un error al eliminar la materia";
      dispatch(eliminarMateriaError(errorMsg));
    }
  };
}
const eliminarMateriaAction = (materia) => ({
  type: MATERIA_ELIMINAR,
  payload: materia,
});
const eliminarMateriaExito = (materia) => ({
  type: MATERIA_ELIMINAR_SUCCESS,
  payload: materia,
});
const eliminarMateriaError = (errorMsg) => ({
  type: MATERIA_ELIMINAR_ERROR,
  payload: errorMsg,
});

/* action para obtener las materias filtradas */
export function descargarMateriasFilterAction(token, grado) {
  return async (dispatch) => {
    dispatch(descargarMaterias());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    setTimeout(async () => {
      try {
        const respuesta = await clienteAxios.post(
          "/api/materiasFilter",
          { grado },
          config
        );
        dispatch(obtenerMateriasExito(respuesta.data.materias));
      } catch (error) {
        let errorMsg = "Hubo un error al descargar las materias";
        dispatch(obtenerMateriasError(errorMsg));
      }
    }, 2000);
  };
}
