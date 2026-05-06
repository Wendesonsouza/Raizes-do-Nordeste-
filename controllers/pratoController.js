const pratos = [
  { id: 1, nome: "Cuscuz Grande", preco: 15 },
  { id: 2, nome: "Cuscuz Médio", preco: 10 },
  { id: 3, nome: "Cuscuz Pequeno", preco: 7 }
];

exports.listarPratos = (req, res) => {
  res.json(pratos);
};

exports.criarPedido = (req, res) => {
  const { pratoId } = req.body;
  const prato = pratos.find(p => p.id === pratoId);
  if (!prato) return res.status(404).json({ erro: "Prato não encontrado" });
  res.status(201).json({ mensagem: "Pedido criado com sucesso", prato });
};
