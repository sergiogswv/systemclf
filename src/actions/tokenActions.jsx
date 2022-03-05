import {
  VERIFICAR_TOKEN,
  TOKEN_EXISTE,
  TOKEN_NO_EXISTE,
  ELIMINAR_TOKEN,
} from "../types";

export function verificarTokenAction(token) {
  return (dispatch) => {
    dispatch(verificarToken());
    if (token !== "") {
      dispatch(tokenExiste(token));
    } else {
      dispatch(tokenNoExiste());
    }
  };
}
const verificarToken = () => ({
  type: VERIFICAR_TOKEN,
  payload: true,
});
const tokenExiste = (token) => ({
  type: TOKEN_EXISTE,
  payload: token,
});
const tokenNoExiste = () => ({
  type: TOKEN_NO_EXISTE,
  payload: null,
});

/* Quitar Token */
export function eliminarTokenAction(token) {
  return (dispatch) => {
    dispatch(eliminarToken());
  };
}
const eliminarToken = () => ({
  type: ELIMINAR_TOKEN,
  payload: true,
});
