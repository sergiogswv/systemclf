import { useState } from "react";
import styled from "@emotion/styled";
import Delete from "../public/img/delete.svg";
import Edit from "../public/img/edit.svg";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla } from "../components/helpers/ViewHelpers";

const Accion = styled.img`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-top: auto;
`;
const Informacion = styled.div`
  display: grid;
  grid-template-columns: 45% 20% 30%;
  margin-left: 1.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Calificaciones = () => {
  /* State local de administradores */
  const materias = [
    {
      nombre: "Materia #1",
      id: 1,
      semestre: "2",
      clave: "123",
      creditos: "2",
      opcion: "obligatoria",
      calificacion: "10",
    },
    {
      nombre: "Materia #2",
      id: 2,
      semestre: "3",
      clave: "52",
      creditos: "3",
      opcion: "opcional",
      calificacion: "10",
    },
    {
      nombre: "Materia #3",
      id: 3,
      semestre: "1",
      clave: "43",
      creditos: "4",
      opcion: "opcional",
      calificacion: "10",
    },
    {
      nombre: "Materia #4",
      id: 4,
      semestre: "5",
      clave: "543",
      creditos: "1",
      opcion: "obligatoria",
      calificacion: "10",
    },
  ];

  const [activar, setActivar] = useState(false);
  /* Funcion que cammbia el status */
  const cambiarEstatus = (id) => {
    console.log(id);
  };

  const editarAlumno = () => {
    console.log("editando");
  };
  const eliminarAlumno = () => {
    console.log("eliminando");
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Calificaciones</h1>
        <Informacion>
          <p>Nombre:</p>
          <p>Promedio:</p>
          <p>Total de Creditos (%):</p>
        </Informacion>
        <Tabla>
          <thead>
            <tr>
              <th scope="col">Materia</th>
              <th scope="col">Semestre</th>
              <th scope="col">Creditos</th>
              <th scope="col">Opción</th>
              <th scope="col">Calificación</th>
              <th scope="col">Clave</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteracion por cada admin */}
            {materias.map((materia) => (
              <tr key={materia.id}>
                <td scope="col">{materia.nombre}</td>
                <td scope="col">{materia.semestre}</td>
                <td scope="col">{materia.creditos}</td>
                <td scope="col">{materia.opcion}</td>
                <td scope="col">{materia.calificacion}</td>
                <td scope="col">{materia.clave}</td>
                <td scope="col">
                  {/* Acciones */}
                  <Accion alt="" src={Edit} onClick={() => editarAlumno()} />
                  <Accion
                    alt=""
                    src={Delete}
                    onClick={() => eliminarAlumno()}
                  />
                </td>
                {/* Botons de acciones */}
              </tr>
            ))}
          </tbody>
        </Tabla>
      </Contenedor>
    </Layout>
  );
};

export default Calificaciones;
