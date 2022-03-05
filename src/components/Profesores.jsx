/* React */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* css / helpers / imagenes */
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";
import Spinner from "../components/helpers/Spinner";
import Layout from "./Layout/Layout";
import Profesor from "./Profesor";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { descargarProfAction } from "../actions/profActions";

const Profesores = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.profs.msg);
  const cargando = useSelector((state) => state.profs.cargando);
  const profesors = useSelector((state) => state.profs.profesors);

  /* consultar y descargar la lista de admins */
  useEffect(() => {
    dispatch(descargarProfAction(token));
  }, []);

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Profesores</h1>
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
                <th scope="col">Número de cuenta</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada profesor */}
              {profesors.map((profesor) => (
                <Profesor profesor={profesor} key={profesor._id} />
              ))}
            </tbody>
          </Tabla>
        )}
      </Contenedor>
    </Layout>
  );
};

export default Profesores;
