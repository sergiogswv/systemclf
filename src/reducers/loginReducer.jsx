import { LOGIN_ERROR, LOGIN_EXITOSO, LOGIN_START } from "../types";

const iniitalState = {
  error: false,
  autenticado: null,
  categoria: null,
};

export default function (state = iniitalState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOGIN_EXITOSO: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        error: false,
        autenticado: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
