import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemesProvider } from "./components/common/ThemesProvider";

function App() {
  return (
    <ThemesProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemesProvider>
  );
}

export default App;
