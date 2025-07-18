import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ModeToggle } from "./components/shared/ModeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div
        style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1000 }}
      >
        <ModeToggle />
      </div>

      <BrowserRouter>
        <Toaster />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
