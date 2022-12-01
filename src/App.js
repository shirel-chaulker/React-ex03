import { Routes, Route } from "react-router-dom";

import { About, Contact, Games, Home, Movies, Notfound } from "./pages";
import { Sidebar } from "./components/sidebar.component.jsx";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div class="main">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
};
