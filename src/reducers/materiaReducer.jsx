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

const initialState = {
  cargando: false,
  error: false,
  msg: null,
  materias: [],
  materiaEditar: null,
  materiaEliminar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MATERIA_EDITAR:
    case AGREGAR_MATERIA:
    case DESCARGAR_MATERIAS:
      return {
        ...state,
        cargando: true,
      };
    case OBTENER_MATERIAS_SUCCESS:
      return {
        ...state,
        materias: action.payload,
        error: false,
        cargando: false,
        msg: false,
      };
    case MATERIA_EDITAR_ERROR:
    case MATERIA_ELIMINAR_ERROR:
    case AGREGAR_MATERIA_ERROR:
    case OBTENER_MATERIAS_ERROR:
      return {
        ...state,
        msg: action.payload,
        error: true,
      };
    case AGREGAR_MATERIA_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        cargando: false,
        materias: [...state.materias, action.payload],
      };
    case OBTENER_MATERIA_EDITAR:
      return {
        ...state,
        materiaEditar: action.payload,
      };
    case MATERIA_EDITAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        cargando: false,
        materiaEditar: null,
        materias: state.materias.map((materia) =>
          materia._id === action.payload._id
            ? (materia = action.payload)
            : materia
        ),
      };
    case MATERIA_ELIMINAR:
      return {
        ...state,
        materiaEliminar: action.payload,
      };
    case MATERIA_ELIMINAR_SUCCESS:
      return {
        ...state,
        error: null,
        msg: null,
        materiaEliminar: null,
        materias: state.materias.filter(
          (materia) => materia._id !== action.payload._id
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
