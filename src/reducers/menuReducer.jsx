import { MOSTRAR_MENU, OCULTAR_MENU } from "../types";
const initialState = {
  mostrar: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_MENU:
      return {
        ...state,
        mostrar: action.payload,
      };
    case OCULTAR_MENU:
      return {
        ...state,
        mostrar: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
