import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Dashboard from "./component/Dashboard";
import Pagenotfound from "./component/Pagenotfound";
import Task from "./component/Task";
import Messages from "./component/Messages";
import Leaves from "./component/Leaves";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/tasks" element={<Task />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/leaves" element={<Leaves />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
