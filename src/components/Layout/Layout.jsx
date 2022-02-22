import { useState } from "react";
import Fondo from "./Fondo";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  //console.log(menu);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <Fondo />
      {menu && <Sidebar />}

      {children}
    </>
  );
};

export default Layout;
