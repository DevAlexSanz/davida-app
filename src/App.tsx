import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Toaster />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
