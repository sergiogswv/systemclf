import Layout from "./Layout/Layout";
import {
  Contenedor,
  Boton,
  Label,
  CampoForm,
} from "./helpers/FormularioHelpers";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Redux */
import { useDispatch, useSelector } from "react-redux";

/* Actions */
import { agregarAdmin } from "../actions/adminActions";

/* Estilos de formulario */
const Formulario = styled.form`
  display: block;
  width: 100%;
`;
/* Estilos de Campos */
const Campo = styled.input`
  border-radius: 10px;
  height: 2rem;
`;

const FormularioAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Estate de Error */
  const [error, setError] = useState(false);
  const errorMsg = useSelector((state) => state.admins.msg);
  const errorReducer = useSelector((state) => state.admins.error);
  console.log(errorReducer);

  /* state local */
  const [admin, setAdmin] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    correo: "",
    privilegios: "",
  });

  /* Destruturing de los admin  */
  const { nombre, paterno, materno, correo, privilegios } = admin;

  /* Funcion que captura lo que se escribe */
  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const agregarAdminSubmit = (admin) => dispatch(agregarAdmin(admin));

  /* Agrega el profesor en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if ([nombre, paterno, materno, correo, privilegios].includes("")) {
      setError(true);
      return null;
    }

    /* Agregar el profesor */
    agregarAdminSubmit(admin);

    setError(false);
    /* Redireccionar */
    setTimeout(() => {
      navigate("/panel");
    }, 3000);
  };
  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Alta de Administradores</h1>
        {/* Formulario de admin */}
        <Formulario onSubmit={handleSubmit}>
          <CampoForm>
            <Label>Nombre:</Label>
            <Campo
              type="text"
              id="nombre"
              name="nombre"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido paterno:</Label>
            <Campo
              type="text"
              id="paterno"
              name="paterno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido paterno"
            />
          </CampoForm>
          <CampoForm>
            <Label>Apellido materno:</Label>
            <Campo
              type="text"
              id="materno"
              name="materno"
              onChange={(e) => handleChange(e)}
              placeholder="Apellido Materno"
            />
          </CampoForm>
          <CampoForm>
            <Label>Correo:</Label>
            <Campo
              type="email"
              id="correo"
              name="correo"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />
          </CampoForm>
          <CampoForm>
            <Label>Privilegios:</Label>
            {/* Seleccion de Privilegios */}
            <select name="privilegios" onChange={(e) => handleChange(e)}>
              <option>-- Seleccione Privilegios --</option>
              <option value={"R"}>Lectura</option>
              <option value={"RW"}>Lectura y Escritura</option>
            </select>
          </CampoForm>
          {/* Error */}
          {error && <Error errorMsg={"Todos los campos son obligatorios"} />}
          {errorReducer && <Error errorMsg={errorMsg} />}
          {/* Boton de agregar */}
          <Boton value="Agregar">
            <input type="Submit" />
          </Boton>
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default FormularioAdmin;
