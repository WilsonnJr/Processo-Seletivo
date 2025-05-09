import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors('http://localhost:5173'));


// Retorna todos os clientes
app.get('/clientes', async (req, res) => {
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Clientes');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar os clientes:', error.message);
    res.status(500).send('Erro ao buscar os clientes');
  }
});

// Retorna cliente específico por ID
app.get('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Clientes');
    const clientes = response.data;
    const cliente = clientes.find(c => String(c.id) === id);

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar o cliente:', error.message);
    res.status(500).send('Erro ao buscar o cliente');
  }
});

// Retorna todos os pedidos
app.get('/pedidos', async (req, res) => {
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Pedidos');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar os pedidos:', error.message);
    res.status(500).send('Erro ao buscar os pedidos');
  }
});

// Retorna pedido específico por ID
app.get('/pedidos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Pedidos');
    const pedidos = response.data;
    const pedido = pedidos.find(p => String(p.id) === id);

    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).send('Pedido não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar o pedido:', error.message);
    res.status(500).send('Erro ao buscar o pedido');
  }
});

// Retorna todos os itens de pedido
app.get('/itens-pedido', async (req, res) => {
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/ItensPedido');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar os itens do pedido:', error.message);
    res.status(500).send('Erro ao buscar os itens do pedido');
  }
});

// Retorna item de pedido específico por ID
app.get('/itens-pedido/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/ItensPedido');
    const itens = response.data;
    const item = itens.find(i => String(i.id) === id);

    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item do pedido não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar o item do pedido:', error.message);
    res.status(500).send('Erro ao buscar o item do pedido');
  }
});

// Retorna todos os produtos
app.get('/produtos', async (req, res) => {
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Produtos');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error.message);
    res.status(500).send('Erro ao buscar os produtos');
  }
});

// Retorna produto específico por ID
app.get('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get('https://sistemalift1.com.br/lift_ps/api/Produtos');
    const produtos = response.data;
    const produto = produtos.find(p => String(p.id) === id);

    if (produto) {
      res.json(produto);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar o produto:', error.message);
    res.status(500).send('Erro ao buscar o produto');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
