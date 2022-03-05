import Layout from "./Layout/Layout";
import { Contenedor, Label, CampoForm } from "./helpers/FormularioHelpers";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Layout/Error";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editarProf } from "../actions/profActions";

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

const EditarProf = () => {
  /* Usar hook de useNavigate */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* State local para profesor */
  const [profesor, setProfesor] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    cuenta: "",
  });

  /* Extraer el token */
  const token = useSelector((state) => state.token.token);

  /* Extraer el prof a editar */
  const profesorEditar = useSelector((state) => state.profs.profEditar);

  useEffect(() => {
    /* Setear con el profe a editar en el state */
    setProfesor(profesorEditar);
  }, [profesorEditar]);

  /* Estate de Error */
  const [error, setError] = useState(false);
  /* Extraer el error del estate */
  const errorMsg = useSelector((state) => state.profs.msg);

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
    if (
      [
        profesor.nombre,
        profesor.paterno,
        profesor.materno,
        profesor.cuenta,
      ].includes("")
    ) {
      setError(true);

      return null;
    }
    setError(false);
    /* Agregar el profesor */
    /* Action de prof */
    dispatch(editarProf(profesor, token));

    /* Redireccionar */
    /* Alerta de sweetalert */
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El registro fue editado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    /* Redireccionar */
    navigate("/escuela/profesores");
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
                  value={profesor.nombre}
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
                  value={profesor.paterno}
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
                  value={profesor.materno}
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
                  value={profesor.cuenta}
                />
              </CampoForm>

              {error && (
                <Error errorMsg={"Todos los campos son obligatorios"} />
              )}
              {errorMsg && <Error errorMsg={errorMsg} />}
              {/* Boton de agregar */}

              <BotonInput type="Submit" value="Guardar cambios" />
            </Formulario>
          </>
        )}
      </Contenedor>
    </Layout>
  );
};

export default EditarProf;
