<h1 align="center">📋 Task Manager API</h1>

<p align="center">
  API RESTful criada com Node.js para gerenciamento de tarefas, com operações completas de CRUD e persistência em arquivo JSON.
</p>

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Express.js
- UUID (gerador de identificadores únicos universais para cada tarefa)
- Nodemon
- File System (fs)
- Insomnia (para testes)

---

## 💻 Funcionalidades

- ✅ Criar tarefas (`POST /tasks`)
- ✅ Listar todas as tarefas (`GET /tasks`)
- ✅ Listar uma tarefa por ID (`GET /tasks/:id`)
- ✅ Atualizar título e descrição de uma tarefa (`PUT /tasks/:id`)
- ✅ Atualizar apenas o status da tarefa (`PATCH /tasks/:id/status`)
- ✅ Remover uma tarefa (`DELETE /tasks/:id`)

---

## ⚙️ Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/BernardoSa01/Task-Manager-API

# Acesse a pasta
cd Task-Manager-API

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

---

## 🧪 Testes com o Insomnia

Você pode usar o Insomnia ou Postman para testar as rotas da API.

### Criar tarefa

**POST** `/tasks`

```json
{
  "title": "Estudar Node.js",
  "description": "Praticar CRUD completo com JSON"
}
```

### Atualizar status

**PATCH** `/tasks/:id/status`

```json
{
  "status": "concluída"
}
```

### Remover tarefa

**DELETE** `/tasks/:id`


---

## 📁 Organização do projeto

```
src
├── controllers      # Lógica principal das rotas (TaskController.js)
├── routes           # Definição das rotas (tasks.routes.js)
├── database         # Armazenamento das tarefas em JSON (tasks.json)
└── server.js        # Configuração e execução do servidor
```

---

## 🧠 Aprendizados

Esse projeto foi desenvolvido com o objetivo de praticar:

- Criação de APIs RESTful com Node.js e Express
- Operações de CRUD
- Organização modular com controllers e rotas
- Persistência de dados com arquivo JSON
- Tratamento de erros e status HTTP
- Testes com Insomnia

---




## ⏳ Futuras melhorias

- Integração com banco de dados relacional (PostgreSQL)
- Implementação de autenticação de usuários
- Paginação e filtros nas listagens de tarefas
- Validações com bibliotecas externas (Joi ou Yup)
- Documentação da API com Swagger
- Deploy da aplicação com Render
- Testes automatizados (Jest)

---


## ✍️ Autor

Feito com dedicação por [Bernardo Sá](https://www.linkedin.com/in/bernardosa01). Conecte-se comigo!

---

## :memo: Licença

Esse projeto está sob a licença MIT.

