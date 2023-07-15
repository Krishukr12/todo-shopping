import { Navbar } from "./components/Navbar/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

export const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};
