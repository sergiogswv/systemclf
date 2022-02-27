/* Types */
import {
  /* TYPES DE ADMINS */
  DESCARGAR_ADMINS,
  OBTENER_ADMINS_EXITO,
  OBTENER_ADMINS_ERROR,
  AGREGAR_ADMIN,
  AGREGAR_ADMIN_SUCCESS,
  AGREGAR_ADMIN_ERROR,
  CAMBIAR_STATUS,
  CAMBIAR_STATUS_EXITO,
} from "../types";

import clienteAxios from "../config/axios";

/* Actions de admins */
/* Obtener administradores actuales */
export const descargarAdminAction = () => {
  return async (dispatch) => {
    dispatch(obtenerAdmins());
    try {
      const respuesta = await clienteAxios.get("/api/admins");
      dispatch(obtenerAdminsExito(respuesta.data));
    } catch (error) {
      const msg = "Hubo un error, no se puede obtener la información";
      dispatch(obtenerAdminsError(msg));
      console.log(error);
    }
  };
};
const obtenerAdmins = () => ({
  type: DESCARGAR_ADMINS,
  payload: true,
});
const obtenerAdminsExito = (admins) => ({
  type: OBTENER_ADMINS_EXITO,
  payload: admins,
});
const obtenerAdminsError = (msg) => ({
  type: OBTENER_ADMINS_ERROR,
  payload: msg,
});

/* agregar un nuevo admin */

export function agregarAdmin(nuevoadmin) {
  return async (dispatch) => {
    dispatch(agregarAdminAction());
    try {
      //await clienteAxios.post("/admins", nuevoadmin);
      dispatch(agregarAdminExito(nuevoadmin));
    } catch (error) {
      let msg = "No se pudo agregar el nuevo administrador";
      dispatch(agregarAdminError(msg));
    }
  };
}
const agregarAdminAction = () => ({
  type: AGREGAR_ADMIN,
  payload: true,
});
const agregarAdminExito = (nuevoadmin) => ({
  type: AGREGAR_ADMIN_SUCCESS,
  payload: nuevoadmin,
});
const agregarAdminError = (msg) => ({
  type: AGREGAR_ADMIN_ERROR,
  payload: msg,
});

/* Cambiar status de admins */
export function cambiarStatusAction(admin) {
  return async (dispatch) => {
    dispatch(cambiarStatus(admin));
    try {
      // await clienteAxios.put(`/admins/${admin.id}`, admin);
      dispatch(cambiarStatusExito(admin));
    } catch (error) {
      console.log(error);
    }
  };
}
const cambiarStatus = (admin) => ({
  type: CAMBIAR_STATUS,
  payload: admin,
});
const cambiarStatusExito = (admin) => ({
  type: CAMBIAR_STATUS_EXITO,
  payload: admin,
});
