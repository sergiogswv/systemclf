import Login from "./components/Login";
import Panel from "./components/Panel";
import FormularioAdmin from "./components/FormularioAdmin";
import EditarAdmin from "./components/EditarAdmin";
import FormularioProf from "./components/FormularioProf";
import FormularioMateria from "./components/FormularioMateria";
import Profesores from "./components/Profesores";
import EditarProf from "./components/EditarProf";
import Materias from "./components/Materias";
import Alumnos from "./components/Alumnos";
import FormularioAlumno from "./components/FormularioAlumno";
import Calificaciones from "./components/Calificaciones";

import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Redux */
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
          </Route>
          <Route>
            <Route path="/panel" element={<Panel />} />
            <Route path="/panel/nuevo-admin" element={<FormularioAdmin />} />
            <Route path="/panel/editar/:id" element={<EditarAdmin />} />
          </Route>
          <Route>
            <Route path="/escuela" element={<Panel />} />
            <Route path="/escuela/profesores" element={<Profesores />} />
            <Route
              path="/escuela/profesores/editar/:id"
              element={<EditarProf />}
            />
            <Route path="/escuela/materias" element={<Materias />} />
            <Route path="/escuela/alumnos" element={<Alumnos />} />
            <Route
              path="/escuela/nuevo-profesor"
              element={<FormularioProf />}
            />
            <Route
              path="/escuela/nueva-materia"
              element={<FormularioMateria />}
            />
            <Route
              path="/escuela/nuevo-alumno"
              element={<FormularioAlumno />}
            />
          </Route>
          <Route>
            <Route path="/calificaciones" element={<Calificaciones />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
