import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContenidoSidebar = styled.div`
  position: absolute;
  background-color: var(--blanco);
  color: var(--negro);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  height: 100vh;
  width: 25%;
  h2 {
    margin-left: 1rem;
  }
  p {
    margin-left: 2.5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    font-size: 0.75rem;
    line-height: 1;
    height: 30%;
    h2 {
      margin: 0.5rem 0.5rem;
    }
    p {
      text-align: center;
      margin: 0.5rem 0.5rem;
    }
  }
`;
const Enlace = styled(Link)`
  text-decoration: none;
  color: var(--negro);

  :hover {
    color: var(--secondary);
  }
`;

const Sidebar = () => {
  return (
    <ContenidoSidebar>
      <div>
        <h2>Administración</h2>
        <Enlace to="/panel/">
          <p>Administradores</p>
        </Enlace>
        <Enlace to="/panel/nuevo-admin">
          <p>Nuevo Admin</p>
        </Enlace>
        <Enlace to="/panel/privilegios">
          <p>Privilegios</p>
        </Enlace>
      </div>
      <div>
        <h2>Escuela</h2>
        <Enlace to="/escuela/profesores">
          <p>Profesores</p>
        </Enlace>
        <Enlace to="/escuela/materias">
          <p>Materias</p>
        </Enlace>
        <Enlace to="/escuela/alumnos">
          <p>Almunos</p>
        </Enlace>
        <Enlace to="/escuela/nuevo-profesor">
          <p>Nuevo Prof</p>
        </Enlace>
        <Enlace to="/escuela/nueva-materia">
          <p>Nueva Materia</p>
        </Enlace>
        <Enlace to="/escuela/nuevo-alumno">
          <p>Nuevo Alumno</p>
        </Enlace>
      </div>
      <Enlace to="/">
        <h2>Calificaciones</h2>
      </Enlace>
    </ContenidoSidebar>
  );
};

export default Sidebar;
9912200005949;
