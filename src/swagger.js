// Usando Swagger para documentação do projeto
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de tarefas'
    }
  },
  apis: ['./src/routes/*.js'] // esse é o local de busca dos comentários JSDoc nas rotas
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec