import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="footer">Petr Vitvar 2024</footer>
    </>
  );
};

export default SharedLayout;
