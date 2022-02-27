import { LOGIN_START, LOGIN_EXITOSO, LOGIN_ERROR } from "../types";

import clienteAxios from "../config/axios";

/* Actiones de login */
export const loginAction = (datos) => {
  return async (dispatch) => {
    dispatch(login());
    try {
      if (!datos) {
        dispatch(loginError());
      }
      const token = await clienteAxios.post("/api/auth", datos);
      console.log(token);
    } catch (error) {
      console.log(error);
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
const loginError = () => ({
  type: LOGIN_ERROR,
  payload: true,
});
