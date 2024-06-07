import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./components/notfound/NotFound.jsx";
import Projects from "./pages/projects/Projects.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
