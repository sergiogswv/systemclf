import clienteAxios from "../config/axios";
import {
  OBTENER_NUEVA_CUENTA,
  NUEVA_CUENTA_EXITO,
  NUEVA_CUENTA_ERROR,
} from "../types";

export function crearCuenta(usuario) {
  return async (dispatch) => {
    dispatch(crearCuentaAction());
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", usuario);

      dispatch(crearCuentaExito(respuesta.data.token));
    } catch (error) {
      let msg = error.response.data.errores;
      dispatch(crearCuentaError(msg));
    }
  };
}
const crearCuentaAction = () => ({
  type: "OBTENER_NUEVA_CUENTA",
});
const crearCuentaExito = (token) => ({
  type: "NUEVA_CUENTA_EXITO",
  payload: token,
});
const crearCuentaError = (msg) => ({
  type: "NUEVA_CUENTA_ERROR",
  payload: msg,
});
