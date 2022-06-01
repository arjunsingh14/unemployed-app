import { Dashboard, Error, Landing, Register } from './pages'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/landing" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
