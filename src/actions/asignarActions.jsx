import {
  AGREGAR_ASIGNACION,
  AGREGAR_ASIGNACION_EXITO,
  AGREGAR_ASIGNACION_ERROR,
  AGREGAR_ASIGNACION_ERRORES,
} from "../types";

import clienteAxios from "../config/axios";

/* Action para asignar materias a prof */
export function agregarAsignacion(materia, token) {
  return async (dispatch) => {
    dispatch(asignacionAction(materia));
    setTimeout(async () => {
      //console.log(materia);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": token,
          },
        };
        await clienteAxios.post("/api/asignacion", materia, config);
        dispatch(asignacionExito());
      } catch (error) {
        let errorMsg = error.response.data.msg;
        if (errorMsg) {
          dispatch(asignacionError(errorMsg));
        } else {
          errorMsg = error.response.data.errores[0].msg;
          dispatch(asignacionErrores(errorMsg));
        }
      }
    }, 2000);
  };
}
const asignacionAction = (materia) => ({
  type: AGREGAR_ASIGNACION,
  payload: materia,
});
const asignacionExito = () => ({
  type: AGREGAR_ASIGNACION_EXITO,
});
const asignacionError = (errorMsg) => ({
  type: AGREGAR_ASIGNACION_ERROR,
  payload: errorMsg,
});
const asignacionErrores = (errorMsg) => ({
  type: AGREGAR_ASIGNACION_ERRORES,
  payload: errorMsg,
});
