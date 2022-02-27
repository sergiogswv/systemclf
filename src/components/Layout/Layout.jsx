import { useSelector } from "react-redux";
import Fondo from "./Fondo";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const menu = useSelector((state) => state.menu.mostrar);

  return (
    <>
      <Header />
      <Fondo />
      {menu && <Sidebar />}

      {children}
    </>
  );
};

export default Layout;
