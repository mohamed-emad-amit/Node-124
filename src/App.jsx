import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/profile"> Profile</Link>
      </div>

      <div className="main-container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </div>
  );
}
