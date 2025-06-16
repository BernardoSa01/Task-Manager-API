const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

// Criando uma instância da aplicação
const app = express()

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000

// Rota da documentação com Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Middleware para conversão do JSON no corpo das requisições
app.use(express.json())

// Criando rota GET
app.get('/', (req, res) => {
  return res.json({ status: 'Task-Manager running' })
})

// Ativando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
  console.log(`Swagger docs avaliable at http://localhost:${PORT}/docs`)
})

const taskRoutes = require('./routes/tasks.routes')
// Ativando as rotas de tarefas
app.use(taskRoutes)

