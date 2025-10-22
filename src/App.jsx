import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import TaskList from "./pages/taskList";
import { TaskCreation } from "./pages/taskCreation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskList" element={<TaskList />} />
        <Route path="/taskCreation" element={<TaskCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
