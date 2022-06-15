import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainOutlet = ({ theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div style={{ paddingTop: "90px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainOutlet;
