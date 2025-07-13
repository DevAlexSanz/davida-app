import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
