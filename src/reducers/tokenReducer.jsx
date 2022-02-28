import { VERIFICAR_TOKEN, TOKEN_EXISTE, TOKEN_NO_EXISTE } from "../types";

const initialState = {
  verificando: false,
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VERIFICAR_TOKEN:
      return {
        ...state,
        verificando: action.payload,
      };
    case TOKEN_EXISTE:
    case TOKEN_NO_EXISTE:
      return {
        ...state,
        verificando: false,
        token: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
