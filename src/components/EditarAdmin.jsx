import Layout from "./Layout/Layout";
import { Contenedor, Label, CampoForm } from "./helpers/FormularioHelpers";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Redux */
import { useDispatch, useSelector } from "react-redux";

/* Actions */
import { editarAdminAction } from "../actions/adminActions";

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

const BotonInput = styled.input`
  border-radius: 10px;
  height: 3rem;
  margin-top: 1rem;
  width: 10rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 65%;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--secondary);
  }
  @media (max-width: 768px) {
    margin-left: 40%;
  }
`;

const EditarAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* state local */
  const [admin, setAdmin] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    cuenta: "",
    privilegios: "",
  });

  /* Obtenemos el token del state */
  const token = useSelector((state) => state.token.token);

  /* Estate de Error */
  const [error, setError] = useState(false);
  const errorMsg = useSelector((state) => state.admins.msg);
  const errorReducer = useSelector((state) => state.admins.error);
  /* State de admin a editar */
  const adminEditar = useSelector((state) => state.admins.adminEditar);

  useEffect(() => {
    setAdmin(adminEditar);
  }, [adminEditar]);

  /* Funcion que captura lo que se escribe */
  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  /* Agrega el admin en el state */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que nada este vacio */
    if (
      [
        admin.nombre,
        admin.paterno,
        admin.materno,
        admin.cuenta,
        admin.privilegios,
      ].includes("")
    ) {
      setError(true);
      return null;
    }
    /* Edita el admin con token*/
    dispatch(editarAdminAction(admin, token));

    setError(false);

    /* Alerta de sweetalert */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    /* Redireccionar */
    navigate("/panel");
  };
  return (
    <Layout>
      {/* Contenedor */}
      <Contenedor>
        <h1>Edición de Administradores</h1>
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
              value={admin.nombre}
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
              value={admin.paterno}
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
              value={admin.materno}
            />
          </CampoForm>
          <CampoForm>
            <Label>Cuenta:</Label>
            <Campo
              type="text"
              id="cuenta"
              name="cuenta"
              onChange={(e) => handleChange(e)}
              placeholder="Número de cuenta"
              value={admin.cuenta}
            />
          </CampoForm>
          <CampoForm>
            <Label>Privilegios:</Label>
            {/* Seleccion de Privilegios */}
            <select
              name="privilegios"
              onChange={(e) => handleChange(e)}
              value={admin.privilegios}
            >
              <option>-- Seleccione Privilegios --</option>
              <option value={"R"}>Lectura</option>
              <option value={"RW"}>Lectura y Escritura</option>
            </select>
          </CampoForm>
          {/* Error */}
          {error && <Error errorMsg={"Todos los campos son obligatorios"} />}
          {errorReducer && <Error errorMsg={errorMsg} />}
          {/* Boton de agregar */}
          <BotonInput type="Submit" value="Guardar cambios" />
        </Formulario>
      </Contenedor>
    </Layout>
  );
};

export default EditarAdmin;
