const express = require('express')
const TaskController = require('../controllers/TaskController')

const router = express.Router()

/**
 * @swagger
 * /tasks
 *    post:
 *      summary: Cria uma nova tarefa
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title: 
 *                  type: string
 *                description:
 *                  type: string
 *    responses:
 *      201:
 *        description: Tarefa criada com sucesso
 */
router.post('/tasks', TaskController.create)


/**
 * @swagger
 * /tasks:
 *    get:
 *      summary: Lista todas as tarefas
 *      responses:
 *        200:
 *          description: Lista de tarefas retornada com sucesso
 */
router.get('/tasks', TaskController.index)


/**
 * @swagger
 * /tasks/{id}:
 *    get:
 *      summary: Busca uma tarefa por ID
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
 *        404:
 *          description: Tarefa não encontrada
 */
router.get('/tasks/:id', TaskController.show);


/**
 * @swagger
 * /tasks/{id}:
 *   put: 
 *     summary: Atualiza uma tarefa por ID
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
 *               title: 
 *                 type: string
 *               description: 
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 */
router.put('/tasks/:id', TaskController.update)

/**
 * @swagger 
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa por ID
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa
 *     responses: 
 *       204: 
 *         description: Tarefa deletada com sucesso
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