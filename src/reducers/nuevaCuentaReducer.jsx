import {
  OBTENER_NUEVA_CUENTA,
  NUEVA_CUENTA_EXITO,
  NUEVA_CUENTA_ERROR,
} from "../types";

const initialState = {
  cargando: null,
  error: null,
  cuentaNueva: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_NUEVA_CUENTA:
      return {
        ...state,
        cargando: true,
      };
    case NUEVA_CUENTA_EXITO:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        cargando: null,
        error: null,
        cuentaNueva: true,
      };
    case NUEVA_CUENTA_ERROR:
      return {
        ...state,
        cargando: null,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
