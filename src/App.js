import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./routes/AppRoutes";
import GlobalStyle from "./themes/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer position="bottom-left" />
    </>
  );
};

export default App;
