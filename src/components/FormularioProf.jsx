import Layout from "./Layout/Layout";
import {
  Contenedor,
  Label,
  CampoForm,
  Boton,
} from "./helpers/FormularioHelpers";
import { useState } from "react";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { crearProfesor } from "../actions/profActions";

/* Estilos de Campos */
const Campoinput = styled.input`
  border-radius: 10px;
  height: 2rem;
`;
/* Estilos de formulario */
const Formulario = styled.form`
  display: block;
  width: 100%;
`;

const FormularioProf = () => {
  /* Usar hook de useNavigate */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* Extraer el token */
  const token = useSelector((state) => state.token.token);

  /* State local para profesor */
  const [profesor, setProfesor] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    cuenta: "",
  });
  /* Estate de Error */
  const [error, setError] = useState(false);
  /* Extraer el error del estate */
  const errorMsg = useSelector((state) => state.profs.msg);

  /* Destructuring profesor */
  const { nombre, paterno, materno, cuenta } = profesor;
  /* Agrega lo escrito en el state */
  const handleChange = (e) => {
    setProfesor({
      ...profesor,
      [e.target.name]: e.target.value,
    });
  };
  /* Agrega el profesor en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, cuenta].includes("")) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */
    /* Action de prof */
    dispatch(crearProfesor(profesor, token));

    /* Alerta de sweetalert */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    /* Redireccionar */
    setTimeout(() => {
      navigate("/escuela/profesores");
    }, 1500);
  };

  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Profesores</h1>
        {token === null ? (
          navigate("/")
        ) : (
          <>
            {/* Formulario */}
            <Formulario onSubmit={handleSubmit}>
              <CampoForm>
                <Label>Nombre:</Label>
                <Campoinput
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={(e) => handleChange(e)}
                  placeholder="Nombre"
                />
              </CampoForm>
              <CampoForm>
                <Label>Apellido paterno:</Label>
                <Campoinput
                  type="text"
                  id="paterno"
                  name="paterno"
                  onChange={(e) => handleChange(e)}
                  placeholder="Apellido Paterno"
                />
              </CampoForm>
              <CampoForm>
                <Label>Apellido materno:</Label>
                <Campoinput
                  type="text"
                  id="materno"
                  name="materno"
                  onChange={(e) => handleChange(e)}
                  placeholder="Apellido Materno"
                />
              </CampoForm>
              <CampoForm>
                <Label>Cuenta:</Label>
                <Campoinput
                  type="text"
                  id="cuenta"
                  name="cuenta"
                  onChange={(e) => handleChange(e)}
                  placeholder="Número de cuenta"
                />
              </CampoForm>

              {error && (
                <Error errorMsg={"Todos los campos son obligatorios"} />
              )}
              {errorMsg && <Error errorMsg={errorMsg} />}
              {/* Boton de agregar */}
              <Boton value="Agregar">
                <input type="Submit" />
              </Boton>
            </Formulario>
          </>
        )}
      </Contenedor>
    </Layout>
  );
};

export default FormularioProf;
