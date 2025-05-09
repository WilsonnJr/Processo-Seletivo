import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pedidos from './Paginas/Pedidos';
import DetalhesPedido from './Paginas/DetalhesPedido';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pedidos />} />
        <Route path="/pedido/:id" element={<DetalhesPedido />} />
      </Routes>
    </Router>
  );
}

export default App;