import {
  /* Types Admins */
  DESCARGAR_ADMINS,
  OBTENER_ADMINS_EXITO,
  OBTENER_ADMINS_ERROR,
  AGREGAR_ADMIN,
  AGREGAR_ADMIN_SUCCESS,
  AGREGAR_ADMIN_ERROR,
  OBTENER_ADMIN_EDITAR,
  ADMIN_EDITAR,
  ADMIN_EDITAR_EXITO,
  ADMIN_EDITAR_ERROR,
  ADMIN_ELIMINAR,
  ADMIN_ELIMINAR_EXITO,
  ADMIN_ELIMINAR_ERROR,
  OCULTAR_ALERTA,
} from "../types";

const initialState = {
  admins: [],
  cargando: false,
  error: false,
  msg: null,
  agregando: false,
  adminEditar: null,
  adminEliminar: null,
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
    case ADMIN_EDITAR_ERROR:
      return {
        ...state,
        msg: action.payload,
        error: true,
        agregando: false,
      };
    case OBTENER_ADMIN_EDITAR:
      return {
        ...state,
        adminEditar: action.payload,
      };
    case ADMIN_EDITAR:
      return {
        ...state,
      };

    case ADMIN_EDITAR_EXITO:
      return {
        ...state,
        adminEditar: null,
        admins: state.admins.map((admin) =>
          admin.id === action.payload._id ? (admin = action.payload) : admin
        ),
      };
    /* casos de eliminar */
    case ADMIN_ELIMINAR:
      return {
        ...state,
        adminEliminar: action.payload,
      };
    case ADMIN_ELIMINAR_EXITO:
      return {
        ...state,
        adminEliminar: null,
        admins: state.admins.filter((admin) => admin._id !== action.payload),
      };
    case ADMIN_ELIMINAR_ERROR:
      return {
        ...state,
        error: true,
        msg: action.payload,
        adminEliminar: null,
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        error: action.payload,
        msg: null,
      };
    default:
      return state;
  }
}
