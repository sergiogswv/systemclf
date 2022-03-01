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

const initialState = {
  cargando: false,
  error: false,
  msg: null,
  profesors: [],
  profEditar: null,
  profEliminar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DESCARGAR_PROFS:
      return {
        ...state,
        cargando: action.payload,
      };
    case OBTENER_PROFS_SUCCESS:
      return {
        ...state,
        profesors: action.payload,
        cargando: false,
        error: false,
        msg: null,
      };
    case PROF_EDITAR:
    case AGREGAR_PROF:
      return {
        ...state,
      };
    case AGREGAR_PROF_SUCCESS:
      return {
        ...state,
        profesors: [...state, action.payload],
        error: null,
        msg: null,
      };
    case PROF_ELIMINAR_ERROR:
    case PROF_EDITAR_ERROR:
    case OBTENER_PROFS_ERROR:
    case AGREGAR_PROF_ERROR:
      return {
        ...state,
        error: true,
        msg: action.payload,
      };
    case OBTENER_PROF_EDITAR:
      return {
        ...state,
        profEditar: action.payload,
      };
    case PROF_EDITAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        profesors: state.profesors.map((profe) =>
          profe.id === action.payload._id ? (profe = action.payload) : profe
        ),
        profEditar: null,
      };
    case PROF_ELIMINAR:
      return {
        ...state,
        profEliminar: action.payload,
      };
    case PROF_ELIMINAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        profEliminar: null,
        profesors: state.profesors.filter(
          (profe) => profe._id !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
