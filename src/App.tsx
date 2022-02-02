import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MainSearch />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
