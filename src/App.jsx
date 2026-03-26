import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
            </Route>
        </Routes>
    );
}

export default App;