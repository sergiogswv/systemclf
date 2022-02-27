import {
  /* Types Admins */
  DESCARGAR_ADMINS,
  OBTENER_ADMINS_EXITO,
  OBTENER_ADMINS_ERROR,
  AGREGAR_ADMIN,
  AGREGAR_ADMIN_SUCCESS,
  AGREGAR_ADMIN_ERROR,
  CAMBIAR_STATUS,
  CAMBIAR_STATUS_EXITO,
} from "../types";

const initialState = {
  admins: [],
  cargando: false,
  error: false,
  msg: null,
  agregando: false,
  idEditarStatus: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DESCARGAR_ADMINS:
      return {
        ...state,
        cargando: action.payload,
      };
    case OBTENER_ADMINS_EXITO:
      return {
        ...state,
        cargando: false,
        admins: action.payload,
        error: false,
        msg: null,
      };
    case AGREGAR_ADMIN:
      return {
        ...state,
        agregando: action.payload,
      };
    case AGREGAR_ADMIN_SUCCESS:
      return {
        ...state,
        agregando: false,
        msg: null,
        error: false,
        admins: [...state.admins, action.payload],
      };
    case AGREGAR_ADMIN_ERROR:
    case OBTENER_ADMINS_ERROR:
      return {
        ...state,
        msg: action.payload,
        error: true,
        agregando: false,
      };
    case CAMBIAR_STATUS:
      return {
        ...state,
        idEditarStatus: action.payload,
      };
    case CAMBIAR_STATUS_EXITO:
      return {
        ...state,
        idEditarStatus: action.payload,
        admins: state.admins.map((admin) =>
          admin.id === action.payload.id
            ? [(admin.estatus = !action.payload.estatus)]
            : admin
        ),
      };
    default:
      return state;
  }
}
