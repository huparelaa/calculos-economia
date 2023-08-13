import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Conversor from './pages/Conversor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/conversor" element={<Conversor/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
