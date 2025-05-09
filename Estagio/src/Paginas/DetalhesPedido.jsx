import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesPedido() {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [itens, setItens] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(id)
      const pedidoRes = await axios.get(`http://localhost:3000/pedidos/${id}`);
      setPedido(pedidoRes.data);
      console.log('Pedido:', pedidoRes.data);

      const clienteRes = await axios.get(`http://localhost:3000/clientes/${pedidoRes.data.cliente}`);
      setCliente(clienteRes.data);

      const todosItens = await axios.get('http://localhost:3000/itens-pedido');
      setItens(todosItens.data.filter(i => i.pedidoId === pedidoRes.data.id));

      const produtosRes = await axios.get('http://localhost:3000/produtos');
      setProdutos(produtosRes.data);
    }

    fetchData();
  }, [id]);

  const getProdutoNome = (produtoId) => {
    const produto = produtos.find(p => p.id === produtoId);
    return produto ? produto.nome : 'Produto não encontrado';
  };

  if (!pedido || !cliente) return <p>Carregando...</p>;

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: 10, borderRadius: 8}}>
      <h1>Detalhes do Pedido #{pedido.id}</h1>
      <p><strong>Cliente:</strong> {cliente.nome}</p>
      <p><strong>CPF:</strong> {cliente.cpf}</p>
      <p><strong>Email:</strong> {cliente.email}</p>
      <p><strong>Data:</strong> {pedido.data}</p>

      <h2>Itens</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            {getProdutoNome(item.produtoId)} - {item.quantidade}x (R$ {item.precoUnitario})
          </li>
        ))}
      </ul>

      <Link to="/">← Voltar</Link>
    </div>
  );
}

export default DetalhesPedido;
