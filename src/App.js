import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Link, Routes } from "react-router-dom";
import AddData from "./pages/AddData";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadApp = () => {
      setTimeout(() => {
        setIsLoading(false); // Hide loading screen after 3 seconds
      }, 6000); // Simulating loading time (3 seconds)
    };

    loadApp();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading /> // Show loading screen if isLoading is true
      ) : (
        ""
      )}

      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/add" element={<AddData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
