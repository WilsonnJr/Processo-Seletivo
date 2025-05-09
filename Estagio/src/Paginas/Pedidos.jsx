import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const pedidosRes = await axios.get('http://localhost:3000/pedidos');
      const clientesRes = await axios.get('http://localhost:3000/clientes');
      setPedidos(pedidosRes.data);
      setClientes(clientesRes.data);
    }
    fetchData();
  }, []);

  const getClienteNome = (idCliente) => {
    const cliente = clientes.find(c => c.id === idCliente);
    return cliente ? cliente.nome : 'Cliente não encontrado';
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Pedidos</h1>
      {pedidos.map(pedido => (
        <div key={pedido.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: 10, borderRadius: 8 }}>
          <h3>Pedido #{pedido.id}</h3>
          <p><strong>Cliente:</strong> {getClienteNome(pedido.cliente)}</p>
          <p><strong>Data:</strong> {pedido.data}</p>
          <p><strong>Valor Total:</strong> R$ {pedido.valorTotal}</p>
          <button onClick={() => navigate(`/pedido/${pedido.id}`)}>Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default Pedidos;
