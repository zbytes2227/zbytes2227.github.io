import "./main.css";
import {Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
