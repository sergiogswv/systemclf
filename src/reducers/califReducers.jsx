/* Types */
import {
  AGREGAR_CALIFICACIONES,
  AGREGAR_CALIFICACIONES_EXITO,
  AGREGAR_CALIFICACIONES_ERROR,
  OBTENER_CALIFICACIONES,
  OBTENER_CALIFICACIONES_EXITO,
  OBTENER_CALIFICACIONES_ERROR,
} from "../types";

const initialState = {
  descargando: null,
  cargando: null,
  error: null,
  msg: null,
  calificaciones: [],
  calificacionNueva: null,
  agregado: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_CALIFICACIONES:
      return {
        ...state,
        descargando: true,
        cargando: null,
        error: null,
        msg: null,
        calificacionNueva: null,
      };
    case AGREGAR_CALIFICACIONES:
      return {
        ...state,
        descargando: null,
        cargando: true,
        error: null,
        msg: null,
        calificacionNueva: action.payload,
      };
    case AGREGAR_CALIFICACIONES_EXITO:
      return {
        ...state,
        cargando: null,
        error: null,
        msg: null,
        calificacionNueva: null,
        agregado: true,
        calificaciones: [...state.calificaciones, action.payload],
      };
    case OBTENER_CALIFICACIONES_ERROR:
    case AGREGAR_CALIFICACIONES_ERROR:
      return {
        ...state,
        cargando: null,
        error: true,
        msg: action.payload,
        calificacionNueva: null,
      };
    case OBTENER_CALIFICACIONES_EXITO:
      return {
        ...state,
        error: null,
        msg: null,
        descargando: null,
        calificaciones: action.payload,
      };
    default:
      return { ...state };
  }
}
