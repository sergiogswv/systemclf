import Layout from "./Layout/Layout";
import { Contenedor, Tabla, Boton } from "../components/helpers/ViewHelpers";
import Error from "./Layout/Error";

/* Actions */
import {
  cambiarStatusAction,
  descargarAdminAction,
} from "../actions/adminActions";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Panel = () => {
  const dispatch = useDispatch();

  /* consultar y descargar la lista de admins */
  useEffect(() => {
    dispatch(descargarAdminAction());
  }, [dispatch]);

  /* traer los admins/errores del state */
  const admins = useSelector((state) => state.admins.admins);
  const errorMsg = useSelector((state) => state.admins.msg);

  /* Funcion que cammbia el status */
  const cambiarEstatus = (admin) => {
    dispatch(cambiarStatusAction(admin));
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Administradores</h1>
        {errorMsg ? (
          <Error errorMsg={errorMsg} />
        ) : (
          <Tabla>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Paterno</th>
                <th scope="col">Materno</th>
                <th scope="col">Privilegios</th>
                <th scope="col">Estatus</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada admin */}
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td scope="col">{admin.nombre}</td>
                  <td scope="col">{admin.paterno}</td>
                  <td scope="col">{admin.materno}</td>
                  <td scope="col">{admin.privilegios}</td>
                  <td scope="col">
                    {/* Status */}
                    <button onClick={() => cambiarEstatus(admin)}>
                      {admin.estatus ? "Activo" : "Inactivo"}
                    </button>
                  </td>
                  {/* Botons de acciones */}
                  <td scope="col">
                    <div>
                      <Boton value="Editar" />
                      <Boton value="Eliminar" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Tabla>
        )}
      </Contenedor>
    </Layout>
  );
};

export default Panel;
