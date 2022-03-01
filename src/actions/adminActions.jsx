/* Types */
import {
  /* TYPES DE ADMINS */
  DESCARGAR_ADMINS,
  OBTENER_ADMINS_EXITO,
  OBTENER_ADMINS_ERROR,
  AGREGAR_ADMIN,
  AGREGAR_ADMIN_SUCCESS,
  AGREGAR_ADMIN_ERROR,
  OBTENER_ADMIN_EDITAR,
  ADMIN_EDITAR_EXITO,
  ADMIN_EDITAR_ERROR,
  ADMIN_EDITAR,
  ADMIN_ELIMINAR,
  ADMIN_ELIMINAR_EXITO,
  ADMIN_ELIMINAR_ERROR,
  OCULTAR_ALERTA,
} from "../types";

import clienteAxios from "../config/axios";

/* Actions de admins */
/* Obtener administradores actuales */

export const descargarAdminAction = (token) => {
  return async (dispatch) => {
    dispatch(obtenerAdmins());
    setTimeout(async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": token,
          },
        };
        const respuesta = await clienteAxios("/api/admins", config);
        dispatch(obtenerAdminsExito(respuesta.data.admins));
      } catch (error) {
        const msg = "Hubo un error, no se puede obtener la información";
        dispatch(obtenerAdminsError(msg));
      }
    }, 2000);
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

export function agregarAdmin(nuevoadmin, token) {
  return async (dispatch) => {
    dispatch(agregarAdminAction());
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      };
      await clienteAxios.post("/api/admins", nuevoadmin, config);
      dispatch(agregarAdminExito(nuevoadmin));
    } catch (error) {
      console.log(error.response);
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

/* Obtener el admin a editar */
export function editarAdmin(admin) {
  return (dispatch) => {
    dispatch(editarAdminState(admin));
  };
}
const editarAdminState = (admin) => ({
  type: OBTENER_ADMIN_EDITAR,
  payload: admin,
});

/* Editar el admin */
export function editarAdminAction(admin, token) {
  return async (dispatch) => {
    console.log(admin);
    dispatch(editarAdminInit());
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      };
      await clienteAxios.put(`/api/admins/${admin._id}`, admin, config);
      dispatch(editarAdminExito(admin));
    } catch (error) {
      let errorMsg = "Hubo un error";
      dispatch(editarAdminError(errorMsg));
    }
  };
}
const editarAdminInit = () => ({
  type: ADMIN_EDITAR,
});
const editarAdminExito = (admin) => ({
  type: ADMIN_EDITAR_EXITO,
  payload: admin,
});

const editarAdminError = (errorMsg) => ({
  type: ADMIN_EDITAR_ERROR,
  payload: errorMsg,
});

/* Eliminar un admin */

export function eliminarAdminAction(adminId, token) {
  return async (dispatch) => {
    dispatch(eliminarAdmin(adminId));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };
    try {
      await clienteAxios.delete(`/api/admins/${adminId}`, config);
      dispatch(eliminarAdminExito(adminId));
    } catch (error) {
      console.log(error.response);
      let errorMsg = "Hubo un error al eliminar el administrador";
      dispatch(eliminarAdminError(errorMsg));
      setTimeout(() => {
        dispatch(ocultarAlerta());
      }, 2000);
    }
  };
}
const eliminarAdmin = (adminId) => ({
  type: ADMIN_ELIMINAR,
  payload: adminId,
});
const eliminarAdminExito = (adminId) => ({
  type: ADMIN_ELIMINAR_EXITO,
  payload: adminId,
});
const eliminarAdminError = (errorMsg) => ({
  type: ADMIN_EDITAR_ERROR,
  payload: errorMsg,
});
const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
  payload: false,
});
