import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InformationPage from "./pages/InformationPage/InformationPage";
import FundamentalsPage from "./pages/fundamentalsPage/FundamentalsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fundamentos" element={<FundamentalsPage />} />
        <Route path="/mecanismos-de-pesquisa" element={<InformationPage />} />
        <Route path="aprendizado-de-maquina" element={<InformationPage />} />
        <Route path="/redes-neurais" element={<InformationPage />} />
        <Route path="/treinamento" element={<InformationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;