🍽️ Restaurante Raízes do Nordeste
Projeto Back-End e Front-End simples em Node.js + Express + JavaScript para rodar em site, com área de cliente e área de administração.



📂 Estrutura
Código
Raizes-do-Nordeste/
│── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── config/
│   └── package.json
│
│── frontend/
│   ├── index.html
│   ├── cliente.html
│   ├── admin.html
│   ├── js/
│   └── css/
│
│── README.md



🚀 Instalação

1-Clone o repositório:
bash
git clone https://github.com/Wendesonsouza/Raizes-do-Nordeste-.git
cd Raizes-do-Nordeste

2-Instale as dependências:
bash
cd backend
npm init -y
npm install express cors jsonwebtoken bcryptjs mongoose

3-Configure o banco de dados (MongoDB local ou Atlas).
No arquivo config/db.js coloque sua string de conexão.

4-Inicie o servidor:
bash
node server.js


🌐 Uso
Área do Cliente

-Cadastro e login
-Escolher prato de cuscuz (Grande, Médio, Pequeno)
-Criar pedido e acompanhar status

Área do Admin

-Login com perfil administrador
-CRUD de pratos
-Controle de estoque
-Atualização de status dos pedidos



📌 Endpoints Principais

-/auth → login, cadastro, refresh
-/pratos → listar pratos, criar pedido
-/admin → gerenciar cardápio, pedidos, estoque


🧪 Testes

-Login válido → retorna token
-Pedido válido → cria pedido
-Estoque insuficiente → erro 409
-Pagamento mock → aprovado ou recusado



🎨 Frontend

-cliente.html → interface para clientes
-admin.html → interface para administradores
-index.html → página inicial



🔒 Segurança

-Senhas com bcrypt
-Autenticação com JWT
-Perfis com roles (cliente/admin)



📖 Conclusão
Este projeto entrega uma solução simples e funcional para o restaurante Raízes do Nordeste, com foco em multicanalidade, segurança e fidelização.
