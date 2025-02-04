const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.post('/verify-url', async (req, res) => {
  const { url } = req.body;

  try {
    // Tenta obter os cabeçalhos da URL com um timeout de 5 segundos
    const response = await axios.head(url, { timeout: 500 });
    res.status(200).send({ valid: true });
  } catch (error) {
    res.status(404).send({ valid: false });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
