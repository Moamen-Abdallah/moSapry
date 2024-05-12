import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/nav/NavBar"
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/Projects";


function App() {
  const location =useLocation() ;
  return (
    <>
      <NavBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />}  />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      <Footer />
    </>
  );
}

export default App