import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackPage from "./pages/TrackPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrackPage />} />
        <Route path="/genre" element={<div></div>} />
        <Route path="/artist" element={<div></div>} />
      </Routes>
    </Router>
  );
}

export default App;
