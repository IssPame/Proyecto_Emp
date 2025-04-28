import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import TipoGraficos from './Pages/TipoGraficos';
import GuiaUsuarios from './Pages/GuiaUsuario';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/TipoGraficos" element={<TipoGraficos />} />
            <Route path="/GuiaUsuarios" element={<GuiaUsuarios />} />
          </Routes>
      </Router>
  );
}

export default App;
