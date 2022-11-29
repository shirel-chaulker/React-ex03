import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/navbar/navBar";
import { DvdPage, NotFoundPage, HomePage } from "./pages";

export const App = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <NavBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dvd shop" element={<DvdPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
      <Footer styles="footer" />
    </div>
  );
};
