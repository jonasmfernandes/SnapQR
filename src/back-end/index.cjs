require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is working.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is working on console.log. port:${PORT}`)
);

app.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "As senhas não coincidem." });
  }

  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("snapqr");
    const users = db.collection("users");

    const userExists = await users.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "E-mail já registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { email, password: hashedPassword };
    await users.insertOne(newUser);

    res.status(201).json({ message: "Usuário registrado com sucesso." });

    client.close();
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const client = await MongoClient.connect("mongodb://localhost:27017");
  const db = client.db("snapqr");
  const users = db.collection("users");
  if (!email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const user = await users.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    return res.status(401).json({ error: "Senha incorreta." });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, "secreto", {
    expiresIn: "1h",
  });

  res.json({ message: "Login bem-sucedido!", token });
});
