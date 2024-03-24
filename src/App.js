import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import AdminPage from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/~admin" element={<AdminPage />} />
          <Route path="/~admin/:id" element={<AdminPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
