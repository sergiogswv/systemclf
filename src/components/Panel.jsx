import styled from "@emotion/styled";
import Layout from "./Layout/Layout";
import { Contenedor, Tabla, Boton } from "../components/helpers/ViewHelpers";
import { useState } from "react";

const Panel = () => {
  /* State local de administradores */
  const admins = [
    {
      nombre: "Sergio",
      paterno: "Guadarrama",
      materno: "Santillán",
      id: 1,
      categoria: "1000",
      privilegios: "R",
      estatus: false,
    },
    {
      nombre: "Emily",
      paterno: "Guadarrama",
      materno: "Payan",
      id: 2,
      categoria: "1000",
      privilegios: "RW",
      estatus: true,
    },
    {
      nombre: "Angelica",
      paterno: "Hernandez",
      materno: "Muñiz",
      id: 3,
      categoria: "1000",
      privilegios: "R",
      estatus: true,
    },
    {
      nombre: "Brandon",
      paterno: "Alcantara",
      materno: "Ruiz",
      id: 4,
      categoria: "1000",
      privilegios: "RW",
      estatus: false,
    },
  ];

  const [activar, setActivar] = useState(false);
  /* Funcion que cammbia el status */
  const cambiarEstatus = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Contenedor>
        {/* <h1>Bienvenido(a): Sergio</h1> */}
        <h1>Administradores</h1>
        <Tabla>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Paterno</th>
              <th scope="col">Materno</th>
              <th scope="col">Privilegios</th>
              <th scope="col">Estatus</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteracion por cada admin */}
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td scope="col">{admin.nombre}</td>
                <td scope="col">{admin.paterno}</td>
                <td scope="col">{admin.materno}</td>
                <td scope="col">{admin.privilegios}</td>
                <td scope="col">
                  {/* Status */}
                  <button onClick={() => cambiarEstatus(admin.id)}>
                    {admin.estatus ? "Activo" : "Inactivo"}
                  </button>
                </td>
                {/* Botons de acciones */}
                <td scope="col">
                  <div>
                    <Boton value="Editar" />
                    <Boton value="Eliminar" />
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

export default Panel;
