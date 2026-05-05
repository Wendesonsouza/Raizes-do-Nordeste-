# 🍴 Raízes do Nordeste - Guia Rápido

## O que você recebeu:

### Arquivos Principais:
1. **App.tsx** - Aplicativo principal com navegação
2. **MenuSection.tsx** - Cardápio com 4 tamanhos de cuscuz
3. **ClientRegistration.tsx** - Formulário e lista de clientes
4. **ManagementPanel.tsx** - Dashboard com métricas
5. **database-schema.sql** - Estrutura do banco de dados

---

## 🚀 Como Rodar (Passo a Passo):

### Opção 1: Criar Projeto Novo (Recomendado)

```bash
# 1. Criar projeto React
npm create vite@latest meu-restaurante -- --template react-ts
cd meu-restaurante

# 2. Instalar dependências
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

# 3. Configurar Tailwind
npx tailwindcss init -p
```

**Edite `tailwind.config.js`:**
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

**Edite `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# 4. Criar pasta de componentes
mkdir -p src/app/components

# 5. Copiar os arquivos:
# - Copie App.tsx para src/app/
# - Copie os 3 componentes para src/app/components/

# 6. Editar src/main.tsx:
```

**`src/main.tsx`:**
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```bash
# 7. Rodar!
npm run dev
```

Acesse: http://localhost:5173

---

### Opção 2: Usar Projeto Existente

Se você já tem um projeto React com Tailwind:

```bash
# 1. Instale apenas os ícones
npm install lucide-react

# 2. Copie os 4 arquivos .tsx para seus locais
# 3. Rode npm run dev
```

---

## 📁 Estrutura Final do Projeto:

```
meu-restaurante/
├── src/
│   ├── app/
│   │   ├── App.tsx              ← Arquivo principal
│   │   └── components/
│   │       ├── MenuSection.tsx          ← Cardápio
│   │       ├── ClientRegistration.tsx   ← Cadastro
│   │       └── ManagementPanel.tsx      ← Gerenciamento
│   ├── main.tsx                 ← Entry point
│   └── index.css                ← Estilos (Tailwind)
├── package.json
└── vite.config.ts
```

---

## ✅ Checklist de Instalação:

- [ ] Node.js instalado (v16+)
- [ ] Projeto Vite criado
- [ ] Tailwind CSS instalado e configurado
- [ ] lucide-react instalado
- [ ] Arquivos .tsx copiados
- [ ] main.tsx atualizado
- [ ] `npm run dev` funcionando

---

## 💡 Funcionalidades:

### 🍽️ Cardápio:
- 4 tamanhos: Pequeno (150g), Médio (300g), Grande (500g), Família (1kg)
- Seletor de quantidade
- Botão adicionar ao carrinho

### 👥 Clientes:
- Cadastro com nome, telefone e endereço
- Lista de clientes cadastrados
- Contador de total de clientes

### 📊 Gerenciamento:
- Total de clientes
- Pedidos pendentes e finalizados
- Receita total
- Lista completa de pedidos e clientes

---

## 🗄️ Banco de Dados (Opcional):

### Opção A: LocalStorage (Mais Simples)

Adicione ao `App.tsx`:

```typescript
import { useEffect } from 'react';

// Dentro do componente App:
useEffect(() => {
  localStorage.setItem('clients', JSON.stringify(clients));
  localStorage.setItem('orders', JSON.stringify(orders));
}, [clients, orders]);

useEffect(() => {
  const savedClients = localStorage.getItem('clients');
  const savedOrders = localStorage.getItem('orders');
  if (savedClients) setClients(JSON.parse(savedClients));
  if (savedOrders) setOrders(JSON.parse(savedOrders));
}, []);
```

### Opção B: Banco de Dados Real

Use o arquivo `database-schema.sql` para:
- PostgreSQL
- MySQL
- Supabase (mais fácil para iniciantes)

---

## 🐛 Problemas Comuns:

### "Module not found"
```bash
npm install
```

### Tailwind não funciona
- Verifique se `index.css` tem `@tailwind base;`
- Verifique se está importado no `main.tsx`

### Porta já em uso
```bash
npm run dev -- --port 3000
```

### Erros de TypeScript
- Use template `react-ts` ao criar o projeto
- Ou renomeie `.tsx` para `.jsx` e `.ts` para `.js`

---

## 📚 Próximos Passos:

1. ✅ Rodar o projeto
2. 🎨 Personalizar cores e estilos
3. 💾 Adicionar persistência (LocalStorage ou BD)
4. 🔐 Adicionar autenticação (opcional)
5. 🚀 Deploy (Vercel, Netlify, etc.)

---

## 🆘 Precisa de Ajuda?

- **Vite**: https://vitejs.dev/
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/

---


