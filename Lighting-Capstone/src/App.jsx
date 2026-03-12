import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Plot from "./pages/Plot.jsx";
import Notes from "./pages/Notes.jsx";
import Archive from "./pages/Archive.jsx";


function App() {
  return (
    <BrowserRouter>
      <nav class="object-top bg-indigo-950 w-screen">
        <div>
          <Link to="/home"><button className="m-5">Home</button></Link>
          <Link to="/plot"><button className="m-5">Plot</button></Link>
          <Link to="/notes"><button className="m-5">Notes</button></Link>
          <Link to="/archive"><button className="m-5">Archive</button></Link>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
