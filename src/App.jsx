import React from "react";
import { Route, Routes, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"; // Import CSS

const App = () => {
  return (
    <div>
      {/* <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
      <h1>hello</h1>
    </div>
  );
};

export default App;
