
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import MinistriesPage from "./pages/ministries";
import ServicesPage from "./pages/services";
import EventsPage from "./pages/events";
import ConnectPage from "./pages/connect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
