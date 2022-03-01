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
    default:
      return {
        ...state,
      };
  }
}
