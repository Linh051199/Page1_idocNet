import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./layouts/Home";
import MobilePage from "./layouts/Mobile";
import NavBarPage from "./layouts/components/NavBarPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBarPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/mobile" element={<MobilePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
