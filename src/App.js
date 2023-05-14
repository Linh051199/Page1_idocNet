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
          <Route path="/page1_idocNet/" element={<NavBarPage />}></Route>
          <Route path="/page1_idocNet/home" element={<HomePage />}></Route>
          <Route path="/page1_idocNet/mobile" element={<MobilePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
