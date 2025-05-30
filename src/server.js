const express = require('express')

// Criando uma instância da aplicação
const app = express()

// Definindo a porta do servidor
const PORT = 3000

// Middleware para conversão do JSON no corpo das requisições
app.use(express.json())

// Criando rota GET
app.get('/', (req, res) => {
  return res.json({ status: 'Task-Manager running' })
})

// Ativando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})

const taskRoutes = require('./routes/tasks.routes')
// Ativando as rotas de tarefas
app.use(taskRoutes)

