const express = require('express')
const TaskController = require('../controllers/TaskController')

const router = express.Router()

/**
 * @swagger
 * /tasks
 *    post:
 *      summary: Cria uma nova tarefa
 *      tags: [Tasks]
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              required: 
 *                - title
 *                - description
 *              properties:
 *                title: 
 *                  type: string
 *                  example: "Estudar Node.js"
 *                description:
 *                  type: string
 *                  example: "Praticar CRUD completo com JSON"
 *    responses:
 *      201:
 *        description: Tarefa criada com sucesso
 *        content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                id: 
 *                  type: string
 *                  example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *                title:
 *                  type: string
 *                  example: "Estudar Node.js"
 *                description:
 *                  type: string
 *                  example: "Praticar CRUD completo com JSON"
 *                status:
 *                  type: string
 *                  example: "pendente"
 *        400:
 *          description: Título e descrição são obrigatórios
 */
router.post('/tasks', TaskController.create)


/**
 * @swagger
 * /tasks:
 *    get:
 *      summary: Lista todas as tarefas
 *      tags: [Tasks]
 *      responses:
 *        200:
 *          description: Retorna um array com todas as tarefas cadastradas. Se não houver tarefas, retorna um array vazio.
 *          content: 
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  type: object
 *                  properties:
 *                    id: 
 *                      type: string
 *                      example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *                    title:
 *                      type: string
 *                      example: "Estudar Node.js"
 *                    description:
 *                      type: string
 *                      example: "Praticar CRUD com persistência em JSON"
 *                    status: 
 *                      type: string
 *                      example: "pendente"
 *                    created_at: 
 *                      type: string
 *                      example: "2024-06-16T12:00:00.000Z"
 *                    updated_at: 
 *                      type: string
 *                      example: "2024-06-18T14:30:00.000Z"
 */
router.get('/tasks', TaskController.index)


/**
 * @swagger
 * /tasks/{id}:
 *    get:
 *      summary: Busca uma tarefa por ID
 *      tags: [Tasks]
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true
 *          schema: 
 *            type: string
 *          description: ID da tarefa
 *      responses: 
 *        200: 
 *          description: Tarefa encontrada com sucesso
 *          content: 
 *            application/json: 
 *              schema:
 *                type: object
 *                properties:
 *                  id: 
 *                    type: string
 *                    example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *                  title:
 *                    type: string
 *                    example: "Estudar Node.js"
 *                  description: 
 *                    type: string
 *                    example: "Praticar CRUD completo com JSON"
 *                  status: 
 *                    type: string
 *                    example: "pendente"
 *                  created_at:
 *                    type: string
 *                    example: "2025-06-16T12:00:00.000Z"
 *                  updated_at: 
 *                    type: string
 *                    example: "2025-06-18T14:30:00.000Z"
 *        404:
 *          description: Tarefa não encontrada
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  message: 
 *                    type: string
 *                    example: "Tarefa não encontrada"
 */
router.get('/tasks/:id', TaskController.show);


/**
 * @swagger
 * /tasks/{id}:
 *   put: 
 *     summary: Atualiza uma tarefa por ID
 *     tags: [Tasks]
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties: 
 *               title: 
 *                 type: string
 *                 example: "Estudar Node.js"
 *               description: 
 *                 type: string
 *                 example: "Aprofundar nos conceitos de CRUD e middlewares"
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 id:
 *                   type: string
 *                   example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *                 title: 
 *                   type: string
 *                   example: "Estudar Node.js"
 *                 description:
 *                   type: string
 *                   example: "Aprofundar nos conceitos de CRUD e middlewares"
 *                 status:
 *                   type: string
 *                   example: "pendente"
 *                 created_at: 
 *                   type: string
 *                   example: "2025-06-16T12:00:00.000Z"
 *                 updated_at: 
 *                   type: string
 *                   example: "2025-06-18T14:30:00.000Z"
 *       400:
 *         description: Título e descrição são obrigatórios
 *       404:
 *         description: Tarefa não encontrada
 */
router.put('/tasks/:id', TaskController.update)

/**
 * @swagger 
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa por ID
 *     tags: [Tasks]
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     responses: 
 *       200: 
 *         description: Tarefa deletada com sucesso
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tarefa excluída com sucesso."
 *        404: 
 *          description: Tarefa não encontrada
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Tarefa não encontrada."
 */
router.delete('/tasks/:id', TaskController.delete)

/**
 * @swagger
 * /tasks/{id}/status:
 *   patch: 
 *     summary: Atualiza apenas o status de uma tarefa
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: done
 *     responses: 
 *       200:
 *         description: Status atualizado com sucesso
 */
router.patch('/tasks/:id/status', TaskController.updateStatus)


module.exports = router