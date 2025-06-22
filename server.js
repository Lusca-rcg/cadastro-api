const express = require('express');
const cors = require('cors');
const db = require('./database/connection');

const app = express();
app.use(cors());
app.use(express.json());

// GET /cadastros - listar
app.get('/cadastros', async (req, res) => {
  const cadastros = await db('cadastros').select('*');
  return res.json(cadastros);
});

// POST /cadastros - adicionar
app.post('/cadastros', async (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
  }

  const [id] = await db('cadastros').insert({ nome, email });
  return res.json({ id, nome, email });
});

// DELETE /cadastros/:id - remover
app.delete('/cadastros/:id', async (req, res) => {
  const { id } = req.params;

  const deleted = await db('cadastros').where('id', id).del();
  if (deleted) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ error: 'Cadastro não encontrado.' });
  }
});

// Start server
app.listen(3333, () => {
  console.log('✅ API rodando em http://localhost:3333');
});
