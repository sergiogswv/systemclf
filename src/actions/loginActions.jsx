import { LOGIN_START, LOGIN_EXITOSO, LOGIN_ERROR } from "../types";

import clienteAxios from "../config/axios";

/* Actiones de login */
export const loginAction = (datos) => {
  return async (dispatch) => {
    dispatch(login());
    try {
      /* extraemos el token */
      const respuesta = await clienteAxios.post("/api/auth", datos.usuario);
      dispatch(loginExitoso(respuesta.data.token));
    } catch (error) {
      console.log(error);
      let errorMsg;
      if (!error.response.data.errores) {
        errorMsg = error.response.data;
        dispatch(loginError([errorMsg]));
      } else {
        errorMsg = error.response.data.errores;
        dispatch(loginError(errorMsg));
      }
    }
  };
};
const login = () => ({
  type: LOGIN_START,
});
const loginExitoso = (token) => ({
  type: LOGIN_EXITOSO,
  payload: token,
});
const loginError = (errorMsg) => ({
  type: LOGIN_ERROR,
  payload: errorMsg,
});
