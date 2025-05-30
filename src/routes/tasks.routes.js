const express = require('express')
const TaskController = require('../controllers/TaskController')

const router = express.Router()

// POST/tasks: cria uma nova tarefa
router.post('/tasks', TaskController.create)

// GET/tasks: lista todas as tarefas salvas
router.get('/tasks', TaskController.index)

// GET/tasks: lista uma tarefa específica com base em seu id
router.get('/tasks/:id', TaskController.show);

// PUT/tasks: atualiza os dados principais de uma tarefa já existente
router.put('/tasks/:id', TaskController.update)


module.exports = router