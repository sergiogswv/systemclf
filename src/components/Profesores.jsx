import styled from "@emotion/styled";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla, Boton } from "../components/helpers/ViewHelpers";
import { useState } from "react";

const Profesores = () => {
  /* State local de administradores */
  const [profesores, setProfesores] = useState([
    {
      nombre: "Sergio",
      paterno: "Guadarrama",
      materno: "Santillán",
      id: 1,
      categoria: "1000",
      estatus: false,
    },
    {
      nombre: "Emily",
      paterno: "Guadarrama",
      materno: "Payan",
      id: 2,
      categoria: "1000",
      estatus: true,
    },
    {
      nombre: "Angelica",
      paterno: "Hernandez",
      materno: "Muñiz",
      id: 3,
      categoria: "1000",
      estatus: true,
    },
    {
      nombre: "Brandon",
      paterno: "Alcantara",
      materno: "Ruiz",
      id: 4,
      categoria: "1000",
      estatus: false,
    },
  ]);

  const [activar, setActivar] = useState(false);
  /* Funcion que cammbia el status */
  const cambiarEstatus = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Profesores</h1>
        <Tabla>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Paterno</th>
              <th scope="col">Materno</th>
              <th scope="col">Estatus</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteracion por cada profesor */}
            {profesores.map((profesor) => (
              <tr key={profesor.id}>
                <td scope="col">{profesor.nombre}</td>
                <td scope="col">{profesor.paterno}</td>
                <td scope="col">{profesor.materno}</td>
                <td scope="col">
                  {/* Status */}
                  <button onClick={() => cambiarEstatus(profesor.id)}>
                    {profesor.estatus ? "Activo" : "Inactivo"}
                  </button>
                </td>
                {/* Botons de acciones */}
                <td scope="col">
                  <div>
                    <Boton value="Editar" />
                    <Boton value="Eliminar" />
                    <Boton value="Asignar Materia" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Tabla>
      </Contenedor>
    </Layout>
  );
};

export default Profesores;
