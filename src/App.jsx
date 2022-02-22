import Login from "./components/Login";
import Panel from "./components/Panel";
import FormularioAdmin from "./components/FormularioAdmin";
import Privilegios from "./components/Privilegios";
import FormularioProf from "./components/FormularioProf";
import FormularioMateria from "./components/FormularioMateria";
import Profesores from "./components/Profesores";
import Materias from "./components/Materias";
import Alumnos from "./components/Alumnos";
import FormularioAlumno from "./components/FormularioAlumno";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Login />} />
        </Route>
        <Route>
          <Route path="/panel" element={<Panel />} />
          <Route path="/panel/nuevo-admin" element={<FormularioAdmin />} />
          <Route path="/panel/privilegios" element={<Privilegios />} />
        </Route>
        <Route>
          <Route path="/escuela" element={<Panel />} />
          <Route path="/escuela/profesores" element={<Profesores />} />
          <Route path="/escuela/materias" element={<Materias />} />
          <Route path="/escuela/alumnos" element={<Alumnos />} />
          <Route path="/escuela/nuevo-profesor" element={<FormularioProf />} />
          <Route
            path="/escuela/nueva-materia"
            element={<FormularioMateria />}
          />
          <Route path="/escuela/nuevo-alumno" element={<FormularioAlumno />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
