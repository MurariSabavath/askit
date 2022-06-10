import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainOutlet = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "90px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainOutlet;
