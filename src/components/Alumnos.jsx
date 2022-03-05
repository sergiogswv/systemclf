/* Css/helpers/layout */
import Layout from "./Layout/Layout";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";
import Spinner from "../components/helpers/Spinner";
import Error from "./Layout/Error";
import Alumno from "./Alumno";

/* Redux/react */
import { useDispatch, useSelector } from "react-redux";
import { obtenerAlumnos } from "../actions/alumnoActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Alumnos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);
  const errorMsg = useSelector((state) => state.alumnos.msg);
  const cargando = useSelector((state) => state.alumnos.cargando);

  useEffect(() => {
    dispatch(obtenerAlumnos(token));
  }, []);

  const alumnos = useSelector((state) => state.alumnos.alumnos);

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Alumnos</h1>
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
                <th scope="col">Grado</th>
                <th scope="col">Cuenta</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Iteracion por cada admin */}
              {alumnos.map((alumno) => (
                <Alumno alumno={alumno} key={alumno._id} />
              ))}
            </tbody>
          </Tabla>
        )}
      </Contenedor>
    </Layout>
  );
};

export default Alumnos;
