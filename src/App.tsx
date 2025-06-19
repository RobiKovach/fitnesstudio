import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StudioPage from "./pages/StudioPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import TrainerDetailPage from "./pages/TrainerDetailPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/fitnesstudio">
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:slug" element={<CourseDetailPage />} />
            <Route path="/studio/:id" element={<StudioPage />} />
            <Route path="/trainer/:id" element={<TrainerDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
