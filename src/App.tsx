import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "./providers/ThemeProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Toaster />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
