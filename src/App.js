import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import Skills from "./pages/Skills";

function App() {
    return (
        <Router>
            <>
                <CustomCursor />

                <div className="nav">
                    <NavBar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
