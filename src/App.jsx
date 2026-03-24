import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import InformationPage from "./pages/InformationPage/InformationPage";
import FundamentalsPage from "./pages/FundamentalsPage/FundamentalsPage";
import SearchAlgorithmsPage from "./pages/SearchAlgorithmsPage/SearchAlgorithmsPage";
import MachineLearningPage from "./pages/MachineLearningPage/MachineLearningPage";
import NeuralNetworksPage from "./pages/NeuralNetworksPage/NeuralNetworksPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fundamentos" element={<FundamentalsPage />} />
        <Route path="/mecanismos-de-pesquisa" element={<SearchAlgorithmsPage />} />
        <Route path="aprendizado-de-maquina" element={<MachineLearningPage />} />
        <Route path="/redes-neurais" element={<NeuralNetworksPage />} />
        <Route path="/treinamento" element={<TrainingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;