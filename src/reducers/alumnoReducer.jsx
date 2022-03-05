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

const initialState = {
  alumnos: [],
  alumnoEliminar: null,
  alumnoEditar: null,
  msg: null,
  error: null,
  cargando: null,
  alumnoCalificar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALUMNO_EDITAR:
    case AGREGAR_ALUMNO:
    case DESCARGAR_ALUMNOS:
      return {
        ...state,
        alumnos: [],
        alumnoEliminar: null,
        alumnoEditar: null,
        msg: null,
        error: null,
        cargando: true,
        alumnoCalificar: null,
      };
    case ALUMNO_ELIMINAR_ERROR:
    case ALUMNO_EDITAR_ERROR:
    case AGREGAR_ALUMNO_ERROR:
    case OBTENER_ALUMNOS_ERROR:
      return {
        ...state,
        error: true,
        msg: action.payload,
        alumnoCalificar: null,
      };
    case OBTENER_ALUMNOS_SUCCESS:
      return {
        ...state,
        cargando: false,
        error: false,
        msg: null,
        alumnos: action.payload,
      };
    case AGREGAR_ALUMNO_SUCCESS:
      return {
        ...state,
        cargando: false,
        error: null,
        msg: null,
        alumnos: [...state.alumnos, action.payload],
      };
    case OBTENER_ALUMNO_EDITAR:
      return {
        ...state,
        alumnoEditar: action.payload,
      };
    case ALUMNO_EDITAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        cargando: false,
        alumnoEditar: null,
        alumnos: state.alumnos.map((alumno) =>
          alumno._id === action.payload._id ? (alumno = action.payload) : alumno
        ),
      };
    case ALUMNO_ELIMINAR:
      return {
        ...state,
        alumnoEliminar: action.payload,
      };
    case ALUMNO_ELIMINAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        alumnoEliminar: null,
        alumnos: state.alumnos.filter(
          (alumno) => alumno._id !== action.payload._id
        ),
      };
    case OBTENER_ALUMNOS_CALIFICAR:
      return {
        ...state,
        alumnoCalificar: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
