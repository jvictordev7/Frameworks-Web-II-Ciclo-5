# 🧭 Painel de Membros (React + Vite)

Aplicação React para cadastrar, editar, listar e remover membros usando Material UI e integração com uma API REST. Desenvolvida em Vite para build rápido e DX moderna.

## ✨ Destaques
- 📋 CRUD completo de usuários com feedback visual (Snackbar/Alert).
- 🎨 UI pronta com Material UI (formulário e tabela responsiva).
- 🔗 Integração via Axios com endpoint configurável em `src/config.js`.
- ⚡ Vite para HMR e build enxuto.

## 🧩 Stack
- React + Vite
- Material UI (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- Axios

## 🚀 Como rodar
1) Instale dependências:
```bash
npm install
```
2) Configure o endpoint da API (padrão `http://localhost:8080/api`):
```js
// src/config.js
export const API_URL = 'http://localhost:8080/api';
```
3) Inicie em desenvolvimento:
```bash
npm run dev
```
4) Abra o navegador no endereço mostrado pelo Vite (ex.: http://localhost:5173).

## 🗂️ Estrutura relevante
- `src/config.js` — URL base da API.
- `src/App.jsx` — container principal com lógica de CRUD e Snackbar.
- `src/components/UserForm.jsx` — formulário de cadastro/edição.
- `src/components/UserList.jsx` — listagem com ações de editar/remover.
- `src/index.css` e `src/App.css` — estilos globais e layout da página.

## 🔌 Endpoints esperados
- `GET /users` — lista usuários.
- `POST /users` — cria usuário `{ name, email }`.
- `PUT /users/:id` — atualiza usuário.
- `DELETE /users/:id` — remove usuário.

## 📜 Scripts úteis
- `npm run dev` — ambiente de desenvolvimento (HMR).
- `npm run build` — build de produção.
- `npm run preview` — pré-visualização do build.

## 🧪 Dicas de uso
- Clique em “Editar” para popular o formulário e alterar dados.
- “Cancelar” limpa o formulário e sai do modo de edição.
- Confirme antes de remover um usuário (prompt nativo do navegador).

## 🤝 Contribuição
- Crie branches curtas, rode `npm run build` para validar e abra PR com resumo das mudanças.
- Prefira mensagens de commit descritivas (ex.: `feat: add user table sorting`).

## 📝 Licença
Uso educacional/demonstração. Adapte conforme a política do seu projeto.
