import {
  AGREGAR_ASIGNACION,
  AGREGAR_ASIGNACION_EXITO,
  AGREGAR_ASIGNACION_ERROR,
  AGREGAR_ASIGNACION_ERRORES,
} from "../types";

const initialState = {
  materiaAsignar: null,
  cargando: false,
  error: false,
  msg: null,
  msgs: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_ASIGNACION:
      return {
        ...state,
        cargando: true,
        error: false,
        msg: null,
        materiaAsignar: action.payload,
      };
    case AGREGAR_ASIGNACION_ERROR:
      return {
        ...state,
        error: true,
        msg: action.payload,
        msgs: null,
        cargando: false,
      };
    case AGREGAR_ASIGNACION_ERRORES:
      return {
        ...state,
        error: true,
        msg: null,
        msgs: action.payload,
        cargando: false,
      };
    case AGREGAR_ASIGNACION_EXITO:
      return {
        ...state,
        cargando: false,
        error: false,
        msg: null,
        materiaAsignar: null,
      };
    default:
      return {
        ...state,
      };
  }
}
