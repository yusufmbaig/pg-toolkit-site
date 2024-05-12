import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import EnglishToolkit from "./components/EnglishToolkit/EnglishToolkit";
import SpanishEnglishToolkit from "./components/SpanishEnglishToolkit/SpanishEnglishToolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/EnglishToolkit" element={<EnglishToolkit />} />
      <Route
        path="/SpanishEnglishToolkit"
        element={<SpanishEnglishToolkit />}
      />
    </BrowserRouter>
  );
}

export default App;
