import { useEffect, useState } from 'react'
import FilterTabs from './components/FilterTabs'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch('/tasks')
        if (!response.ok) {
          throw new Error(`Erro ${response.status}`)
        }
        const data = await response.json()
        setTasks(data)
      } catch {
        setError('Não foi possível falar com a API')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  function handleTaskCreated(task) {
    setTasks((previousTasks) => [...previousTasks, task])
  }

  async function handleToggle(task) {
    try {
      const response = await fetch(`/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: task.title, completed: !task.completed })
      })

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
      }

      const updated = await response.json()
      setTasks((previousTasks) =>
        previousTasks.map((item) => (item.id === updated.id ? updated : item))
      )
    } catch {
      window.alert('Não foi possível atualizar a tarefa')
    }
  }

  async function handleDelete(task) {
    const confirmed = window.confirm(`Excluir a tarefa "${task.title}"?`)
    if (!confirmed) return

    try {
      const response = await fetch(`/tasks/${task.id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
      }

      setTasks((previousTasks) => previousTasks.filter((item) => item.id !== task.id))
    } catch {
      window.alert('Não foi possível excluir a tarefa')
    }
  }

  async function handleUpdate(task, newTitle) {
    try {
      const response = await fetch(`/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, completed: task.completed })
      })

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
      }

      const updated = await response.json()
      setTasks((previousTasks) =>
        previousTasks.map((item) => (item.id === updated.id ? updated : item))
      )
      return true
    } catch {
      window.alert('Não foi possível salvar a alteração')
      return false
    }
  }

  const completedCount = tasks.filter((task) => task.completed).length

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
      <p className="mt-1 text-sm text-gray-500">
        {completedCount} de {tasks.length} concluídas
      </p>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <FilterTabs filter={filter} onChange={setFilter} />
      {loading && <p className="mt-6 text-gray-600">Carregando tarefas...</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}
      {!loading && !error && (
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  )
}

export default App
