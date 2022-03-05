import { useSelector } from "react-redux";
import Fondo from "./Fondo";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const menu = useSelector((state) => state.menu.mostrar);
  const auth = useSelector((state) => state.token.token);

  return (
    <>
      <Header />
      <Fondo />
      {auth && menu && <Sidebar />}

      {children}
      <Footer />
    </>
  );
};

export default Layout;
