// Módulo File System, para manipular arquivos
const fs  = require('fs')

// Gerando caminhos corretos entre sistemas
const path = require('path')

// Usando 'uuid' para gerar um id único para cada tarefa
const { v4: uuidv4 } = require('uuid')

// Caminho absoluto para o arquivo JSON, que armazena as tarefas
const dbPath = path.join(__dirname, '..', 'database', 'tasks.json')

// Função auxiliar para ler e carregar o 'banco de dados'
function loadDB() {
  const data = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(data)
}

// Função auxiliar para salvar o banco de dados
function saveDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}

module.exports = {
  // 1. Criação de uma nova tarefa
  create(req, res) {
    const { title, description } = req.body

    // Validação simples
    if (!title || !description) {
      return res.status(400).json({ message: 'Título e descrição são obrigatórios'})
    }

    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: 'pendente',
      created_at: new Date().toISOString()
    }

    // Lê o arquivo atual
    const db = loadDB()

    // Adiciona uma tarefa
    db.push(newTask)

    // Salva o arquivo
    saveDB(db)

    return res.status(201).json(newTask)
  },

  // 2. Lista todas as tarefas salvas
  index(req, res) {
    // Lê o arquivo JSON
    const db = loadDB()
    // Retorna o conteúdo salvo
    return res.json(db)
  },

  // 3. Lista tarefa específica baseada no id
  show(req, res) {
    // Extraindo o id da tarefa da rota
    const { id } = req.params

    // Lê o arquivo JSON
    const db = loadDB()

    // Busca no array a tarefa que tem o id igual ao passado na rota
    const task = db.find(task => task.id === id)

    // Validação simples para tratamento de erro
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }
    
    // Retorna a tarefa encontrada no formato JSON
    return res.json(task)
  },

  
  // 4. Atualiza os dados principais de uma tarefa já existente
  update(req, res) {
    const { id } = req.params
    const { title, description } = req.body

    // Validação simples para tratamento de erros
    if (!title || !description) {
      return res.status(400).json({ message: 'Título e descrição são obrigatórios'})
    }

    const db = loadDB()

    // Encontrar o índice da tarefa que iremos atualizar
    const taskIndex = db.findIndex(task => task.id === id)

    // Caso não encontre, retornar erro
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarefa não encontrada'})
    }

    // Atualiza os dados
    db[taskIndex].title = title
    db[taskIndex].description = description
    db[taskIndex].updated_at = new Date().toISOString()

    // Salva as mudanças no arquivo JSON
    saveDB(db)

    return res.json(db[taskIndex])
  },


  // 5. Deleta uma tarefa específica com base em seu id
  delete(req, res) {
    // Extraindo o id da tarefa da rota
    const { id } = req.params

    const db = loadDB()

    // Verifica se a tarefa com o ID existe
    const taskIndex = db.findIndex(task => task.id === id)

    // Verificação simples que retornará um erro 404 caso a tarefa não exista
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarefa não encontrada.'})
    }

    // Caso a tarefa exista, remova-a do array
    db.splice(taskIndex, 1)


    // Salva o novo estado no arquivo
    saveDB(db)

    return res.status(200).json({ message: 'Tarefa excluída com sucesso.'})
  },


  // 6. Permite que o usuário atualize o status de uma tarefa específica
  updateStatus(req, res) {
    const { id } = req.params
    const { status } = req.body

    // Validação básica para permitir somente os status predefinidos 
    const allowedStatuses = ['pendente', 'em andamento', 'concluída']

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Status inválido. Os status permitidos são: pendente, em andamento, concluída.'})
    }

    const db = loadDB()

    // Validação simples caso a tarefa não seja encontrada
    const task = db.find(task => task.id === id)

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada'})
    }

    task.status = status

    saveDB(db)

    return res.json({ message: 'Status atualizado com sucesso', task})
  }
}
