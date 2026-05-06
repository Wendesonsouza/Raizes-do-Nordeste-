
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const pratoRoutes = require('./routes/pratos');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/pratos', pratoRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});

