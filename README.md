# TASKS MANAGER

API представляет собой сервис для создания и хранения списка задач. Реализован при помощи Node.js + MongoDB.

# ДЛЯ ЗАПУСКА:

1. склонировать проект
`-git clone https://github.com/vvptitsyna/mern-tasks.git`
2. установить / обновить зависимости
`npm install`
3. запуск проекта
`npm start`

# РОУТЫ:

`router.get('/', taskController.getAllTasks)` - получение всех тасков

`router.post('/', taskController.createTask)` - создание таска

`router.put('/:id', taskController.updateTask)` - изменение таска

`router.delete('/:id', taskController.deleteTask)` - удаление таска
