import AppRoutes from "./routes/AppRoutes";
import { ThemesProvider } from "./components/common/ThemesProvider";

function App() {
  return (
    <ThemesProvider>
      <AppRoutes />
    </ThemesProvider>
  );
}

export default App;
