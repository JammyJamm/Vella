import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Link, Routes } from "react-router-dom";
import AddData from "./pages/AddData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/add" element={<AddData />} />
      </Routes>
    </div>
  );
}

export default App;
