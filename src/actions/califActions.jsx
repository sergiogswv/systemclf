/* Types */
import {
  AGREGAR_CALIFICACIONES,
  AGREGAR_CALIFICACIONES_EXITO,
  AGREGAR_CALIFICACIONES_ERROR,
  OBTENER_CALIFICACIONES,
  OBTENER_CALIFICACIONES_EXITO,
  OBTENER_CALIFICACIONES_ERROR,
} from "../types";
/* axios */
import clienteAxios from "../config/axios";

/* Actions */
/* Obtener calificaciones */
export function obtenerCalificaciones(alumno, token) {
  return async (dispatch) => {
    dispatch(obtenerAction());
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      const respuesta = await clienteAxios.post(
        `/api/calificacion/${alumno}`,
        { "": "" },
        config
      );
      dispatch(obtenerActionExito(respuesta.data.calificaciones));
    } catch (error) {
      dispatch(obtenerActionError());
    }
  };
}
const obtenerAction = () => ({
  type: OBTENER_CALIFICACIONES,
  payload: true,
});
const obtenerActionExito = (calificaciones) => ({
  type: OBTENER_CALIFICACIONES_EXITO,
  payload: calificaciones,
});
const obtenerActionError = () => ({
  type: OBTENER_CALIFICACIONES_ERROR,
  payload: true,
});

/* Agregar calificaciones */
export function agregarCalificacion(calificacion, token) {
  return async (dispatch) => {
    dispatch(CalificacionesAction(calificacion));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.post("/api/calificaciones", calificacion, config);
      dispatch(CalificacionesActionExito());
    } catch (error) {
      console.log(error);
      //dispatch(CalificacionesActionError(error.response.data.msg));
    }
  };
}
const CalificacionesAction = (calificacion) => ({
  type: AGREGAR_CALIFICACIONES,
  payload: calificacion,
});
const CalificacionesActionExito = (calificacion) => ({
  type: AGREGAR_CALIFICACIONES_EXITO,
  payload: calificacion,
});
const CalificacionesActionError = (error) => ({
  type: AGREGAR_CALIFICACIONES_ERROR,
  payload: error,
});
