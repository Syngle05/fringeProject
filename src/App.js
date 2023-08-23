import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Main from "./components/Main";
import Rolette from "./components/Rolette";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/main" element={<Main />} />
        <Route path="/roulette" element={<Rolette />} />
      </Routes>
    </Router>
  );
}

export default App;
