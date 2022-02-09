// Dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Assets
import "./styles/reset.css";
import "./styles/App.sass";

// Layout Component
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
