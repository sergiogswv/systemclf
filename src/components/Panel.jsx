import styled from "@emotion/styled";
import Layout from "./Layout/Layout";
import Error from "./Layout/Error";
import { Contenedor, Tabla, Boton } from "../components/helpers/ViewHelpers";
import Spinner from "../components/helpers/Spinner";

const BotonInput = styled.input`
  border-radius: 5px;
  margin-left: 0.75rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 1rem;
  height: 2rem;
`;

/* Actions */
import {
  editarAdmin,
  descargarAdminAction,
  eliminarAdminAction,
} from "../actions/adminActions";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);

  const cargando = useSelector((state) => state.admins.cargando);

  /* consultar y descargar la lista de admins */
  useEffect(() => {
    dispatch(descargarAdminAction(token));
  }, [dispatch]);

  /* traer los admins/errores del state */
  const admins = useSelector((state) => state.admins.admins);
  const errorMsg = useSelector((state) => state.admins.msg);

  /* Funcion que edita admin */
  const editarAdminFn = (admin) => {
    dispatch(editarAdmin(admin, token));
    navigate(`/panel/editar/${admin._id}`);
  };

  /* Funcion que elimina admin */
  const eliminarAdminFn = (admin) => {
    dispatch(eliminarAdminAction(admin, token));
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Administradores</h1>
        {token === null ? (
          navigate("/")
        ) : cargando ? (
          <Spinner />
        ) : errorMsg ? (
          <Error errorMsg={errorMsg} />
        ) : (
          <Tabla>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Paterno</th>
                <th scope="col">Materno</th>
                <th scope="col">Privilegios</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada admin */}
              {admins.map((admin) => (
                <tr key={admin._id}>
                  <td scope="col">{admin.nombre}</td>
                  <td scope="col">{admin.paterno}</td>
                  <td scope="col">{admin.materno}</td>
                  <td scope="col">
                    {admin.privilegios === "R"
                      ? "Lectura"
                      : "Lectura y Escritura"}
                  </td>
                  {/* Botons de acciones */}
                  <td scope="col">
                    <BotonInput
                      value="Editar"
                      type="submit"
                      onClick={() => editarAdminFn(admin)}
                    ></BotonInput>
                    <BotonInput
                      value="Eliminar"
                      type="submit"
                      onClick={() => eliminarAdminFn(admin._id)}
                    ></BotonInput>
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
