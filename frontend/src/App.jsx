import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Conversor from "./pages/Conversor";
import Header from "./components/Header";
import Valor from "./pages/Valor";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl m-auto p-5">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/conversor" element={<Conversor />} />
          <Route path="/valor" element={<Valor/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
