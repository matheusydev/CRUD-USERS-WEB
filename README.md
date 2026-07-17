<div align="center">

# 👥 CRUD Users Web

### Interface web para cadastro e gerenciamento de usuários

O objetivo da aplicação é permitir que usuários possam **cadastrar, visualizar e excluir** registros de forma simples e integrada a uma API REST própria.

<br/>


[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

</div>

---


## 📋 Funcionalidades

- Listagem de usuários cadastrados
- Cadastro de novos usuários (nome, idade e email)
- Exclusão de usuários com atualização imediata da lista
- Interface estilizada e responsiva ao conteúdo
- Integração com API REST própria ([CRUD-USERS-API](https://github.com/matheusydev/CRUD-USERS-API))

---


## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| React | Biblioteca para construção da interface |
| Vite | Build tool e servidor de desenvolvimento |
| Axios | Cliente HTTP para consumo da API |
| ESLint | Padronização e qualidade do código |
| CSS Nesting | Organização dos estilos por componente |

---


## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/matheusydev/CRUD-USERS-WEB.git

# Acesse a pasta do projeto
cd CRUD-USERS-WEB

# Instale as dependências
npm install
```

### Execução

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera a build de produção
npm run build

# Roda o linter
npm run lint
```

Após iniciar, acesse `http://localhost:5173` no navegador.

> A aplicação consome a [CRUD-USERS-API](https://github.com/matheusydev/CRUD-USERS-API), hospedada no Render. A URL base da API está configurada em `src/services/api.js`.

---

## 📁 Estrutura de Pastas

```bash
├── src/
│   ├── assets/                 # Ícones e imagens (ex: trash.svg)
│   ├── pages/
│   │   └── home/
│   │       ├── index.jsx       # Tela principal — cadastro e listagem
│   │       └── style.css       # Estilos específicos da Home
│   ├── services/
│   │   └── api.js              # Instância do axios com a baseURL da API
│   ├── index.css               # Estilos globais
│   └── main.jsx                # Ponto de entrada da aplicação
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 📄 Responsabilidade de cada arquivo

### `src/main.jsx`

Ponto de entrada da aplicação. Monta o componente raiz (`Home`) dentro do `#root` usando `createRoot`, envolto em `StrictMode`.

### `src/pages/home/index.jsx`

Tela principal do app. Concentra o formulário de cadastro e a listagem de usuários. Usa `useRef` para capturar os valores dos campos do formulário sem re-renderizações a cada tecla, e `useState` para armazenar a lista de usuários vinda da API.

### `src/services/api.js`

Instância do Axios configurada com a `baseURL` da API, centralizando a configuração de rede em um único lugar.

### `src/pages/home/style.css`

Estilos específicos da tela Home, utilizando CSS nesting nativo para organizar regras de `form`, `input`, `button` e `.card` dentro de seus respectivos blocos.

### `src/index.css`

Estilos globais da aplicação: reset de margin/padding, box-sizing e o gradiente de fundo do body.

---

## 🧠 Decisões Técnicas

### Repositório separado do back-end

O front-end foi criado em um repositório próprio, separado da [CRUD-USERS-API](https://github.com/matheusydev/CRUD-USERS-API). Essa escolha reflete a separação real entre camadas de uma aplicação full-stack, com ciclos de deploy independentes (front hospedado separadamente da API no Render).

### `useRef` para os campos do formulário

Os inputs de cadastro não são controlados via `useState` a cada tecla digitada — em vez disso, usam `useRef` para ler o valor apenas no momento do envio. Essa abordagem evita re-renderizações desnecessárias em um formulário simples, sem necessidade de validação em tempo real.

### Atualização de estado sem recarregar a lista inteira

Após cadastrar ou excluir um usuário, o estado local é atualizado diretamente (`[...users, novoUsuario]` no cadastro e `users.filter(...)` na exclusão), evitando uma nova requisição completa à API a cada ação.

### CORS habilitado na API

Como front-end e back-end rodam em origens diferentes, a API foi configurada com o middleware `cors` para permitir as requisições do front em desenvolvimento e produção.

### Conventional Commits

O histórico de commits segue o padrão Conventional Commits (`feat:`, `fix:`, `chore:`, `style:`), mantendo consistência com o fluxo de trabalho já adotado na `CRUD-USERS-API`.

---

## 🎓 Aprendizados Adquiridos

Ao desenvolver este projeto, os seguintes conhecimentos foram consolidados na prática:

- ✅ **Consumo de API REST** com Axios (GET, POST, DELETE)
- ✅ **`useRef`** para leitura de valores de formulário sem inputs controlados
- ✅ **`useState`** para gerenciamento de estado assíncrono vindo de uma API
- ✅ **`useEffect`** para carregamento de dados na montagem do componente
- ✅ **CORS** — configuração no back-end para liberar requisições de outra origem
- ✅ **CSS Nesting nativo** para organização de estilos por componente
- ✅ **Debug de erros de deploy** (dependências de produção, geração automática do Prisma Client)
- ✅ **Conventional Commits** e fluxo de branch-per-feature aplicados de forma consistente entre front e back-end