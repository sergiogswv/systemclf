import { MOSTRAR_MENU, OCULTAR_MENU } from "../types";

/* Actions para el menu */
export const mostrarMenuAction = () => {
  return (dispatch) => {
    dispatch(mostrarMenu());
  };
};
const mostrarMenu = () => ({
  type: MOSTRAR_MENU,
  payload: true,
});
export const ocultarMenuAction = () => {
  return (dispatch) => {
    dispatch(ocultarMenu());
  };
};
const ocultarMenu = () => ({
  type: OCULTAR_MENU,
  payload: false,
});
