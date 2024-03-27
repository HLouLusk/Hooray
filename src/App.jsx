import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/~admin" element={<Admin />} />
          <Route path="/~admin/:id" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
