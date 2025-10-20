import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      default:
        return (
          <div className="home-placeholder">
            <h1>Welcome to Frontend Wizard Stage 1!</h1>
            <p>Use navigation to explore Contact and About pages.</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
