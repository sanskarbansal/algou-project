import "./App.css";
import ProblemsList from "./components/ProblemList/ProblemsList";
import { Routes, Route } from "react-router-dom";
import Problem from "./components/Problem/Problem";
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<ProblemsList />} />
            <Route exact path="/:problemId" element={<Problem />} />
        </Routes>
    );
}

export default App;
