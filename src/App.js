import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "Routes/AppRoutes";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "Themes/GlobalStyle";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AppRouter theme={theme} setTheme={setTheme} />
        <ToastContainer position="bottom-left" />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
