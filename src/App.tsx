import { Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./pages/paginaPrincipal";
import './index.css'

function App() {

  return (
    <main>
      <Routes>
        <Route element={<PaginaPrincipal />} path="/" />
      </Routes>
    </main>
  );
}

export default App;
