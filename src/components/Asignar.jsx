import { useSelector, useDispatch } from "react-redux";
import { descargarMateriasFilterAction } from "../actions/materiasActions";
import { useEffect, useState } from "react";
import { agregarAsignacion } from "../actions/asignarActions";
import styled from "@emotion/styled";
import { SpinnerPequeño } from "../components/helpers/Spinner";
import Error from "./Layout/Error";

const Titulo = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  color: var(--secondary);
  margin: 0;
`;
const Asignacion = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45% 10%;
  padding-bottom: 25px;
`;
const LabelText = styled.label`
  margin-top: auto;
`;
const CampoFormStyle = styled.div`
  display: grid;
  grid-template-columns: 25% 60%;
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-left: 10%;
`;
const BotonInput = styled.input`
  border-radius: 10px;
  height: 2rem;
  width: 5rem;
  background-color: var(--secondary);
  border: none;
  text-align: center;
  color: var(--blanco);
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;

  transform: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: var(--blanco);
    color: var(--secondary);
  }
`;

const Asignar = ({ profesorId, setActivarAsignar }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  /* state local */
  const [seleccionGrado, setSeleccionGrado] = useState(0);
  const [materiaAsignar, setMateriaAsignar] = useState({
    idProfesor: profesorId,
    idMateria: "",
    uid: "",
  });
  const [alerta, setAlerta] = useState(false);
  const errorReducer = useSelector((state) => state.asignar.error);
  const msg = useSelector((state) => state.asignar.msg);
  const msgs = useSelector((state) => state.asignar.msgs);

  useEffect(() => {
    if (seleccionGrado > 0) {
      dispatch(descargarMateriasFilterAction(token, seleccionGrado));
    }
  }, [seleccionGrado]);

  useEffect(() => {
    setMateriaAsignar({
      ...materiaAsignar,
      uid:
        materiaAsignar.idMateria.slice(0, 7) +
        materiaAsignar.idProfesor.slice(0, 7),
    });
  }, [materiaAsignar.idMateria]);

  useEffect(() => {
    if (errorReducer) {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
    }
  }, [errorReducer]);

  const materias = useSelector((state) => state.materias.materias);

  const grados = [
    { id: 1, nombre: "1" },
    { id: 2, nombre: "2" },
    { id: 3, nombre: "3" },
    { id: 4, nombre: "4" },
    { id: 5, nombre: "5" },
    { id: 6, nombre: "6" },
    { id: 7, nombre: "7" },
    { id: 8, nombre: "8" },
    { id: 9, nombre: "9" },
  ];

  const cargando = useSelector((state) => state.materias.cargando);
  /* State local para profesor */
  /* const [materia, setMateria] = useState({
    grado: "",
  }); */

  const handleChange = (e) => {
    setSeleccionGrado(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validar que se elija un grado  */
    if (seleccionGrado === 0 || materiaAsignar.idMateria === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 3000);
      return null;
    }

    /* Agregar la materia asimateriaAsignargnada */
    dispatch(agregarAsignacion(materiaAsignar, token));
    if (errorReducer) {
      console.log(errorReducer);
      return null;
    }
    setTimeout(() => {
      /* Alerta de sweetalert */
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se asigno la materia correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      /* ocultar asignar */
      setActivarAsignar(false);
    }, 2000);
  };

  return (
    <div>
      <Titulo>Asignar Materias</Titulo>
      {/* Formulario para asignar materias */}
      <Asignacion onSubmit={handleSubmit}>
        <div>
          {/* Grados */}
          <CampoFormStyle>
            <LabelText>Grado: </LabelText>
            <select onChange={(e) => handleChange(e)} name="grado">
              <option value="">-- Seleccione Grado --</option>
              {/* Iteracion de cada Grado */}
              {grados.map((grado) => (
                <option key={grado.id}>{grado.nombre}</option>
              ))}
            </select>
          </CampoFormStyle>
        </div>
        <div>
          <CampoFormStyle>
            <LabelText>Materia:</LabelText>
            <select
              onChange={(e) =>
                setMateriaAsignar({
                  ...materiaAsignar,
                  [e.target.name]: e.target.value,
                })
              }
              name="idMateria"
            >
              <option value="">-- Seleccione Materia --</option>
              {/* Iteracion de cada Grado */}
              {!cargando
                ? materias.map((materia) => (
                    <option key={materia._id} value={materia._id}>
                      {materia.nombre}
                    </option>
                  ))
                : null}
            </select>
          </CampoFormStyle>
        </div>
        <div>
          {cargando ? (
            <SpinnerPequeño />
          ) : (
            <BotonInput value="Asignar" type="submit" />
          )}
        </div>
      </Asignacion>
      {alerta ? (
        msg ? (
          <Error errorMsg={msg} />
        ) : msgs ? (
          <Error errorMsg={msgs} />
        ) : (
          <Error errorMsg={"Elija un grado y materia"} />
        )
      ) : null}
    </div>
  );
};

export default Asignar;
