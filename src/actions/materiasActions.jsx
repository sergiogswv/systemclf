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

/* Action para editar materia */

/* Action para eliminar materia */
export function eliminarMateria(materia, token) {
  return async (dispatch) => {
    dispatch(eliminarMateriaAction(materia));
  };
}
const eliminarMateriaAction = (materia) => ({
  type: MATERIA_ELIMINAR,
  payload: materia,
});
