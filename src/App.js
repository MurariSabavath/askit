import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./routes/AppRoutes";
import GlobalStyle from "./themes/GlobalStyle";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;
